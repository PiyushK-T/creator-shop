export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

import img1 from "../assets/images/products/img1.png";
import img2 from "../assets/images/products/img2.png";
import img3 from "../assets/images/products/img3.png";
import img4 from "../assets/images/products/img4.png";
import img5 from "../assets/images/products/img5.png";

export const products: Product[] = [
  { id: 1, name: "Creator Pack A", price: "$19.99", image: img1 },
  { id: 2, name: "Creator Pack B", price: "$24.99", image: img2 },
  { id: 3, name: "Creator Pack C", price: "$15.99", image: img3 },
  { id: 4, name: "Creator Pack D", price: "$39.99", image: img4 },
  { id: 5, name: "Creator Pack E", price: "$12.99", image: img5 },
];
