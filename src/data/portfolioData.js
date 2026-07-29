export const personalDetails = {
  name: "Muhammed Sawad K",
  title: "Golang Full Stack Developer",
  role: "Golang Full Stack Developer",
  experience: "1 Year at Bridgeon Solution",
  location: "Malappuram, Kerala, India",
  phone: "+91 9526659669",
  email: "sawadymofficial@gmail.com",
  whatsapp: "https://wa.me/919526659669",
  instagram: "https://instagram.com/sawad.ym",
  instagramHandle: "@sawad.ym",
  linkedin: "https://www.linkedin.com/in/muhammed-sawad-k-b05b17383",
  github: "https://github.com/sawadym-stack",
  profileImage: "/assets/ChatGPT Image Jul 25, 2026, 07_03_04 PM.png",
  techSparkImage: "/assets/tech spark.jpeg",
  techSpark2Image: "/assets/tech spark 2.jpeg",
  sawadMrngSsnImage: "/assets/sawad mrng ssn1.jpg",
  topicPresentationImage: "/assets/sawadgeon.jpeg",
  aboutImage: "/assets/sawad glass pic.jpeg"
};

export const stats = [
  { label: "Production Systems", value: "3+" },
  { label: "Microservices Built", value: "6+" },
  { label: "Engineering Experience", value: "1 Year" },
  { label: "Location Queries (Redis)", value: "< 1ms" }
];

export const education = [
  {
    institution: "REC Chathamangalam, Kozhikode",
    period: "2021 – 2023",
    field: "Higher Secondary in Maths Commerce",
    description: "Strong mathematical foundation, analytical logic, and algorithmic problem-solving discipline."
  },
  {
    institution: "Distance Education",
    period: "Currently Pursuing",
    field: "Bachelor of Computer Applications (BCA)",
    description: "Focusing on software engineering paradigms, computer architecture, databases, and network protocols."
  }
];

export const educationList = education;

export const experience = [
  {
    company: "Bridgeon Solution",
    location: "Calicut, Kerala",
    duration: "1 Year Experience",
    role: "Full Stack Developer",
    bullets: [
      "Engineered high-throughput Golang microservices utilizing gRPC, Protobuf, and Redis GEO spatial indexing.",
      "Designed and deployed RESTful API gateways with JWT authentication, custom middleware, and RBAC authorization.",
      "Developed responsive, high-performance web frontends using React.js, TypeScript, and Tailwind CSS.",
      "Managed Docker containerization, PostgreSQL relational schema indexing, and AWS EC2 cloud infrastructure."
    ],
    tech: ["Golang", "Go Fiber", "Gin", "gRPC", "Redis GEO", "PostgreSQL", "Docker", "React", "TypeScript", "Tailwind CSS"]
  }
];

export const experienceList = experience;

export const projects = [
  {
    id: "sendapro",
    category: "backend",
    title: "SendAPro",
    subtitle: "On-Demand Home Service Microservice Platform",
    tags: ["Go Fiber", "gRPC", "Redis GEO", "PostgreSQL", "Docker", "React", "TypeScript", "WebSocket"],
    tech: ["Go Fiber", "gRPC", "Redis GEO", "PostgreSQL", "Docker", "React", "TypeScript", "WebSocket"],
    description: "High-scale microservice ecosystem connecting clients with home service professionals in real time using Redis GEO spatial indexing for sub-millisecond location queries.",
    highlights: [
      "Sub-millisecond driver & professional location queries using Redis GEO RADIUS spatial indexing.",
      "gRPC binary RPC protocol for inter-service communication between API gateway and user services.",
      "PostgreSQL relational database schemas with optimized spatial indexes and ACID transaction integrity.",
      "Docker Compose container orchestration for isolated microservices and Redis caching."
    ],
    mediaType: "image",
    mediaUrl: "/assets/Screenshot 2026-07-23 104421.png",
    image: "/assets/Screenshot 2026-07-23 104421.png",
    githubUrl: "https://github.com/sawadym-stack/SendAPro-code.git",
    liveUrl: "https://send-a-pro-code.vercel.app/"
  },
  {
    id: "barca-store",
    category: "fullstack",
    title: "Barca Store",
    subtitle: "Full Stack E-Commerce Platform",
    tags: ["Golang Gin", "JWT Auth", "React", "Tailwind CSS", "AWS EC2", "PostgreSQL"],
    tech: ["Golang Gin", "JWT Auth", "React", "Tailwind CSS", "AWS EC2", "PostgreSQL"],
    description: "Robust e-commerce architecture featuring secure JWT authentication, cart state management, order processing pipelines, and AWS deployment.",
    highlights: [
      "Golang Gin REST API engine with middleware routing, CORS policies, and request validation.",
      "JWT token authentication with refresh tokens and role-based access control (RBAC).",
      "React.js frontend interface styled with Tailwind CSS, custom cart hooks, and state management.",
      "Cloud deployment on AWS EC2 Linux instance with Nginx reverse proxy and SSL configuration."
    ],
    mediaType: "video",
    mediaUrl: "/assets/barca-store-project-video.mp4",
    video: "/assets/barca-store-project-video.mp4",
    githubUrl: "https://github.com/sawadym-stack/BarcaStore.git",
    liveUrl: ""
  },
  {
    id: "autohive",
    category: "frontend",
    title: "AutoHive",
    subtitle: "Car Booking Platform",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "Context API"],
    tech: ["React", "JavaScript", "Tailwind CSS", "REST API", "Context API"],
    description: "Sleek automotive rental and booking platform featuring dynamic vehicle filtering, booking workflow, and responsive layout.",
    highlights: [
      "Dynamic vehicle search & filter matrix built with React Context API and state management.",
      "Interactive booking reservation modal with date picker and pricing calculation engine.",
      "Responsive luxury UI design engineered with Tailwind CSS, custom animations, and glassmorphism.",
      "RESTful API integration for fetching vehicle availability and user booking history."
    ],
    mediaType: "video",
    mediaUrl: "/assets/AutoHive Project.mp4",
    video: "/assets/AutoHive Project.mp4",
    githubUrl: "https://github.com/sawadym-stack/AutoHive-Project.git",
    liveUrl: ""
  }
];

export const projectsList = projects;
