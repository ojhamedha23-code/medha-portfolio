export default function SketchIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustrated portrait"
    >
      {/* ── Accent dots ────────────────────────────── */}
      <circle cx="206" cy="18" r="3.5" fill="#8B1A2B" opacity="0.75" />
      <circle cx="218" cy="34" r="2"   fill="#8B1A2B" opacity="0.55" />
      <circle cx="200" cy="42" r="2.5" fill="#8B1A2B" opacity="0.6"  />
      <line x1="210" y1="56" x2="224" y2="49" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      <line x1="213" y1="70" x2="224" y2="66" stroke="#8B1A2B" strokeWidth="2"   strokeLinecap="round" opacity="0.45" />
      <circle cx="18"  cy="118" r="2.5" fill="#8B1A2B" opacity="0.5"  />
      <circle cx="10"  cy="136" r="1.5" fill="#8B1A2B" opacity="0.4"  />
      <line x1="20" y1="152" x2="30" y2="146" stroke="#8B1A2B" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
      <circle cx="212" cy="240" r="2"   fill="#8B1A2B" opacity="0.4" />
      <circle cx="220" cy="256" r="1.5" fill="#8B1A2B" opacity="0.3" />

      {/* ── HEAD fill first (no stroke) so hair layers over it cleanly ── */}
      <ellipse cx="120" cy="90" rx="40" ry="48" fill="#FEF6EE" />

      {/* ── HAIR ─────────────────────────────────────────────────────── */}

      {/* Crown: dark cap slightly wider than head, sits on top of face */}
      <path
        d="M 78 68
           C 77 54 80 38 87 28
           C 97 16 108 10 120 10
           C 132 10 143 16 153 28
           C 160 38 163 54 162 68
           C 158 62 152 58 145 56
           C 136 54 128 53 120 53
           C 112 53 104 54 95 56
           C 88 58 82 62 78 68 Z"
        fill="#1A1A1A"
      />

      {/* Crown texture — visible light strokes on dark hair */}
      <path d="M 97 22 C 108 16 120 13 133 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <path d="M 93 36 C 106 30 120 27 135 30" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
      <path d="M 90 50 C 104 46 120 44 138 47" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.18" />

      {/* Left side hair — strand lines flowing from temple down beside face */}
      <path
        d="M 80 68 C 75 84 73 104 75 124 C 76 136 80 144 85 148"
        stroke="#1A1A1A" strokeWidth="2.8" strokeLinecap="round" fill="none"
      />
      <path
        d="M 82 72 C 78 88 77 108 79 128 C 80 138 83 145 87 148"
        stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.55"
      />

      {/* Right side hair — strand lines flowing from temple down beside face */}
      <path
        d="M 160 68 C 165 84 167 104 165 124 C 164 136 160 144 155 148"
        stroke="#1A1A1A" strokeWidth="2.8" strokeLinecap="round" fill="none"
      />
      <path
        d="M 158 72 C 162 88 163 108 161 128 C 160 138 157 145 153 148"
        stroke="#1A1A1A" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.55"
      />

      {/* ── HEAD outline on top of hair ── */}
      <ellipse cx="120" cy="90" rx="40" ry="48" fill="none" stroke="#111111" strokeWidth="2.2" />

      {/* ── FACE ─────────────────────────────────── */}
      {/* Eyebrows */}
      <path d="M 97 80 C 103 75 110 75 114 78" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 126 78 C 130 75 138 75 143 80" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />

      {/* Eyes — upper lid arc + iris circle */}
      <path d="M 97 89 C 103 83 111 83 115 89" stroke="#111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="106" cy="88" r="3.2" fill="#111" />
      <circle cx="108" cy="86" r="1.2" fill="white" />
      <path d="M 125 89 C 131 83 139 83 143 89" stroke="#111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="134" cy="88" r="3.2" fill="#111" />
      <circle cx="136" cy="86" r="1.2" fill="white" />

      {/* Nose */}
      <path d="M 118 98 C 115 106 115 112 119 115 C 121 117 123 115 127 112 C 131 109 131 105 128 98"
        stroke="#111" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" fill="none" />

      {/* Smile */}
      <path d="M 105 122 C 111 131 129 131 135 122"
        stroke="#111" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Subtle cheek warmth */}
      <ellipse cx="96" cy="112" rx="7" ry="4.5" fill="#E8A898" opacity="0.18" />
      <ellipse cx="144" cy="112" rx="7" ry="4.5" fill="#E8A898" opacity="0.18" />

      {/* ── NECK ─────────────────────────────────── */}
      {/* Skin fill for neck */}
      <rect x="108" y="136" width="24" height="22" fill="#FEF6EE" />
      <path d="M 108 136 L 106 158" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 132 136 L 134 158" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />

      {/* ── BLAZER / BODY ────────────────────────── */}
      {/* Main blazer silhouette — collar V opens to lapels */}
      <path
        d="M 106 155
           C 86 160 58 174 42 196
           C 32 212 30 232 30 252
           L 30 290 L 210 290 L 210 252
           C 210 232 208 212 198 196
           C 182 174 154 160 134 155
           L 128 164 L 120 180 L 112 164 Z"
        fill="white" stroke="#111111" strokeWidth="2.2"
      />
      {/* Left lapel edge */}
      <path d="M 112 164 C 109 178 107 194 106 212" stroke="#111" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      {/* Right lapel edge */}
      <path d="M 128 164 C 131 178 133 194 134 212" stroke="#111" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      {/* Collar V detail */}
      <path d="M 106 155 C 112 160 116 164 120 168 C 124 164 128 160 134 155"
        stroke="#111" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Blazer shoulder seam — gives structure */}
      <path d="M 42 196 C 54 193 68 192 82 194" stroke="#111" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" fill="none" />
      <path d="M 198 196 C 186 193 172 192 158 194" stroke="#111" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" fill="none" />
      {/* Buttons */}
      <circle cx="120" cy="218" r="2.8" fill="none" stroke="#111" strokeWidth="1.4" />
      <circle cx="120" cy="236" r="2.8" fill="none" stroke="#111" strokeWidth="1.4" />

      {/* ── ARMS CROSSED ─────────────────────────── */}
      {/* Arm volume — warm skin tone band across body */}
      <path
        d="M 34 210 C 60 201 88 199 112 206 C 126 210 140 216 162 211
           C 178 207 194 201 204 197
           L 204 222 C 194 226 178 232 162 236
           C 140 241 126 235 112 231
           C 88 224 60 226 34 235 Z"
        fill="#FAEADE" stroke="#111111" strokeWidth="2"
      />
      {/* Top arm contour */}
      <path d="M 34 210 C 60 201 88 199 112 206 C 126 210 140 216 162 211 C 178 207 194 201 204 197"
        stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Bottom arm contour */}
      <path d="M 34 235 C 60 226 88 224 112 231 C 126 235 140 241 162 236 C 178 232 194 226 204 222"
        stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Left hand */}
      <path d="M 34 210 C 29 218 28 228 30 236 C 32 241 36 242 40 240 C 42 237 44 233 46 230"
        stroke="#111" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      {/* Right hand */}
      <path d="M 204 197 C 209 205 210 215 208 223 C 206 228 202 229 198 227 C 196 224 193 220 191 216"
        stroke="#111" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      {/* Arm overlap crease */}
      <path d="M 110 208 C 118 211 126 214 136 212"
        stroke="#111" strokeWidth="1.3" strokeLinecap="round" opacity="0.4" fill="none" />
    </svg>
  );
}
