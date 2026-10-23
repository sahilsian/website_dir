/**
 * Peppy Foods product dataset.
 * Add, remove or edit products here — the catalogue, category pages,
 * filters and featured products are all generated from this list.
 *
 * Fields: id, productName, category, subcategory (optional), packSize,
 * unitType, shortDescription (optional), featured, image (optional),
 * inquiryOnly (prices hidden → "Request Pricing" CTA).
 */

export type CategorySlug = "frozen-foods" | "dairy-cooler" | "grocery" | "packaging";

export type Product = {
  id: string;
  productName: string;
  category: CategorySlug;
  subcategory?: string;
  packSize: string;
  unitType: string;
  shortDescription?: string;
  featured?: boolean;
  image?: string;
  inquiryOnly: boolean;
};

const img = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const categories: {
  slug: CategorySlug;
  name: string;
  short: string;
  description: string;
  icon: string;
  image: string;
  tint: string;
}[] = [
  {
    slug: "frozen-foods",
    name: "Frozen Foods",
    short: "Frozen",
    description: "Ready-to-cook snacks, appetizers, momos and chutneys for kitchens that need speed and consistency.",
    icon: "snow",
    image: img("1601050690597-df0568f70950"),
    tint: "#e7f1fb",
  },
  {
    slug: "dairy-cooler",
    name: "Dairy / Cooler Products",
    short: "Dairy / Cooler",
    description: "Paneer, yogurt and bucket desserts kept cold and ready for catering and retail.",
    icon: "milk",
    image: img("1488477181946-6428a0291777"),
    tint: "#fdf3e4",
  },
  {
    slug: "grocery",
    name: "Grocery",
    short: "Grocery",
    description: "Lentils, beans, flours, ground spices and pantry staples in bulk foodservice sizes.",
    icon: "wheat",
    image: img("1532336414038-cf19250c5757"),
    tint: "#f6efe4",
  },
  {
    slug: "packaging",
    name: "Packaging Material",
    short: "Packaging",
    description: "Trays, plates, cups, lids, bags and portion cups for takeout, catering and delivery.",
    icon: "bag",
    image: img("1607082348824-0a96f2a4b9da"),
    tint: "#fbe9e7",
  },
];

type Row = [name: string, packSize: string, unitType: string, extra?: Partial<Product>];

const build = (category: CategorySlug, rows: Row[]): Product[] =>
  rows.map(([productName, packSize, unitType, extra]) => ({
    id: `${category}-${productName
      .toLowerCase()
      .replace(/["']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`,
    productName,
    category,
    packSize,
    unitType,
    inquiryOnly: true,
    ...extra,
  }));

export const products: Product[] = [
  ...build("frozen-foods", [
    ["Punjabi Samosa", "100g (12 pcs × 6 mono)", "Case", { subcategory: "Snacks", featured: true }],
    ["Vegetable Spring Roll", "50g (20 pcs × 10 mono)", "Case", { subcategory: "Snacks", featured: true }],
    ["Noodle Spring Roll", "50g (20 pcs × 10 mono)", "Case", { subcategory: "Snacks" }],
    ["Hara Bhara Kabab", "40g (18 pcs × 12 mono)", "Case", { subcategory: "Snacks" }],
    ["Veg Masala Burger Patty", "70g (14 pcs × 12 mono)", "Case", { subcategory: "Snacks" }],
    ["Vada for Dahi Vada", "25g (1 kg × 10 mono)", "Case", { subcategory: "Snacks" }],
    ["Batata Vada Round", "62g (1 kg × 6 mono)", "Case", { subcategory: "Snacks" }],
    ["Khasta Kachori", "70g (1 kg × 7 mono)", "Case", { subcategory: "Snacks" }],
    ["Manchurian Balls", "1 kg × 10 mono", "Case", { subcategory: "Indo-Chinese" }],
    ["Classic Momo", "1 kg × 6 mono", "Case", { subcategory: "Indo-Chinese" }],
    ["Schezwan Sauce", "1 kg × 8 mono", "Case", { subcategory: "Chutneys & Sauces" }],
    ["Sweet Tamarind Chutney", "1 kg × 8 mono", "Case", { subcategory: "Chutneys & Sauces" }],
    ["Coriander Chutney", "1 kg × 8 mono", "Case", { subcategory: "Chutneys & Sauces" }],
    ["Momo Chutney", "1 kg × 8 mono", "Case", { subcategory: "Chutneys & Sauces" }],
  ]),
  ...build("grocery", [
    ["Urad Dal Washed", "5 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["Urad Dal Whole", "66 lbs", "Bag", { subcategory: "Lentils & Beans", featured: true }],
    ["Masoor Dal (Red Split Lentil)", "66 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["White Chana", "55 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["Moong Dal Washed", "5 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["Moong Dal Whole", "55 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["Turmeric Powder", "55 lbs", "Bag", { subcategory: "Spices" }],
    ["Coriander Powder", "55 lbs", "Bag", { subcategory: "Spices" }],
    ["Kasoori Methi", "1 kg × 15", "Case", { subcategory: "Spices", featured: true }],
    ["Red Kidney Beans", "66 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["Toor Dal (Arhar Dal)", "5 lbs", "Bag", { subcategory: "Lentils & Beans" }],
    ["Soya Chaap", "850 g × 12", "Case", { subcategory: "Pantry" }],
    ["MDH Pav Bhaji", "100 g", "Pack", { subcategory: "Spices" }],
    ["MDH Pudina Chutney", "100 g", "Pack", { subcategory: "Spices" }],
    ["Besan", "40 lbs", "Bag", { subcategory: "Flours" }],
    ["Cumin Powder", "55 lbs", "Bag", { subcategory: "Spices" }],
    ["Mango Chutney Drums", "44 lbs", "Drum", { subcategory: "Pantry" }],
    ["Jaggery Powder (Organic)", "1 kg", "Pack", { subcategory: "Pantry" }],
  ]),
  ...build("dairy-cooler", [
    ["Gajrella", "25 lbs bucket", "Bucket", { subcategory: "Desserts" }],
    ["Gulab Jamun Lite", "20 lbs bucket", "Bucket", { subcategory: "Desserts" }],
    ["Paneer", "Per lb", "lb", { subcategory: "Dairy", featured: true }],
    ["Rasgulla / Raspberry Bucket", "Bucket", "Bucket", { subcategory: "Desserts" }],
    ["Yogurt", "15 L bucket", "Bucket", { subcategory: "Dairy", featured: true }],
  ]),
  ...build("packaging", [
    ['10" 3 Comp Tray with Lid', "150 pcs", "Case", { subcategory: "Trays & Containers", featured: true }],
    ['9" Plate', "500 pcs", "Case", { subcategory: "Plates & Cutlery" }],
    ['7" Cornstarch Spoon', "1000 pcs", "Case", { subcategory: "Plates & Cutlery" }],
    ["3LB Printed Food Tray", "500 pcs", "Case", { subcategory: "Trays & Containers" }],
    ["EP 28 - 9x6 Clamshell", "150 pcs", "Case", { subcategory: "Trays & Containers" }],
    ["#8 Bags", "500 pcs", "Case", { subcategory: "Bags" }],
    ["535 Bags", "500 pcs", "Case", { subcategory: "Bags" }],
    ["Medium Handle Bag", "250 pcs", "Case", { subcategory: "Bags" }],
    ["12oz Paper Cups", "500 pcs", "Case", { subcategory: "Cups & Lids", featured: true }],
    ["12oz Paper Cup Lids", "500 pcs", "Case", { subcategory: "Cups & Lids" }],
    ["750ML Paper Cup (Kraft Salad)", "300 pcs", "Case", { subcategory: "Cups & Lids" }],
    ["750ML Paper Cup Lids (Kraft Salad)", "300 pcs", "Case", { subcategory: "Cups & Lids" }],
    ["1100ML Paper Cup (Kraft Salad)", "300 pcs", "Case", { subcategory: "Cups & Lids" }],
    ["1100ML Paper Cup Lids (Kraft Salad)", "300 pcs", "Case", { subcategory: "Cups & Lids" }],
    ["2oz Sauce Portion Cups", "2500 pcs", "Case", { subcategory: "Cups & Lids" }],
    ["2oz Sauce Portion Cup Lids", "2500 pcs", "Case", { subcategory: "Cups & Lids" }],
  ]),
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const productsIn = (slug: CategorySlug) => products.filter((p) => p.category === slug);
export const featuredProducts = () => products.filter((p) => p.featured);
