# Alvecom — Site vitrine (Next.js 15 + Tailwind v4)

Site vitrine officiel **alvecom.fr** — intégrateur Télécom et prestataire IT.

Positionnement 100% Télécom + Services IT génériques (aucune mention cybersécurité, conformément à la refonte éditoriale).

## Stack

- **Next.js 15** (App Router, React 19, Server Components par défaut)
- **TypeScript strict**
- **Tailwind CSS v4** (`@theme` + variables brand)
- **Resend** pour les emails transactionnels (contact + devis)
- **zod** pour la validation des formulaires (client + serveur)
- **lucide-react** pour les icônes
- **gray-matter / remark** pour le blog MDX minimal
- **GA4 + Google Tag Manager + bannière cookies maison** (Consent Mode v2, conforme CNIL)
- **PM2** pour l'exécution en production sur VPS
- **Nginx** en reverse proxy + SSL Let's Encrypt

## Arborescence

```
src/
├── app/
│   ├── (root)               # Layout, SEO global, icon/OG dynamique
│   ├── solutions-telecom/   # Hub + 3 services (téléphonie, réseaux, UC)
│   ├── services-it/         # Hub + 3 services (infogérance, cloud, backup)
│   ├── operateurs-partenaires/
│   ├── ressources/          # Hub + blog (MDX) + FAQ
│   ├── contact/ devis/
│   ├── a-propos/
│   ├── mentions-legales/ politique-confidentialite/
│   ├── politique-cookies/ cgv/
│   ├── api/contact/ api/devis/
│   ├── sitemap.ts robots.ts
│   ├── icon.tsx apple-icon.tsx opengraph-image.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                  # Button, Container, Section, ServiceCard, FAQ...
│   ├── layout/              # Navbar, Footer
│   ├── forms/               # ContactForm, DevisForm (3 étapes)
│   ├── tracking/            # Analytics (GA4/GTM), CookieBanner
│   └── page-templates/      # ServicePage, HubPage
├── lib/
│   ├── site.ts              # Config centrale (contact, stats…)
│   ├── navigation.ts        # Main/Footer nav
│   ├── seo.ts               # Helpers metadata + JSON-LD
│   ├── blog.ts              # Chargement MDX (gray-matter + remark)
│   ├── validation.ts        # Schémas zod
│   ├── mail.ts              # Resend + templates HTML
│   └── utils.ts
content/blog/                # Articles en Markdown
public/images/               # Logo + assets
```

## Installation locale

```bash
npm install
cp .env.example .env
# renseigner RESEND_API_KEY, NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GTM_ID...
npm run dev
```

Le site tourne sur `http://localhost:3000`.

Commandes utiles :

```bash
npm run dev         # dev server
npm run build       # build prod
npm run start       # lance le build de prod
npm run lint        # ESLint
npm run typecheck   # TypeScript
```

## Variables d'environnement

Voir `.env.example`. Les clés à fournir :

| Variable | Rôle | Obligatoire |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique (https://www.alvecom.fr) | Oui |
| `RESEND_API_KEY` | Envoi d'emails (formulaires) | Oui en prod |
| `CONTACT_TO_EMAIL` | Destinataire des leads | Oui |
| `CONTACT_FROM_EMAIL` | Expéditeur (domaine vérifié Resend) | Oui |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (G-XXXXXXX) | Non |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (GTM-XXXXX) | Non |

Sans `RESEND_API_KEY`, les formulaires fonctionnent mais les emails sont seulement loggués côté serveur (pratique pour le dev).

## SEO

- Metadata complètes par page (`title`, `description`, canonical, OG, Twitter)
- `sitemap.xml` dynamique (inclut tous les articles du blog)
- `robots.txt`
- JSON-LD : **LocalBusiness** (global), **Service** (par page service), **FAQPage** (FAQ + pages service), **Article** (blog), **BreadcrumbList** (toutes les sous-pages)
- Images OG générées dynamiquement via `opengraph-image.tsx`
- Favicons générés dynamiquement via `icon.tsx` / `apple-icon.tsx`
- Redirections 301 depuis les anciennes URLs (voir `next.config.ts`)
- HSTS, X-Content-Type-Options, Referrer-Policy configurés

## Tracking & cookies

Configuration Consent Mode v2 intégrée (RGPD / CNIL) :
- Consentement **refusé par défaut** pour analytics et ads.
- Bannière custom : Accepter tout / Refuser tout / Personnaliser.
- Choix conservé 6 mois dans un cookie `alv_consent`.
- Possibilité de rouvrir la bannière depuis `/politique-cookies`.

## Identité visuelle

- Bleu nuit `#0A2B4F` (titres, nav)
- Bleu profond `#1E5BA8` / cyan doux `#4E8FD1` (du logo)
- Orange `#FF7A1A` pour les CTA principaux (conversion)
- Typographie **Inter** (variable, Google Fonts, `display: swap`)
- Composants avec `rounded-xl`, `shadow-soft/lift`, `bg-hero-gradient`
- Design responsive mobile-first, menus adaptés mobile/desktop

---

## 🚀 Déploiement VPS (Nginx + PM2)

### 1. Préparer le VPS (une seule fois)

```bash
# 1.1. Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx

# 1.2. PM2
sudo npm i -g pm2
pm2 startup systemd -u deploy --hp /home/deploy   # suivre l'instruction affichée

# 1.3. Utilisateur applicatif
sudo adduser deploy
sudo usermod -aG sudo deploy
```

### 2. Cloner le projet

```bash
sudo mkdir -p /var/www/alvecom
sudo chown deploy:deploy /var/www/alvecom
sudo -u deploy bash
cd /var/www/alvecom
git clone git@github.com:VOTRE-ORG/alvecom.git .
cp .env.example .env
nano .env    # renseigner les clés
```

### 3. Premier build + démarrage PM2

```bash
chmod +x deploy.sh
./deploy.sh
pm2 save
```

Vérifier : `curl -I http://127.0.0.1:3000` doit répondre `200`.

### 4. Nginx + HTTPS

```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/alvecom
sudo ln -s /etc/nginx/sites-available/alvecom /etc/nginx/sites-enabled/alvecom
sudo nginx -t && sudo systemctl reload nginx

# SSL Let's Encrypt
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d alvecom.fr -d www.alvecom.fr
sudo systemctl status certbot.timer   # renouvellement auto
```

### 5. Déploiements suivants

```bash
ssh deploy@vps
cd /var/www/alvecom && ./deploy.sh
```

Le script :
1. `git fetch` + reset hard sur `origin/main`
2. `npm ci`
3. `npm run build`
4. `pm2 reload ecosystem.config.cjs` (zéro downtime)

---

## ✅ Checklist de mise en production

### Contenu
- [ ] Vérifier tous les textes, notamment : baseline accueil, services, à propos
- [ ] Confirmer les chiffres (18+ ans, 1500+ clients, 98% satisfaction) dans `src/lib/site.ts`
- [ ] Compléter la liste des partenaires réels (`src/app/operateurs-partenaires/page.tsx`)
- [ ] Ajouter d'autres articles de blog dans `content/blog/`
- [ ] Faire relire les pages légales par un juriste

### Configuration technique
- [ ] Remplir `.env` en production avec toutes les clés
- [ ] Vérifier domaine expéditeur Resend (`no-reply@alvecom.fr`) + SPF/DKIM/DMARC
- [ ] Créer la propriété GA4 + container GTM si choix de tracking
- [ ] Vérifier `NEXT_PUBLIC_SITE_URL=https://www.alvecom.fr`
- [ ] Tester les 2 formulaires (contact + devis) en staging
- [ ] Tester les emails de confirmation (admin + prospect)

### SEO
- [ ] Soumettre `https://www.alvecom.fr/sitemap.xml` à Google Search Console
- [ ] Vérifier la redirection `alvecom.fr` → `www.alvecom.fr`
- [ ] Tester les images OG sur `opengraph.xyz` ou LinkedIn Post Inspector
- [ ] Vérifier les metadata sur chaque page importante
- [ ] Lancer un audit Lighthouse (viser 90+ partout)
- [ ] Tester les données structurées via Google Rich Results Test
- [ ] Vérifier les redirections 301 depuis les anciennes URLs (cybersecurite → infogerance, etc.)

### Infrastructure
- [ ] DNS : `A` + `AAAA` pour `www` et `@` pointant vers le VPS
- [ ] Certificat SSL Let's Encrypt actif pour `alvecom.fr` et `www.alvecom.fr`
- [ ] HSTS activé (`Strict-Transport-Security`)
- [ ] PM2 `startup` configuré (redémarrage auto après reboot)
- [ ] Sauvegardes régulières du VPS
- [ ] Logs Nginx surveillés (`/var/log/nginx/alvecom.*.log`)
- [ ] Firewall UFW : ouvrir 80/443 uniquement, SSH restreint

### Conformité
- [ ] Bannière cookies testée (accepter / refuser / personnaliser)
- [ ] Consent Mode v2 validé dans Google Tag Assistant
- [ ] Politique de confidentialité revue et publiée
- [ ] Mentions légales complètes

### Post-lancement
- [ ] Activer Google Search Console + Bing Webmaster Tools
- [ ] Surveiller Core Web Vitals dans GA4
- [ ] Suivre conversions formulaires (évènement `generate_lead`)

---

## Commandes de déploiement (résumé)

```bash
# Premier déploiement
ssh deploy@vps
cd /var/www && sudo mkdir alvecom && sudo chown deploy:deploy alvecom && cd alvecom
git clone git@github.com:VOTRE-ORG/alvecom.git .
cp .env.example .env && nano .env
chmod +x deploy.sh && ./deploy.sh
pm2 save && pm2 startup

# Nginx
sudo cp nginx.conf.example /etc/nginx/sites-available/alvecom
sudo ln -s /etc/nginx/sites-available/alvecom /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d alvecom.fr -d www.alvecom.fr

# Déploiements suivants
ssh deploy@vps "cd /var/www/alvecom && ./deploy.sh"

# Consulter les logs
pm2 logs alvecom --lines 200
pm2 monit
```

## Licence

Code source propriétaire — © ALVECOM.
