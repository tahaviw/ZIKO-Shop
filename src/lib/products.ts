import hoodie from "@/assets/product-hoodie.jpg";
import tee from "@/assets/product-tee.jpg";
import pants from "@/assets/product-pants.jpg";
import sweater from "@/assets/product-sweater.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "ghost-hoodie",
    name: "GHOST IN THE SHELL Hoodie",
    category: "Apparel — Hoodie",
    price: 1450,
    image: hoodie,
    description:
      "Heavyweight 450GSM organic cotton, oversized drop-shoulder fit with minimalist cyber-anime embroidery on the chest.",
    details: [
      "450GSM organic loopback cotton",
      "Oversized drop-shoulder construction",
      "Tonal cyber-anime chest embroidery",
      "Garment-dyed for a soft, broken-in hand",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "eight-limbs-tee",
    name: "EIGHT LIMBS Graphic Tee",
    category: "Apparel — Tee",
    price: 650,
    image: tee,
    description:
      "Premium vintage-wash boxy tee with distressed typography and high-density screen print honoring traditional Muay Thai culture.",
    details: [
      "220GSM combed cotton, vintage wash",
      "Boxy relaxed silhouette",
      "High-density water-based print",
      "Reinforced ribbed collar",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "shinobi-cargo",
    name: "SHINOBI Techwear Cargo",
    category: "Apparel — Pants",
    price: 1850,
    image: pants,
    description:
      "Water-resistant matte nylon, modular utility pockets, adjustable ankle straps and matte black hardware throughout.",
    details: [
      "DWR-coated matte nylon shell",
      "Modular thigh & seat utility pockets",
      "Adjustable bungee ankle cuffs",
      "Matte black YKK hardware",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "cyberpunk-knit",
    name: "CYBERPUNK Oversized Knit",
    category: "Apparel — Knitwear",
    price: 1600,
    image: sweater,
    description:
      "Distressed jacquard knit with an industrial weave pattern, raw edge hems and an exaggerated oversized silhouette.",
    details: [
      "Heavy gauge jacquard knit",
      "Industrial double-weave pattern",
      "Raw, unfinished edges",
      "Oversized cocoon fit",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
];

export const formatMAD = (n: number) =>
  `${n.toLocaleString("en-US")} MAD`;
