'use client';

import { ShoppingCart, Code, Brush, TickCircle } from "iconsax-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Bot Sales",
      description: "Browse our extensive collection of ready-made Discord bots designed for every need. From music bots with crystal-clear audio quality to advanced moderation systems that keep your server safe, we offer premium bots that are tested, optimized, and ready to deploy instantly. All bots come with comprehensive documentation and support.",
      features: [
        "Music bots with high-quality audio",
        "Moderation and security systems",
        "Economy and gaming bots",
        "Fully tested and optimized"
      ]
    },
    {
      icon: Code,
      title: "Custom Programming",
      description: "Need a bot tailored specifically to your server's unique requirements? Our expert developers create custom Discord bots from scratch, implementing your exact specifications. We handle everything from initial concept to deployment, ensuring your bot performs flawlessly and integrates seamlessly with your server's ecosystem.",
      features: [
        "Custom bot development",
        "Full source code included",
        "Lifetime updates and support",
        "Professional documentation"
      ]
    },
    {
      icon: Brush,
      title: "Design Services",
      description: "Make your Discord server visually stunning with our professional design services. We create custom banners, logos, emojis, and graphics that perfectly represent your community's identity. Our designers work closely with you to ensure every element matches your vision and enhances your server's aesthetic appeal.",
      features: [
        "Custom server banners",
        "Logo and branding design",
        "Emoji and sticker creation",
        "Complete visual identity packages"
      ]
    }
  ];

  return (
    <section id="services" className="relative z-10 bg-black px-4 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive Discord solutions designed to elevate your server 
            and provide your community with the best possible experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group rounded-xl border border-[#5865F2]/20 bg-[#5865F2]/5 p-8 backdrop-blur-sm transition-all hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/20"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[#5865F2]/20">
                  <IconComponent size={32} variant="Bold" color="#5865F2" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">{service.title}</h3>
                <p className="mb-4 text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <TickCircle size={16} variant="Bold" color="#5865F2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

