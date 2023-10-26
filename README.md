# Initialisation des dépendances
`npm install`

# Compilation du contrat
`npx hardhat compile`

# Validation des tests
`npx hardhat test`

# Pour trouver les private key pour créer les comptes metamask
`npx hardhat node`

# Pour créer un compte metamask suivre la video tuto :
[Lien de la vidéo](https://youtu.be/N-ZF5cIJL14)

# Créer un fichier .env
Récupérer votre key en éxécutant la commande :
`npx hardhat run scripts/deploy.js --network localhost`

Et insérer cette ligne de code dans le fichier .env :
`REACT_APP_VOTE_ADDRESS = "Votre key"`
