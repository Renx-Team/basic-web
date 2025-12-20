'use client';

import { TickCircle } from "iconsax-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "/month",
      badge: null,
      features: [
        "1 Ready-made Bot",
        "Basic Support",
        "Up to 3 Servers",
        "Standard Features"
      ],
      buttonText: "Get Started",
      buttonStyle: "border-2 border-[#5865F2]/30 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 active:scale-95"
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      badge: "POPULAR",
      features: [
        "3 Ready-made Bots",
        "Priority Support",
        "Unlimited Servers",
        "Custom Features",
        "Advanced Moderation"
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-[#5865F2] hover:bg-[#4752C4] active:scale-95 shadow-lg shadow-[#5865F2]/30"
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      badge: null,
      features: [
        "Everything in Pro",
        "Custom Bot Development",
        "Dedicated Support",
        "Design Services Included",
        "White Label Options",
        "API Access"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "border-2 border-[#5865F2]/30 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 active:scale-95"
    }
  ];

  return (
    <section id="pricing" className="relative z-10 bg-black px-4 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan that fits your server's needs. All plans include 
            regular updates, security patches, and access to our knowledge base.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${
                plan.badge ? 'border-[#5865F2]/40 bg-[#5865F2]/10' : 'border-[#5865F2]/20 bg-[#5865F2]/5'
              } p-8 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/20`}
            >
              {plan.badge && (
                <div className="mb-4">
                  <span className="rounded-full bg-[#5865F2] px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#5865F2]">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <TickCircle size={20} variant="Bold" color="#10b981" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full rounded-lg px-6 py-3.5 font-semibold text-white transition-all duration-200 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

