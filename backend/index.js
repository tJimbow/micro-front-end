const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const products = [
  {
    id: 1,
    name: 'Clavier mécanique',
    description: 'Un clavier mécanique RGB performant.',
    image: '',
    versions: ['Noir', 'Blanc']
  },
  {
    id: 2,
    name: 'Souris ergonomique',
    description: 'Souris sans fil avec capteur haute précision.',
    image: '',
    versions: ['Petite', 'Grande']
  },
  {
    id: 3,
    name: 'Écran 27 pouces',
    description: 'Écran 4K UHD pour le travail et le jeu.',
    image: '',
    versions: ['Standard', 'Courbé']
  }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`API backend démarrée sur http://localhost:${PORT}`);
});

