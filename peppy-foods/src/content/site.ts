/**
 * Peppy Foods business details & page copy.
 * TODO: confirm every contact detail below with Peppy Foods before publishing
 * (the draft site's Chicago address / phone were template values and are NOT used).
 */

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const site = {
  name: "Peppy Foods",
  legalName: "Peppy Foods Inc.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://peppyfoods.vercel.app",
  title: "Peppy Foods | Wholesale Frozen Foods, Grocery, Dairy & Packaging Supply",
  description:
    "Peppy Foods supplies frozen foods, dairy/cooler products, grocery staples, chutneys, sauces and packaging material for restaurants, caterers, grocery stores and food businesses.",
  // TODO: replace placeholders with real Peppy Foods details
  phone: "+1 (000) 000-0000",
  phoneHref: "tel:+10000000000",
  whatsapp: "", // e.g. "https://wa.me/10000000000" — the WhatsApp button only shows when set
  email: "sales@peppyfoods.com",
  address: "Warehouse address — to be confirmed",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // Optional downloadable catalogue / price list (place the PDF in /public)
  catalogueFile: "",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Categories", href: "/#categories" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const home = {
  headline: "Your Trusted Source for every Food & Catering Solutions",
  sub: "Peppy Foods supplies quality products for restaurants, caterers, grocery stores, and food businesses with dependable service and practical packaging solutions.",
  heroImage: img("1414235077428-338989a2e8c0", 1600),
  categoryIntro:
    "Explore our full product range across frozen items, cooler products, grocery staples, and packaging essentials.",
  audiences: ["Restaurants", "Caterers", "Grocery Stores", "Sweet Shops", "Cloud Kitchens", "Food Trucks"],
};

export const trustPoints = [
  { icon: "truck", title: "Reliable Supply", text: "Consistent stock of the products your menu and shelves depend on." },
  { icon: "check", title: "Quality Products", text: "Trusted brands and carefully sourced items, stored and handled properly." },
  { icon: "box", title: "Business-Friendly Packaging", text: "Case, bucket and bulk sizes that suit commercial kitchens and retail." },
  { icon: "layers", title: "Multiple Categories in One Place", text: "Frozen, cooler, grocery and packaging — one supplier, one order." },
  { icon: "chat", title: "Responsive Service", text: "Quick answers on pricing, pack sizes and availability." },
];

export const about = {
  heading: "Supplying food businesses with what they need — reliably.",
  body: [
    "Peppy Foods is a food distribution and wholesale supply business serving restaurants, caterers, grocery stores and food businesses. We bring together frozen foods, dairy and cooler products, grocery staples, chutneys, sauces and packaging material so our customers can source more from a single, dependable supplier.",
    "Our focus is simple: keep quality products in stock, offer practical pack sizes for commercial use, and respond quickly when our customers need pricing, availability or a bulk order.",
  ],
  pillars: [
    { title: "Supply reliability", text: "Planned inventory and dependable fulfilment so you're never caught short." },
    { title: "Quality products", text: "Products chosen for consistency, taste and performance in busy kitchens." },
    { title: "Service", text: "A responsive team that knows the catalogue and helps you order the right sizes." },
  ],
  image: img("1585937421612-70a008356fbe", 1400),
};
