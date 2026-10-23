/**
 * All editable Arch Studios content lives here.
 * Update text, images, services, projects, team, clients and testimonials
 * in this file — the components render whatever is listed.
 *
 * Items marked TODO need client confirmation before launch.
 */

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const site = {
  name: "Arch Studios",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://archstudios.vercel.app",
  title: "Arch Studios | Photography, Videography & Creative Direction",
  description:
    "Arch Studios is a creative production studio for photography, videography, brand shoots, social content, events and creative direction. Strategy, shooting, editing and delivery under one roof.",
  keywords: [
    "Arch Studios",
    "creative studio",
    "photography",
    "videography",
    "brand shoots",
    "social media content",
    "event coverage",
    "product photography",
    "reels editing",
    "creative direction",
  ],
  // TODO: confirm contact details with Arch Studios
  email: "hello@archstudios.com",
  phone: "+1 (234) 567-890",
  phoneHref: "tel:+1234567890",
  location: "Studio location: by appointment",
  hours: "Mon – Sat, 9:00 – 19:00",
  socials: [
    { label: "Instagram", href: "https://instagram.com/archstudios" },
    { label: "LinkedIn", href: "https://linkedin.com/company/archstudios" },
    { label: "Facebook", href: "https://facebook.com/archstudios" },
    { label: "X / Twitter", href: "https://twitter.com/archstudios" },
  ],
};

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Photography · Film · Creative Direction",
  lines: ["A Creative", "Production", "Studio"],
  body: "We turn brands into stories worth watching — from the first idea to the final frame.",
  primary: { label: "Start Your Project", href: "/#contact" },
  secondary: { label: "View Our Work", href: "/#projects" },
  image: img("1485846234645-a62644f84728", 2200),
  // Optional: drop an MP4 into /public (e.g. /media/showreel.mp4) to play a looping hero reel.
  video: "",
  ticker: ["Photography", "Videography", "Brand Shoots", "Social Content", "Event Coverage", "Product Content", "Reels & Editing", "Creative Direction"],
};

export const about = {
  kicker: "About Arch Studios",
  heading: "We craft visuals that move people — and move brands forward.",
  body: [
    "Arch Studios is a creative production studio built for brands that want to be seen properly. We combine strategy, photography, film and editing into one streamlined process, so every frame we deliver has a purpose.",
    "Every project starts with understanding your audience and goals. From there we plan the creative, direct the shoot, edit with care and deliver ready-to-publish assets for web, social and campaigns.",
  ],
  cta: { label: "View our work", href: "/#projects" },
  process: [
    { step: "01", title: "Strategy", text: "We define the story, audience and outcome before a camera comes out." },
    { step: "02", title: "Shooting", text: "Directed photo and video production with a crew sized for the job." },
    { step: "03", title: "Editing", text: "Colour, sound, motion and retouching that keep your brand consistent." },
    { step: "04", title: "Delivery", text: "Assets cut and formatted for every channel, on schedule." },
  ],
  media: [
    { src: img("1492691527719-9d1e07e534b4", 1000), alt: "Photographer framing a shot on set" },
    { src: img("1574717024653-61fd2cf4d44d", 900), alt: "Editor colour grading footage in the studio" },
    { src: img("1516035069371-29a1b244cc32", 900), alt: "Close-up of a cinema camera lens" },
  ],
};

export const values = [
  { icon: "spark", title: "Personalized Content", text: "Every concept is built around your brand, your audience and your goals — never a template." },
  { icon: "diamond", title: "Premium Execution", text: "Cinema-grade gear, experienced crews and meticulous post-production on every job." },
  { icon: "compass", title: "Strategy-First Storytelling", text: "We plan what the content needs to achieve, then design the story to get there." },
  { icon: "bolt", title: "Quick Turnaround", text: "Clear timelines and fast edits so your content goes live while it still matters." },
];

export const services = [
  { icon: "camera", title: "Photography", text: "Editorial, lifestyle and commercial photography with a distinct, polished look." },
  { icon: "video", title: "Videography", text: "Brand films, interviews and campaign videos shot and directed end to end." },
  { icon: "aperture", title: "Brand Shoots", text: "Cohesive photo and video libraries that define how your brand looks everywhere." },
  { icon: "phone", title: "Social Media Content", text: "Scroll-stopping, platform-native content planned in batches for consistency." },
  { icon: "ticket", title: "Event Coverage", text: "Launches, conferences and private events captured with same-day highlight options." },
  { icon: "box", title: "Product Content", text: "Clean studio and styled product imagery for e-commerce, ads and packaging." },
  { icon: "film", title: "Reels & Editing", text: "Fast-paced reels, cut-downs and edits with motion graphics, captions and sound." },
  { icon: "compass", title: "Creative Direction", text: "Concepts, moodboards, casting and art direction to keep every shoot on-brand." },
];

export const projects = [
  { title: "Brand Campaigns", count: "Featured category", image: img("1469334031218-e382a71b716b", 1400), size: "wide" },
  { title: "Restaurants & Cafés", count: "Food & hospitality", image: img("1517248135467-4c7edcad34c4", 1000), size: "tall" },
  { title: "Product Shoots", count: "Studio & styled", image: img("1523275335684-37898b6baf30", 1000), size: "normal" },
  { title: "Events", count: "Live coverage", image: img("1540575467063-178a50c2df87", 1000), size: "normal" },
  { title: "Lifestyle", count: "People & places", image: img("1515886657613-9f3515b0c78f", 1000), size: "tall" },
  { title: "Commercials", count: "Film & motion", image: img("1478720568477-152d9b164e26", 1400), size: "wide" },
] as const;

export const ctaBand = {
  heading: "Committed to turning your vision into frames that matter.",
  body: "Tell us what you're building. We'll come back with a creative approach, a timeline and a clear quote.",
  cta: { label: "Get a Quote", href: "/#contact" },
  image: img("1598899134739-24c46f58b8c0", 2000),
};

export const trust = [
  { icon: "compass", title: "Creative Direction", text: "One clear creative vision from concept through final delivery." },
  { icon: "book", title: "Storytelling", text: "Content with a beginning, middle and end — not just pretty pictures." },
  { icon: "check", title: "Reliable Delivery", text: "Agreed deadlines, organised files and no last-minute surprises." },
  { icon: "layers", title: "Visual Consistency", text: "A recognisable look across every platform, campaign and season." },
  { icon: "chat", title: "Fast Communication", text: "A dedicated point of contact and quick replies throughout." },
];

// TODO: replace placeholder team with Arch Studios team members and photos
export const team = [
  { name: "Team Member", role: "Founder & Creative Director", image: img("1507003211169-0a1dd7228f2d", 700) },
  { name: "Team Member", role: "Lead Cinematographer", image: img("1494790108377-be9c29b29330", 700) },
  { name: "Team Member", role: "Senior Editor & Colourist", image: img("1500648767791-00dcc994a43e", 700) },
  { name: "Team Member", role: "Producer", image: img("1438761681033-6461ffad8d80", 700) },
];

// TODO: replace with real client logos (SVG/PNG in /public/clients) once approved
export const clients = ["Client One", "Client Two", "Client Three", "Client Four", "Client Five", "Client Six", "Client Seven", "Client Eight"];

// TODO: placeholder testimonials for layout — replace with approved client reviews
export const testimonials = [
  { quote: "Arch Studios understood our brand from the first call. The campaign content looked premium and performed even better.", name: "Client Name", role: "Marketing Lead, Company" },
  { quote: "Organised, creative and fast. They planned the whole shoot, kept everyone on schedule and delivered ahead of time.", name: "Client Name", role: "Founder, Company" },
  { quote: "Our social content finally feels consistent. Every month we get a library of reels and photos we're proud to post.", name: "Client Name", role: "Owner, Restaurant" },
  { quote: "The event coverage was outstanding — highlights were ready the next morning and the full gallery soon after.", name: "Client Name", role: "Events Manager, Company" },
];

export const footer = {
  blurb: "A creative production studio for photography, film and creative direction. Strategy, shooting, editing and delivery — all under one roof.",
  columns: [
    { title: "Studio", links: nav },
    {
      title: "Services",
      links: services.slice(0, 6).map((s) => ({ label: s.title, href: "/#services" })),
    },
    {
      title: "Work",
      links: projects.map((p) => ({ label: p.title, href: "/#projects" })),
    },
  ],
};
