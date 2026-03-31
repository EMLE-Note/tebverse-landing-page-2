import React from 'react';

const Logo = ({ height = "50px" }) => (
  <div style={{ height, display: 'flex', alignItems: 'center' }}>
    <svg 
      width="240" 
      height="80" 
      viewBox="0 0 240 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#9C00F0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7a00bd', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        filter="url(#shadow)"
        style={{
          fontFamily: "'Playfair Display', 'Times New Roman', Serif",
          fontSize: '44px',
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}
        fill="url(#logoGrad)"
      >
        TebVerse
      </text>
      <line
        x1="140"
        y1="38"
        x2="210"
        y2="38"
        stroke="url(#logoGrad)"
        strokeWidth="1.2"
        filter="url(#shadow)"
      />
    </svg>
  </div>
);

export default Logo;
