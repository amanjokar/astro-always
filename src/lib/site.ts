export type Lang = "hi" | "en";

export const WHATSAPP = "918360103610";
export const PHONE = "+91 83601 03610";

// Set at build time for GitHub Pages (served from /<repo>); empty locally.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => BASE + p;

// English lives at the root (the default for first-time visitors); Hindi under /hi.
export const langOf = (path: string): Lang => (path === "/hi" || path.startsWith("/hi/") ? "hi" : "en");
export const href = (lang: Lang, path: string) => (lang === "hi" ? (path === "/" ? "/hi" : "/hi" + path) : path);
// The same page in the other language.
export const swap = (path: string) => (langOf(path) === "hi" ? path.replace(/^\/hi/, "") || "/" : href("hi", path));

const WA_DEFAULT = {
  hi: "Namaste Neetu ji, mujhe Astro Always ke courses ke baare mein jaankari chahiye.",
  en: "Hello Neetu ji, I would like to know more about the Astro Always courses.",
};
export const wa = (text: string | Lang = "hi") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text === "hi" || text === "en" ? WA_DEFAULT[text] : text)}`;

export const NAV = [["/", "Home"], ["/services", "Courses"], ["/about", "About"], ["/contact", "Contact"]] as const;

export const LEGAL = [
  ["/privacy-policy", "Privacy Policy"],
  ["/refund-policy", "Refund Policy"],
] as const;

export const RASHI = [
  ["Mesh", "मेष"], ["Vrishabh", "वृषभ"], ["Mithun", "मिथुन"], ["Kark", "कर्क"], ["Simha", "सिंह"], ["Kanya", "कन्या"],
  ["Tula", "तुला"], ["Vrishchik", "वृश्चिक"], ["Dhanu", "धनु"], ["Makar", "मकर"], ["Kumbh", "कुम्भ"], ["Meen", "मीन"],
];

const COURSE_BASE = [
  { id: "praveshika", title: "Jyotish Praveshika", hindi: "ज्योतिष प्रवेशिका", fee: 4999, mrp: 7999 },
  { id: "vishleshan", title: "Kundali Vishleshan Masterclass", hindi: "कुण्डली विश्लेषण", fee: 11999, mrp: 17999, featured: true },
  { id: "ank-vastu", title: "Ank Jyotish + Vastu", hindi: "अंक ज्योतिष एवं वास्तु", fee: 6499, mrp: 9999 },
];

const COURSE_TEXT = {
  hi: [
    {
      level: "Shuruaat",
      weeks: "6 hafte · 24 live class",
      points: ["Grah, rashi aur 12 bhav ki neev", "Apni kundali khud padhna", "Har class ki recording", "Certificate"],
      syllabus: ["9 grah aur unke karak", "12 rashi ke swabhav", "12 bhav ka arth", "Kundali banana aur padhna", "Basic upay"],
    },
    {
      level: "Sabse zyada chuna gaya",
      weeks: "10 hafte · 40 live class",
      points: ["Dasha, gochar aur yog se phal kathan", "50+ asli kundaliyon par case study", "Neetu ji ke saath 1:1 session", "Lifetime doubt group"],
      syllabus: ["Vimshottari dasha", "Gochar (transit) ka asar", "Raj yog, dhan yog, dosh", "Vivah, career, swasthya ke yog", "Live case study"],
    },
    {
      level: "Vishesh",
      weeks: "4 hafte · 16 live class",
      points: ["Mulank, bhagyank aur naam ank", "Ghar aur dukaan ka Vastu", "Bina tod-phod ke upay", "Certificate"],
      syllabus: ["Mulank aur bhagyank", "Naam ank sudhaar", "Vastu ki 16 dishayein", "Ghar aur office Vastu", "Saral upay"],
    },
  ],
  en: [
    {
      level: "Beginner",
      weeks: "6 weeks · 24 live classes",
      points: ["Foundations of planets, signs and the 12 houses", "Read your own birth chart", "Recording of every class", "Certificate"],
      syllabus: ["The 9 planets and what they rule", "Nature of the 12 signs", "Meaning of the 12 houses", "Casting and reading a chart", "Basic remedies"],
    },
    {
      level: "Most popular",
      weeks: "10 weeks · 40 live classes",
      points: ["Predictions from dasha, transits and yogas", "Case studies on 50+ real charts", "1:1 session with Neetu ji", "Lifetime doubt group"],
      syllabus: ["Vimshottari dasha", "Effects of transits (gochar)", "Raj yoga, dhan yoga and doshas", "Yogas for marriage, career and health", "Live case studies"],
    },
    {
      level: "Specialist",
      weeks: "4 weeks · 16 live classes",
      points: ["Root number, destiny number and name number", "Vastu for home and shop", "Remedies without demolition", "Certificate"],
      syllabus: ["Root and destiny numbers", "Name number correction", "The 16 Vastu directions", "Home and office Vastu", "Simple remedies"],
    },
  ],
};

export const coursesFor = (lang: Lang) => COURSE_BASE.map((c, i) => ({ ...c, ...COURSE_TEXT[lang][i] }));
export type Course = ReturnType<typeof coursesFor>[number];
export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

// shortcut: demo reviews, replace with real student reviews before launch.
const PEOPLE = [
  ["Ritika M.", "Lucknow", "Jyotish Praveshika"],
  ["Sunita R.", "Jaipur", "Kundali Vishleshan"],
  ["Amit K.", "Pune", "Jyotish Praveshika"],
  ["Pooja S.", "Delhi", "Ank Jyotish + Vastu"],
  ["Vikram T.", "Indore", "Kundali Vishleshan"],
  ["Neha G.", "Chandigarh", "Jyotish Praveshika"],
  ["Rajesh P.", "Surat", "Ank Jyotish + Vastu"],
];
const QUOTES = {
  hi: [
    "Praveshika ke baad main apne ghar walon ki kundali khud padh leti hoon. Neetu ji har cheez itni saral bhasha mein samjhati hain.",
    "Masterclass ki case studies ne mera nazariya badal diya. Dasha ab mujhe darati nahi, samajh aati hai.",
    "Recording ki wajah se job ke saath bhi course poora ho gaya. Doubt group mein har sawaal ka jawab milta hai.",
    "Vastu ke upay itne saral the ki ghar mein bina tod-phod ke badlav kar paayi. Bahut kaam ka course.",
    "1:1 session mein Neetu ji ne meri kundali itne pyaar se samjhayi. Sach mein guru jaisi hain.",
    "Mujhe laga jyotish bahut kathin hoga, par pehli class se hi maza aane laga. Har hafte intezaar rehta tha.",
    "Ank jyotish se bachchon ke naam ki spelling theek ki. Samjhane ka tareeka bahut practical hai.",
  ],
  en: [
    "After Praveshika I can read my family's charts myself. Neetu ji explains everything in such simple language.",
    "The case studies in the Masterclass changed how I see things. Dasha no longer scares me, it makes sense.",
    "Thanks to the recordings I finished the course alongside my job. Every question gets answered in the doubt group.",
    "The Vastu remedies were so simple that I could make changes at home without any demolition. A very useful course.",
    "In the 1:1 session Neetu ji explained my chart so warmly. She truly is like a guru.",
    "I thought astrology would be very hard, but I enjoyed it from the first class. I looked forward to it every week.",
    "Numerology helped me fix the spelling of my children's names. Her way of teaching is very practical.",
  ],
};
export const testimonialsFor = (lang: Lang) => PEOPLE.map(([n, c, course], i) => ({ q: QUOTES[lang][i], n, c, course }));
