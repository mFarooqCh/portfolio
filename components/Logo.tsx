import Link from 'next/link';

const VARIANTS = {
  header: {
    gap: 'gap-2.5',
    mark: 'h-7 w-7',
    name: 'text-sm font-semibold tracking-tight text-fg sm:text-base',
    nameHover: 'group-hover:text-accent',
  },
  footer: {
    gap: 'gap-2',
    mark: 'h-5 w-5',
    name: 'font-mono text-xs text-muted',
    nameHover: 'group-hover:text-fg',
  },
} as const;

/**
 * The <MF> wordmark, used in both the header and footer. The mark itself
 * (Geist Mono, since this is inlined in the page and can reach the site's
 * actual font var — the standalone favicon at app/icon.svg can't do that and
 * falls back to a filled badge with a system mono stack instead) stays
 * accent-colored at both sizes; only the name's weight/color and the overall
 * scale shift, matching whichever surrounding text it sits next to (semibold
 * Geist Sans by the nav links in the header, muted mono by the email in the
 * footer).
 */
export function Logo({ variant = 'header' }: { variant?: 'header' | 'footer' }) {
  const v = VARIANTS[variant];
  return (
    <Link href="/" className={`group flex min-w-0 items-center ${v.gap}`}>
      <svg viewBox="0 0 64 64" aria-hidden="true" className={`${v.mark} flex-shrink-0 text-accent`}>
        <text
          x="32"
          y="35"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
          fontWeight={800}
          fontSize={22}
          letterSpacing="-1.5"
          fill="currentColor"
        >
          {'<MF>'}
        </text>
      </svg>
      <span className={`min-w-0 truncate transition-colors ${v.name} ${v.nameHover}`}>
        Muhammad Farooq Chaudhry
      </span>
    </Link>
  );
}
