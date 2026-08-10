export const projects = [
    {
        id: 1,
        featured: true,
        slug: "ai-powered-digital-lending-platform",
        title: "AI-Powered Digital Lending Platform",
        role: "Full-Stack Developer",
        description:
            "An AI-powered lending platform that automates loan evaluation, credit scoring, and approval for faster, smarter financing.",
        impact:
            "Improves digital lending workflows by reducing manual processing and enabling data-driven credit evaluation.",

        caseStudy: {
            problem:
                "Traditional lending processes are slow, manual, and difficult to scale for borrowers and financial service providers.",

            solution:
                "Developed a full-stack lending platform with user management, loan workflows, APIs, and AI-assisted evaluation capabilities.",

            architecture:
                "React/Next.js frontend, Django REST API backend, PostgreSQL database, JWT authentication, and modular backend architecture.",

            challenges:
                "Designing secure financial workflows, managing user roles, and creating scalable API structures.",

            results:
                "Delivered a complete foundation for digital loan management and future AI-based risk assessment.",
        },
        image: "/images/projects/derash.png",
        technologies: ["React", "Django", "postgreSQL", "AI/ML", "Team Lead"],
        githubUrl: "https://github.com/injifannoo/AI-based-Lending-Platform",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 2,
        featured: true,

        slug: "kasbarks-pet-care",
        title: "Kasbarks Pet Care Platform",
        role: "Mobile App Developer",
        description:
            "A mobile application from Casablanca, Morocco focused on pet care with enhanced UI, backend API integration, user authentication, and real-time notifications.",
        impact:
            "Provides pet owners with easier access to pet care information and digital services.",

        caseStudy: {
            problem:
                "Pet owners need convenient tools to manage pet care activities and services.",

            solution:
                "Built a mobile application with user authentication, API integration, and notification features.",

            architecture:
                "Flutter frontend integrated with backend APIs, Firebase services, and real-time notifications.",

            challenges:
                "Creating a smooth mobile experience and integrating multiple backend services.",

            results:
                "Developed a functional pet care platform with modern mobile development practices.",
        },

        image: "/images/projects/kasbark.jpg",
        technologies: ["Flutter", "REST API", "Firebase", "Push Notifications"],
        githubUrl: "https://github.com/enjifano/petcare-app",
        liveUrl: "https://www.linkedin.com/company/kasbarks/about/",
        status: "live",
    },

    {
        id: 3,
        featured: true,

        slug: "service-intelligence-platform",
        title: "AI-Powered Service Intelligence Platform",
        role: "Full-Stack Developer and ML Engineer",
        description:
            "An AI-powered platform designed to analyze customer feedback, service data, and business insights. Built with modern full-stack architecture to help organizations make data-driven decisions.",
        image: "/images/projects/service-intelligence.png",
        impact:
            "Helps organizations transform unstructured customer data into meaningful insights using AI-powered analysis.",

        caseStudy: {
            problem:
                "Organizations collect large amounts of customer feedback and service data but struggle to analyze it efficiently and identify improvement opportunities.",

            solution:
                "Built an intelligent platform combining a modern frontend, backend APIs, database systems, and AI capabilities to process and analyze service information.",

            architecture:
                "Next.js frontend, Django REST Framework backend, PostgreSQL database, Docker-based development environment, and AI/LLM integrations.",

            challenges:
                "Designing a scalable architecture, integrating AI capabilities, and creating reliable data workflows.",

            results:
                "Created a foundation for AI-driven service analysis and automated business insights.",
        },
        technologies: [
            "Next.js",
            "TypeScript",
            "Django REST Framework",
            "PostgreSQL",
            "AI/LLM",
            "Docker",
        ],
        githubUrl: "https://github.com/yourusername/service-intelligence",
        liveUrl: null,
        status: "In Development",
    },

    {
        id: 4,
        featured: true,

        slug: "raba-technologies-website",
        title: "Raba Technologies Website",
        role: "Frontend Developer ",
        description:
            "Official website for Raba Technologies featuring modern design, responsive layout, and comprehensive company portfolio showcase.",
        impact:
            "Provides a professional online presence and improves company visibility.",

        caseStudy: {
            problem:
                "The organization needed a modern, responsive website to communicate its services and capabilities.",

            solution:
                "Designed and developed a responsive website with modern UI patterns and smooth user interactions.",

            architecture:
                "React-based frontend with Tailwind CSS and animation components.",

            challenges:
                "Creating a fast, responsive, and visually consistent user experience.",

            results:
                "Delivered a modern web presence optimized for different devices.",
        },
        image: "images/projects/raba.png",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/RabaTechnologies/RabaWebsite",
        liveUrl: "https://www.rabatechnologies.com",
        status: "live",
    },
    {
        id: 5,
        featured: true,

        slug: "health-care-app",
        title: "Health Care App",
        description:
            "Built a healthcare management platform enabling patient-doctor communication, appointment scheduling, and real-time messaging using Flutter, Firebase, and Socket.io.",
        impact:
            "Improves access to healthcare services by providing digital patient-provider interaction tools.",

        caseStudy: {
            problem:
                "Patients need easier ways to manage appointments and communicate with healthcare providers.",

            solution:
                "Developed a mobile healthcare platform with authentication, appointment management, and real-time communication.",

            architecture:
                "Flutter mobile application, Firebase backend services, BLoC state management, and Socket.io real-time communication.",

            challenges:
                "Managing real-time data, application state, and secure user information.",

            results:
                "Delivered a user-focused healthcare experience with essential digital services.",
        },
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
        technologies: ["Flutter", "Firebase", "BloC", "Socket.io"],
        githubUrl: "https://github.com/enjifano/healthcare-app",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 6,
        featured: true,
        slug: "oromo-cultural-food-platform",
        title: "Oromo Cultural Food Platform",
        description:
            "A multilingual cultural recipe platform featuring zone-based food discovery, contributor system (text, audio, video), gamification, training request page, admin dashboard, secure user authentication and integrated chatbot for user support — designed to preserve and promote Oromo cuisine.",
        image: "/images/projects/food.png",
        impact:
            "Preserves cultural knowledge by creating a digital platform for discovering and sharing traditional recipes.",

        caseStudy: {
            problem:
                "Traditional food knowledge is often passed orally and lacks organized digital documentation.",

            solution:
                "Built a platform where users can explore recipes, contribute content, and access cultural food information through a modern web application.",

            architecture:
                "Next.js frontend, Node.js backend, Express.js APIs, MongoDB database, authentication, and admin management system.",

            challenges:
                "Designing multilingual content management and creating an engaging user experience.",

            results:
                "Created a scalable digital archive and community platform for cultural preservation.",
        },
        technologies: ["React/Next.js", "Node.js", "MongoDB", "Express.js"],
        githubUrl: "https://github.com/injifannoo/oromo-cultural-food",
        liveUrl: null,
        status: "Private Demo",
    },

    {
        id: 7,
        slug: "e-commerce-mobile-app",
        title: "E-Commerce Mobile App",
        description:
            "A full-featured e-commerce mobile application with product catalog, shopping cart, payment integration, and order tracking.",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        technologies: ["Flutter", "Firebase", "Stripe API"],
        githubUrl: "https://github.com/enjifano/ecommerce-app",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 8,
        slug: "voice-assistant-app",
        title: "Voice Assistant App",
        description:
            "The Voice Assistant App is a Flutter-based application that integrates the capabilities of ChatGPT for natural language understanding and DALL-E for image generation. This app allows users to interact with a voice assistant, ask questions, and receive both text and image responses. With Features: Voice Interaction, Natural Language Processing, Image Generation, User-Friendly Interface.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        technologies: ["Flutter", "ChatGPT", "DALL-E", "Firebase"],
        githubUrl: "https://github.com/injifannoo/voice_assistant_app",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 9,
        slug: "ethiopian-exit-exam-platform",
        title: "Ethiopian Exit Exam Preparation Platform",
        description:
            "The Exit Exam Platform is designed to help students prepare effectively for national exit exams. It provides easy access to past exam questions prepared by the Ministry of Education, as well as model exams developed by First Generation Universities. The platform organizes previous years’ questions and answers in a user-friendly format, allowing students to study more efficiently. System administrators manage and upload well-structured question sets and solutions, ensuring that users have reliable resources at their fingertips. This tool is especially valuable for final-year students aiming to perform well in their exit assessments.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        githubUrl: "https://github.com/injifannoo/ETHIOPIAN-EXIT-EXAM-",
        liveUrl: null,
        status: "Private Demo",
    },

    {
        id: 10,
        slug: "task-management-dashboard",
        title: "Task Management Dashboard",
        description:
            " A simple Task Management mobile application built with Flutter, implementing CRUD (Create, Read, Update, Delete) functionalities using the BLoC pattern and following Clean Architecture principles.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        technologies: ["Flutter", "Node.js", "BloC", "MongoDB", "Express.js"],
        githubUrl:
            "https://github.com/injifannoo/flutter_task_management_crud_app",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 11,
        slug: "social-media-app",
        title: "Social Media App",
        description:
            "A social media platform with user profiles, posts, comments, and real-time chat functionality.",
        image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c",
        technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/enjifano/social-app",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 12,
        slug: "habit-track-app",
        title: "Habit Track App",
        description:
            "A simple Habit Tracker app built using Flutter and Riverpod with Clean Architecture.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        technologies: ["Flutter", "Firebase", "Riverpod", "Clean Architecture"],
        githubUrl: "https://github.com/injifannoo/Habit_Track_App",
        liveUrl: null,
        status: "Private Demo",
    },
    {
        id: 13,
        slug: "role-based-ticketing-system",
        title: "Role-Based Ticketing System",
        description:
            "An online reservation system for restaurants with table management, customer profiles, and email notifications.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        technologies: ["Tailwind", "HTML", "MySQL", "JavaScript"],
        githubUrl: "https://github.com/injifannoo/Role-Based-Ticketing-System",
        liveUrl: null,
        status: "Private Demo",
    },
];