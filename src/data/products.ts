
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  gender: 'men' | 'women' | 'unisex';
  sizes: string[];
  colors: { name: string, hex: string }[];
  featured?: boolean;
  newArrival?: boolean;
  discount?: number;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    description: "A timeless classic, our signature cotton t-shirt is crafted from premium organic cotton for unmatched comfort and durability. Features a relaxed fit and clean finish.",
    images: [
      "/images/products/tshirt-white-1.jpg",
      "/images/products/tshirt-white-2.jpg",
    ],
    category: "t-shirts",
    gender: "unisex",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#0A142F" }
    ],
    featured: true,
    stock: 150
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 89.99,
    description: "Our signature slim fit jeans combine modern styling with exceptional comfort. Made from premium denim with just the right amount of stretch.",
    images: [
      "/images/products/jeans-blue-1.jpg",
      "/images/products/jeans-blue-2.jpg",
    ],
    category: "jeans",
    gender: "men",
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Light Blue", hex: "#A4C2E0" },
      { name: "Dark Blue", hex: "#133075" },
      { name: "Black", hex: "#000000" }
    ],
    featured: true,
    stock: 85
  },
  {
    id: 3,
    name: "Oversized Blazer",
    price: 149.99,
    description: "Make a statement with our sophisticated oversized blazer. Features a contemporary cut with structured shoulders and a relaxed fit through the body.",
    images: [
      "/images/products/blazer-black-1.jpg",
      "/images/products/blazer-black-2.jpg",
    ],
    category: "jackets",
    gender: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Beige", hex: "#E8DCCA" },
    ],
    newArrival: true,
    stock: 40
  },
  {
    id: 4,
    name: "Pleated Midi Skirt",
    price: 79.99,
    description: "Elegant and versatile, our pleated midi skirt moves beautifully with every step. Features a high waist and flowing silhouette for a feminine look.",
    images: [
      "/images/products/skirt-beige-1.jpg",
      "/images/products/skirt-beige-2.jpg",
    ],
    category: "skirts",
    gender: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Beige", hex: "#E8DCCA" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#0A142F" }
    ],
    featured: true,
    stock: 65
  },
  {
    id: 5,
    name: "Wool Blend Overcoat",
    price: 199.99,
    description: "Our premium wool blend overcoat offers superior warmth and sophisticated style. Features a classic silhouette with notched lapels and a single-breasted front.",
    images: [
      "/images/products/coat-camel-1.jpg",
      "/images/products/coat-camel-2.jpg",
    ],
    category: "outerwear",
    gender: "unisex",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Charcoal", hex: "#36454F" },
    ],
    newArrival: true,
    stock: 35
  },
  {
    id: 6,
    name: "Linen Blend Shirt",
    price: 69.99,
    description: "Perfect for warm days, our linen blend shirt combines breathability with a refined appearance. Features a relaxed fit and clean finishing.",
    images: [
      "/images/products/shirt-blue-1.jpg",
      "/images/products/shirt-blue-2.jpg",
    ],
    category: "shirts",
    gender: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Light Blue", hex: "#A4C2E0" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Sage", hex: "#BCB88A" }
    ],
    stock: 95
  },
  {
    id: 7,
    name: "Cropped Cardigan",
    price: 59.99,
    description: "A versatile layering piece, our cropped cardigan is made from a soft, lightweight knit. Features a button front and subtle ribbed trim.",
    images: [
      "/images/products/cardigan-cream-1.jpg",
      "/images/products/cardigan-cream-2.jpg",
    ],
    category: "knitwear",
    gender: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Dusty Pink", hex: "#D8A1A0" },
      { name: "Sage", hex: "#BCB88A" }
    ],
    newArrival: true,
    stock: 70
  },
  {
    id: 8,
    name: "High-Rise Wide Leg Pants",
    price: 89.99,
    description: "Make a statement with our high-rise wide leg pants. Features a flattering high waist and flowing wide legs for a contemporary silhouette.",
    images: [
      "/images/products/pants-black-1.jpg",
      "/images/products/pants-black-2.jpg",
    ],
    category: "pants",
    gender: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Olive", hex: "#556B2F" },
      { name: "Navy", hex: "#0A142F" }
    ],
    featured: true,
    discount: 15,
    stock: 55
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 't-shirts', name: 'T-Shirts' },
  { id: 'jeans', name: 'Jeans' },
  { id: 'jackets', name: 'Jackets' },
  { id: 'skirts', name: 'Skirts' },
  { id: 'outerwear', name: 'Outerwear' },
  { id: 'shirts', name: 'Shirts' },
  { id: 'knitwear', name: 'Knitwear' },
  { id: 'pants', name: 'Pants' }
];

export const collections = [
  {
    id: 'summer-essentials',
    name: 'Summer Essentials',
    description: 'Breathable, light fabrics for the warmest days',
    image: '/images/collections/summer-collection.jpg'
  },
  {
    id: 'autumn-winter',
    name: 'Autumn/Winter 2024',
    description: 'Warm, stylish pieces for the colder months',
    image: '/images/collections/winter-collection.jpg'
  },
  {
    id: 'basics',
    name: 'Modern Basics',
    description: 'Timeless staples for every wardrobe',
    image: '/images/collections/basics-collection.jpg'
  },
];
