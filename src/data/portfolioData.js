export const portfolioData = {
  personal: {
    name: "Muhammad Rezky Julian",
    firstName: "Muhammad Rezky",
    lastName: "Julian",
    eyebrow: "Hello, I'm",
    heroHeadingPrefix: "Turning Ideas",
    heroHeadingSuffix: "Into Reality",
    roles: [
      "Web Developer",
      "Frontend Developer",
      "Full-Stack Developer",
      "Cybersecurity Enthusiast"
    ],
    tagline: "Saya membangun website dan aplikasi digital yang modern, cepat, dan memiliki user experience yang luar biasa.",
    subDescription: "Dimulai dari rasa penasaran, berkembang menjadi passion. Aku membangun pengalaman digital yang tidak hanya terlihat bagus, tapi juga terasa bermakna bagi penggunanya.",
    aboutBio: "Sebagai pelajar dengan jurusan Rekayasa Perangkat Lunak, aku berfokus pada pengembangan teknologi yang tidak hanya fungsional, tetapi juga menghadirkan pengalaman digital yang modern, responsif, dan berdampak.",
    location: "Cimahi, Jawa Barat, Indonesia",
    university: "SMK Wiraswasta Cimahi",
    faculty: "Rekayasa Perangkat Lunak",
    department: "Pendidikan Teknologi Informasi",
    status: "Available for Projects & Collaboration",
    profileImage: "/formal_profile.png",
    aboutImage: "/about_photo.png",
    resumeUrl: "https://drive.google.com/drive/folders/1fEpaoTSlNIPH0tXN19TLXCY3yephYcfe",
    email: "mrezkyjulian1@gmail.com",
    spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/4e7CA8obF944UVhwVOA884?utm_source=generator&theme=0",
    spotifyPlaylistUrl: "https://open.spotify.com/playlist/4e7CA8obF944UVhwVOA884",
  },

  stats: [
    {
      label: "Projects Completed",
      value: "4",
      subtext: "Innovative solutions crafted",
      color: "#38bdf8",
      category: "projects"
    },
    {
      label: "Certificates Earned",
      value: "1",
      subtext: "Skills validated & tested",
      color: "#2c67ed",
      category: "certificates"
    },
    {
      label: "Awards & Honors",
      value: "1",
      subtext: "Competitions & recognition",
      color: "#8b5cf6",
      category: "awards"
    },
    {
      label: "Years of Experience",
      value: "3",
      subtext: "Continuous learning & code",
      color: "#ec4899",
      category: "experience"
    }
  ],

  socials: [
    {
      name: "GitHub",
      handle: "@rezkyjulian-github",
      url: "https://github.com/mrezkyjulian1-cell",
      icon: "github",
      gradient: "from-zinc-800 to-zinc-950",
      accent: "#ffffff"
    },
    {
      name: "Instagram",
      handle: "@apcbjuliann",
      url: "https://www.instagram.com/apcbjuliann/",
      icon: "instagram",
      gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
      accent: "#f43f5e"
    },
    {
      name: "Email",
      handle: "mrezkyjulian1@gmail.com",
      url: "mailto:mrezkyjulian1@gmail.com",
      icon: "mail",
      gradient: "from-[#2563eb] to-[#1d4ed8]",
      accent: "#60a5fa"
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 75, icon: "atom", color: "#61DAFB", desc: "Component architecture, hooks, state management" },
      { name: "Tailwind CSS", level: 80, icon: "palette", color: "#38BDF8", desc: "Modern utility-first responsive styling" },
      { name: "JavaScript (ES6+)", level: 70, icon: "file-code", color: "#F7DF1E", desc: "Modern asynchronous JS, DOM, Web APIs" },
      { name: "HTML5 & CSS3", level: 84, icon: "code", color: "#E34F26", desc: "Semantic markup, flexbox, CSS grid, keyframes" },
      { name: "Framer Motion", level: 67, icon: "sparkles", color: "#EC4899", desc: "Smooth micro-interactions & layout animations" },
      { name: "TypeScript", level: 65, icon: "layers", color: "#3178C6", desc: "Type safety, interfaces, scalable code" },
      { name: "Next.js", level: 72, icon: "globe", color: "#ffffff", desc: "Server components, SSR/SSG, app router" }
    ],
    backend: [
      { name: "Node.js", level: 78, icon: "server", color: "#339933", desc: "Event-driven runtime, scalable backend services" },
      { name: "PHP & Laravel", level: 84, icon: "cpu", color: "#FF2D20", desc: "MVC architecture, Eloquent ORM, authentication" },
      { name: "MySQL", level: 88, icon: "database", color: "#4479A1", desc: "Relational database design, indexing, queries" },
      { name: "Supabase / Firebase", level: 86, icon: "zap", color: "#3ECF8E", desc: "Realtime subscriptions, auth, PostgreSQL" },
      { name: "RESTful APIs", level: 76, icon: "network", color: "#60A5FA", desc: "API design, JWT security, documentation" }
    ],
    tools: [
      { name: "Git & GitHub", level: 82, icon: "git-branch", color: "#F05032", desc: "Version control, branching, PR workflows" },
      { name: "Figma", level: 77, icon: "figma", color: "#F24E1E", desc: "Wireframing, UI prototyping, design systems" },
      { name: "VS Code", level: 82, icon: "terminal", color: "#007ACC", desc: "Productive coding environment with extensions" },
      { name: "AntiGravity IDE", level: 87, icon: "terminal", color: "#007ACC", desc: "Productive coding environment with extensions" },
      { name: "Vite", level: 76, icon: "rocket", color: "#646CFF", desc: "Blazing fast dev server and build tool" },
      { name: "Vercel / Netlify", level: 80, icon: "cloud", color: "#000000", desc: "Continuous deployment and cloud hosting" },
      { name: "Postman", level: 70, icon: "send", color: "#FF6C37", desc: "API testing, automation, mocking endpoints" }
    ]
  },

  projects: [
    {
      id: "fleetflow-enterprise",
      title: "FleetFlow Enterprise Logistics Platform",
      category: "Logistics",
      image: "/projects/fleetflow_enterprise.png",
      description: "Next-gen logistics operating system v5.0 dengan 3D interactive global network, dynamic route tracking, dan automated audit telemetry.",
      overview: "FleetFlow Enterprise adalah pusat kontrol logistik terintegrasi mutakhir yang direkayasa untuk visibilitas real-time terhadap pesanan, armada multi-moda, rute dinamis, dan telemetri audit otomatis.",
      problem: "Manajemen rantai pasok dan armada global sering terkendala visibilitas rute yang terfragmentasi dan lambatnya sinkronisasi data antar node logistik.",
      solution: "Mengintegrasikan visualisasi jaringan 3D interaktif dan engine dispatch otomatis dengan keandalan 99.98% on-time dispatch dan enkripsi 2FA OTP 256-bit.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion", "Node.js", "WebSocket"],
      features: [
        "Visualisasi 3D Network globe interaktif real-time",
        "Live tracker multi-modal fleet & auto-waypoint dispatch",
        "Dashboard Command Center untuk enterprise audit telemetry",
        "Keamanan enterprise 256-bit 2FA OTP verification",
        "100% Real-time sync performa tinggi"
      ],
      liveUrl: "https://fleetflow-demo.vercel.app",
      githubUrl: "https://github.com/mrezkyjulian1-cell",
      featured: true
    },
    {
      id: "nutrilens-ai",
      title: "NutriLens AI - Smart Nutrition Tracker",
      category: "AI",
      image: "/projects/nutrilens_ai.png",
      description: "Aplikasi pelacak nutrisi & kalkulator makro cerdas berbasis AI dengan fitur scan makanan instan dan visualisasi target harian interaktif.",
      overview: "NutriLens AI membantu pengguna memantau konsumsi kalori, protein, karbohidrat, lemak sehat, serta hidrasi air harian dengan analitik cerdas dan pemindaian makanan berbasis kecerdasan buatan.",
      problem: "Pencatatan nutrisi manual sering memakan waktu dan rumit, membuat banyak orang enggan menjaga konsistensi pola makan sehat.",
      solution: "Memanfaatkan AI Smart Scan makanan untuk mengenali komposisi makanan secara instan dan mengkalkulasi kebutuhan nutrisi harian secara otomatis.",
      technologies: ["React", "Tailwind CSS", "AI Vision", "Chart.js", "Framer Motion", "Web API"],
      features: [
        "Fitur Scan Makanan AI instan untuk deteksi kalori & makro",
        "Dashboard visualisasi sisa kalori harian interaktif",
        "Pemantauan rasio protein, karbohidrat, dan lemak sehat",
        "Tracking hidrasi air harian otomatis",
        "Food Log lengkap dan laporan progres mingguan (7 Hari)"
      ],
      liveUrl: "https://nutrilens-ai.vercel.app",
      githubUrl: "https://github.com/mrezkyjulian1-cell",
      featured: true
    },
    {
      id: "fleetflow-global",
      title: "FleetFlow Global Logistics Authority",
      category: "Logistics",
      image: "/projects/fleetflow_global.jpg",
      description: "Portal logistik global dengan pelacakan kontainer kapal kargo terintegrasi, real-time bill of lading search, dan jangkauan 214 negara.",
      overview: "Platform manajemen rantai pasok maritim dan kargo global yang menghubungkan ribuan jalur pengiriman internasional dengan keandalan sistem 99.9% uptime.",
      problem: "Kebutuhan pelacakan kargo kontainer lintas samudra yang transparan dan akurat bagi perusahaan ekspor-impor internasional.",
      solution: "Menghadirkan sistem pencarian nomor bill of lading instan dengan visualisasi rute pelayaran dan estimasi kedatangan kargo presisi.",
      technologies: ["React", "Tailwind CSS", "RESTful API", "Maps API", "Node.js", "Vite"],
      features: [
        "Pencarian nomor kontainer / Bill of Lading instan",
        "Sistem pemantauan aktif di 214 negara di seluruh dunia",
        "Arsitektur server dengan jaminan 99.9% uptime",
        "Portal Client Login dan Dashboard terintegrasi",
        "Desain responsif bertema visual maritim modern"
      ],
      liveUrl: "https://fleetflow-global.vercel.app",
      githubUrl: "https://github.com/mrezkyjulian1-cell",
      featured: true
    },
    {
      id: "ipos5-tracking",
      title: "IPOS5 - Package Tracking & Route Journey",
      category: "Logistics",
      image: "/projects/ipos5_tracking.png",
      description: "Sistem operasional pelacakan paket dan simulasi rute multi-stop 8 waypoint armada kargo dengan radar GPS telemetri real-time.",
      overview: "IPOS5 dirancang untuk operasional manajemen kargo dan logistik PT Pos Indonesia, memantau alur perjalanan kiriman antar kantor pos cabang dan sentral pengolahan paket.",
      problem: "Kompleksitas pemantauan armada angkutan pos yang menempuh banyak titik henti (multi-stop) dalam satu lintasan pengiriman.",
      solution: "Mengembangkan dashboard interaktif Multi-Stop Route Journey 8 Waypoints dengan mode simulasi rute, radar GPS telemetri, dan monitor kapasitas muatan.",
      technologies: ["React", "Tailwind CSS", "GPS Telemetry", "Simulation Engine", "Express", "Node.js"],
      features: [
        "Multi-stop Route Journey lintasan 8 waypoints dinamis",
        "Mode simulasi rute demo dengan kontrol kecepatan play/next/prev",
        "Telemetri radar GPS dan estimasi waktu tiba (ETA) per stop",
        "Monitoring utilisasi beban muatan kendaraan real-time",
        "Sistem filter status waypoints (Passed, Current, Upcoming)"
      ],
      liveUrl: "https://ipos5-tracking.vercel.app",
      githubUrl: "https://github.com/mrezkyjulian1-cell",
      featured: true
    }
  ],

  certificates: [
    {
      id: "cert-1",
      title: "Full Stack Web Development Professional",
      issuer: "Global Tech Academy",
      date: "October 2023",
      category: "keahlian",
      image: "/certificates/cert1.jpg",
      skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
      id: "cert-2",
      title: "Computer Network & Security Specialist",
      issuer: "MikroTik & Cisco Networking Academy",
      date: "May 2024",
      category: "keahlian",
      image: "/certificates/cert1.jpg",
      skills: ["Routing", "Subnetting", "Firewall", "Network Architecture"]
    },
    {
      id: "cert-3",
      title: "UI/UX Design Masterclass",
      issuer: "DesignLab Indonesia",
      date: "January 2024",
      category: "keahlian",
      image: "/certificates/cert1.jpg",
      skills: ["Figma", "User Journey", "Design System", "Prototyping"]
    },
    {
      id: "cert-4",
      title: "1st Place Winner - Web Design Competition",
      issuer: "Brawijaya Tech Fest",
      date: "November 2024",
      category: "prestasi",
      image: "/certificates/cert1.jpg",
      skills: ["Creative UI", "Framer Motion", "Responsive Design"]
    },
    {
      id: "cert-5",
      title: "Finalist National Software Development",
      issuer: "Kemenristekdikti",
      date: "August 2024",
      category: "prestasi",
      image: "/certificates/cert1.jpg",
      skills: ["Problem Solving", "Full Stack Engineering"]
    }
  ],

  education: [
    {
      id: "edu-smk",
      institution: "SMK Wiraswasta Cimahi",
      faculty: "Jurusan Rekayasa Perangkat Lunak",
      major: "Rekayasa Perangkat Lunak",
      period: "2024 - 2027",
      location: "Cimahi, Indonesia",
      description: "Mempelajari fundamental pemrograman web modern, basis data, algoritma, serta pengembangan aplikasi digital yang responsif dan interaktif.",
      achievements: [
        "Aktif dalam riset dan pengembangan proyek aplikasi web",
        "Ketua Tim Proyek Pembuatan Portal Sistem Informasi Sekolah",
        "Sertifikasi Kompetensi Keahlian Rekayasa Perangkat Lunak"
      ],
      icon: "graduation-cap",
      accent: "#2c67ed"
    }
  ],

  experience: [
    {
      id: "exp-2024",
      period: "2024",
      role: "Started Coding",
      company: "Rekayasa Perangkat Lunak",
      type: "Foundation",
      description: "Beginning my journey in software development through RPL.",
      tags: ["RPL", "Programming Fundamentals", "Logic & Syntax"]
    },
    {
      id: "exp-2025-web",
      period: "2025",
      role: "Web Development",
      company: "Full-Stack Journey",
      type: "Development",
      description: "Built web applications and explored PHP, MySQL, JavaScript, and modern UI technologies.",
      tags: ["PHP", "MySQL", "JavaScript", "Modern UI", "Web Apps"]
    },
    {
      id: "exp-2025-projects",
      period: "2025",
      role: "Personal Projects",
      company: "Independent Apps",
      type: "Projects",
      description: "Developed dashboards, management systems, and data-driven applications.",
      tags: ["Dashboards", "Management Systems", "Data-Driven Apps"]
    },
    {
      id: "exp-2026-ai",
      period: "2026",
      role: "AI & Automation",
      company: "Next-Gen Tech",
      type: "AI & ML",
      description: "Explored AI Agents, Ollama, local LLMs, and AI-powered application features.",
      tags: ["AI Agents", "Ollama", "Local LLMs", "Automation"]
    },
    {
      id: "exp-2026-internship",
      period: "2026",
      role: "Internship",
      company: "Praktik Kerja Lapangan (PKL)",
      type: "Industry Experience",
      description: "Gained real-world development experience through PKL and contributed to software projects.",
      tags: ["PKL", "Real-World Experience", "Software Projects", "Team Collaboration"]
    },
    {
      id: "exp-now",
      period: "NOW",
      role: "Building & Learning",
      company: "Current Focus",
      type: "Active",
      description: "Continuously developing projects and expanding my skills in software engineering and AI.",
      tags: ["Software Engineering", "AI Expansion", "Continuous Growth"]
    }
  ],

  services: [
    {
      id: "srv-web",
      title: "Web Development",
      description: "Membangun website modern dengan performa tinggi, animasi dinamis, SEO ramah mesin pencari, dan arsitektur kode modular.",
      icon: "code",
      tags: ["React", "Vite", "Next.js", "Tailwind CSS"],
      accent: "#2c67ed"
    },
    {
      id: "srv-uiux",
      title: "UI/UX Development",
      description: "Menerjemahkan ide visual ke dalam antarmuka interaktif yang elegan, intuitif, ramah pengguna, dan berestetika premium.",
      icon: "palette",
      tags: ["Figma to Code", "Micro-Interactions", "Framer Motion"],
      accent: "#06b6d4"
    },
    {
      id: "srv-backend",
      title: "Backend Development",
      description: "Merancang API RESTful yang aman, cepat, dan terukur dengan sistem otentikasi serta arsitektur database relasional/NoSQL.",
      icon: "server",
      tags: ["Node.js", "PHP Laravel", "REST API", "JWT"],
      accent: "#8b5cf6"
    },
    {
      id: "srv-responsive",
      title: "Responsive Web Design",
      description: "Memastikan situs web tampil sempurna di semua ukuran layar mulai dari smartphone kompak, tablet, hingga monitor ultrawide.",
      icon: "smartphone",
      tags: ["Mobile First", "Cross-Browser", "Adaptive Layout"],
      accent: "#ec4899"
    },
    {
      id: "srv-database",
      title: "Database Architecture",
      description: "Perancangan skema database terstruktur, optimasi query, indexing, dan integrasi cloud realtime seperti Supabase & MySQL.",
      icon: "database",
      tags: ["MySQL", "PostgreSQL", "Supabase", "Query Optimization"],
      accent: "#38bdf8"
    }
  ]
};
