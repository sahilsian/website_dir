/**
 * All editable U-Ship Solutions content lives here.
 * Copy is migrated from ushipsolution.com per the developer brief.
 * Items marked TODO need client confirmation before launch.
 */

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const site = {
  name: "U-Ship Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ushipsolutions.vercel.app",
  tagline: "Your Tailored Shipping Partner",
  description:
    "U-Ship Solutions is a Canada-based shipping company in Surrey, BC providing domestic and international shipping, express document delivery, import/export, customs clearance, freight forwarding, door-to-door delivery and moving help.",
  address: {
    line1: "15061 54a Ave - 109",
    city: "Surrey",
    region: "BC",
    postal: "V3S 5X7",
    country: "Canada",
    full: "15061 54a Ave - 109, Surrey, BC V3S 5X7, Canada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=15061+54a+Ave+109+Surrey+BC+V3S+5X7",
  },
  phone: "+1 (236)-997-0024",
  phoneHref: "tel:+12369970024",
  email: "info@ushipsolution.com",
  // TODO: add the real social profile URLs once supplied — icons only render for entries listed here.
  socials: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services/" },
  { label: "Tracking", href: "/tracking/" },
  { label: "About Us", href: "/about/" },
  { label: "Contact Us", href: "/contact/" },
];

export const carriers = [
  {
    name: "DHL",
    color: "#FFCC00",
    ink: "#D40511",
    trackUrl: "https://www.dhl.com/ca-en/home/tracking.html",
    quoteUrl: "https://mydhl.express.dhl/ca/en/home.html",
    // TODO: confirm carrier support numbers are still to be shown on the site
    phone: "1-855-345-7447",
  },
  {
    name: "FedEx",
    color: "#4D148C",
    ink: "#FFFFFF",
    trackUrl: "https://www.fedex.com/en-ca/tracking.html",
    quoteUrl: "https://www.fedex.com/en-ca/online/rating.html",
    phone: "1-800-463-3339",
  },
  {
    name: "Purolator",
    color: "#D52B1E",
    ink: "#FFFFFF",
    trackUrl: "https://www.purolator.com/en/shipping/tracker",
    phone: "1-888-744-7123",
  },
  {
    name: "UPS",
    color: "#351C15",
    ink: "#FFB500",
    trackUrl: "https://www.ups.com/track?loc=en_CA",
    phone: "1-800-742-5877",
  },
];

export const home = {
  heroTitle: ["Delivering Excellence", "Your Tailored Shipping Partner"],
  heroBody:
    "U-Ship Solutions is a Canada-based shipping company providing world-class shipping services to our customers all over the world. We offer a wide range of courier services to companies in different industries as well as personal shipments.",
  heroImage: img("1494412574643-ff11b0a5c1c3", 2000),
  intro: [
    "We are the perfect company for all your logistic needs. Whether you need to arrange a local or international package delivery or need a professional company to handle customs clearance and warehouse storage or you need help in finding a buyer or supplier, U-Ship Solutions is your one-stop solution for all your logistic needs.",
  ],
  introImage: img("1586528116311-ad8dd3c8310d", 1400),
  // Plain trust statements — no unverified numbers.
  trust: [
    { icon: "flag", title: "Canada-based", text: "Proudly operating from Surrey, British Columbia." },
    { icon: "globe", title: "Worldwide shipping", text: "Local and international deliveries for any destination." },
    { icon: "users", title: "Business & personal", text: "Courier services for every industry and individual shipments." },
    { icon: "shield", title: "One-stop logistics", text: "Shipping, customs clearance, storage and sourcing support." },
  ],
};

export const whoWeAre =
  "We are more than just a logistics company; we are architects of seamless global connectivity. We embody innovation, reliability, and efficiency in every aspect of our operations. Our team of experts offers accessible expertise, breaking down intricate logistics concepts and tailoring solutions to meet specific needs. At U-Ship Solutions, we redefine logistics by making it easy, empowering businesses to thrive in an interconnected global landscape.";

export const services = [
  {
    slug: "shipping",
    icon: "globe",
    title: "Domestic & International Shipping",
    summary: "Ground, air and sea freight for businesses and individuals — locally and worldwide.",
    body: [
      "U-Ship Solutions offers comprehensive domestic and international shipping services for businesses and individuals. Whether you are sending a single parcel across the province or a bulk shipment overseas, we arrange the right option for your timeline and budget.",
      "Choose from ground, air and sea freight with flexible scheduling, and rely on us to coordinate bulk shipments from pickup to delivery.",
    ],
    points: ["Ground, air & sea freight", "Flexible pickup scheduling", "Bulk & commercial shipments", "Personal parcels"],
    image: img("1436491865332-7a61a109cc05", 1200),
  },
  {
    slug: "documents",
    icon: "document",
    title: "Express Document Delivery Worldwide",
    summary: "Fast, secure courier service for important documents — delivered with speed and discretion.",
    body: [
      "When your documents can't wait, our express document courier service delivers them quickly and securely to destinations worldwide.",
      "Contracts, legal papers, certificates and business documents are handled with speed and discretion from pickup to signature.",
    ],
    points: ["Express worldwide delivery", "Secure, discreet handling", "Proof of delivery"],
    image: img("1566576721346-d4a3b4eaeb55", 1200),
  },
  {
    slug: "import-export",
    icon: "swap",
    title: "Import Export Services",
    summary: "Compliance support and guidance on trade rules, tariffs and currency exchange.",
    body: [
      "Moving goods across borders means navigating regulations. Our import and export services help you stay compliant with trade rules, understand applicable tariffs and plan around currency exchange.",
      "We can also help you find a buyer or supplier, so your business can grow into new markets with confidence.",
    ],
    points: ["Trade compliance support", "Tariff guidance", "Currency exchange understanding", "Buyer & supplier sourcing"],
    image: img("1578575437130-527eed3abbec", 1200),
  },
  {
    slug: "customs",
    icon: "stamp",
    title: "Custom Clearance",
    summary: "Professional customs brokerage to clear your shipments smoothly and on time.",
    body: [
      "Our customs clearance and brokerage service handles the paperwork, declarations and coordination needed to get your shipments through customs without unnecessary delays.",
      "We work with you to prepare accurate documentation so your goods are released quickly at the border.",
    ],
    points: ["Customs brokerage", "Documentation & declarations", "Border coordination"],
    image: img("1553413077-190dd305871c", 1200),
  },
  {
    slug: "port-to-port",
    icon: "ship",
    title: "Port to Port Freight Forwarding",
    summary: "End-to-end transportation from the port of origin to the port of discharge.",
    body: [
      "With port to port freight forwarding, we manage the end-to-end transportation of your cargo from the origin port to the port of discharge.",
      "We coordinate booking, loading and ocean transit so your freight arrives at the destination port ready for collection or onward delivery.",
    ],
    points: ["Origin to discharge port", "Ocean freight booking", "Cargo coordination"],
    image: img("1494412574643-ff11b0a5c1c3", 1200),
  },
  {
    slug: "door-to-door",
    icon: "home",
    title: "Door to Door Delivery",
    summary: "Goods picked up and delivered directly to your customer's doorstep.",
    body: [
      "Our door to door delivery service takes care of the entire journey — we pick up your goods and deliver them directly to the customer's doorstep.",
      "It's the simplest way to ship: no depots, no extra handoffs, just reliable delivery from your door to theirs.",
    ],
    points: ["Pickup from your location", "Delivery to the doorstep", "Domestic & international"],
    image: img("1580674285054-bed31e145f59", 1200),
  },
  {
    slug: "moving",
    icon: "suitcase",
    title: "Inter-province Moving or Luggage Delivery",
    summary: "Moving across Canada? We deliver your luggage and belongings between provinces.",
    body: [
      "Relocating to another province or travelling with more than you can carry? We arrange inter-province moving and luggage delivery so your belongings arrive safely at your new address.",
    ],
    points: ["Province-to-province moves", "Luggage & personal belongings", "Students & families"],
    image: img("1519003722824-194d4455a60c", 1200),
  },
  {
    slug: "driver-rental",
    icon: "truck",
    title: "Moving Help or Driver Rental",
    summary: "Extra hands or a professional driver when you need them.",
    body: [
      "Need help on moving day or a driver for your vehicle? Our moving help and driver rental service provides reliable support for local moves, deliveries and transport jobs.",
    ],
    points: ["Moving assistance", "Professional drivers", "Local jobs & deliveries"],
    image: img("1601584115197-04ecc0da31d7", 1200),
  },
];

export const about = {
  opening: [
    "U-Ship Solutions was born out of a desire to create a modern, fast and secure shipping center where businesses and individuals can transport anything anywhere around the world seamlessly.",
    "This company was established on the principles of efficient customer service and we are committed to fast, effective, and sustainable delivery of your domestic and international shipments. Our dedication to the satisfaction of our customers sets us apart from the rest.",
  ],
  mission:
    "To provide an excellent all-in-one shipping service that will help companies around the world succeed in the ever-changing economic and political climate.",
  vision:
    "We strive to implement innovative shipping solutions that reduce stress while increasing the productivity of our customers so that they can meet the demands of their consumers worldwide.",
  team:
    "Our team of experts offers accessible expertise — breaking down intricate logistics concepts and tailoring solutions to meet each customer's specific needs.",
  image: img("1600880292203-757bb62b4baf", 1400),
  // TODO: set to null if the client does not approve the COO quote / name.
  leaderQuote: null as null | { quote: string; name: string; role: string },
  // TODO: only show the "100% On-Time Delivery Record" claim if the client confirms it.
  showOnTimeClaim: false,
};

/**
 * Shipping form configuration.
 * If the client's supplied form is a third-party embed (Google Forms, JotForm,
 * Typeform…), paste its embed URL here and it will be rendered in place of the
 * built-in form. Leave empty to use the native form in components/ShippingForm.tsx.
 */
export const shippingForm = {
  embedUrl: "",
  embedHeight: 1400,
};
