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
  image: string;
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
  {
  id: 7,
  slug: "soft-cloud-doll",
  name: "Soft Cloud Doll",
  price: 48,
  description:
    "A plush crochet doll with a calming pastel palette — handmade with care.",
  image: p1,
},
{
  id: 8,
  slug: "earthy-plant-cozy",
  name: "Earthy Plant Cozy",
  price: 32,
  description:
    "Neutral-toned knitted plant cozy designed to blend with modern interiors.",
  image: p2,
},
{
  id: 9,
  slug: "deep-sea-patch",
  name: "Deep Sea Patch",
  price: 26,
  description:
    "Fabric patch inspired by ocean depths and textured waves.",
  image: p3,
},
{
  id: 10,
  slug: "amber-scarf",
  name: "Amber Knit Scarf",
  price: 58,
  description:
    "Warm amber-toned scarf with subtle gradient stitching.",
  image: p4,
},
{
  id: 11,
  slug: "confetti-mat",
  name: "Confetti Table Mat",
  price: 24,
  description:
    "Small decorative mat with playful dotted patterns.",
  image: p5,
},
{
  id: 12,
  slug: "halo-circle-print",
  name: "Halo Circle Print",
  price: 62,
  description:
    "Circular art print with layered textures and soft contrast.",
  image: p6,
},

{
  id: 13,
  slug: "speckle-buddy",
  name: "Speckle Buddy Doll",
  price: 42,
  description:
    "A friendly crochet companion with speckled yarn detailing.",
  image: p1,
},
{
  id: 14,
  slug: "leafy-cozy",
  name: "Leafy Plant Cozy",
  price: 29,
  description:
    "Soft green knit cozy for plant lovers and cozy corners.",
  image: p2,
},
{
  id: 15,
  slug: "tide-patch",
  name: "Tide Fabric Patch",
  price: 27,
  description:
    "Wave-inspired patch suitable for denim, backpacks, or crafts.",
  image: p3,
},
{
  id: 16,
  slug: "dawn-scarf",
  name: "Dawn Gradient Scarf",
  price: 57,
  description:
    "Lightweight scarf with sunrise-inspired color transitions.",
  image: p4,
},
{
  id: 17,
  slug: "dotty-mat",
  name: "Dotty Crochet Mat",
  price: 23,
  description:
    "Handmade mat with evenly spaced dots — subtle and charming.",
  image: p5,
},
{
  id: 18,
  slug: "solar-ring-print",
  name: "Solar Ring Print",
  price: 65,
  description:
    "Bold circular print with a sun-inspired textured finish.",
  image: p6,
},

];

export default products;

