"use client";   // MUST be first line for client components

import ScrollReveal from "../../components/ScrollReveal";

export default function ServicesPage() {

  const items = [
    { 
      title: "Web Development",
      body: "Next.js, React, Node.js, API design",
      img: "/images/services/web.png"
    },
    { 
      title: "UI/UX Design",
      body: "Design systems, prototyping, research",
      img: "/images/services/design.png"
    },
    { 
      title: "Brand Strategy",
      body: "Identity, messaging, positioning",
      img: "/images/services/brand.png"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] pt-32 px-6">

      {/* PAGE TITLE */}
      <ScrollReveal>
        <h1 className="text-center text-4xl font-bold text-white mb-12">
          Our Services
        </h1>
      </ScrollReveal>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div
              className="
                bg-[#111214]
                p-6
                rounded-xl
                shadow-lg
                border border-white/5
                hover:border-green-500/40
                hover:shadow-green-500/20
                transition
                cursor-pointer
                card-glow
              "
            >
              <img
                src={item.img}
                className="h-24 mx-auto mb-4 object-contain"
                alt={item.title}
              />

              <h3 className="text-white text-xl font-semibold text-center">
                {item.title}
              </h3>

              <p className="text-gray-400 text-center mt-2">
                {item.body}
              </p>
            </div>
          </ScrollReveal>
        ))}

      </div>
    </div>
  );
}
