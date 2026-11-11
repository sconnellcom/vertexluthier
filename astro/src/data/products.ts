interface Photo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface Product {
  slug: string;
  name: string;
  heading: string;
  description: string;
  price: string;
  etsyUrl: string;
  sourceNote: string;
  galleryLabel: string;
  photos: Photo[];
}

const image = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;
const attachment = (id: string) => `https://github.com/user-attachments/assets/${id}`;

export const products = [
  {
    slug: 'lightning',
    name: 'Lightning Cello',
    heading: '3D-Printed Electric Lightning Cello: ready to play!',
    description: 'Meet the 3D-Printed Electric Lightning Cello by Vertex Luthier: bold lightning-inspired styling, steel reinforcement, and an onboard preamp.',
    price: '$975.00 USD',
    etsyUrl: 'https://www.etsy.com/listing/4458208088/3d-printed-electric-lightning-cello',
    sourceNote: 'Check Etsy for current pricing and availability.',
    galleryLabel: 'Lightning cello photos',
    photos: [
      { src: image('lightning-main.jpg'), alt: 'Blue Lightning electric cello against a tree', width: 1200, height: 1600 },
      { src: image('lightning-detail.jpg'), alt: 'Lightning electric cello, additional product photo', width: 3060, height: 4080 },
    ],
  },
  {
    slug: 'wavy',
    name: 'Wavy Cello',
    heading: '3D-Printed Electric Wavy Cello',
    description: 'Meet the made-to-order 3D-Printed Electric Wavy Cello by Vertex Luthier, with a durable PETG body and onboard preamp.',
    price: '$655.00 USD',
    etsyUrl: 'https://www.etsy.com/listing/4462386162/3d-printed-electric-wavy-cello',
    sourceNote: 'Made to order. Check Etsy for current pricing and availability.',
    galleryLabel: 'Wavy cello photos',
    photos: [
      { src: image('wavy-main.jpg'), alt: 'Wavy electric cello, main product photo', width: 3060, height: 4080 },
      { src: image('wavy-detail.jpg'), alt: 'Wavy electric cello, secondary product photo', width: 3060, height: 4080 },
    ],
  },
  {
    slug: 'travel',
    name: 'Packable Travel Cello',
    heading: 'Packable 3D-Printed Electric Travel Cello',
    description: "Explore Vertex Luthier's Packable 3D-Printed Electric Travel Cello with a hard-shell carrying case, carbon fiber endpin, and onboard preamp.",
    price: '$1,200.00 USD',
    etsyUrl: 'https://www.etsy.com/listing/4480261221/packable-3d-printed-electric-travel',
    sourceNote: 'Check Etsy for current pricing and availability.',
    galleryLabel: 'Packable cello photos',
    photos: [
      { src: attachment('528e9c36-6156-4f42-bef4-360f061d1dc0'), alt: 'Packable electric travel cello, main product photo' },
      { src: attachment('e6e2ad89-6300-4d5e-a9c7-e74ebc4092d1'), alt: 'Packable electric travel cello, product photo 2' },
      { src: attachment('34866d29-952b-4910-b4d3-9e315be1b0ce'), alt: 'Packable electric travel cello, product photo 3' },
      { src: attachment('1e499037-7d72-4bd8-abfb-869cfb30cab2'), alt: 'Packable electric travel cello, product photo 4' },
    ],
  },
] satisfies Product[];

export type { Product };
