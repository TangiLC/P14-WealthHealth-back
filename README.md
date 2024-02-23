# Backe-end du projet 14 OpenClassrooms (Wealth Health HRnet)

Ce back-end simplifié permet l'accès et la modification d'une base de données employés (data/employees.json) sur le port 3003 pour interagir avec le front-end.

## Prérequis DOCKER

Ce back-end peut être containeurisé avec Docker. Vous pouvez le télécharger et l'installer à partir du site officiel de Docker : [Docker](https://www.docker.com/get-started)

## Étapes à suivre Avec Docker

1. **Cloner ce projet**

   ```bash
   git clone <URL_DU_RÉFÉRENTIEL>
   cd <NOM_DU_RÉFÉRENTIEL>

   ```

2. **Création de l'image avec DockerFile**

Dans le terminal, lancer la commande `docker build -t p14_back .`
...What's Next?

3. **Lancement de l'application avec DockerCompose**

Dans le terminal, lancer la commande `docker-compose up`

**Le back-end containeurisé tourne sur le port 3003**

## Étapes à suivre Sans Docker

1. **Cloner ce projet**

   ```bash
   git clone <URL_DU_RÉFÉRENTIEL>
   cd <NOM_DU_RÉFÉRENTIEL>

   ```

2. **Mettre à jour les dépendances**

Dans le terminal, lancer la commande `npm i`

3. **Lancement de l'application**
   Dans le terminal, lancer la commande `npm run start`

**Le back-end tourne sur le port 3003 dans votre environnement**
