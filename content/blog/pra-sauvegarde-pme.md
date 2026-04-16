---
title: "PRA et sauvegarde : bâtir un plan de reprise robuste pour votre PME"
description: "Sauvegarder ses données ne suffit pas. Voici comment construire un plan de reprise d'activité (PRA) qui tient ses promesses le jour où ça arrive vraiment."
date: "2026-04-04"
category: "Sauvegarde & Continuité"
author: "Alvecom"
cover: "/images/services/sauvegarde-secure.webp"
---

## Le jour où ça arrive vraiment

Un cryptolocker en pleine nuit. Une panne de baie de stockage. Un incendie qui détruit la salle serveur. Un collaborateur qui supprime par erreur un dossier critique. Ces scénarios ne sont pas hypothétiques : **toutes les entreprises y sont exposées**, et la plupart les vivent au moins une fois.

La vraie question n'est pas *si* mais *quand*. Et le jour où ça arrive, la seule chose qui compte, c'est : **est-ce que je peux redémarrer rapidement ?**

C'est exactement le rôle du **PRA — Plan de Reprise d'Activité**.

## Sauvegarde et PRA : ce n'est pas la même chose

C'est la confusion la plus fréquente. Récapitulons :

- **Sauvegarde** : copier vos données quelque part, régulièrement. C'est la matière première.
- **PRA** : la procédure documentée, testée et chronométrée pour **redémarrer votre activité** à partir de ces sauvegardes.

Avoir des sauvegardes sans PRA, c'est comme avoir un airbag dans la voiture sans savoir s'il va se déclencher au choc. Le PRA, c'est l'entraînement.

## Les deux indicateurs clés : RTO et RPO

Tout PRA repose sur deux objectifs chiffrés :

- **RTO — Recovery Time Objective** : combien de temps maximum acceptable pour redémarrer après l'incident ? (4h, 1 jour, 3 jours…)
- **RPO — Recovery Point Objective** : combien de données peut-on se permettre de perdre ? (1 heure, 24 heures…)

Plus le RTO et le RPO sont courts, plus la solution coûte cher. C'est un arbitrage business : **toutes les données ne se valent pas**. Votre ERP critique mérite un RPO d'1 heure ; les fichiers de R&D peuvent tolérer un RPO de 24 h.

## La règle d'or : 3-2-1

Une stratégie de sauvegarde robuste suit la règle **3-2-1** :

- **3** copies de chaque donnée
- **2** supports différents (disque local + cloud, ou disque + bande)
- **1** copie hors site (idéalement immutable, donc protégée du ransomware)

Si vous appliquez 3-2-1, vous résistez à 95 % des sinistres.

## Construire votre PRA : la méthode en 6 étapes

### 1. Cartographier les actifs critiques

Quels serveurs, quelles applications, quelles données sont indispensables à l'activité ? Hiérarchisez en 3 niveaux : critique (RTO < 4h), important (< 24h), secondaire (< 72h).

### 2. Définir les objectifs RTO/RPO par actif

Discutez avec les métiers, pas seulement avec la DSI. Chaque service a sa tolérance.

### 3. Choisir les solutions techniques

- **Sauvegarde locale rapide** (NAS, baie dédiée) pour les restaurations courantes
- **Sauvegarde externalisée** dans un datacenter distant pour le hors-site
- **Réplication** (synchrone ou asynchrone) pour les actifs très critiques
- **Snapshots immutables** pour la résistance ransomware

### 4. Documenter les procédures

Le jour J, votre équipe doit pouvoir suivre un runbook : qui appeler, dans quel ordre redémarrer, comment restaurer, comment tester que c'est fonctionnel. Un PRA non documenté est inutilisable sous stress.

### 5. Tester, tester, tester

C'est l'étape que **80 % des entreprises sautent**. Sans test, votre PRA n'a aucune valeur. Planifiez au moins **un test de restauration partielle par trimestre** et un **test de bascule complet par an**.

### 6. Mettre à jour en continu

Un PRA n'est jamais figé. Chaque nouveau serveur, chaque nouvelle application, chaque changement d'organisation doit être intégré.

## Les erreurs fatales

- **Compter sur les sauvegardes Microsoft 365 par défaut** : Microsoft sauvegarde *l'infrastructure*, pas vos données. Si vous supprimez un message, il est perdu après 30 jours.
- **Sauvegarder uniquement en local** : un incendie efface tout d'un coup
- **Ne pas tester les restaurations** : 1 fois sur 3, une sauvegarde est inexploitable au moment crucial
- **Ne pas chiffrer les sauvegardes externalisées** : vol = fuite de données

## Le coût de l'inaction

Une étude IDC estime qu'une heure d'arrêt coûte en moyenne **8 000 €** pour une PME, et plus de **80 000 €** pour une ETI. Quand on sait qu'un sinistre majeur sans PRA peut paralyser l'entreprise plusieurs jours, le calcul est vite fait : **un PRA coûte toujours moins cher qu'un seul sinistre**.

## Conclusion

Le PRA n'est pas un sujet de paranoïa, c'est un sujet de **bonne gestion**. Il protège votre entreprise, vos clients, et vos collaborateurs. Et c'est aussi un argument commercial : de plus en plus d'appels d'offres exigent un PRA documenté.

> Vous voulez un PRA simple et efficace ? [Faites auditer vos sauvegardes](/devis) — nous évaluons votre niveau réel de protection en 1 journée.
