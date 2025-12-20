'use client';

import { Code } from "iconsax-react";

export default function RotatingLogo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* 3D Icon Container */}
      <div 
        className="relative z-10 logo-3d transition-all hover:scale-110"
        style={{
          filter: 'drop-shadow(0 0 40px rgba(88, 101, 242, 0.4)) drop-shadow(0 0 80px rgba(88, 101, 242, 0.2))',
          transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
        }}
      >
        <div className="relative p-12 rounded-2xl bg-gradient-to-br from-[#5865F2]/20 via-[#5865F2]/10 to-[#5865F2]/5 backdrop-blur-sm border border-[#5865F2]/30">
          <div 
            className="flex items-center justify-center"
            style={{
              width: '400px',
              height: '400px',
            }}
          >
            <Code 
              size={400} 
              variant="Bold" 
              color="#5865F2"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(88, 101, 242, 0.5))',
                transform: 'scale(1)',
                imageRendering: 'crisp-edges',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

