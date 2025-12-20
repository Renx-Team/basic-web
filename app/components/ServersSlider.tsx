'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface Server {
  name: string;
  members: number;
  avatar: string;
}

export default function ServersSlider() {
  const [servers, setServers] = useState<Server[]>([
    { name: "Gaming Hub", members: 12500, avatar: "/Logo.png" },
    { name: "Music Paradise", members: 8900, avatar: "/Logo.png" },
    { name: "Tech Community", members: 15200, avatar: "/Logo.png" },
    { name: "Art Studio", members: 6700, avatar: "/Logo.png" },
    { name: "Business Network", members: 11200, avatar: "/Logo.png" },
    { name: "Education Center", members: 9800, avatar: "/Logo.png" },
  ]);

  return (
    <section className="relative z-10 bg-black/50 py-16 overflow-hidden">
      <div className="relative">
        {/* Fog gradient overlays - stronger fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 via-black/40 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 via-black/40 to-transparent z-20 pointer-events-none"></div>
        
        {/* Animated Slider */}
        <div className="flex animate-scroll-right gap-12">
          {/* First set */}
          {servers.map((server, index) => (
            <div
              key={`first-${index}`}
              className="server-card flex-shrink-0 flex items-center gap-5 transition-all duration-500 hover:scale-105"
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={server.avatar}
                  alt={server.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-[#5865F2]/50"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-xl mb-1 truncate">{server.name}</h3>
                <p className="text-gray-300 text-sm font-medium">
                  <span className="text-[#5865F2]">{server.members.toLocaleString()}</span> members
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {servers.map((server, index) => (
            <div
              key={`second-${index}`}
              className="server-card flex-shrink-0 flex items-center gap-5 transition-all duration-500 hover:scale-105"
            >
              <div className="relative flex-shrink-0">
                <Image
                  src={server.avatar}
                  alt={server.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-[#5865F2]/50"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-xl mb-1 truncate">{server.name}</h3>
                <p className="text-gray-300 text-sm font-medium">
                  <span className="text-[#5865F2]">{server.members.toLocaleString()}</span> members
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

