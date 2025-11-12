"use client";

export const BackgroundLines = () => {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background: `
            radial-gradient(120% 100% at 50% 0%, #4CDAE0 0%, #4CE083 60%, #4CE0B5 100%),
            repeating-linear-gradient(115deg, rgba(255,255,255,.04) 0 3px, rgba(0,0,0,.02) 3px 6px),
            repeating-linear-gradient(25deg, rgba(0,0,0,.015) 0 2px, rgba(255,255,255,.03) 2px 4px)
          `,
          boxShadow: "inset 0 0 120px rgba(0,0,0,.08)",
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-80 mix-blend-multiply my-auto"
        viewBox="0 0 1000 250"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="stroke" x1="0" x2="1">
            <stop offset="0" stopColor="#36C5E0" stopOpacity=".2" />
            <stop offset="1" stopColor="#36C5E0" stopOpacity=".3" />
          </linearGradient>
          <path
            id="wave"
            d="M-50,180 C150,120 350,240 550,150 S950,60 1100,140"
          />
        </defs>

        <g
          fill="none"
          stroke="url(#stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="animate-waves"
        >
          <use href="#wave" />
          <use
            href="#wave"
            transform="translate(0,-18) scale(1.02,1)"
            opacity=".9"
          />
          <use
            href="#wave"
            transform="translate(0,-36) scale(1.04,1)"
            opacity=".8"
          />
          <use
            href="#wave"
            transform="translate(0,-54) scale(1.06,1)"
            opacity=".7"
          />
          <use
            href="#wave"
            transform="translate(0,16) scale(1.01,1)"
            opacity=".9"
          />
          <use
            href="#wave"
            transform="translate(0,32) scale(1.03,1)"
            opacity=".8"
          />
          <use
            href="#wave"
            transform="translate(0,48) scale(1.05,1)"
            opacity=".7"
          />
        </g>

        <g fill="none" stroke="#4CDAE0" strokeOpacity=".05" strokeWidth=".8">
          <path d="M-20,250 C160,210 320,190 520,210 S900,250 1040,230" />
          <path d="M-20,10  C140,30  360,10  560,30  S900,70  1040,40" />
          <path d="M-20,120 C120,90  340,140 520,100 S900,80  1040,110" />
        </g>
      </svg>
    </>
  );
};
