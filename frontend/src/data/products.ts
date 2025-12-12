import p1 from "../assets/images/products/p1.png";
import p2 from "../assets/images/products/p2.png";
import p3 from "../assets/images/products/p3.png";
import p4 from "../assets/images/products/p4.png";
import p5 from "../assets/images/products/p5.png";
import p6 from "../assets/images/products/p6.png";

export type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  description: string;
  image: string; // path imported
};

export const products: Product[] = [
  {
    id: 1,
    slug: "speckled-doll",
    name: "Speckled Crochet Doll",
    price: 45,
    description:
      "A small handmade crochet doll made from soft cotton yarn. Perfect as a gift or desk companion.",
    image: p1,
  },
  {
    id: 2,
    slug: "minimal-plant",
    name: "Minimal Plant Cozy",
    price: 30,
    description:
      "A knitted cozy for small potted plants — adds a soft, handmade touch to your shelf.",
    image: p2,
  },
  {
    id: 3,
    slug: "ocean-patch",
    name: "Ocean Patch Art",
    price: 28,
    description:
      "A small fabric patch inspired by sea tones — great for jackets, bags, or craft projects.",
    image: p3,
  },
  {
    id: 4,
    slug: "sunrise-scarf",
    name: "Sunrise Scarf",
    price: 55,
    description:
      "Hand-knitted scarf with warm gradients. Cozy, soft, and one-of-a-kind.",
    image: p4,
  },
  {
    id: 5,
    slug: "polka-mat",
    name: "Polka Dot Mat",
    price: 22,
    description:
      "A cheerful small mat with polka-dot pattern — useful as a coaster or small tray mat.",
    image: p5,
  },
  {
    id: 6,
    slug: "radiant-circle",
    name: "Radiant Circle Print",
    price: 60,
    description:
      "A printed design with a radiant, handmade texture — great as small wall art.",
    image: p6,
  },
];

export default products;

