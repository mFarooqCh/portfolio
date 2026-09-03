import Link from 'next/link';

const VARIANTS = {
  header: {
    gap: 'gap-2.5',
    mark: 'h-8 w-8',
    markFontSize: 28,
    markLetterSpacing: '-1',
    name: 'text-sm font-semibold tracking-tight text-fg sm:text-base',
    nameHover: 'group-hover:text-accent-text',
  },
  footer: {
    gap: 'gap-2',
    mark: 'h-6 w-6',
    markFontSize: 28,
    markLetterSpacing: '-1',
    name: 'font-mono text-xs text-muted',
    nameHover: 'group-hover:text-fg',
  },
} as const;

/**
 * The <MF> wordmark, used in both the header and footer. The mark itself
 * (Geist Mono, since this is inlined in the page and can reach the site's
 * actual font var — the standalone favicon at app/icon.svg can't do that and
 * falls back to a filled badge with a system mono stack instead) stays
 * accent-text colored at both sizes (it's a glyph being read, not a filled
 * shape, so it uses the desaturated text token rather than the brighter
 * `accent` used for fills/dots/borders elsewhere); only the name's
 * weight/color and the overall scale shift, matching whichever surrounding
 * text it sits next to (semibold Geist Sans by the nav links in the header,
 * muted mono by the email in the footer). The angle brackets are dimmed to
 * 45% opacity so they read as framing rather than competing with "MF" for
 * attention — full weight on all four glyphs was crowding the mark. Mark
 * size (box + fontSize + letterSpacing, per variant) is tuned so the "MF"
 * cap-height matches the adjacent name text's cap-height — verified by
 * rendering both at real pixel sizes and measuring, not just eyeballed —
 * rather than the smaller-than-the-text size it shipped at originally.
 * The <text> y="32" was tuned the same way: dominantBaseline="central"
 * alone left the mark's ink center sitting ~1.5px low relative to the
 * name text's optical center (it centers on the font's full ascent/descent
 * envelope, not this glyph set's actual ink, which is mostly caps with no
 * descenders) — y=32 was the value, found by rendering both side by side
 * and measuring pixel centers, that lines them up. Re-measure the same way
 * if the glyphs, font, or weight here ever change.
 */
export function Logo({ variant = 'header' }: { variant?: 'header' | 'footer' }) {
  const v = VARIANTS[variant];
  return (
    <Link href="/" className={`group flex min-w-0 items-center ${v.gap}`}>
      <svg viewBox="0 0 64 64" aria-hidden="true" className={`${v.mark} flex-shrink-0 text-accent-text`}>
        <text
          x="32"
          y="32"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
          fontWeight={800}
          fontSize={v.markFontSize}
          letterSpacing={v.markLetterSpacing}
        >
          <tspan fill="currentColor" opacity={0.45}>{'<'}</tspan>
          <tspan fill="currentColor">MF</tspan>
          <tspan fill="currentColor" opacity={0.45}>{'>'}</tspan>
        </text>
      </svg>
      <span className={`min-w-0 truncate transition-colors ${v.name} ${v.nameHover}`}>
        Muhammad Farooq Chaudhry
      </span>
    </Link>
  );
}
