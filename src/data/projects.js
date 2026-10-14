export const projects = [
  {
    id: "gkjw-magetan",
    title: "Sistem Informasi & Administrasi GKJW Magetan",
    category: "Web Application / Information System",
    status: {
      label: "Dalam Pengembangan Aktif",
      type: "in-progress", // 'completed' | 'in-progress' | 'prototype'
      badgeColor: "border-amber-500/30 text-amber-300 bg-amber-500/10"
    },
    shortDescription:
      "Aplikasi web terpadu untuk digitalisasi tata kelola administrasi jemaat, rekapitulasi persembahan keuangan, manajemen inventaris gereja, dan warta jemaat berbasis hak akses.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js", "Blade"],
    mockupType: "database-system",
    problem:
      "Proses pencatatan administrasi jemaat, pembukuan kas persembahan, dan pendataan inventaris aset gereja sebelumnya dilakukan secara konvensional atau terpisah-pisah di berbagai dokumen. Hal ini mengakibatkan lambatnya rekapitulasi data demografi jemaat, potensi ketidaksinkronan data mutasi sektor, dan perlunya waktu lebih lama saat penyusunan laporan periodik majelis.",
    objectives:
      "Membangun sistem informasi terpusat yang aman, transparan, dan mudah diakses oleh pengurus gereja sesuai wewenangnya, guna mengotomatisasi pencatatan data jemaat, mendokumentasikan arus kas, dan mempermudah inventarisasi aset secara sistematis.",
    keyFeatures: [
      {
        title: "Manajemen Data Jemaat & Sektor",
        desc: "Pendataan komprehensif data pribadi, status sakramen (baptis/sidi), hubungan keluarga, serta pengelompokan berdasarkan sektor wilayah."
      },
      {
        title: "Sistem Keuangan & Kas Persembahan",
        desc: "Pencatatan pemasukan persembahan ibadah, kas komisi, pengeluaran operasional, serta otomasi rekapitulasi buku kas masuk dan keluar."
      },
      {
        title: "Manajemen Inventaris & Pengadaan",
        desc: "Pencatatan aset fisik gereja, kondisi kelayakan barang, lokasi penempatan, dan riwayat pengadaan sarana peribadatan."
      },
      {
        title: "Warta Jemaat & Pengumuman",
        desc: "Publikasi jadwal kegiatan, warta sepekan, dan materi informasi jemaat yang dapat diperbarui secara terpusat oleh pengurus."
      },
      {
        title: "Dashboard Multi-Role (RBAC)",
        desc: "Hak akses terproteksi untuk Admin, Majelis, dan Bendahara dengan pembatasan menu dan aksi yang ketat sesuai otorisasi."
      },
      {
        title: "Laporan & Rekapitulasi Data",
        desc: "Fitur penyaringan data dan ekspor rekapitulasi berkala untuk bahan evaluasi persidangan majelis jemaat."
      }
    ],
    databaseDesign: {
      summary:
        "Arsitektur database relasional ternormalisasi untuk menjamin integritas data jemaat dan akuntabilitas pencatatan keuangan.",
      highlights: [
        "Relasi one-to-many & one-to-one antara tabel keluarga, anggota jemaat, dan riwayat sakramen.",
        "Foreign key constraints dengan cascade rules yang teruji untuk mencegah orphan records pada mutasi sektor.",
        "Pencatatan transaksi persembahan dengan audit trail (created_by, timestamp) untuk integritas pembukuan.",
        "Indexing pada foreign keys dan kolom tanggal untuk memastikan query pencarian serta laporan berkala berjalan optimal."
      ]
    },
    myRole:
      "Fullstack Web Developer — Merancang arsitektur basis data relasional (ERD), menyusun modul autentikasi dan otorisasi bertingkat dengan middleware Laravel, mengembangkan CRUD kompleks, merancang antarmuka responsif menggunakan Tailwind CSS dan Alpine.js, serta melakukan query optimization.",
    technicalChallenges: [
      {
        challenge: "Pengelolaan Struktur Hierarki Keluarga dan Anggota Jemaat",
        solution:
          "Merancang skema relasi kepala keluarga dengan anggota jemaat yang fleksibel dalam menangani status perpindahan sektor, perkawinan, maupun pembaruan data tanpa merusak riwayat data historis."
      },
      {
        challenge: "Pemisahan Hak Akses yang Tegas Antar Komisi dan Majelis",
        solution:
          "Menerapkan Role-Based Access Control (RBAC) dengan Laravel Policies dan custom middleware sehingga data keuangan sensitif hanya dapat diakses oleh peran berwenang."
      }
    ],
    processTimeline: [
      {
        step: "01",
        title: "Analisis Kebutuhan",
        desc: "Mengidentifikasi alur kerja manual pengurus gereja, jenis persembahan, serta data demografi jemaat yang perlu didigitalkan."
      },
      {
        step: "02",
        title: "Perancangan UI/UX",
        desc: "Membuat wireframe antarmuka dashboard admin yang bersih dan mudah digunakan oleh pengurus lintas rentang usia."
      },
      {
        step: "03",
        title: "Perancangan Database",
        desc: "Menyusun skema relasional tabel jemaat, keluarga, sektor, transaksi kas, dan inventaris dengan integritas referensial."
      },
      {
        step: "04",
        title: "Implementasi Sistem",
        desc: "Mengembangkan aplikasi dengan Laravel, Blade template, Tailwind CSS, Alpine.js, serta logika validasi form yang ketat."
      },
      {
        step: "05",
        title: "Pengujian Fungsional",
        desc: "Verifikasi alur CRUD, validasi permission tiap role, dan pengecekan ketepatan perhitungan angka rekapitulasi keuangan."
      },
      {
        step: "06",
        title: "Penyempurnaan Berkelanjutan",
        desc: "Tahap iterasi fitur pelaporan berkala dan penguatan keamanan data jemaat yang masih berjalan secara aktif."
      }
    ],
    links: {
      github: null, // Repository internal / data privasi gereja terjaga
      demo: null
    }
  },
  {
    id: "rental-multi-tenant",
    title: "Multi-Tenant Rental Vehicle Platform",
    category: "Web Platform / Multi-Tenancy Architecture",
    status: {
      label: "Rancangan & Prototipe Arsitektur",
      type: "prototype",
      badgeColor: "border-blue-500/30 text-blue-300 bg-blue-500/10"
    },
    shortDescription:
      "Arsitektur platform rental mobil dan motor multi-tenant dengan pemisahan data bisnis, katalog armada real-time, dan alur konfirmasi reservasi via WhatsApp.",
    technologies: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    mockupType: "multi-tenant",
    problem:
      "Banyak pengusaha rental kendaraan berskala kecil hingga menengah mengelola ketersediaan unit mobil dan motor melalui buku catatan manual atau obrolan chat pribadi. Hal ini sering memicu tabrakan jadwal sewa (double-booking), kesulitan memantau unit yang sedang keluar, serta belum tersedianya katalog daring terstruktur yang memudahkan calon penyewa memilih armada.",
    objectives:
      "Merancang fondasi platform di mana beberapa pemilik usaha rental dapat memiliki ruang kerja digital terisolasi (multi-tenant) untuk memajang armada, memantau ketersediaan kendaraan harian/mingguan, dan menerima pesanan secara cepat melalui integrasi pesan WhatsApp.",
    keyFeatures: [
      {
        title: "Multi-Tenant Workspace",
        desc: "Pemisahan ruang kelola antar penyedia rental sehingga pengaturan armada dan transaksi masing-masing mitra bisnis tetap terisolasi."
      },
      {
        title: "Katalog Mobil & Motor Terpadu",
        desc: "Pencatatan data tipe kendaraan, transmisi, kapasitas penumpang, nomor registrasi, serta tarif sewa harian dan mingguan."
      },
      {
        title: "Manajemen Ketersediaan Armada",
        desc: "Pemantauan status kendaraan secara real-time (tersedia, disewa, dalam perawatan) untuk mencegah jadwal sewa bentrok."
      },
      {
        title: "Alur Pemesanan Cepat via WhatsApp",
        desc: "Form pemesanan publik yang secara otomatis menyusun ringkasan sewa dan mengarahkan calon penyewa langsung ke WhatsApp resmi pemilik unit."
      },
      {
        title: "Antarmuka Reaktif Livewire",
        desc: "Penyaringan armada dan kalkulasi estimasi biaya sewa instan tanpa perlu reload halaman penuh."
      }
    ],
    databaseDesign: {
      summary:
        "Skema basis data dengan pendekatan tenant isolation menggunakan pengidentifikasi tenant_id pada setiap entitas operasional.",
      highlights: [
        "Pemisahan data tingkat baris (Row-Level Tenancy) dengan indexed tenant_id pada tabel vehicles, bookings, dan settings.",
        "Implementasi Laravel Global Query Scope untuk memastikan setiap query Eloquent otomatis terfilter sesuai tenant aktif.",
        "Relasi fleksibel antara unit armada dengan log jadwal sewa untuk validasi bentrok tanggal reservasi."
      ]
    },
    myRole:
      "Backend & System Architect — Merancang konsep isolasi data multi-tenant, mendesain skema basis data MySQL, membangun komponen antarmuka reaktif dengan Laravel Livewire, dan merancang format pesan interaksi pemesanan WhatsApp.",
    technicalChallenges: [
      {
        challenge: "Pencegahan Kebocoran Data Antar Tenant (Tenant Data Leak)",
        solution:
          "Mengimplementasikan Global Scope dan Trait khusus pada model Laravel yang secara otomatis menyematkan klausa 'where tenant_id = ?' pada setiap query baca, ubah, dan hapus."
      },
      {
        challenge: "Pengecekan Ketersediaan Tanggal Sewa yang Akurat",
        solution:
          "Membuat query pencarian rentang tanggal menggunakan interval overlap check untuk memastikan unit yang sudah terbooking pada hari tertentu tidak dapat dipilih kembali."
      }
    ],
    processTimeline: [
      {
        step: "01",
        title: "Analisis Kebutuhan Bisnis",
        desc: "Mempelajari pola interaksi pemilik rental kendaraan lokal dan kebiasaan konsumen dalam menyewa mobil dan motor."
      },
      {
        step: "02",
        title: "Perancangan Arsitektur Multi-Tenant",
        desc: "Memilih strategi single database dengan tenant-scoped filtering guna efisiensi infrastruktur awal."
      },
      {
        step: "03",
        title: "Pemodelan Basis Data",
        desc: "Menyusun skema tabel tenant, kendaraan, kategori armada, dan pemesanan dengan index yang tepat."
      },
      {
        step: "04",
        title: "Prototipe Livewire",
        desc: "Membangun komponen pemilihan tanggal interaktif dan form pemesanan dengan umpan balik cepat."
      },
      {
        step: "05",
        title: "Pengujian Isolasi Data",
        desc: "Menguji skenario perpindahan session tenant untuk memastikan data armada tidak saling tertukar."
      },
      {
        step: "06",
        title: "Perencanaan Roadmap",
        desc: "Mempersiapkan rancangan pengembangan lanjutan seperti manajemen dokumen identitas penyewa dan payment gateway."
      }
    ],
    links: {
      github: null,
      demo: null
    }
  },
  {
    id: "java-backend-learning",
    title: "Java Backend Foundations & Algorithms",
    category: "Backend & Systems Foundations",
    status: {
      label: "Eksplorasi Aktif & Pembelajaran",
      type: "in-progress",
      badgeColor: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10"
    },
    shortDescription:
      "Repositori latihan dan eksplorasi terstruktur mendalami Object-Oriented Programming (OOP), struktur data, algoritma, serta JDBC sebagai persiapan menuju ekosistem enterprise.",
    technologies: ["Java", "OOP", "SQL", "JDBC", "IntelliJ IDEA"],
    mockupType: "terminal-code",
    problem:
      "Mengembangkan sistem backend berskala tinggi membutuhkan pemahaman yang kokoh tentang strong typing, manajemen memori, kompleksitas algoritma (Big-O), serta pola desain berorientasi objek yang tidak selalu terakomodasi dalam lingkungan interpreted scripting.",
    objectives:
      "Memperdalam fondasi rekayasa perangkat lunak secara fundamental dengan menguasai bahasa Java murni, memahami Java Collections Framework, mengimplementasikan algoritma pencarian & pengurutan, serta mempersiapkan diri sebelum melangkah ke framework Spring Boot.",
    keyFeatures: [
      {
        title: "Penerapan Prinsip Inti OOP",
        desc: "Implementasi Abstraction, Encapsulation, Inheritance, dan Polymorphism pada simulasi studi kasus backend nyata."
      },
      {
        title: "Java Collections Framework",
        desc: "Penggunaan dan pembandingan performa ArrayList, LinkedList, HashMap, HashSet, serta Tree structures."
      },
      {
        title: "Sorting & Searching Algorithms",
        desc: "Implementasi algoritma pengurutan (Quick Sort, Merge Sort) dan pencarian (Binary Search) dengan custom Comparator dan Comparable."
      },
      {
        title: "Database Connectivity (JDBC)",
        desc: "Koneksi database relasional melalui JDBC, eksekusi PreparedStatement aman dari SQL injection, dan pengelolaan transaksi manual."
      },
      {
        title: "Exception Handling & Clean Code",
        desc: "Penerapan custom checked/unchecked exceptions dan prinsip clean coding berbasis konvensi Java."
      }
    ],
    databaseDesign: {
      summary:
        "Eksplorasi konektivitas Java ke basis data relasional melalui PreparedStatement dan ResultSet mapping.",
      highlights: [
        "Penerapan DAO (Data Access Object) pattern untuk memisahkan logika akses data dari domain models.",
        "Penggunaan PreparedStatement untuk parameter binding guna mencegah kerentanan SQL injection.",
        "Pengelolaan siklus Connection, Statement, dan ResultSet dengan pola try-with-resources."
      ]
    },
    myRole:
      "Software Engineering Learner — Menulis implementasi algoritma mandiri, bereksperimen dengan struktur data di IntelliJ IDEA, menyelesaikan tantangan pemrograman berorientasi objek, serta mendokumentasikan catatan teknis.",
    technicalChallenges: [
      {
        challenge: "Transisi Paradigma dari Dynamic Typing ke Static Strict Typing",
        solution:
          "Memanfaatkan kompiler Java dan fitur analisa tipe IntelliJ IDEA untuk memastikan keamanan tipe (type safety) dan pemanfaatan generics secara optimal."
      },
      {
        challenge: "Pengelolaan State dan Custom Comparison pada Struktur Koleksi",
        solution:
          "Mengimplementasikan interface Comparable dan Comparator khusus untuk mengontrol logika pengurutan objek kompleks berdasarkan multi-kriteria."
      }
    ],
    processTimeline: [
      {
        step: "01",
        title: "Dasar Bahasa & Sintaks Core Java",
        desc: "Mempelajari tipe data primitif, operator, percabangan, loop, dan memory stack/heap."
      },
      {
        step: "02",
        title: "Pemrograman Berorientasi Objek (OOP)",
        desc: "Mendalami class, object, constructor, interface, abstract class, dan access modifier."
      },
      {
        step: "03",
        title: "Collections & Struktur Data",
        desc: "Eksplorasi List, Set, Map, Queue, serta mekanisme hashing dan iterator."
      },
      {
        step: "04",
        title: "Algoritma & Comparator",
        desc: "Latihan pemecahan masalah algoritma sorting, searching, dan perbandingan objek kompleks."
      },
      {
        step: "05",
        title: "Konektivitas Database (JDBC)",
        desc: "Menghubungkan aplikasi Java dengan MySQL dan menguji eksekusi transaksi basis data."
      },
      {
        step: "06",
        title: "Persiapan Framework Lanjutan",
        desc: "Mempersiapkan diri menuju materi REST API, Maven/Gradle, dan fondasi Spring Boot."
      }
    ],
    links: {
      github: null,
      demo: null
    }
  }
];
