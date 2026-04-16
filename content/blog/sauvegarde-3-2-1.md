---
title: "La règle du 3-2-1 : la sauvegarde qui tient en cas d'incident"
description: "3 copies, 2 supports, 1 hors site : décrypter la règle d'or de la sauvegarde et la mettre en pratique en PME en 2026."
date: "2026-02-28"
category: "Sauvegarde & Continuité"
author: "Alvecom"
cover: "/images/services/sauvegarde-baies.webp"
---

## Une règle simple, terriblement efficace

Dans le monde de la sauvegarde, il existe une règle universelle, formulée en 2003 par le photographe américain Peter Krogh, et adoptée depuis par toute l'industrie IT :

> **3** copies de chaque donnée, sur **2** supports différents, dont **1** hors site.

Aussi simple que ça. Et pourtant, **moins de 30 % des PME** appliquent réellement cette règle.

## Pourquoi 3 copies ?

Avec 1 seule copie, vous êtes vulnérable à n'importe quel incident.
Avec 2 copies, si la sauvegarde et l'original meurent en même temps (incendie, foudre, ransomware), vous perdez tout.

**3 copies** = la probabilité que les trois échouent simultanément devient quasi nulle.

## Pourquoi 2 supports différents ?

Un disque dur tombe en panne. Un SSD vieillit. Un NAS peut être compromis. Diversifier les supports protège contre les défauts de conception et de fabrication.

Exemples de combinaisons :
- **Disque interne + NAS local + cloud** (combo PME classique)
- **NAS principal + bandes LTO + cloud** (entreprise plus ancienne)
- **Cluster baie + réplication SAN + cloud** (architecture mature)

## Pourquoi 1 copie hors site ?

C'est **le point critique**. Toutes vos sauvegardes locales peuvent être détruites en une seconde par :
- Un **incendie** (et pas besoin du sinistre majeur : un dégât des eaux suffit)
- Un **vol** physique
- Un **ransomware** qui chiffre tout ce qui est accessible (y compris le NAS local)
- Une **erreur humaine** sur l'infrastructure principale

La copie hors site, idéalement **dans un datacenter en France**, vous garantit la continuité même dans les pires scénarios.

## La version 3-2-1-1-0, encore plus robuste

Une variante moderne s'impose en 2026, à cause des ransomwares :

> **3** copies, **2** supports, **1** hors site, **1** copie immutable, **0** erreur de restauration.

- **Immutable** : une copie qu'aucun utilisateur ni administrateur ne peut modifier ou supprimer pendant N jours. C'est ce qui résiste vraiment au ransomware.
- **0 erreur** : on **teste** régulièrement la restauration pour s'assurer que les sauvegardes sont exploitables.

C'est la règle de référence pour toute entreprise sérieuse.

## Mise en pratique en PME : 3 architectures types

### PME 10-20 utilisateurs

- **Copie 1** : NAS Synology / QNAP local avec snapshots
- **Copie 2** : Disque externe rotatif (bonne vieille méthode, à condition de tester)
- **Copie 3** : Cloud (OVHcloud, Wasabi, BackBlaze B2) avec **immutabilité activée**

Coût : 100-200 €/mois selon volume.

### PME 30-100 utilisateurs

- **Copie 1** : Sauvegarde sur baie dédiée (Veeam, Nakivo)
- **Copie 2** : Snapshots SAN immutables
- **Copie 3** : Externalisation chez un prestataire (Alvecom inclus) avec rétention longue durée

Coût : 300-800 €/mois.

### ETI multi-sites

- **Copie 1** : Sauvegarde locale sur chaque site
- **Copie 2** : Réplication asynchrone entre sites
- **Copie 3** : Externalisation cloud souverain (OVHcloud, Outscale) avec immutabilité

Coût : 1500-5000 €/mois selon volume.

## Sauvegarder Microsoft 365 et Google Workspace

Erreur fréquente : croire que Microsoft ou Google sauvegardent vos données. **C'est faux**. Microsoft sauvegarde **l'infrastructure**, pas vos contenus :

- Si un utilisateur supprime un email > 30 jours, c'est perdu
- Si un cryptolocker chiffre OneDrive et se synchronise dans le cloud, c'est perdu
- Si un compte est supprimé > 30 jours, les données sont perdues

Solution : **une sauvegarde tierce M365** (Veeam Backup for M365, AvePoint, Synology Active Backup), qui copie vos données dans **votre** infrastructure ou un autre cloud. Compter 3-5 €/utilisateur/mois.

## Tester, c'est pas optionnel

Une sauvegarde non testée n'est qu'**un fichier que vous espérez exploitable**. Les statistiques sont alarmantes : **dans 1 cas sur 3**, une restauration échoue lors du premier test.

Planifiez :
- **Tests partiels** : 1 fois par mois minimum
- **Tests complets** (PRA simulé) : 1 fois par an au minimum
- **Documentation** : runbook clair de qui fait quoi en cas de sinistre

## Les pièges classiques

- **Sauvegarder uniquement les fichiers, pas les serveurs entiers** : reconstruire un Active Directory à la main = un cauchemar
- **Ne pas chiffrer les sauvegardes externalisées** : si volées, fuite de données massive
- **Garder la console de sauvegarde sur le même réseau que les serveurs sauvegardés** : un ransomware compromet tout d'un coup
- **Conserver des sauvegardes anciennes uniquement sur des supports devenus illisibles** (bandes DAT 2010, etc.)

## Combien ça coûte de ne pas le faire ?

Une étude IBM 2024 chiffre le coût moyen d'une attaque par ransomware **à 4,4 millions de dollars** pour les entreprises touchées. Pour une PME, c'est souvent **plusieurs centaines de milliers d'euros** entre les pertes d'exploitation, la rançon (à ne jamais payer), la remise en état, la perte de réputation.

À comparer aux **quelques milliers d'euros par an** d'une stratégie 3-2-1-1-0 bien pensée. Le calcul est sans appel.

## Conclusion

La règle 3-2-1 (et sa version moderne 3-2-1-1-0) n'est pas une option. C'est **la base** d'une informatique professionnelle. Si vous n'êtes pas sûr d'y être, faites auditer votre dispositif.

> Vos sauvegardes sont-elles vraiment 3-2-1-1-0 ? [Demandez un audit](/devis) — nous testons votre niveau de protection réel.
