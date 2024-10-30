// src/data/products.ts
import cap from '@/assets/images/New Era Mens NY Yankees 9FORTY Snapback Hat - Blue.jpg';
import bag from '@/assets/images/lv bag.jpg';
import shirt from '@/assets/images/Cashio Cargo Nylon Shirt.jpg';
import shoes from '@/assets/images/ProductShoe.jpg';
import watch from '@/assets/images/Richard mille.jpg';
import belt from '@/assets/images/hoodie.jpg';

const products = [
  {
    id: 1,
    name: "Snapback Hat",
    description: "New Era Mens NY Yankees Snapback Hat",
    price: 10.99,
    image: cap,
  },
  {
    id: 2,
    name: "Duffel Bag",
    description: "Louis Vuitton Black Leather Duffel Bag",
    price: 9.99,
    image: bag,
  },
  {
    id: 3,
    name: "Cargo Shirt",
    description: "Cashio Cargo Nylon Shirt",
    price: 12.99,
    image: shirt,
  },
  {
    id: 4,
    name: "Nike Air Jordan",
    description: "Nike Air Jordan Retro IV",
    price: 8.99,
    image: shoes,
  },
  {
    id: 5,
    name: "Richard Mille",
    description: "Richard Mille Carbon TPT",
    price: 11.99,
    image: watch,
  },
  {
    id: 6,
    name: "Hoodie",
    description: "Louis Vuitton Leather Belt",
    price: 13.99,
    image: belt,
  },
];

export default products;
