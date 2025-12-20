'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* GIF Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/background.gif)',
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

