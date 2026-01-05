const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const products = [
  {
    slug: 'producto-1',
    title: 'Camiseta MDD',
    description: 'Camiseta de algodón de alta calidad con el logo de MDD.',
    image: 'https://via.placeholder.com/400x300?text=Camiseta',
    price: '150 BOB',
    category: 'Ropa'
  },
  {
    slug: 'producto-2',
    title: 'Taza Coleccionable',
    description: 'Taza de cerámica con diseños exclusivos de películas.',
    image: 'https://via.placeholder.com/400x300?text=Taza',
    price: '50 BOB',
    category: 'Accesorios'
  }
];

const movies = [
  {
    slug: 'pelicula-1',
    title: 'El Gran Estreno',
    description: 'Una película llena de acción y aventura que no te puedes perder.',
    image: 'https://via.placeholder.com/400x600?text=Pelicula+1',
    releaseDate: '2024-05-15',
    director: 'Juan Perez'
  },
  {
    slug: 'pelicula-2',
    title: 'Drama en la Ciudad',
    description: 'Una historia conmovedora sobre la vida urbana.',
    image: 'https://via.placeholder.com/400x600?text=Pelicula+2',
    releaseDate: '2024-06-01',
    director: 'Maria Lopez'
  }
];

const calendar = [
  {
    startDate: '2024-05-13',
    endDate: '2024-05-19',
    isActive: true,
    events: [
      { date: '2024-05-15', title: 'Estreno: El Gran Estreno', type: 'movie', slug: 'pelicula-1' },
      { date: '2024-05-17', title: 'Descuento en Camisetas', type: 'product', slug: 'producto-1' }
    ]
  },
  {
    startDate: '2024-05-20',
    endDate: '2024-05-26',
    isActive: false,
    events: [
      { date: '2024-05-22', title: 'Charla con Director', type: 'other' }
    ]
  }
];

fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(products, null, 2));
fs.writeFileSync(path.join(dataDir, 'movies.json'), JSON.stringify(movies, null, 2));
fs.writeFileSync(path.join(dataDir, 'calendar.json'), JSON.stringify(calendar, null, 2));

console.log('Dummy data generated in data/ folder.');