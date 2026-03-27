export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-5 h-11 flex-shrink-0"
      style={{
        background: 'linear-gradient(90deg, #13113a 0%, #1a1750 40%, #1e1b56 70%, #1a1850 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Left: Logo + Brand + Workspace selector */}
      <div className="flex items-center gap-2.5">
        {/* Logo icon — two overlapping arcs */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 3C7.134 3 4 6.134 4 10C4 11.8 4.72 13.43 5.88 14.63"
            stroke="#7C6FF7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M11 19C14.866 19 18 15.866 18 12C18 10.2 17.28 8.57 16.12 7.37"
            stroke="#A89FF7"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="11" cy="11" r="2.2" fill="#7C6FF7" />
        </svg>

        {/* Brand name */}
        <span className="text-white font-semibold text-sm tracking-wide">Worcspace</span>

        {/* Divider */}
        <span className="text-white/20 text-sm font-light mx-0.5">|</span>

        {/* Workspace selector */}
        <button
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md cursor-pointer transition-colors"
          style={{ border: '1px solid rgba(255,255,255,0.15)', backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          <span className="text-white/85 text-xs font-medium">Worcspace 1</span>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M2.5 4L5.5 7L8.5 4"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 flex justify-center px-8">
        <div
          className="flex items-center gap-2.5 w-full max-w-sm px-3.5 py-1.5 rounded-lg"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
            <circle cx="5.5" cy="5.5" r="4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" />
            <path d="M8.5 8.5L11 11" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="text-white/35 text-xs flex-1">Search...</span>
          <span
            className="text-xs px-1.5 py-0.5 rounded"
            style={{ color: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.07)', fontSize: '10px' }}
          >
            ⌘K
          </span>
        </div>
      </div>

      {/* Right: Bell + Avatar */}
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-white/10 transition-colors">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.5 1.5C5.29 1.5 3.5 3.29 3.5 5.5V9L2 10.5V11H13V10.5L11.5 9V5.5C11.5 3.29 9.71 1.5 7.5 1.5Z"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.1"
              strokeLinejoin="round"
            />
            <path
              d="M6 11.5C6 12.328 6.672 13 7.5 13C8.328 13 9 12.328 9 11.5"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.1"
            />
          </svg>
        </button>

        {/* Avatar */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: '#16A34A', fontSize: '10px', letterSpacing: '0.03em' }}
        >
          GK
        </div>
      </div>
    </header>
  )
}
