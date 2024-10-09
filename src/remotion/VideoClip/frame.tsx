import React from 'react';
import { Video } from 'remotion';
import type { PropsWithChildren } from 'react';

const GoldenFrame = (p: PropsWithChildren) => {
  return (
    <div className="relative w-full mx-auto">
        <div className="absolute inset-0">
          {/* Video */}
          {p.children}
          {/* Golden Frame */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top */}
            <div className="absolute top-0 left-0 right-0 h-[10%] bg-gradient-to-b from-yellow-600 to-yellow-500 opacity-80"></div>
            
            {/* Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-yellow-600 to-yellow-500 opacity-80"></div>
            
            {/* Left */}
            <div className="absolute top-[10%] bottom-[10%] left-0 w-[7%] bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-80"></div>
            
            {/* Right */}
            <div className="absolute top-[10%] bottom-[10%] right-0 w-[7%] bg-gradient-to-l from-yellow-600 to-yellow-500 opacity-80"></div>
            
            {/* Corners */}
            <div className="absolute top-0 left-0 w-[10%] h-[10%] border-t-4 border-l-4 border-yellow-600 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-[10%] h-[10%] border-t-4 border-r-4 border-yellow-600 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-[10%] h-[10%] border-b-4 border-l-4 border-yellow-600 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-[10%] h-[10%] border-b-4 border-r-4 border-yellow-600 rounded-br-lg"></div>
            
            {/* Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23000000' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                 }}
            ></div>
          </div>
        </div>
      </div>
  );
};

export default GoldenFrame;