---
title: "SD-WAN : interconnecter ses sites simplement et économiquement"
description: "Le SD-WAN remplace progressivement les architectures MPLS coûteuses. Comment fonctionne-t-il, à quoi sert-il vraiment, et combien coûte un déploiement multi-sites ?"
date: "2026-03-20"
category: "Réseaux"
author: "Alvecom"
cover: "/images/services/operateurs-tech.webp"
---

## L'ère du MPLS hors de prix touche à sa fin

Pendant 20 ans, les entreprises multi-sites n'avaient qu'une option pour interconnecter leurs sites avec qualité : le **MPLS opérateur**. Une infrastructure cloisonnée et fiable, mais aussi rigide, longue à déployer et **chère** : facilement 800 à 2000 €/mois par site, et des semaines pour un changement.

Le **SD-WAN** (Software-Defined Wide Area Network) renverse la table. Il s'appuie sur des liens internet classiques (fibre + 4G/5G) et y ajoute une **couche logicielle d'orchestration** qui apporte qualité, sécurité et résilience.

## Comment ça marche, concrètement ?

Sur chaque site, un boîtier SD-WAN (un *edge*) est installé entre votre réseau local et vos liens internet. Ce boîtier :

1. **Mesure en temps réel** la qualité de chaque lien (latence, perte de paquets, gigue)
2. **Oriente chaque flux** vers le meilleur lien disponible (par exemple, voix sur le lien le plus stable, sauvegarde sur le lien le moins chargé)
3. **Bascule automatiquement** en cas de coupure (en moins d'une seconde)
4. **Applique la sécurité** (chiffrement IPsec entre sites, segmentation, IDS/IPS)
5. **Remonte tout** sur une **console centralisée** (visibilité multi-sites en temps réel)

Le tout est piloté **logiciellement** depuis une interface unique. Plus besoin d'aller paramétrer chaque routeur.

## Les 5 grands bénéfices

### 1. Économies réelles
Remplacer un MPLS de 1500 €/mois par une fibre dédiée à 400 € + un secours 4G à 30 €, sur 5 sites = **plus de 50 000 €/an d'économies**.

### 2. Disponibilité maximale
Chaque site dispose d'au moins **2 liens** actifs. Une coupure fibre = bascule sur 4G en 1 seconde. Vos collaborateurs ne s'aperçoivent de rien.

### 3. Qualité de service garantie
La voix sur IP, la visio Teams, les flux ERP : tout est **priorisé automatiquement** selon vos règles métier.

### 4. Déploiement rapide
Ouvrir un nouveau site = brancher le boîtier SD-WAN, attendre 10 minutes le téléchargement de la configuration depuis le cloud. **Plug & play**.

### 5. Visibilité totale
Une console unique vous montre l'état de tous les sites, les volumes par application, les anomalies. C'est le rêve de tout DSI multi-sites.

## Pour qui le SD-WAN est-il pertinent ?

Le SD-WAN devient rentable dès **3 sites**. À partir de 5-10 sites, c'est presque toujours la meilleure architecture économique et technique.

Profils typiques :
- **Réseau de magasins / agences** (commerce, banque, immobilier)
- **Sites industriels multi-usines** avec besoin de continuité
- **Cabinets multi-sites** (médical, comptable, juridique)
- **PME en croissance** ouvrant de nouveaux sites régulièrement

## Les éditeurs SD-WAN du marché

Les principaux acteurs : Fortinet, Cisco Meraki, VMware VeloCloud, Cato Networks, Cradlepoint. Chacun a ses spécificités. Notre rôle d'intégrateur est de vous aider à **choisir l'éditeur adapté à votre profil** (taille, besoins de sécurité, écosystème existant).

## Combien ça coûte ?

Pour un site standard :
- **CAPEX** : boîtier SD-WAN ~600-1200 € selon modèle
- **OPEX** : licence cloud SD-WAN ~50-150 €/mois/site + liens internet (fibre + 4G secours)

Pour 5 sites avec un MPLS actuel à 1500 €/mois chacun (= 7500 €/mois total), une migration SD-WAN ramène souvent le total à **2500-3500 €/mois**, soit **~50 000 €/an d'économies récurrentes**.

## Le déploiement : combien de temps ?

Pour un projet de 5 sites, comptez :
- **Audit & design** : 2 semaines
- **Commande & livraison** des liens & boîtiers : 4-8 semaines
- **Déploiement sur sites** : 1 jour par site
- **Bascule et stabilisation** : 1-2 semaines

Soit **2 à 3 mois entre la décision et la production complète**.

## Conclusion

Le SD-WAN n'est plus une option pour les grands groupes : c'est devenu **le standard** pour toute entreprise multi-sites soucieuse de performance, de continuité et de coût. Si vous renouvelez bientôt votre architecture WAN, c'est le moment de poser la question.

> Vous payez encore du MPLS ? [Demandez une étude SD-WAN](/devis) — nous chiffrons votre architecture cible et le ROI sur 3 ans.
