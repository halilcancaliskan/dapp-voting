# Executez les commandes suivantes sur la racine du projet pour éxécuter l'application :

# Initialisation des dépendances
`npm install`

# Compilation du contrat
`npx hardhat compile`

# Validation des tests
`npx hardhat test`

# Pour trouver les private key pour créer les comptes metamask
`npx hardhat node`

# Passer l'extension metamask en local
[Lien pour installer metamask](https://metamask.io/download/)

# Pour créer un compte metamask avec le 'private key string', suivre la video tuto :
[Lien de la vidéo](https://youtu.be/N-ZF5cIJL14)

# Créer un fichier .env
Récupérer votre key en éxécutant la commande :
`npx hardhat run scripts/deploy.js --network localhost`

Et insérer cette ligne de code dans le fichier .env :
`REACT_APP_VOTE_ADDRESS = "Votre key"`

# Organisation de l'équipe
Front-end : Martin
Back-end : Halil-Can
Test : Valentin,
Contrat : Tony
Déploiement : Adrien

Au sein de notre équipe, nous avons instauré la pratique du pair programming, une méthodologie collaborative qui s'est avérée extrêmement bénéfique. Grâce à cette approche, nous sommes en mesure de détecter et de résoudre les bogues plus rapidement, d'effectuer des revues de code de manière approfondie, de repérer les signes de code obsolète (code smell), et même de partager nos écrans en temps réel grâce à des outils tels que Live Share. Cette stratégie de travail en binôme renforce la qualité de notre code, améliore nos compétences, et favorise une collaboration efficace au sein de l'équipe, tout en nous permettant de rester à jour avec les meilleures pratiques de développement. De plus, nous avons récemment entrepris une tentative de mise en ligne sur Vercel, marquant ainsi une étape cruciale dans notre processus de développement et de déploiement.