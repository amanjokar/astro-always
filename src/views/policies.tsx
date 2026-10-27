import { Legal } from "@/components/legal";
import { PHONE, type Lang } from "@/lib/site";

// shortcut: draft policy text for the demo, have it reviewed by a lawyer before launch.
const PRIVACY: Record<Lang, [string, string[]][]> = {
  hi: [
    ["Hum kaun hain", ["Astro Always (Neetu Arora) Vedic Jyotish ke online courses chalata hai. Ye policy batati hai ki hum aapki jaankari kaise lete, rakhte aur use karte hain."]],
    ["Hum kaunsi jaankari lete hain", [
      "Naam, mobile/WhatsApp number, email aur shehar, jab aap enroll karte hain ya humse sampark karte hain.",
      "Payment ki jaankari hamare payment partner (jaise Razorpay) ke paas surakshit rehti hai. Hum aapke card ya UPI PIN jaisi jaankari kabhi save nahi karte.",
    ]],
    ["Jaankari ka use", ["Aapko course, batch aur class ki jaankari dene ke liye.", "WhatsApp group mein jodne aur zaroori updates bhejne ke liye.", "Payment ki pushti aur bill ke liye."]],
    ["WhatsApp aur messages", ["Hum aapko WhatsApp par sirf course se judi jaankari bhejte hain. Aap kabhi bhi STOP likh kar promotional messages band kar sakte hain."]],
    ["Jaankari kisse share hoti hai", ["Hum aapki jaankari bechte nahi hain. Sirf zaroori service partners (payment, WhatsApp, hosting) ke saath, utni hi jitni service ke liye zaroori ho."]],
    ["Cookies", ["Website theek se chalane aur use behtar banane ke liye hum basic cookies ka use kar sakte hain."]],
    ["Aapke adhikaar", ["Digital Personal Data Protection Act, 2023 ke tahat aap apni jaankari dekhne, sudharne ya hatwane ke liye humse kabhi bhi keh sakte hain."]],
    ["Sampark", [`Privacy se juda koi bhi sawaal WhatsApp par bhejein: ${PHONE}.`]],
  ],
  en: [
    ["Who we are", ["Astro Always (Neetu Arora) runs online courses in Vedic Astrology. This policy explains how we collect, store and use your information."]],
    ["What we collect", [
      "Your name, mobile/WhatsApp number, email and city when you enroll or contact us.",
      "Payment details stay with our payment partner (such as Razorpay). We never store your card details or UPI PIN.",
    ]],
    ["How we use it", ["To share course, batch and class information.", "To add you to the WhatsApp group and send important updates.", "To confirm payments and issue receipts."]],
    ["WhatsApp and messages", ["We only send course-related information on WhatsApp. You can reply STOP at any time to stop promotional messages."]],
    ["Who we share it with", ["We never sell your information. We share it only with essential service partners (payments, WhatsApp, hosting), and only as much as the service needs."]],
    ["Cookies", ["We may use basic cookies to run the website and improve it."]],
    ["Your rights", ["Under the Digital Personal Data Protection Act, 2023, you can ask us at any time to view, correct or delete your information."]],
    ["Contact", [`Send any privacy question on WhatsApp: ${PHONE}.`]],
  ],
};

const REFUND: Record<Lang, [string, string[]][]> = {
  hi: [
    ["Batch shuru hone se pehle", ["Batch shuru hone se 48 ghante pehle tak cancel karne par poori fees wapas milegi."]],
    ["Pehli 2 class ke baad", ["Agar pehli 2 class ke baad course aapke liye sahi nahi laga, to 7 din ke andar bataiye. 50% fees wapas di jayegi."]],
    ["Iske baad", ["2 class aur 7 din ke baad refund nahi hota. Aap chahein to agle batch mein shift ho sakte hain (ek baar)."]],
    ["Refund kaise maangein", [`WhatsApp par ${PHONE} par apna naam, course aur payment ka screenshot bhejiye.`]],
    ["Refund kab aayega", ["Manzoori ke baad 5–7 working days mein usi tareeke se paisa wapas aayega jisse payment hua tha."]],
    ["Dhyan dein", ["Jyotish margdarshan hai, kisi parinaam ki guarantee nahi. Isliye 'parinaam na milne' ke aadhaar par refund nahi hota."]],
  ],
  en: [
    ["Before the batch starts", ["Cancel up to 48 hours before the batch starts for a full refund."]],
    ["After the first 2 classes", ["If the course does not suit you after the first 2 classes, tell us within 7 days for a 50% refund."]],
    ["After that", ["No refunds after 2 classes and 7 days. You may move to the next batch once, if you wish."]],
    ["How to request a refund", [`Send your name, course and a payment screenshot on WhatsApp to ${PHONE}.`]],
    ["When you get it", ["Once approved, the money is returned within 5–7 working days to the same payment method."]],
    ["Please note", ["Astrology is guidance, not a guarantee of any outcome. Refunds are not given on the grounds of 'results not achieved'."]],
  ],
};

export const Privacy = ({ lang }: { lang: Lang }) => (
  <Legal title="Privacy Policy" updated="25 Oct 2026" sections={PRIVACY[lang]} />
);
export const Refund = ({ lang }: { lang: Lang }) => <Legal title="Refund Policy" updated="25 Oct 2026" sections={REFUND[lang]} />;
