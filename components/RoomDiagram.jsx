export default function RoomDiagram() {
  return (
    <svg width="100%" height="210" viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top-down surround sound room layout with screen, speakers, subwoofer, Atmos overheads and couch">
      <rect x="8" y="8" width="284" height="194" rx="8" fill="#15171F" stroke="rgba(255,255,255,.12)" />
      <rect x="90" y="16" width="120" height="9" rx="2" fill="#F2A93B" />
      <text x="150" y="40" fill="#aeb3c0" fontFamily="Space Grotesk" fontSize="9" textAnchor="middle">SCREEN</text>
      <g fill="#fff" fontFamily="Space Grotesk" fontSize="9" textAnchor="middle">
        <rect x="42" y="48" width="18" height="14" rx="2" fill="#2a2e3a" /><text x="51" y="58">FL</text>
        <rect x="141" y="48" width="18" height="14" rx="2" fill="#2a2e3a" /><text x="150" y="58">C</text>
        <rect x="240" y="48" width="18" height="14" rx="2" fill="#2a2e3a" /><text x="249" y="58">FR</text>
        <rect x="30" y="108" width="18" height="14" rx="2" fill="#2a2e3a" /><text x="39" y="118">SL</text>
        <rect x="252" y="108" width="18" height="14" rx="2" fill="#2a2e3a" /><text x="261" y="118">SR</text>
        <rect x="50" y="170" width="20" height="15" rx="2" fill="#2a2e3a" /><text x="60" y="181">SUB</text>
      </g>
      <circle cx="110" cy="95" r="9" fill="none" stroke="#F2A93B" strokeWidth="1.4" strokeDasharray="3 3" />
      <text x="110" y="98" fill="#F2A93B" fontFamily="Space Grotesk" fontSize="7" textAnchor="middle">ATM</text>
      <circle cx="190" cy="95" r="9" fill="none" stroke="#F2A93B" strokeWidth="1.4" strokeDasharray="3 3" />
      <text x="190" y="98" fill="#F2A93B" fontFamily="Space Grotesk" fontSize="7" textAnchor="middle">ATM</text>
      <ellipse cx="150" cy="150" rx="58" ry="30" fill="#F2A93B" opacity="0.10" />
      <rect x="116" y="150" width="68" height="26" rx="6" fill="#3a3f4d" />
      <rect x="110" y="156" width="10" height="20" rx="4" fill="#3a3f4d" />
      <rect x="180" y="156" width="10" height="20" rx="4" fill="#3a3f4d" />
    </svg>
  );
}
