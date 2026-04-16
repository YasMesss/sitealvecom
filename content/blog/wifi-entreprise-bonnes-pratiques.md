---
title: "Wifi d'entreprise : 8 bonnes pratiques pour un réseau qui tient"
description: "Le wifi pro n'a rien à voir avec le wifi domestique. Comment dimensionner, sécuriser et exploiter un wifi entreprise qui tient la charge en 2026."
date: "2026-02-08"
category: "Réseaux"
author: "Alvecom"
cover: "/images/services/operateurs-tech.webp"
---

## Le wifi pro, ce n'est pas une box installée dans un coin

Beaucoup d'entreprises pensent que leur wifi est "juste un wifi" : une box, deux antennes, et l'affaire est faite. Puis viennent les plaintes : connexion qui saute en réunion, vidéo qui rame, certains coins du bâtiment dans le "trou noir", visiteurs qui demandent le mot de passe interne.

Le wifi pro, **bien conçu**, ne ressemble pas du tout à ça. Voici les 8 règles qui font la différence.

## 1. Dimensionner par densité, pas par surface

L'erreur classique : *"j'ai 200 m², donc 1 borne suffit."* Faux. Le bon critère, c'est la **densité d'utilisateurs** (et de devices : chaque collaborateur a un PC + un mobile + parfois un casque, soit 3 devices wifi par personne).

Pour 30 utilisateurs sur 200 m², il faut souvent **3 à 4 bornes**, pas une.

## 2. Faire un site survey

Un *site survey* (relevé sur site avec un outil comme Ekahau ou NetSpot) cartographie le signal réel, les zones d'ombre, les interférences. Sans ça, on positionne les bornes au pifomètre, on a des trous, et on rajoute des bornes inutiles à 600 € pièce.

Pour 200-500 m², c'est **2-3 demi-journées** d'expert. Largement rentabilisé.

## 3. Choisir des bornes "pro" et un contrôleur

Une borne **grand public** (TP-Link, Asus, etc.) gère mal :
- Le **roaming** (passage d'une borne à l'autre sans coupure)
- La **densité** (au-delà de 15-20 devices, ça décroche)
- La **sécurité avancée** (WPA3 Enterprise, segmentation par VLAN)

En pro, on prend du **Cisco Meraki**, **Aruba Instant On**, **Ubiquiti UniFi**, **Ruckus**. Comptez 250-700 € par borne, plus une licence cloud annuelle (~30-100 €/borne/an).

## 4. Wifi 6 (ou 6E) en 2026

Si vous installez aujourd'hui, prenez du **Wifi 6 (802.11ax)**. Bénéfices :
- **3 à 4 fois** plus de débit que le Wifi 5
- **Beaucoup mieux** dans les environnements denses
- Compatible avec tous les anciens équipements

Le **Wifi 7** arrive, mais le surcoût (parfois +50 %) n'est justifié que dans des cas d'usage très spécifiques en 2026.

## 5. Séparer les SSID — et les VLAN

Un wifi pro propre comporte **plusieurs SSID** :

- **WiFi-Corp** : pour les collaborateurs, accès au réseau interne, authentification 802.1X
- **WiFi-IoT** : pour les imprimantes, caméras, capteurs, isolés du reste
- **WiFi-Guest** : pour les visiteurs, accès internet seulement, captive portal

Chaque SSID est mappé sur un **VLAN différent** pour vraiment isoler les flux. C'est essentiel pour la sécurité.

## 6. Authentification 802.1X (Radius) pour les utilisateurs

Le mot de passe wifi unique partagé entre 30 collaborateurs ? **Catastrophe**. Quand quelqu'un part, il faut tout changer (et le faire saisir à tout le monde…).

Avec **802.1X**, chaque utilisateur s'authentifie avec son **identifiant Active Directory / Microsoft 365**. Quand il part, on désactive son compte = il n'accède plus au wifi. Simple.

## 7. Soigner le wifi visiteur

Un wifi visiteur professionnel inclut :

- **Captive portal** avec acceptation des CGU
- **Limitation de débit** (pour ne pas qu'un visiteur consomme tout)
- **Isolation totale** du réseau interne (zéro accès)
- Idéalement, **portail SMS** ou validation via badge pour la traçabilité (utile en BTP, public, sensible)

## 8. Superviser et maintenir

Un wifi se dégrade dans le temps : nouveaux meubles, nouvelles cloisons, équipements voisins qui interférent. Une **supervision continue** depuis la console cloud (Meraki Dashboard, Aruba Central, UniFi Network) montre :

- Quelles bornes sont saturées
- Quelles zones ont du signal faible
- Combien d'utilisateurs sont connectés en temps réel
- Quels devices consomment le plus

Un audit annuel est recommandé pour ajuster.

## Le piège du "wifi maillé domestique"

Les systèmes maillés grand public (Google Nest Wifi, Eero, Orbi) marchent bien chez soi. En entreprise, ils :
- Gèrent mal la **densité**
- N'offrent **pas de segmentation** propre
- Consomment du **canal 2,4 GHz** déjà saturé

À éviter dans un contexte pro, même petit.

## Combien ça coûte concrètement ?

Pour un bureau de 200-300 m² avec 30 utilisateurs :

- **Site survey** : ~600-1200 €
- **3-4 bornes Wifi 6 pro** : ~1500-2500 €
- **Switch PoE+ pour alimenter les bornes** : ~500-800 €
- **Licence cloud annuelle** : ~150-400 €/an
- **Installation et configuration** : ~1500-2500 €

Soit **un budget initial de 4000-7000 €** pour un wifi pro qui tient 5-7 ans, et ~150-400 €/an de fonctionnement.

À comparer aux **heures perdues** par les collaborateurs frustrés par un wifi qui ne marche pas, c'est rentabilisé en quelques mois.

## Conclusion

Un wifi d'entreprise qui marche n'est pas un luxe. C'est la base d'une productivité moderne. **Site survey, bornes pro, segmentation, authentification 802.1X** : c'est le quatuor qui change tout.

> Vos utilisateurs se plaignent du wifi ? [Demandez un audit wifi](/devis) — nous identifions les causes en 1 journée et proposons un plan d'amélioration.
