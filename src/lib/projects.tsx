export type Project = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  github: string;
  demo?: string;
  report?: string;
  images: string[];
  category: "web" | "data";
};

export const projects: Project[] = [
  // --- Web Development Projects ---
  {
    slug: "responsive-portfolio",
    title: "Responsive Portfolio",
    description:
      "Personal portfolio website built with Next.js and TailwindCSS. Designed to showcase web development and data analysis projects in a clean and responsive layout.",
    tools: ["Next.js", "TailwindCSS", "Vercel"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-demo.vercel.app",
    images: [
      "/projects/responsive-portfolio1.png",
      "/projects/responsive-portfolio2.png",
    ],
    category: "web",
  },
  {
    slug: "ecommerce-ui",
    title: "E-commerce UI",
    description:
      "Modern shopping application with product listings, cart system, and Stripe checkout integration. Focuses on building scalable UI and smooth payment workflows.",
    tools: ["React", "Node.js", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    images: ["/projects/ecommerce-ui.png"],
    category: "web",
  },
  {
    slug: "church-management",
    title: "Church Management System",
    description:
      "Web app for managing members, events, and curriculum in a church or youth ministry. Includes user authentication, admin dashboard, and weekly progress tracking.",
    tools: ["React", "Firebase", "Firestore"],
    github: "https://github.com/yourusername/church-management",
    images: ["/projects/church-management.png"],
    category: "web",
  },
  {
    slug: "dante-hotspot",
    title: "Dante Hotspot",
    description:
      "Wi-Fi billing SaaS platform with M-Pesa API integration. Users can purchase internet sessions, while admins manage plans, payments, and active sessions.",
    tools: ["FastAPI", "PostgreSQL", "React"],
    github: "https://github.com/yourusername/dante-hotspot",
    images: ["/projects/dante-hotspot.png"],
    category: "web",
  },
  {
    slug: "notes-app",
    title: "Notes App (Supabase)",
    description:
      "Secure notes application with Supabase authentication and CRUD operations. Includes search functionality, dark/light theme toggle, and per-user data storage.",
    tools: ["React", "Supabase", "TailwindCSS"],
    github: "https://github.com/yourusername/notes-app",
    images: ["/projects/notes-app.png"],
    category: "web",
  },
  {
    slug: "trendtracker",
    title: "TrendTracker",
    description:
      "Real-time dashboard pulling data from APIs such as crypto, news, and GitHub. Uses FastAPI to fetch data on schedule and PostgreSQL to store historical records.",
    tools: ["FastAPI", "PostgreSQL", "React", "TailwindCSS"],
    github: "https://github.com/yourusername/trendtracker",
    demo: "https://trendtracker-demo.vercel.app",
    images: ["/projects/trendtracker.png"],
    category: "web",
  },

  // --- Data Analysis Projects ---
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation",
    description:
      "RFM analysis combined with KMeans clustering on the Online Retail II dataset. Identified customer groups such as Champions, Loyal, At Risk, and Hibernating.",
    tools: ["Python", "SQL", "Streamlit"],
    github: "https://github.com/yourusername/customer-segmentation",
    report: "/reports/customer-segmentation.pdf",
    images: ["/projects/customer-segmentation.png"],
    category: "data",
  },
  {
    slug: "churn-analysis",
    title: "Churn Analysis",
    description:
      "Analyzed customer churn patterns using Python and SQL. Built predictive models to identify churn drivers and retention strategies, with visual insights in Power BI.",
    tools: ["Python", "SQL", "Power BI"],
    github: "https://github.com/yourusername/churn-analysis",
    images: ["/projects/churn-analysis.png"],
    category: "data",
  },
  {
    slug: "sales-forecasting",
    title: "Sales Forecasting",
    description:
      "Created a 6-month sales forecast using Facebook Prophet. Highlighted seasonality patterns, revenue projections, and key business scenarios with dashboards.",
    tools: ["Python", "Prophet", "Power BI"],
    github: "https://github.com/yourusername/sales-forecasting",
    images: ["/projects/sales-forecasting.png"],
    category: "data",
  },
  {
    slug: "inventory-optimization",
    title: "Inventory Optimization",
    description:
      "Demand forecasting project using Excel Power Query and Python. Optimized stock levels, reduced overstock risk, and provided visualizations for better planning.",
    tools: ["Excel", "Python", "Power Query"],
    github: "https://github.com/yourusername/inventory-optimization",
    images: ["/projects/inventory-optimization.png"],
    category: "data",
  },
  {
    slug: "marketing-attribution",
    title: "Marketing Attribution",
    description:
      "Built a multi-channel attribution model to analyze campaign effectiveness. Measured ROI across Paid, Organic, and Referral traffic, revealing key drivers of conversions.",
    tools: ["Python", "SQL", "Power BI"],
    github: "https://github.com/yourusername/marketing-attribution",
    images: ["/projects/marketing-attribution.png"],
    category: "data",
  },
  {
    slug: "hr-analytics",
    title: "HR Analytics",
    description:
      "Analyzed employee headcount, retention, and diversity metrics. Delivered dashboards highlighting attrition risks, DEI representation, and workforce insights.",
    tools: ["SQL", "Excel", "Power BI"],
    github: "https://github.com/yourusername/hr-analytics",
    images: ["/projects/hr-analytics.png"],
    category: "data",
  },
];
