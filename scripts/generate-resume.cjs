const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 30, bottom: 25, left: 35, right: 35 },
  info: {
    Title: "Syed Muhammad Ali - Full Stack Developer",
    Author: "Syed Muhammad Ali",
  },
});

doc.pipe(fs.createWriteStream("public/SYED-MUHAMMAD-ALI.pdf"));

const primary = "#2563eb";
const gray = "#4b5563";
const black = "#111827";
const lightGray = "#9ca3af";
const m = 35;
const w = 525;

function text(txt, size, opts = {}) {
  const font = opts.bold ? "Helvetica-Bold" : "Helvetica";
  doc.fontSize(size).font(font).fillColor(opts.color || black);
  doc.text(txt, opts.x || m, opts.y || doc.y, { width: opts.w || w, lineGap: opts.lg || 0, align: opts.align || "left", continued: opts.continued || false });
  if (!opts.continued && !opts.noMove) doc.moveDown(opts.md || 0);
}

function line() {
  doc.rect(m, doc.y + 1, w, 1.2).fill(primary);
  doc.moveDown(0.3);
}

function sec(title) {
  text(title.toUpperCase(), 9, { bold: true, color: primary, md: 0.4 });
  line();
}

function bullet(txt) {
  const bulletY = doc.y;
  doc.fillColor(primary).fontSize(8.5).font("Helvetica").text("•", m, bulletY, { lineBreak: false });
  doc.fillColor(black).fontSize(8.5).font("Helvetica").text(" " + txt, m + 6, bulletY, { width: w - 6, lineGap: 1, align: "justify" });
  doc.moveDown(0.15);
}

function entry(title, subtitle, date) {
  text(title, 9, { bold: true, md: 0.2 });
  text(subtitle + "  |  " + date, 8, { color: primary, md: 0.15 });
}

function labelValue(label, value) {
  text(label + " ", 8.5, { bold: true, continued: true });
  text(value, 8.5, { color: gray, noMove: true });
  doc.moveDown(0.1);
}

// ─── HEADER ───
text("SYED MUHAMMAD ALI", 18, { bold: true, color: primary, align: "center", md: 0.2 });
text("Full Stack Developer | MERN & PERN Stack | React Native | Mobile Apps", 9.5, { color: gray, align: "center", md: 0.1 });
text("Karachi, Pakistan | syeadmuhammedalimazhar@gmail.com | +92 3190586822", 7.5, { color: lightGray, align: "center", md: 0 });
text("github.com/syedmuhammadali-dev | linkedin.com/in/syed-muhammed-ali", 7.5, { color: lightGray, align: "center", md: 0.3 });

// ─── SUMMARY ───
sec("PROFESSIONAL SUMMARY");
text(
  "Full Stack & Mobile App Developer with 9 months of experience building and publishing 3 React Native " +
  "apps on Google Play Store. Proficient in MERN/PERN stacks, React Native, Expo, Next.js, TypeScript, " +
  "and Firebase. Strong manual coding fundamentals (2+ years) complemented by AI-powered tools. Built " +
  "enterprise ERP systems, AI-powered clinic management, real-time tracking apps, and multi-role platforms.",
  8.5, { lg: 2, align: "justify", md: 0.2 }
);

// ─── SKILLS ───
sec("TECHNICAL SKILLS");
labelValue("Frontend:", "React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Redux Toolkit, Zustand, React Query");
labelValue("UI:", "Tailwind CSS, Material UI, Mantine UI, Shadcn/ui, Ant Design, Bootstrap, Framer Motion, Figma");
labelValue("Backend:", "Node.js, Express.js, REST API, Socket.io, Firebase, MongoDB, PostgreSQL, Mongoose");
labelValue("Mobile:", "React Native CLI, Expo, Android Studio, Google Play Console, Push Notifications, Google Maps, Background Geolocation");
labelValue("AI & Tools:", "OpenAI, Google Gemini, Cursor, GitHub Copilot, Claude, ChatGPT, Git & GitHub, VS Code, Postman, Vercel, i18n");

// ─── EXPERIENCE ───
sec("EXPERIENCE");
entry("Full Stack & Mobile App Developer", "AppMash — Karachi", "9 Months (2025 - 2026)");
const bullets = [
  "Published 3 React Native apps on Google Play Store (Customer, Restaurant Partner, Driver) with Kanban boards, push notifications, phone auth, and i18n (EN/HE/AR)",
  "Built enterprise apps using MERN/PERN stacks: Barakah ERP (inventory/billing/HR), AI Clinic (role-based dashboards, Gemini AI prescriptions), Helplytics (AI helpdesk)",
  "Built SafeCircle PK: family GPS safety app with real-time location sharing, geofencing, SOS alerts, background geolocation, Firebase, bilingual UI",
  "Built PatternIntel: AI-powered health analyzer using OpenAI GPT-4o-mini for pattern detection, timeline insights, and confidence scoring",
  "Integrated payment gateways (Yaad, Stripe), PDF generation, Google Maps, Socket.io chat, FCM notifications, and multilingual support (EN/UR/HE/AR)",
  "Managed full app lifecycle on Google Play Console — publishing, versioning, store listing optimization",
];
for (const b of bullets) { bullet(b); }

// ─── KEY PROJECTS ───
doc.moveDown(0.2);
sec("KEY PROJECTS");
const projects = [
  ["RoadHelper — Multi-Role App Suite", "3 published Google Play apps. React Native, Firebase, Kanban, i18n, push notifications, phone auth."],
  ["SafeCircle PK — Family Safety App", "GPS sharing, geofencing, SOS, background location. Firebase Auth/Firestore, Zustand, bilingual."],
  ["PatternIntel — AI Health Analyzer", "AI pattern detection (OpenAI GPT-4o-mini). Cause/symptom logging, timeline, confidence scoring. React Native."],
  ["Barakah — ERP Platform", "Full-stack ERP: inventory, billing, HR, analytics. Next.js, Node.js, MongoDB, Redux Toolkit, Tailwind."],
  ["AI Clinic Management System", "Healthcare with AI prescriptions (Gemini). Role-based dashboards. Next.js, Firebase, Redux Toolkit."],
  ["CoreStock — Admin & User Panels", "Enterprise inventory with admin dashboard + user-facing stock tracking. Next.js, TypeScript, Mantine UI, Redux."],
  ["Helplytics — Helpdesk & Analytics", "AI helpdesk with tickets, leaderboards, notifications. Next.js 16, React 19, Redux Toolkit, Framer Motion."],
  ["AppMash — SaaS Platform", "Modern SaaS UI with responsive layouts. Next.js, TypeScript, Tailwind CSS."],
  ["T3ALL — Restaurant Web App", "Restaurant website with interactive UI. React.js, Tailwind CSS, JavaScript."],
];
for (const [name, desc] of projects) {
  text("• " + name + ": ", 8.5, { bold: true, continued: true });
  text(desc, 8.5, { color: gray, noMove: true });
  doc.moveDown(0.05);
}

// ─── EDUCATION & CERTIFICATIONS ───
doc.moveDown(0.1);
sec("EDUCATION & CERTIFICATIONS");
text("ADP Software Engineering — Ilma University (2025-Present)  |  Intermediate (Pre-Eng) — Govt Degree College (2022-2024)  |  Matric (CS) — Kamran Public School", 8, { lg: 2, md: 0.1 });
text("1st Position — Saylani Mass IT 2026 (#1/20,000+) | MERN Stack Dev — Saylani SMIT | Frontend Dev — Farooq-e-Azam", 8, { lg: 1, md: 0 });
text("Cisco: JS Essentials, CSS Essentials, HTML Essentials, Intro to Modern AI | PMI: Agile & Predictive PM", 8, { lg: 1, md: 0 });

doc.end();

console.log("1-page ATS-friendly resume generated!");
