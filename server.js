const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


let items = [
  {
    "title": "Apple iPhone 15 Plus 128GB",
    "price": 99999,
    "imageUrl": "./img/phones/iPhone15Plus.png"
  },
  {
      "title": "Apple iPhone 15 Pro 512GB",
      "price": 159999,
      "imageUrl": "./img/phones/iPhone15Pro.png"
  },
  {
      "title": "Nothing Phone 2 256GB",
      "price": 59999,
      "imageUrl": "./img/phones/NothingPhone2.png"
  },
  {
      "title": "Samsung S23 Ultra 512GB",
      "price": 119999,
      "imageUrl": "./img/phones/SamsungS23Ultra.png"
  },
  {
      "title": "Asus ROG Phone 7 Ultimate 256GB",
      "price": 131999,
      "imageUrl": "./img/phones/AsusRogPhone7Ultimate.webp"
  },
  {
      "title": "iPhone 15 Pro Max Caviar 1TB",
      "price": 799999,
      "imageUrl": "./img/phones/iPhone15ProMaxCaviar.png"
  },
  {
      "title": "Samsung Z Flip 5 Caviar 1TB",
      "price": 599999,
      "imageUrl": "./img/phones/SamsungZFlip5Caviar.png"
  },
  {
      "title": "Samsung Z Fold 3 Caviar 1TB",
      "price": 399999,
      "imageUrl": "./img/phones/SamsungZFold3Caviar.png"
  },
  {
      "title": "Samsung Z Fold 5 256GB",
      "price": 179999,
      "imageUrl": "./img/phones/SamsungZFold5.webp"
  },
  {
      "title": "Sony Xperia 1 128GB",
      "price": 121999,
      "imageUrl": "./img/phones/SonyXPeria1.webp"
  }
];

let cartItems = [];

items = items.map((item, index) => ({ ...item, id: index + 1 }));

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/cart', (req, res) => {
  const newItem = { ...req.body, id: cartItems.length + 1 };
  cartItems.push(newItem);
  res.json(newItem);
});

app.delete('/cart/:id', (req, res) => {
  const itemId = req.params.id;
  cartItems = cartItems.filter(item => item.id !== itemId);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
