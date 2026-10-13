export default function ForceCurveChart() {
  return (
    <div className="w-full relative aspect-[16/10] bg-surface border border-outline-variant/30 p-4 flex items-center justify-center">
      <svg
        aria-label="Force Curve Chart"
        className="w-full h-full text-primary overflow-visible"
        viewBox="0 0 400 240"
      >
        <line
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          x1="40"
          x2="380"
          y1="20"
          y2="20"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          x1="40"
          x2="380"
          y1="70"
          y2="70"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          x1="40"
          x2="380"
          y1="120"
          y2="120"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          x1="40"
          x2="380"
          y1="170"
          y2="170"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
          x1="40"
          x2="380"
          y1="210"
          y2="210"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
          x1="40"
          x2="40"
          y1="20"
          y2="210"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          x1="125"
          x2="125"
          y1="20"
          y2="210"
        />
        <line
          stroke="currentColor"
          strokeDasharray="3 3"
          strokeOpacity="0.12"
          strokeWidth="1"
          x1="210"
          x2="210"
          y1="20"
          y2="210"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
          x1="295"
          x2="295"
          y1="20"
          y2="210"
        />
        <line
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
          x1="380"
          x2="380"
          y1="20"
          y2="210"
        />
        <line
          stroke="#5b6241"
          strokeDasharray="4 2"
          strokeWidth="1.5"
          x1="210"
          x2="210"
          y1="20"
          y2="210"
        />
        <path
          d="M 40 185 Q 140 155, 210 135 T 380 40"
          fill="none"
          stroke="#20211f"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M 380 55 Q 260 145, 210 150 T 40 195"
          fill="none"
          stroke="#757873"
          strokeDasharray="3 3"
          strokeWidth="1.5"
        />
        <circle cx="210" cy="135" fill="#5b6241" r="4.5" />
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="end"
          x="32"
          y="213"
        >
          0
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="end"
          x="32"
          y="173"
        >
          25
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="end"
          x="32"
          y="138"
        >
          45
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="end"
          x="32"
          y="73"
        >
          60
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="end"
          x="32"
          y="43"
        >
          80gf
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="middle"
          x="40"
          y="226"
        >
          0mm
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="middle"
          x="125"
          y="226"
        >
          1.0
        </text>
        <text
          fill="#5b6241"
          fontFamily="Space Grotesk"
          fontSize="9"
          fontWeight="600"
          textAnchor="middle"
          x="210"
          y="226"
        >
          2.0 (Act)
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="middle"
          x="295"
          y="226"
        >
          3.0
        </text>
        <text
          fill="#757873"
          fontFamily="Space Grotesk"
          fontSize="9"
          textAnchor="middle"
          x="380"
          y="226"
        >
          4.0
        </text>
      </svg>
    </div>
  );
}
