# Back-end du projet 14 OpenClassrooms (Wealth Health HRnet)

| **WEALTH HEALTH HR**                      | Présentation                                                                                                                                                    |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Wealth Health Logo](./data/WH_logo.png) | Ce back-end simplifié permet l'accès et la modification d'une base de données employés (data/employees.json) sur le port 3003 pour interagir avec le front-end. Les End-points sont listés à la suite des étapes de mise en place. |

[![npm-v_7.24.1](https://img.shields.io/badge/npm-v_7.24.1-orange?style&logo=npm)](https://docs.npmjs.com/)
[![NodeJs-v_20.9.0](https://img.shields.io/badge/NodeJs-v_20.9.0-green?style&logo=nodedotjs)](https://nodejs.org/en/docs/)
[![VSCode-v_1.85.1](https://img.shields.io/badge/VSCode-v_1.85.1-blueviolet?style&logo=visual-studio-code)](https://code.visualstudio.com/download)
[![Docker-V_4.27.2](https://img.shields.io/badge/Docker-v_4.27.2-blue.svg?style&logo=Docker)](https://www.docker.com/get-started)

## Prérequis DOCKER

Ce back-end peut être containeurisé avec Docker. Vous pouvez télécharger puis l'installer à partir du site officiel de Docker : [Docker](https://www.docker.com/get-started)

## Étapes à suivre Avec Docker

1. **Cloner ce projet**

```bash
git clone https://github.com/TangiLC/P14-WealthHealth-back
```

2. **Création de l'image avec DockerFile**

Dans le terminal, taper la commande suivante pour créer le build

```bash
docker build -t p14_back .
```

> ...What's Next?

3. **Lancement de l'application avec DockerCompose**

Dans le terminal, taper la commande suivante pour démarrer l'app dans le container

```bash
docker-compose up -d
```

> _Le back-end containeurisé tourne sur le port 3003_

---

## Étapes à suivre Sans Docker

1. **Cloner ce projet**

```bash
git clone https://github.com/TangiLC/P14-WealthHealth-back
```

2. **Mettre à jour les dépendances**

Dans le terminal, lancer la commande

```bash
npm i
```

3. **Lancement de l'application**

Dans le terminal, lancer la commande

```bash
npm run start
```

> _Le back-end tourne sur le port 3003 dans votre environnement_

---

## Ajout du projet Front-end

Le projet Front-end associé à ce dépôt se trouve ici :[https://github.com/TangiLC/P14-WealthHealth-front](https://github.com/TangiLC/P14-WealthHealth-front)

## Endpoints de l'app

- GET `/getAllEmployees` _récupère la liste de tous les employés_
- GET `/getByFirstName/:firstName` _récupère la liste des employés prénommés `firstName`_
- GET `/getByLastName/:lastName` _récupère la liste des employés nommés `lastName`_
- GET `/getByState/:state` _récupère la liste des employés habitants l'État `state`_
- GET `/getByDepartment/:dep` _récupère la liste des employés travaillants dans le département `dep`_
- PUT `/addEmployee` _ajout de l'objet {employee} dans le corps de la requête avec attribution d'un id unique_
- PATCH `/patchEmployee/:id` _modification de l'objet {employee} identifié par `id`_
- DELETE `/deleteEmployee/:id` _suppression de l'objet {employee} identifié par `id`_
