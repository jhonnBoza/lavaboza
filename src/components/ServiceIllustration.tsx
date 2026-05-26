type ServiceIllustrationProps = {
  type: string
  className?: string
}

export default function ServiceIllustration({ type, className = '' }: ServiceIllustrationProps) {
  return (
    <div className={`service-illustration flex items-center justify-center ${className}`}>
      {illustrations[type] ?? illustrations.plug}
    </div>
  )
}

const illustrations: Record<string, React.ReactNode> = {
  'washing-machine': (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <defs>
        <linearGradient id="wash-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>
      <rect x="28" y="18" width="64" height="84" rx="8" fill="url(#wash-body)" />
      <rect x="34" y="24" width="52" height="8" rx="2" fill="#94a3b8" />
      <circle cx="60" cy="62" r="22" fill="#f8fafc" stroke="#64748b" strokeWidth="2" />
      <g className="service-wash-drum origin-center" style={{ transformOrigin: '60px 62px' }}>
        <circle cx="60" cy="62" r="16" fill="none" stroke="#84cc16" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="60" cy="62" r="8" fill="#84cc16" opacity="0.25" />
      </g>
      <rect x="38" y="88" width="44" height="6" rx="2" fill="#64748b" />
    </svg>
  ),
  refrigerator: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="36" y="14" width="48" height="92" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <line x1="36" y1="52" x2="84" y2="52" stroke="#94a3b8" strokeWidth="2" />
      <rect x="72" y="28" width="4" height="16" rx="2" fill="#64748b" />
      <rect x="72" y="62" width="4" height="20" rx="2" fill="#64748b" />
      <g className="service-cold-shimmer">
        <circle cx="52" cy="36" r="3" fill="#7dd3fc" opacity="0.8" />
        <circle cx="58" cy="70" r="2.5" fill="#38bdf8" opacity="0.7" />
        <circle cx="48" cy="78" r="2" fill="#0ea5e9" opacity="0.6" />
      </g>
    </svg>
  ),
  snowflake: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="34" y="20" width="52" height="80" rx="6" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
      <rect x="40" y="28" width="40" height="50" rx="4" fill="#e0f2fe" />
      <g className="service-snow-float">
        <path d="M50 38 L50 48 M45 43 L55 43 M47 40 L53 46 M53 40 L47 46" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M62 58 L62 66 M59 62 L65 62 M60 59 L64 65 M64 59 L60 65" stroke="#7dd3fc" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M46 68 L46 76 M43 72 L49 72 M44 69 L48 75 M48 69 L44 75" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round" />
      </g>
      <rect x="46" y="84" width="28" height="6" rx="2" fill="#64748b" />
    </svg>
  ),
  microwave: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="22" y="34" width="76" height="52" rx="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <rect x="28" y="40" width="44" height="40" rx="3" fill="#1e293b" />
      <g className="service-microwave-wave">
        <path d="M38 60 Q44 52 50 60 T62 60" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.9" />
        <path d="M38 68 Q44 60 50 68 T62 68" fill="none" stroke="#a3e635" strokeWidth="1.5" opacity="0.7" />
      </g>
      <rect x="78" y="44" width="12" height="32" rx="2" fill="#cbd5e1" />
      <circle cx="84" cy="52" r="3" fill="#84cc16" className="service-pulse-dot" />
    </svg>
  ),
  blender: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="44" y="72" width="32" height="20" rx="4" fill="#64748b" />
      <path d="M48 72 L52 38 L68 38 L72 72 Z" fill="#94a3b8" opacity="0.5" />
      <rect x="50" y="28" width="20" height="14" rx="3" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <g className="service-blade-spin" style={{ transformOrigin: '60px 55px' }}>
        <ellipse cx="60" cy="55" rx="14" ry="4" fill="#84cc16" opacity="0.85" />
        <ellipse cx="60" cy="55" rx="4" ry="14" fill="#84cc16" opacity="0.85" />
      </g>
    </svg>
  ),
  'cooking-pot': (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <ellipse cx="60" cy="86" rx="30" ry="8" fill="#94a3b8" />
      <rect x="32" y="58" width="56" height="28" rx="10" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <path d="M34 58 Q60 48 86 58" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
      <ellipse cx="60" cy="58" rx="26" ry="7" fill="#cbd5e1" />
      <path d="M38 52 Q60 42 82 52 Q82 58 60 56 Q38 58 38 52" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="46" y="66" width="28" height="10" rx="3" fill="#334155" />
      <rect x="50" y="69" width="8" height="4" rx="1" fill="#84cc16" className="service-pulse-dot" />
      <circle cx="66" cy="71" r="1.5" fill="#64748b" />
      <path d="M32 68 Q28 68 28 72" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <path d="M88 68 Q92 68 92 72" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <g className="service-steam-rise">
        <path d="M54 44 Q52 36 54 30" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 42 Q58 32 60 24" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M66 44 Q68 36 66 30" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  ),
  gauge: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <ellipse cx="60" cy="84" rx="28" ry="8" fill="#94a3b8" />
      <path d="M34 84 L34 58 Q34 48 60 48 Q86 48 86 58 L86 84 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
      <rect x="36" y="52" width="48" height="8" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
      <rect x="57" y="34" width="6" height="16" rx="2" fill="#475569" />
      <ellipse cx="60" cy="32" rx="8" ry="4" fill="#64748b" />
      <rect x="40" y="54" width="6" height="4" rx="1" fill="#475569" />
      <rect x="74" y="54" width="6" height="4" rx="1" fill="#475569" />
      <path d="M30 62 Q26 62 26 66" fill="none" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M90 62 Q94 62 94 66" fill="none" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="60" cy="68" r="10" fill="none" stroke="#84cc16" strokeWidth="2" opacity="0.5" className="service-pulse-dot" />
      <g className="service-valve-steam">
        <path d="M58 28 Q56 22 58 18" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        <path d="M62 28 Q64 22 62 18" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="42" y="76" width="36" height="12" rx="3" fill="#64748b" />
      <path d="M46 76 L50 44 Q60 40 70 44 L74 76 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <path d="M74 52 Q88 52 88 62 Q88 72 74 72" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
      <g className="service-steam-rise">
        <path d="M52 38 Q50 28 52 18" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 36 Q58 24 60 14" fill="none" stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M68 38 Q70 28 68 18" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="26" y="72" width="68" height="28" rx="5" fill="#475569" stroke="#334155" strokeWidth="1.5" />
      <rect x="34" y="78" width="52" height="16" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
      <rect x="40" y="82" width="40" height="8" rx="1" fill="#334155" opacity="0.6" />
      <rect x="26" y="48" width="68" height="26" rx="4" fill="#64748b" />
      <circle cx="42" cy="58" r="7" fill="#334155" stroke="#475569" strokeWidth="1.5" />
      <circle cx="60" cy="58" r="7" fill="#334155" stroke="#475569" strokeWidth="1.5" />
      <circle cx="78" cy="58" r="7" fill="#334155" stroke="#475569" strokeWidth="1.5" />
      <g className="service-flame-flicker" style={{ transformOrigin: '42px 58px' }}>
        <path d="M42 58 Q38 52 42 46 Q46 52 42 58" fill="#fbbf24" />
        <path d="M42 56 Q40 52 42 49 Q44 52 42 56" fill="#f97316" />
      </g>
      <g className="service-flame-flicker service-flame-delay" style={{ transformOrigin: '60px 58px' }}>
        <path d="M60 58 Q56 52 60 46 Q64 52 60 58" fill="#fbbf24" />
        <path d="M60 56 Q58 52 60 49 Q62 52 60 56" fill="#f97316" />
      </g>
      <g className="service-flame-flicker" style={{ transformOrigin: '78px 58px' }}>
        <path d="M78 58 Q74 52 78 46 Q82 52 78 58" fill="#fbbf24" />
        <path d="M78 56 Q76 52 78 49 Q80 52 78 56" fill="#f97316" />
      </g>
      <circle cx="36" cy="68" r="3" fill="#cbd5e1" />
      <circle cx="48" cy="68" r="3" fill="#cbd5e1" />
      <circle cx="72" cy="68" r="3" fill="#cbd5e1" />
      <circle cx="84" cy="68" r="3" fill="#cbd5e1" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" aria-hidden>
      <rect x="22" y="24" width="76" height="72" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
      <g className="service-appliance-float" style={{ transformOrigin: '42px 48px' }}>
        <rect x="30" y="36" width="22" height="28" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="41" cy="50" r="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.2" />
      </g>
      <g className="service-appliance-float service-appliance-delay" style={{ transformOrigin: '60px 48px' }}>
        <rect x="50" y="32" width="18" height="36" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="50" y1="48" x2="68" y2="48" stroke="#94a3b8" strokeWidth="1.5" />
      </g>
      <g className="service-appliance-float service-appliance-delay-2" style={{ transformOrigin: '78px 48px' }}>
        <rect x="70" y="38" width="24" height="22" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="74" y="42" width="14" height="10" rx="1" fill="#334155" />
      </g>
      <circle cx="60" cy="78" r="12" fill="#84cc16" opacity="0.15" className="service-pulse-dot" />
      <path d="M54 78 L60 72 L66 78 L63 78 L63 84 L57 84 L57 78 Z" fill="#84cc16" />
      <g className="service-spark">
        <circle cx="28" cy="30" r="2" fill="#a3e635" />
        <circle cx="92" cy="34" r="2" fill="#84cc16" />
        <circle cx="90" cy="82" r="1.5" fill="#65a30d" />
      </g>
    </svg>
  ),
}
