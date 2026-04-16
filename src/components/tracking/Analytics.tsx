import Script from "next/script";

/**
 * GA4 + GTM avec Consent Mode v2.
 * - Le consentement est "denied" par défaut (RGPD / conforme CNIL).
 * - CookieBanner met à jour via window.dataLayer.push({event:"consent_update", ...}).
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gaId && !gtmId) return null;

  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
          try {
            var c = document.cookie.split('; ').find(function(r){return r.indexOf('alv_consent=')===0;});
            if (c) {
              var v = JSON.parse(decodeURIComponent(c.split('=')[1]));
              gtag('consent', 'update', {
                ad_storage: v.ads ? 'granted' : 'denied',
                ad_user_data: v.ads ? 'granted' : 'denied',
                ad_personalization: v.ads ? 'granted' : 'denied',
                analytics_storage: v.analytics ? 'granted' : 'denied'
              });
            }
          } catch(e) {}
        `}
      </Script>

      {gtmId && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}

      {gaId && (
        <>
          <Script
            id="ga4"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                anonymize_ip: true,
                send_page_view: true
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}

export function GTMNoScript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
