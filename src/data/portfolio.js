export const profile = {
  name: "Haitham Attab",
  role: "Android Engineer",
  email: "attab.haitham@univ-medea.dz",
  github: "https://github.com/dmc0001",
  linkedin: "https://www.linkedin.com/in/haitham-attab/",
  location: "Médéa, Algeria",
};

export const navLinks = [
  { id: "projects", title: "Work" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const experiences = [
  {
    company: "Avalon Labs",
    title: "Mobile Developer",
    date: "Mar 2025 — Present",
    type: "Flutter · Cross-platform",
    summary:
      "Making everyday home services easier to book, manage, and pay for.",
    details: [
      "Developing De9De9, a multi-service home application with scalable architecture and a focus on user experience.",
      "Integrated REST APIs for authentication, bookings, and payments.",
      "Integrated Apple Pay, Google Pay, and CIB/Dahabia payment flows with secure authentication.",
      "Built real-time chat with SignalR and personalized booking notifications with Firebase Cloud Messaging.",
      "Automated builds and deployments through CI/CD, backed by unit and widget tests.",
    ],
  },
  {
    company: "Sphinx Telecom International",
    title: "Android Developer",
    date: "Jul 2024 — Mar 2025",
    type: "Kotlin · Native Android",
    summary: "Building dependable reporting tools for engineers in the field.",
    details: [
      "Developed chunk-based file transfers to handle large reports reliably on unstable networks.",
      "Integrated WebSockets for real-time task synchronization and map SDKs for geolocation.",
      "Implemented secure authentication, role-based access, dependency injection, and clean architecture.",
      "Established unit and integration tests to reduce regressions before production releases.",
    ],
  },
  {
    company: "Find Eat",
    title: "Freelance Mobile Developer",
    date: "2024",
    type: "Flutter · Product development",
    summary:
      "Connecting local businesses with people looking for their next great find.",
    details: [
      "Built a dual-sided platform for businesses to publish offers and customers to discover local deals.",
      "Implemented nearby discovery, QR code redemption, favorites, and real-time deal updates.",
    ],
  },
  {
    company: "Groupe Saidal SPA",
    title: "Developer Intern",
    date: "Oct 2023 — Jun 2024",
    type: "Software development",
    summary:
      "Building practical development skills alongside experienced engineers.",
    details: [
      "Gained hands-on experience as a developer intern.",
      "Collaborated with experienced developers and contributed to team projects.",
    ],
  },
  {
    company: "DZExpert",
    title: "Mobile Developer Intern",
    date: "May 2023 — Jul 2023",
    type: "Flutter · Cross-platform",
    summary:
      "Turning an early interest in mobile development into hands-on experience.",
    details: [
      "Developed reusable Flutter components and integrated third-party APIs.",
      "Worked with the team on state management, data synchronization, and application maintenance.",
    ],
  },
];

export const projects = [
  {
    id: "de9de9",
    title: "De9De9",
    category: "Flutter",
    label: "Home services, simplified",
    type: "Avalon Labs · 2025 — Present",
    featured: true,
    desc: "An Algerian home services app connecting people with vetted professionals, with upfront pricing, appointment scheduling, and online or cash payments.",
    tech: ["Flutter", "SignalR", "Firebase", "Payments"],
    highlights: [
      "More than 300 services spanning home maintenance, cleaning, beauty, health, fitness, and events.",
      "Upfront pricing, time-slot selection, and an integrated appointment calendar.",
      "User-rated professionals validated by the De9De9 quality team.",
      "Online payments or cash on service completion, with real-time provider chat.",
      "Available across Algerian cities including Algiers, Oran, Constantine, Sétif, Blida, and Béjaïa.",
      "Official launch scheduled for 1 November 2026.",
    ],
    details: [
      "Cross-platform booking and management of home services.",
      "Apple Pay, Google Pay, and CIB/Dahabia payment integrations.",
      "Real-time conversations between clients and professionals using SignalR.",
      "FCM notifications for bookings, offers, and reminders; CI/CD with unit and widget testing.",
    ],
    links: [
      {
        label: "Website",
        url: "https://de9de9.dz/",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=dz.avalonlabs.de9de9",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/de9de9/id6747710951",
      },
    ],
  },
  {
    id: "reporting",
    title: "Auto Reporting",
    category: "Native Android",
    label: "Built for the field",
    type: "Sphinx Telecom · 2024 — 2025",
    featured: true,
    desc: "A reliable link between coordinators and field engineers. Real-time tasks, location tools, and reports that get where they need to go.",
    tech: ["Kotlin", "Jetpack Compose", "WebSockets", "Ktor"],
    details: [
      "Work-order assignment, progress tracking, and reporting for field teams.",
      "Chunk-based upload and download of large attachments over unstable networks.",
      "WebSocket synchronization and map-based task visualization.",
      "Role-based access, dependency injection, clean architecture, and integration testing.",
    ],
  },
  {
    id: "findeat",
    title: "Find Eats",
    category: null,
    label: "Restaurant picks that fit the moment",
    type: "AI restaurant discovery · iOS",
    featured: true,
    desc: "AI-powered restaurant recommendations tailored to your area, budget, cravings, and atmosphere, with clear reasons behind every pick.",
    tags: ["AI recommendations", "Personalization", "Google Maps", "iOS"],
    detailsHeading: "App highlights",
    details: [
      "Restaurant recommendations that consider food, atmosphere, and how well a place fits your preferences.",
      "Search by area, meal time, budget, cuisine, specific dishes, and the mood you have in mind.",
      "A curated shortlist with plain-English explanations for each recommendation.",
      "Open selected locations in Google Maps, revisit search history, and share results.",
      "Search requires an account and an active Premium subscription.",
    ],
    links: [
      {
        label: "Website",
        url: "https://findeats.app/",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/find-eats-tasty-local-spots/id6759454030",
      },
    ],
  },
  {
    id: "okadoo-supplier",
    title: "Okadoo Fournisseur",
    category: null,
    label: "Wholesale operations, connected",
    type: "B2B marketplace · Algeria",
    featured: false,
    desc: "A dedicated mobile experience for wholesalers to manage products, update pricing, and fulfill orders from retail stores across Algeria.",
    tags: ["B2B commerce", "Inventory", "Orders", "Sales insights"],
    detailsHeading: "App highlights",
    details: [
      "Connects wholesale suppliers with retail stores in Algeria.",
      "Product creation, catalog management, and wholesale pricing updates.",
      "Order tracking and fulfillment from a dedicated supplier interface.",
      "Real-time business data and sales insights.",
    ],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.maystroDelivery.okadooSupplier",
      },
    ],
  },
  {
    id: "digibooking",
    title: "Digi Booking",
    category: null,
    label: "Your next journey, in one place",
    type: "Travel & tourism · Algeria",
    featured: false,
    desc: "An all-in-one travel app for flights, hotels, Umrah packages, and car rentals, with visa assistance available through the Digi Booking website.",
    tags: ["Travel", "Flights & hotels", "Umrah", "Car rentals"],
    detailsHeading: "App highlights",
    details: [
      "Compare travel options and book flights and hotel stays.",
      "Browse Umrah packages and car-rental options.",
      "Manage reservations and receive booking notifications.",
      "Access visa assistance and document-preparation services through the website.",
    ],
    links: [
      { label: "Website", url: "https://digibooking.dz/" },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/digi-booking/id6752717011",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Mobile development",
    skills: [
      "Kotlin",
      "Java",
      "Dart",
      "Flutter",
      "React Native",
      "Android SDK",
      "Jetpack Compose",
      "Google Maps SDK",
    ],
  },
  {
    title: "Architecture & backend",
    skills: [
      "Clean Architecture",
      "MVVM / MVI",
      "Dependency Injection",
      "Go",
      "TypeScript",
      "REST APIs",
      "WebSockets",
      "SignalR",
      "FCM notifications",
      "Firebase",
    ],
  },
  {
    title: "Quality & delivery",
    skills: ["CI/CD", "Docker", "Git", "GitHub"],
  },
];
