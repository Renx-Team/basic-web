'use client';

import Image from "next/image";
import { Star1, ArrowRight2, Play } from "iconsax-react";
import RotatingLogo from "./RotatingLogo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Blurred GIF Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/background.gif)',
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      {/* Hero Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-120px)] items-center px-4 py-16 md:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          {/* Left Side - Content */}
          <div className="space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5865F2]/30 bg-[#5865F2]/10 px-4 py-2 backdrop-blur-sm">
              <Star1 size={20} variant="Bold" color="#5865F2" />
              <span className="text-sm font-semibold text-white">Premium Discord Services</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              <span className="block">Professional</span>
              <span className="block bg-gradient-to-r from-white via-[#5865F2] to-[#5865F2] bg-clip-text text-transparent">
                Discord Services
              </span>
            </h1>
            
            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Transform your Discord server into a professional community with our comprehensive services. 
              From ready-made bots to custom programming and stunning designs, we provide everything you need 
              to create an exceptional server experience that stands out from the crowd.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-[#4752C4] active:scale-95 shadow-lg shadow-[#5865F2]/30">
                Get Started
                <ArrowRight2 size={20} variant="Bold" color="#ffffff" className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="group flex items-center justify-center gap-2 rounded-lg border-2 border-[#5865F2]/30 bg-[#5865F2]/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 active:scale-95">
                <Play size={20} variant="Bold" color="#ffffff" className="transition-transform group-hover:scale-110" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-4 pt-4">
              <p className="text-sm text-gray-400">Trusted by leading Discord communities</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <span className="text-sm font-medium text-white">500+ Active Servers</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <span className="text-sm font-medium text-white">10K+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10">
                  <span className="text-sm font-medium text-white">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Logo */}
          <RotatingLogo />
        </div>
      </main>
    </section>
  );
}

