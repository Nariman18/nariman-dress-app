import { InventoryProducts } from "../types/Products";

export const inventory: InventoryProducts[] = [
  {
    id: "17e84bfd-fe5b-43b3-9276-d3302e5f5a65",
    name: "Cartier Eyewear",
    sku: "cartier_eyewear_1",
    descriptions:
      "square-frame tinted sunglasses from Cartier Eyewear featuring jet black, gold-tone hardware, square frame, grey tinted lenses, nose pads, straight arms, curved tips, UV-protective lenses and acetate/metal. These glasses come with a protective case..",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/695191549b98e9d87c2e9f214f00d613436a7453-1000x1334.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/695191549b98e9d87c2e9f214f00d613436a7453-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/37e73ce361854561e6b7aad1a502f91706becbfa-1000x1334.webp",
    ],
    currency: "USD",
    categories: ["sunglasses"],
    sizes: ["one-size"],
    colors: ["black"],
    price: 141500,
  },

  {
    currency: "USD",
    colors: ["blue"],
    id: "28240335-9606-4b40-b1d6-54f25779429a",
    name: "Burberry",
    sku: "burberry_1",
    descriptions: "Bifold leather wallet",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/8baf953304dd2fd03ab4e757c91e421f32b0c96d-1000x1334.jpg",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/8baf953304dd2fd03ab4e757c91e421f32b0c96d-1000x1334.jpg",
      "https://cdn.sanity.io/images/l4u4w9r7/production/404ceb5a1b9cabe2c3880e9f2ee09ed512c8e2d0-1000x1334.jpg",
    ],
    price: 37700,
    sizes: ["one-size"],
    categories: ["wallets"],
  },

  {
    sku: "tom_ford_1",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/f4ff346448584bcacd442b6b6df243e3114f4447-1000x1335.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/9adf3cfb7f383cdb8d51cca86ec41a4c5e67fa1e-1000x1334.webp",
    ],
    price: 69500,
    categories: ["belts"],
    colors: ["black"],
    name: "Tom Ford",
    descriptions: "T-buckle reversible leather belt ",
    currency: "USD",
    sizes: ["one-size"],
    id: "2e6d3241-92c6-49c1-943a-66791d2e2226",
  },

  {
    descriptions: "oversize fringe wool scarf",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/29461ac1a8f8297b2850ef3b41418de910c245fe-1000x1334.jpg",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/29461ac1a8f8297b2850ef3b41418de910c245fe-1000x1334.jpg",
      "https://cdn.sanity.io/images/l4u4w9r7/production/583d310a399cd6131b1dbc4f039ebe0f22659aa0-1000x1334.jpg",
    ],
    categories: ["scarves"],
    id: "2f5cfb17-e288-42a8-ad9c-896801431058",
    name: "Acne Studios",
    sku: "acne_studios_1",
    price: 18300,
    currency: "USD",
    sizes: ["one-size"],
    colors: ["green"],
  },

  {
    id: "5ba4133a-0e83-48b5-bdc5-82a21704bdc3",
    sku: "jacquemus_1",
    descriptions:
      "Following the brand's minimal aesthetic, the Le Bambino de voyage flap bag by Jacquemus features an all-black soft, XL design. A silver-plated logo and metal hardware highlight the design.",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/05fa28383b9a84deede1b10a44907298fcb4c2b4-1000x1334.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/070309961be78fa5bc14c03c4626972714cf9f9f-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/bb5bdc4eeb0a53f21b7510ddd524c17b2810b02a-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/abbd70893c2c3a62a1f3d63d73b0c552ff8fa185-1000x1335.jpg",
    ],
    sizes: ["one-size"],
    name: "Jacquemus",
    price: 78300,
    currency: "USD",
    categories: ["bags"],
    colors: ["black"],
  },

  {
    id: "6542e30a-22c5-4def-87e8-5645ae54740f",
    name: "Polo Ralph Lauren",
    sku: "polo_ralph_lauren_1",
    descriptions:
      "cable knit gloves from POLO RALPH LAUREN featuring beige, cotton, high waist, button fly fastening, belt loops, two side slit pockets, two rear welt pockets and wide leg.",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/a402e127dbd17d581c67d21139697a256bf2fbc8-1000x1334.jpg",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/a402e127dbd17d581c67d21139697a256bf2fbc8-1000x1334.jpg",
      "https://cdn.sanity.io/images/l4u4w9r7/production/756c2abdc203100ef1287dcb7ce641508b32c299-1000x1334.jpg",
    ],
    price: 9700,
    currency: "USD",
    sizes: ["one-size"],
    categories: ["gloves"],
    colors: ["brown"],
  },

  {
    name: "Moncler",
    sku: "moncler_1",
    descriptions:
      "These Moncler gloves are equipped with leather patches on the palms and fingertips for added grip, while a zip-fastening pocket finishes the practical design.",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/78feb76bcc155fd5b306d5ad4fb4d83cc0351518-1000x1334.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/78feb76bcc155fd5b306d5ad4fb4d83cc0351518-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/6d3fe8abd36ab84ceefe0b43cd6836481b1ce4f5-1000x1334.jpg",
    ],
    price: 88200,
    sizes: ["S", "M", "L"],
    colors: ["black"],
    id: "8893fe7b-f997-434b-96a3-880bbe880db3",
    currency: "USD",
    categories: ["gloves"],
  },

  {
    colors: ["brown"],
    descriptions:
      "Crafted from leather, this Brunello Cucinelli briefcase is finished in a classic burgundy hue. This creates a timeless finish for the refined piece.",
    sizes: ["one-size"],
    categories: ["bags"],
    name: "Brunello Cucinelli",
    sku: "brunello_cucinelli_1",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/4f09cf60042ddb23366ac58f017d2409a2c26077-1000x1334.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/61df8428ff2834f5d6a1d7432cc52c984109d038-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/b5353c25d67591825b88c7278d22478a7d132343-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/9f7604c9ff57798736aea123a7436625c58dcf7a-1000x1334.jpg",
    ],
    price: 310700,
    currency: "USD",
    id: "97980e00-7dc7-4226-939e-6f5e5f32e173",
  },

  {
    sizes: ["S", "M", "L", "XL"],
    categories: ["belts"],
    name: "Ferragamo",
    sku: "ferragamo_1",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/5c4e5e8e650acb3da668b47a5603f29e312ce778-1000x1334.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/025196b13e76cfccbaaece4a7e2b7bd63bedde09-1000x1335.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/47760bcde9948e210e61c108409813860d18ac3f-1000x1334.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/b531a0fee8d7dad311628f292a5e6f94860bead4-1000x1334.webp",
    ],
    price: 43600,
    currency: "USD",
    id: "b735f054-6566-4851-a8c3-b03369bb581c",
    descriptions: "Gancini reversible leather belt",
    colors: ["brown"],
  },

  {
    name: "Acne Studios 2",
    sku: "acne_studios_2_1",
    descriptions: "logo-patch wool scarf",
    price: 14300,
    sizes: ["M", "L"],
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/8417fa2bb86d89f3be1b7b38c3441ebed7880354-1000x1335.webp",
    id: "f13ba116-113a-4c53-9e18-8194d851729a",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/8417fa2bb86d89f3be1b7b38c3441ebed7880354-1000x1335.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/55562d830e6aa0b8b5b1d06fcf00954a3e2280e4-1000x1335.jpg",
    ],
    currency: "USD",
    categories: ["scarves"],
    colors: ["blue"],
  },

  {
    id: "f3395b65-34aa-4380-860d-de54e436a4de",
    sku: "alexander_mcqueen_1",
    descriptions: "Contrasting-panel bi-fold wallet",
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/68372d6f245932b91ec28b00fdb9d8b972781971-1000x1335.webp",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/68372d6f245932b91ec28b00fdb9d8b972781971-1000x1335.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/b15feff53419b3a35f329fe0ac134ca650e620bd-1000x1335.webp",
    ],
    name: "Alexander McQueen",
    price: 52000,
    currency: "USD",
    sizes: ["one-size"],
    categories: ["wallets"],
    colors: ["green"],
  },

  {
    name: "Palm Angels",
    images: [
      "https://cdn.sanity.io/images/l4u4w9r7/production/57a110199d90b43d99e4e876782fe685faed1d2e-1000x1335.webp",
      "https://cdn.sanity.io/images/l4u4w9r7/production/4f780ea1118f516abeab49ea37095263f315059c-1000x1334.webp",
    ],
    price: 37500,
    currency: "USD",
    categories: ["sunglasses"],
    image:
      "https://cdn.sanity.io/images/l4u4w9r7/production/57a110199d90b43d99e4e876782fe685faed1d2e-1000x1335.webp",
    id: "ff8231ab-e2b0-49da-87b3-5fa5c8cd8971",
    sku: "palm_angels_1",
    descriptions:
      "These sunglasses from Palm Angels arrive in a modern oversized mask silhouette, accented by a silver-tone metal bridge engraving with the brand's logo. Completing this futuristic accessory, are large logo plaques adorning the chunky temples.",
    sizes: ["one-size"],
    colors: ["black"],
  },
];
