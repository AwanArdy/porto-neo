import { useState } from "react";
import { Menu, X, ArrowRight, Github, Linkedin, Mail, ExternalLink, Terminal } from "lucide-react";
import dockerIcon from "../assets/docker.svg";
import sqliteIcon from "../assets/sqlite.svg";
import angularIcon from "../assets/angular.svg";
import graphqlIcon from "../assets/graphql.svg";
import nestjsIcon from "../assets/nest.svg";
import pythonIcon from "../assets/python.svg";
import reactIcon from "../assets/react.svg";
import redisIcon from "../assets/redis.svg";
import nodejsIcon from "../assets/nodejs.svg";
import postgresqlIcon from "../assets/postgresql.svg";
import tailwindIcon from "../assets/tailwind.svg";
import typescriptIcon from "../assets/ts.svg";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    desc: "Full-stack marketplace dengan real-time inventory, payment via Midtrans, dan admin dashboard. Handle 10k+ transaksi harian.",
    tech: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    color: "#FFDD00",
  },
  {
    title: "Realtime Chat App",
    desc: "WebSocket-powered messaging dengan end-to-end encryption, file sharing, dan group channels. Melayani 5k MAU.",
    tech: ["Node.js", "Socket.io", "MongoDB", "React"],
    color: "#0038FF",
    dark: true,
  },
  {
    title: "Analytics Dashboard",
    desc: "BI tool dengan interactive charts, CSV export, dan automated reporting. Kurangi manual reporting sebesar 80%.",
    tech: ["React", "Python", "FastAPI", "Recharts"],
    color: "#FF3B00",
    dark: true,
  },
  {
    title: "REST API Gateway",
    desc: "Centralized API management dengan rate limiting, JWT auth, request logging, dan auto-generated OpenAPI docs.",
    tech: ["Express.js", "Prisma", "PostgreSQL", "Swagger"],
    color: "#B8FF3B",
  },
];

const SKILLS = [
  { name: "React", icon: <img src={reactIcon} alt="React" className="w-5 h-5" />, category: "Frontend" },
  { name: "TypeScript", icon: <img src={typescriptIcon} alt="TypeScript" className="w-5 h-5" />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <img src={tailwindIcon} alt="Tailwind CSS" className="w-5 h-5" />, category: "Frontend" },
  { name: "AngularJS", icon: <img src={angularIcon} alt="AngularJS" className="w-5 h-5" />, category: "Frontend" },
  { name: "Node.js", icon: <img src={nodejsIcon} alt="Node.js" className="w-5 h-5" />, category: "Backend" },
  { name: "Python / FastAPI", icon: <img src={pythonIcon} alt="Python" className="w-5 h-5" />, category: "Backend" },
  { name: "PostgreSQL", icon: <img src={postgresqlIcon} alt="PostgreSQL" className="w-5 h-5" />, category: "Backend" },
  { name: "SQLite", icon: <img src={sqliteIcon} alt="SQLite" className="w-5 h-5" />, category: "Backend" },
  { name: "Docker", icon: <img src={dockerIcon} alt="Docker" className="w-5 h-5" />, category: "DevOps" },
  { name: "NestJS", icon: <img src={nestjsIcon} alt="NestJS" className="w-5 h-5" />, category: "Backend" },
  { name: "Redis", icon: <img src={redisIcon} alt="Redis" className="w-5 h-5" />, category: "Backend" },
  { name: "GraphQL", icon: <img src={graphqlIcon} alt="GraphQL" className="w-5 h-5" />, category: "Backend" },
];

const EXPERIENCE = [
  {
    role: "Freelance Fullstack Developer",
    company: "Independent",
    period: "2026 — Now",
    desc: "Membangun sistem Headless CMS dengan modul autentikasi kustom dan integrasi Cloudinary untuk optimasi gambar. Mengembangkan arsitektur backend menggunakan Node.js, Express, TypeScript, dan raw SQLite.",
  },
  {
    role: "Freelance Frontend Engineer",
    company: "Independent",
    period: "2025 — 2026",
    desc: "Mengembangkan antarmuka marketplace merchandise berkinerja tinggi dengan Vite, TypeScript, dan Zustand. Mengimplementasikan live search, filter produk kompleks, dan simulasi payment gateway.",
  },
  {
    role: "Freelance Software Developer",
    company: "Independent",
    period: "2025",
    desc: "Merancang dan membangun aplikasi Terminal User Interface (TUI) menggunakan library Ink dan TypeScript untuk memparsing serta memvisualisasikan data JSON smartctl secara real-time.",
  },
];

const MARQUEE_ITEMS = ["React", "Node.js", "PostgreSQL", "Docker", "TypeScript", "Python", "AngularJS", "SQLite", "GraphQL", "Redis", "FastAPI"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFEF0] text-black overflow-x-hidden" style={{ fontFamily: "'Courier Prime', monospace" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFEF0] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Archivo Black', sans-serif" }}>AA.</span>
          <ul className="hidden md:flex gap-0">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="px-5 py-5 block font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-[#FFDD00] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:muhammadawan46@gmail.com"
            className="hidden md:block px-5 py-2 bg-[#FFDD00] border-2 border-black font-bold text-xs uppercase tracking-wider shadow-[4px_4px_0_#000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            Hire Me
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden border-2 border-black p-2 hover:bg-black hover:text-[#FFDD00] transition-colors">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t-4 border-black bg-[#FFFEF0]">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b-2 border-black font-bold uppercase tracking-widest hover:bg-[#FFDD00] transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex items-center border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-block bg-[#FF3B00] border-2 border-black px-3 py-1 text-white font-bold text-xs uppercase tracking-widest mb-8 shadow-[3px_3px_0_#000]">
              ● Available for Work
            </div>
            <h1
              className="text-7xl md:text-9xl font-black leading-none tracking-tight uppercase mb-6"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Awan
              <br />
              <span style={{ WebkitTextStroke: "2px black", color: "transparent" }}>Ardy</span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-black flex-shrink-0" />
              <p className="font-bold text-sm uppercase tracking-widest text-[#0038FF]">Fullstack Web Developer</p>
            </div>
            <p className="text-base leading-relaxed max-w-md mb-10 border-l-4 border-[#FFDD00] pl-4">
              Saya membangun produk digital yang cepat, skalabel, dan bermakna. Dari database hingga UI — saya handle semuanya.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-[#FFDD00] font-bold uppercase tracking-wider border-2 border-black shadow-[6px_6px_0_#FFDD00] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center gap-2 text-sm"
              >
                Lihat Proyek <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-[#FFFEF0] text-black font-bold uppercase tracking-wider border-2 border-black shadow-[6px_6px_0_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all text-sm"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="flex gap-3 mt-10">
              <a href="https://github.com/AwanArdy" className="border-2 border-black p-3 hover:bg-black hover:text-[#FFDD00] transition-colors">
                <Github size={18} />
              </a>

              <a href="mailto:muhammadawan46@gmail.com" className="border-2 border-black p-3 hover:bg-[#FF3B00] hover:text-white hover:border-[#FF3B00] transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 md:w-[380px]">
              <div className="border-4 border-black bg-black p-10 shadow-[14px_14px_0_#FFDD00]">
                <div className="text-[#FFDD00] font-black uppercase tracking-widest text-xs mb-6">// about me</div>
                {[
                  { label: "Name", value: "Muhammad Awan Ardy Firmansyah" },
                  { label: "Role", value: "Fullstack Dev" },
                  { label: "Location", value: "Palu, ID" },
                  { label: "Experience", value: "2+ Years" },
                  { label: "Status", value: "Open to Work" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-white/10 py-3 last:border-0">
                    <span className="text-white/40 text-xs uppercase tracking-widest font-bold">{item.label}</span>
                    <span className="text-white font-bold text-xs uppercase tracking-widest">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#FF3B00] border-2 border-black px-5 py-3">
                <span className="text-white font-black text-sm tracking-widest">PALU 🇮🇩</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <div className="bg-black py-4 border-b-4 border-black overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((t, i) => (
            <span key={i} className="text-[#FFDD00] font-black text-sm uppercase tracking-widest flex-shrink-0">
              ★ {t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:border-r-4 border-black pr-0 lg:pr-16 pb-12 lg:pb-0 mb-12 lg:mb-0">
            <Tag color="#FFDD00">About</Tag>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight uppercase mt-6"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Saya Awan,<br />Dev yang<br />Suka<br />Tantangan.
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pl-16 flex flex-col justify-center gap-8">
            <p className="text-base leading-relaxed">
              Dengan pengalaman lebih dari <strong>2 tahun</strong> membangun aplikasi web dari nol hingga production, saya spesialis dalam arsitektur fullstack yang bersih, scalable, dan maintainable. Terbiasa bekerja di startup hingga enterprise, deliver fitur cepat tanpa mengorbankan kualitas.
            </p>
              {/*            <div className="grid grid-cols-3 gap-0 border-4 border-black">
              {[
                { num: "20+", label: "Proyek Selesai" },
                { num: "1K+", label: "User Dilayani" },
                { num: "12", label: "OS Kontribusi" },
              ].map((stat, i) => (
                <div key={i} className={`p-6 text-center ${i < 2 ? "border-r-4 border-black" : ""}`}>
                  <div className="text-4xl font-black text-[#FF3B00]" style={{ fontFamily: "'Archivo Black', sans-serif" }}>{stat.num}</div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-2 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b-4 border-black bg-[#05E17A]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-start justify-between mb-12">
            <div>
              <div className="bg-black border-2 border-black inline-block px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[3px_3px_0_rgba(0,0,0,0.3)] text-white">
                Skills
              </div>
              <h2
                className="text-4xl md:text-5xl font-black leading-tight uppercase text-black"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Tech Stack
              </h2>
            </div>
            <Terminal size={52} className="text-black hidden md:block mt-2" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-2 border-black/80">
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="border border-black/50 p-5 flex items-center gap-3 hover:bg-[#FFDD00] hover:text-black group transition-colors cursor-default"
              >
                 <span className="font-black text-lg text-black group-hover:text-black w-7 text-center flex-shrink-0">{skill.icon}</span>
                 <div>
                  <div className="font-bold text-black group-hover:text-black text-sm leading-tight">{skill.name}</div>
                  <div className="text-black/80 group-hover:text-black/50 text-xs uppercase tracking-widest mt-0.5">{skill.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <Tag color="#FF3B00" textColor="white">Work</Tag>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight uppercase mt-6"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Proyek Pilihan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="border-4 border-black p-7 shadow-[8px_8px_0_#000] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all group cursor-pointer"
                style={{ backgroundColor: project.color }}
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="font-black text-xs uppercase tracking-widest bg-black text-white px-2 py-1">
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                  <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3
                  className="font-black text-2xl uppercase mb-3"
                  style={{ fontFamily: "'Archivo Black', sans-serif", color: project.dark ? "#FFFEF0" : "#000" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: project.dark ? "rgba(255,254,240,0.85)" : "#000" }}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-bold uppercase tracking-widest"
                      style={{ background: project.dark ? "rgba(255,254,240,0.15)" : "#000", color: project.dark ? "#FFFEF0" : "#FFDD00", border: `1px solid ${project.dark ? "rgba(255,254,240,0.3)" : "#000"}` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#FFDD00] font-bold uppercase tracking-wider border-2 border-black shadow-[6px_6px_0_#FFDD00] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all text-sm"
            >
              Lihat Semua di GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b-4 border-black bg-[#B8FF3B]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:border-r-4 border-black pr-0 lg:pr-16 pb-12 lg:pb-0 mb-12 lg:mb-0">
            <Tag color="#000" textColor="#B8FF3B">Experience</Tag>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight uppercase mt-6"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              Riwayat<br />Kerja
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pl-16">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className={`pb-10 ${i < EXPERIENCE.length - 1 ? "border-b-2 border-black mb-10" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="font-black text-xl uppercase" style={{ fontFamily: "'Archivo Black', sans-serif" }}>{exp.role}</div>
                    <div className="font-bold text-[#0038FF] mt-0.5">{exp.company}</div>
                  </div>
                  <span className="bg-black text-[#FFDD00] px-3 py-1 text-xs font-black uppercase tracking-widest flex-shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-b-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="bg-[#FFDD00] border-2 border-[#FFDD00] inline-block px-3 py-1 text-xs font-black uppercase tracking-widest text-black mb-6">
                Contact
              </div>
              <h2
                className="text-5xl md:text-6xl font-black leading-tight uppercase mb-6"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                Punya<br />Proyek?<br />
                <span className="text-[#FFDD00]">Ngobrol<br />Yuk.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10 text-sm">
                Terbuka untuk project freelance, kolaborasi, atau full-time opportunity. Balas dalam 24 jam.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Mail size={18} />, label: "muhammadawan46@gmail.com", hover: "#FFDD00" },
                  { icon: <Github size={18} />, label: "github.com/AwanArdy", hover: "#FFDD00" },
                ].map((item, i) => (
                  <a key={i} href="#" className="flex items-center gap-4 group">
                    <div className="border-2 border-white/30 p-2 group-hover:bg-[#FFDD00] group-hover:border-[#FFDD00] group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm group-hover:text-[#FFDD00] transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="border-2 border-white/60 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FFDD00] border-t-4 border-black py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="text-2xl font-black" style={{ fontFamily: "'Archivo Black', sans-serif" }}>AA.</span>
          <span className="font-bold text-xs uppercase tracking-widest">© 2026 Awan Ardy — All Rights Reserved</span>
          <span className="font-bold text-xs uppercase tracking-widest">Built with React + TypeScript</span>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #FFFEF0; }
        ::-webkit-scrollbar-thumb { background: #000; }
      `}</style>
    </div>
  );
}

function Tag({ children, color = "#FFDD00", textColor = "#000" }: { children: React.ReactNode; color?: string; textColor?: string }) {
  return (
    <div
      className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-black shadow-[3px_3px_0_rgba(0,0,0,0.25)]"
      style={{ backgroundColor: color, color: textColor }}
    >
      {children}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-14">
        <div className="text-6xl mb-6 text-[#FFDD00]">✓</div>
        <h3 className="font-black text-2xl uppercase text-[#FFDD00] mb-3" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
          Pesan Terkirim!
        </h3>
        <p className="text-white/60 text-sm">Saya akan segera menghubungi Anda.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-bold text-xs uppercase tracking-widest mb-2 text-white/60">Nama</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-transparent border-2 border-white/60 focus:border-[#FFDD00] px-4 py-3 text-white font-bold outline-none transition-colors placeholder:text-white/40 text-sm"
          placeholder="Nama Anda"
        />
      </div>
      <div>
        <label className="block font-bold text-xs uppercase tracking-widest mb-2 text-white/60">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-transparent border-2 border-white/60 focus:border-[#FFDD00] px-4 py-3 text-white font-bold outline-none transition-colors placeholder:text-white/40 text-sm"
          placeholder="email@anda.com"
        />
      </div>
      <div>
        <label className="block font-bold text-xs uppercase tracking-widest mb-2 text-white/60">Pesan</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-transparent border-2 border-white/60 focus:border-[#FFDD00] px-4 py-3 text-white font-bold outline-none transition-colors resize-none placeholder:text-white/40 text-sm"
          placeholder="Ceritakan proyek Anda..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-[#FFDD00] text-black font-black uppercase tracking-wider border-2 border-[#FFDD00] shadow-[5px_5px_0_rgba(255,221,0,0.3)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all text-sm"
        style={{ fontFamily: "'Archivo Black', sans-serif" }}
      >
        Kirim Pesan →
      </button>
    </form>
  );
}
