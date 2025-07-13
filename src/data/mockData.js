export const mockData = {
  personal: {
    name: "Talpaș Gabriel-Valeriu",
    title: "Full Stack Developer",
    email: "validelatalpas@gmail.com",
    phone: "+40 729 861 286",
    location: "Timișoara, România",
    linkedin: "linkedin.com/in/talpas-gabriel-valeriu-b62350197",
    github: "github.com/TalpasVali",
    bio: "Pasionat de tehnologie cu peste 3 ani de experiență în dezvoltarea aplicațiilor web moderne. Specializată în Angular, Node.js, MongoDB. Îmi place să creez experiențe digitale memorabile care îmbină funcționalitatea cu estetica.",
  },

  skills: [
    { name: "HTML & CSS", level: 90, category: "Frontend" },
    { name: "Angular", level: 85, category: "Frontend" },
    { name: "React", level: 35, category: "Frontend" },
    { name: "Node.js & Express", level: 80, category: "Backend" },
    { name: "TypeScript", level: 90, category: "Languages" },
    { name: "JavaScript", level: 80, category: "Languages" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "UI/UX Design", level: 20, category: "Design" },
    { name: "Figma & Adobe XD", level: 20, category: "Design" },
    { name: "Git & GitHub", level: 95, category: "Tools" },
    { name: "VsCode & WebStorm", level: 95, category: "Tools" },
    { name: "Problem Solving", level: 90, category: "Soft Skills" },
    { name: "Team Collaboration", level: 85, category: "Soft Skills" },
    { name: "Communication", level: 80, category: "Soft Skills" },
    { name: "Time Management", level: 75, category: "Soft Skills" },
    { name: "Agile & Scrum", level: 70, category: "Methodologies" },
  ],

  experience: [
    {
      id: 1,
      position: "Frontend Developer",
      company: "Tazz",
      location: "Timișoara, România",
      startDate: "Sept 2021",
      endDate: "Dec 2023",
      description:
        "Dezvoltarea și mentenanța unor componente complexe în Angular, pentru aplicația de livrări Tazz. Colaborare constantă cu echipele de design și backend pentru implementarea de funcționalități scalabile și performante.",
      achievements: [
        "Contribuție majoră la Order Dashboard V2 – cea mai mare schimbare din aplicație",
        "Dezvoltarea unui progress bar custom în librăria internă Angular",
        "Participare la redesign-ul a 4 dashboard-uri (courier-list, user-management, fleet-management, campaign-management)",
        "Training intern susținut pentru echipa de backend privind Spring Boot",
        "Training pentru echipa de frontend privind NgRx și RxJS",
        "Implicare activă în sesiuni de testare și lansări de versiuni (inclusiv ore suplimentare)",
      ],
      technologies: [
        "Angular",
        "NgRx",
        "RxJS",
        "TypeScript",
        "SCSS",
        "Git",
        "Figma",
      ],
    },

    {
      id: 2,
      position: "Frontend Developer",
      company: "EUP Delivery",
      location: "Timișoara, România",
      startDate: "Feb 2021",
      endDate: "Aug 2021",
      description:
        "Primul rol profesional în care am fost responsabil de dezvoltarea interfeței unei aplicații web pentru livrări, utilizând React. Am colaborat într-o echipă restrânsă, contribuind la structurarea arhitecturii frontend și integrarea cu API-uri REST.",
      achievements: [
        "Învățarea și aplicarea conceptelor de bază în HTML, CSS și JavaScript",
        "Dezvoltarea de componente React funcționale cu Hooks și Context API",
        "Colaborare eficientă într-o echipă de 4 persoane pentru lansarea aplicației",
        "Implementarea designului responsive și a logicii de afișare dinamică a conținutului",
        "Integrarea de endpoint-uri REST și tratarea stărilor aplicației",
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Git"],
    },
    {
      id: 3,
      position: "Frontend Intern",
      company: "Aeche116",
      location: "Timișoara, România",
      startDate: "Apr 2019",
      endDate: "Jul 2019",
      description:
        "Stagiu de practică în cadrul căruia am învățat fundamentele dezvoltării frontend și am aplicat conceptele de bază în Angular prin sarcini reale de proiect. Am colaborat cu dezvoltatori seniori pentru a înțelege fluxurile moderne de dezvoltare web.",
      achievements: [
        "Învățarea și aplicarea fundamentelor HTML, CSS și JavaScript",
        "Crearea de componente simple folosind Angular",
        "Utilizarea formularelor reactive și routing-ului în aplicație",
        "Integrarea de API-uri REST în componente",
        "Familiarizare cu Git și fluxul de lucru colaborativ",
      ],
      technologies: ["Angular", "TypeScript", "HTML", "CSS", "Git"],
    },
  ],

  education: [
    {
      id: 0,
      degree: "Licență în Informatică (în curs)",
      institution: "Universitatea de Vest din Timișoara",
      location: "Timișoara, România",
      startDate: "2021",
      endDate: "Prezent",
      description:
        "Studii axate pe dezvoltare software, baze de date, algoritmi și aplicații web.",
      achievements: [
        "Proiect de licență: platformă de programări online pentru saloane (Angular, Node.js, MongoDB)",
        "Participare la cursuri opționale de dezvoltare frontend (HTML, CSS, JavaScript, React)",
        "Certificări externe obținute: Codecademy – HTML, CSS, JavaScript, Node.js, jQuery",
        "Participare la Hackathon UVT – 2023",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "BarberShop App – Platformă de programări online",
      description:
        "Aplicație web full-stack pentru programări la salon, cu roluri multiple, calendar dinamic și dashboard-uri personalizate.",
      image: "/images/barber-shop.png",
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "NgRx",
        "Chart.js",
        "JWT",
      ],
      features: [
        "Autentificare cu JWT și roluri (client, frizer, admin)",
        "Calendar de programări interactiv și sistem de disponibilitate",
        "Dashboard cu statistici live (venituri, popularitate, heatmap)",
        "Administrare galerie și servicii prin panou dedicat",
      ],
      liveUrl: "https://barbershop-demo.netlify.app",
      githubUrl: "https://github.com/valitalpas/barbershop-app",
      status: "Completed",
    },

    {
      id: 2,
      title: "Yardly – Platformă de rezervare a terenurilor sportive",
      description:
        "Aplicație web modernă care permite utilizatorilor să rezerve terenuri de sport, să creeze meciuri și să invite alți jucători.",
      image: "",
      technologies: [
        "Angular",
        "NestJS",
        "MongoDB",
        "Bootstrap",
        "JWT",
        "NgRx",
      ],
      features: [
        "Căutare terenuri după sport, locație, oră și zi",
        "Rezervări recurente și sistem de penalizare la anulare",
        "Matchmaking: adaugă câți jucători mai sunt necesari",
        "Pagină de profil cu istoricul rezervărilor",
      ],
      liveUrl: "https://yardly-demo.vercel.app",
      githubUrl: "https://github.com/valitalpas/yardly-app",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Image Carousel – Slider interactiv",
      description:
        "Carousel de imagini creat de la zero folosind HTML, CSS și JavaScript, fără biblioteci externe. Proiect axat pe înțelegerea logicii de navigare și interacțiune UI.",
      image: "/images/product-carousel.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Navigare prin butoane next/prev",
        "Indicatori activi pentru slide-uri",
        "Tranziții fluide și responsive",
        "Scris complet fără framework-uri externe",
      ],
      liveUrl: "https://glittering-wisp-b82fd7.netlify.app/",
      githubUrl: "https://github.com/valitalpas/image-carousel",
      status: "Completed",
    },
    {
  id: 4,
  title: "Quick Math – Joc de reflexe și calcul mental",
  description:
    "Joc web interactiv în care utilizatorul trebuie să verifice rapid dacă ecuațiile afișate sunt corecte sau greșite. Scopul este îmbunătățirea vitezei de reacție și a gândirii matematice rapide.",
  image: "/images/math-game.png", // Înlocuiește cu imaginea ta din public/images
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "LocalStorage"
  ],
  features: [
    "Moduri multiple de dificultate: 10, 25, 50 sau 99 de întrebări",
    "Cronometru automat și sistem de scor personalizat",
    "Salvarea celor mai bune scoruri în LocalStorage",
    "Interfață responsive optimizată pentru desktop și mobil"
  ],
  liveUrl: "https://creative-marzipan-2c71f0.netlify.app/",
  githubUrl: "https://github.com/TalpasVali/quick-math-game",
  status: "Completed"
},

    {
      id: 5,
      title: "Light/Dark Mode Toggle – Website Demo",
      description:
        "Website simplu care implementează un sistem de schimbare a temei între Light și Dark Mode folosind JavaScript pur și stilizare CSS custom.",
      image: "/images/light-dark-mode.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Schimbare dinamică între modurile Light și Dark",
        "Design minimalist",
        "Publicat live pe Netlify",
      ],
      liveUrl: "https://admirable-panda-fb885d.netlify.app/",
      githubUrl: "https://github.com/TalpasVali/light-dark-mode",
      status: "Completed",
    },

    {
      id: 7,
      title: "LeetCode Practice – Îmbunătățirea abilităților algoritmice",
      description:
        "Exerciții constante pe LeetCode pentru aprofundarea structurilor de date și algoritmilor. Nu am rezolvat toate problemele, însă m-am concentrat pe înțelegerea în profunzime a conceptelor esențiale.",
      image: "",
      technologies: ["JavaScript", "Algorithms", "Data Structures", "GitHub"],
      features: [
        "Concentrare pe concepte fundamentale: arrays, hashmaps, recursivitate, backtracking, dynamic programming",
        "Rezolvări documentate și optimizate, salvate pe GitHub",
        "Progres constant pentru pregătire la interviuri și concursuri algoritmice",
      ],
      liveUrl: "https://leetcode.com/valitalpas",
      githubUrl: "https://github.com/valitalpas/leetcode-solutions",
      status: "Ongoing",
    },
  ],

  achievements: [
    {
      title: "Integrare NgRx în aplicații Angular",
      organization: "Auto-studiu",
      year: "2024",
      description:
        "Implementarea unui store modularizat cu efecte, reduceri și selectors",
    },
    {
      title: "Optimizare aplicații MongoDB",
      organization: "Proiecte personale",
      year: "2024",
      description:
        "Utilizarea agregărilor, indexării și validărilor pentru performanță",
    },
    {
      title: "Mentorat colegi în Angular",
      organization: "Tazz Team",
      year: "2022",
      description: "Ajutor oferit colegilor în înțelegerea Angular și RxJS",
    },
    {
      title: "Certificări CodeAcademy",
      organization: "Codecademy",
      year: "2021",
      description:
        "Am obținut mai multe certificări relevante pentru dezvoltarea web, inclusiv: HTML & CSS (structurare și design responsive), JavaScript (programare orientată pe DOM și evenimente), jQuery (manipularea eficientă a interfețelor), și Node.js (dezvoltare backend cu Express, rute REST și middleware-uri). Aceste certificări reflectă angajamentul meu constant pentru învățare și perfecționare.",
    },
  ],
};
