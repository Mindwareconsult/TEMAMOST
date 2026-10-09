import React from 'react';

interface TemamostLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const TemamostLogo: React.FC<TemamostLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false
}) => {
  // Height sizing based on scale
  const heights = {
    sm: 'h-9',
    md: 'h-11 md:h-12',
    lg: 'h-14 md:h-16',
    xl: 'h-20'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authoritative Vector Mark matching Temamost logo.jpg */}
      <svg
        viewBox="0 0 540 180"
        className={`${heights[size]} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Temamost Nigeria Ltd Logo"
      >
        <title>Temamost Nigeria Ltd Logo</title>
        
        {/* Emblem Group */}
        <g id="temamost-emblem" transform="translate(14, 12)">
          {/* Deep Navy 'C' Curve */}
          <path
            d="M 125 24 
               C 74 24, 20 54, 20 96 
               C 20 138, 74 168, 125 168 
               L 162 168 
               L 162 134 
               L 122 134 
               C 88 134, 62 118, 62 96 
               C 62 74, 88 58, 122 58 
               L 138 58 
               L 138 24 
               Z"
            fill="#0D1B3E"
          />

          {/* Vibrant Red Geometric 'T' */}
          <path
            d="M 148 24 
               L 242 24 
               L 242 88 
               L 214 88 
               L 214 62 
               L 194 62 
               L 224 168 
               L 178 168 
               L 150 70 
               L 142 70 
               L 142 42 
               L 148 24 
               Z"
            fill="#E31E24"
          />
        </g>

        {/* Authoritative Brand Typography */}
        <g id="temamost-typography" transform="translate(262, 42)">
          {/* CONSTRUCTIONS in Deep Navy */}
          <text
            x="0"
            y="42"
            fontFamily="'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            fontSize="31"
            fontWeight="800"
            letterSpacing="2.8"
            fill="#0D1B3E"
          >
            CONSTRUCTIONS
          </text>

          {/* TEMAmost in Vibrant Red */}
          <text
            x="12"
            y="88"
            fontFamily="'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif"
            fontSize="45"
            fontWeight="900"
            letterSpacing="0.5"
          >
            <tspan fill="#E31E24">TEMA</tspan>
            <tspan fill="#E31E24" fontWeight="700">most</tspan>
          </text>
        </g>
      </svg>

      {showTagline && (
        <div className="hidden lg:flex flex-col border-l border-slate-200 pl-3">
          <span className="text-[10px] font-bold tracking-widest text-[#0D1B3E] uppercase font-['Montserrat']">
            Nigeria Ltd
          </span>
          <span className="text-[9px] text-slate-500 font-medium tracking-tight">
            Engineering & Infrastructure
          </span>
        </div>
      )}
    </div>
  );
};
