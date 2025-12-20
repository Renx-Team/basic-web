'use client';

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Active Servers", description: "Discord servers using our services" },
    { value: "10K+", label: "Happy Clients", description: "Satisfied customers worldwide" },
    { value: "99.9%", label: "Uptime", description: "Reliable service guarantee" },
    { value: "24/7", label: "Support", description: "Always here to help you" }
  ];

  return (
    <section className="relative z-10 bg-gradient-to-b from-black to-gray-900 px-4 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Trusted by Thousands
          </h2>
          <p className="text-gray-400">
            Join the growing community of Discord server owners who trust Basic Service
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="mb-2 text-5xl font-bold text-[#5865F2]">{stat.value}</div>
              <div className="mb-1 text-lg font-semibold text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

