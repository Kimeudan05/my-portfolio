import {
  FaLaptopCode,
  FaChartLine,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      category: "Web Development",
      items: [
        {
          title: "Responsive Websites",
          description:
            "I design and build responsive websites using React, Next.js, and TailwindCSS, ensuring a modern, accessible, and mobile-friendly experience.",
          icon: <FaLaptopCode />,
        },
        {
          title: "Full-Stack Applications",
          description:
            "I develop secure, scalable apps with authentication, role-based access, and database integration using Supabase, Firebase, and FastAPI.",
          icon: <FaDatabase />,
        },
        {
          title: "API Integrations",
          description:
            "I integrate third-party APIs such as payments (M-Pesa, Stripe), social login, and analytics to enhance business workflows.",
          icon: <FaMobileAlt />,
        },
      ],
    },
    {
      category: "Data Analytics",
      items: [
        {
          title: "Dashboards & Reports",
          description:
            "I build interactive dashboards with Power BI and Streamlit, enabling teams to visualize performance KPIs in real time.",
          icon: <FaChartLine />,
        },
        {
          title: "Customer Insights",
          description:
            "I deliver segmentation, churn analysis, and forecasting solutions using Python, SQL, and advanced statistical models.",
          icon: <FaDatabase />,
        },
        {
          title: "Data Automation",
          description:
            "I streamline data pipelines with SQL, Excel Power Query, and Python scripts, reducing manual work and improving data accuracy.",
          icon: <FaLaptopCode />,
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Services
        </h1>

        {/* Loop through categories */}
        {services.map((group, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              {group.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((service, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition"
                >
                  <div className="text-3xl mb-4 text-blue-600 dark:text-yellow-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
