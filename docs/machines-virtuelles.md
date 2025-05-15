---
id: machines-virtuelles
title: Machines virtuelles
sidebar_position: 2
---

# Machines virtuelles (VM)

## Définition

Une machine virtuelle est un environnement logiciel simulant un ordinateur physique. Elle fonctionne comme une vraie machine avec son propre OS.

## Architecture

- **Couche matérielle (Hardware)** : Processeur, mémoire, disque, etc.
- **Hyperviseur** :
    - Type 1 : installé directement sur la machine (ex : VMware ESXi)
    - Type 2 : installé sur un OS hôte (ex : VirtualBox)
- **Machine virtuelle (VM)** : OS invité + applications

## Inconvénients

- Ressources consommées élevées
- Temps de démarrage long
- Moins adapté aux architectures modernes (microservices, scalabilité)
