import Image from 'next/image';
import Link from 'next/link';
// Import ikon dari react-icons
import { SiPython, SiGo, SiJavascript, SiMysql, SiHtml5 } from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
// Array data sosial media (Sama seperti sebelumnya)
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/BagusNugrohoEkoPrasetyo',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bagus-nugroho-eko-prasetyo-9b481233b/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mr.goooooood/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6285899978355',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    )
  }
];

// Array data skill dengan ikon asli
const skills = [
  { name: 'Python', icon: <SiPython className="text-blue-500 text-lg" /> },
  { name: 'Go (Golang)', icon: <SiGo className="text-cyan-400 text-lg" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-lg" /> },
  { name: 'Java', icon: <FaJava className="text-red-500 text-lg" /> },
  { name: 'SQL', icon: <SiMysql className="text-blue-600 text-lg" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 text-lg" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-lg" /> },
];

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-stone-100 text-stone-700 font-sans py-10 px-4"
      style={{
        backgroundImage: 'linear-gradient(#e7e5e4 1px, transparent 1px), linear-gradient(90deg, #e7e5e4 1px, transparent 1px)',
        backgroundSize: '25px 25px'
      }}
    >
      
      {/* Wrapper Konten Utama */}
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================== */}
        <section className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
          
          <div className="flex justify-start">
            <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-amber-50 shadow-md">
              <Image
                src="/profile.jpeg"
                alt="Bagus Nugroho Eko Prasetyo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Bagus Nugroho Eko Prasetyo
            </h1>
            <p className="mt-2 text-sm font-mono text-amber-600 tracking-wide uppercase">
              {"< Web Developer & AI Enthusiast />"}
            </p>
          </div>

          <p className="text-stone-500 leading-relaxed max-w-lg">
            Mahasiswa Informatika yang fokus pada pengembangan web dan database. 
            Suka memecahkan masalah teknis dan membangun sistem yang fungsional.
          </p>

          <div className="flex flex-col gap-4">
            <a 
              href="/CV_Bagus.pdf" 
              download 
              className="w-fit px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-amber-600 hover:scale-105 transition-all duration-300 text-sm shadow-sm"
            >
              Download Resume
            </a>

            <div className="flex flex-wrap gap-2 text-sm font-medium text-stone-500">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 hover:border-stone-900 hover:bg-stone-50 hover:text-stone-900 transition-all"
                >
                  {social.icon}
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. PROFILE & SKILLS SECTION */}
        {/* ========================================== */}
        <section className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col gap-4">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-400">
            // Tentang Saya
          </h2>
          
          <p className="text-stone-600 leading-relaxed">
            Mahasiswa Informatika di Universitas Gunadarma yang memiliki minat mendalam pada pengembangan web dan database. 
            Terbiasa menggunakan Bahasa pemrograman Python, Java, Golang, dan MySQL melalui berbagai proyek akademik. 
            Memiliki keahlian dalam memecahkan masalah secara analitis dan siap berkontribusi secara profesional di bidang pengembangan web dan database.
          </p>

          {/* List Skill dengan Ikon */}
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-2 px-3 py-2 text-sm font-medium border border-stone-200 bg-stone-50 rounded-lg text-stone-700 hover:border-amber-400 hover:bg-amber-50 transition-all cursor-default">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. PROJECTS SECTION */}
        {/* ========================================== */}
        <section className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-400">
            // Portofolio Project
          </h2>

          <div className="flex flex-col gap-4">
            <Link href="https://github.com/BagusNugrohoEkoPrasetyo/KasirKu" target="_blank" className="block bg-stone-50 border border-stone-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-md hover:bg-white transition-all duration-300 group">
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                  Kasirku (Point of Sale) Full-Stack Web
                </h3>
                <span className="text-stone-300 group-hover:text-amber-600 transition-colors text-lg shrink-0">↗</span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">
                Sebuah aplikasi kasir (POS) berbasis web yang dibangun secara full-stack untuk mengelola transaksi penjualan, inventori, dan laporan keuangan.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Flask', 'SQLite', 'JavaScript', 'Bootstrap 5', 'RESTful API'].map((tech) => (
                  <span key={tech} className="text-xs font-mono text-stone-500 bg-stone-200/50 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. PENGALAMAN SECTION */}
        {/* ========================================== */}
        <section className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-400">
            // Pengalaman
          </h2>

          <div className="border-l-2 border-amber-100 pl-6 flex flex-col gap-2 relative">
            <div className="absolute -left-[7px] top-1 w-3 h-3 bg-amber-400 rounded-full ring-4 ring-white"></div>
            
            <span className="text-xs text-stone-400 font-mono">
              Agustus 2026 - Sekarang
            </span>
            <h3 className="text-lg font-semibold text-stone-900">
              Asisten Kursus
            </h3>
            <p className="text-sm text-stone-500 italic mb-2">
              Lembaga Pengembangan Komputerisasi Universitas Gunadarma
            </p>
            <ul className="list-disc list-inside text-sm text-stone-600 space-y-1">
              <li>Membantu mahasiswa yang mengalami kendala teknis, error koding, atau kesulitan memahami materi selama sesi berjalan.</li>
              <li>Mengoreksi serta memberikan nilai pada tugas mingguan, post-test, live code, maupun ujian akhir kursus.</li>
            </ul>
          </div>
        </section>

        {/* ========================================== */}
        {/* 5. CONTACT FORM SECTION */}
        {/* ========================================== */}
        <section className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest text-stone-400">
            // Hubungi Saya
          </h2>
          
          {/* 
            Form ini pakai mailto: biar gampang tanpa backend.
            Pesan akan otomatis dibuka di aplikasi email pengirim.
          */}
          <form 
            action="mailto:www.bagusnugroho35@gmail.com" 
            method="POST" 
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700">Nama</label>
              <input 
                type="text" 
                name="Nama" 
                required 
                className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:border-amber-400 focus:bg-white transition-all" 
                placeholder="Nama lengkap Anda" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700">Email</label>
              <input 
                type="email" 
                name="Email" 
                required 
                className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:border-amber-400 focus:bg-white transition-all" 
                placeholder="Email Anda" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-stone-700">Pesan</label>
              <textarea 
                name="Pesan" 
                rows="4" 
                required 
                className="px-4 py-2 rounded-lg border border-stone-200 bg-stone-50 focus:outline-none focus:border-amber-400 focus:bg-white transition-all resize-none" 
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-stone-900 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors duration-200 text-sm"
            >
              Kirim Pesan
            </button>
          </form>
        </section>

        {/* ========================================== */}
        {/* 6. FOOTER */}
        {/* ========================================== */}
        <footer className="text-center pt-4">
          <p className="text-xs text-stone-400 font-mono">
            © {new Date().getFullYear()} Bagus Nugroho Eko Prasetyo
          </p>
        </footer>

      </div>
    </main>
  );
}