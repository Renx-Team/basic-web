'use client';

export default function CTASection() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-gray-900 to-black px-4 py-20 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Ready to Transform Your Server?
        </h2>
        <p className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
          Join thousands of Discord server owners who have elevated their communities 
          with Basic Service. Start your free trial today and experience the difference 
          professional services can make.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="rounded-lg bg-[#5865F2] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[#4752C4] active:scale-95 shadow-lg shadow-[#5865F2]/30">
            Start Free Trial
          </button>
          <button className="rounded-lg border-2 border-[#5865F2]/30 bg-[#5865F2]/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 active:scale-95">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

