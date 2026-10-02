'use client';

import Link from 'next/link';

const sections = ['Work', 'Approach', 'Capabilities', 'Experience', 'About', 'Contact'];

export function SectionNavigation() {
  const links = sections.map((label) => (
    <Link
      key={label}
      href={`/#${label.toLowerCase()}`}
      className="flex min-h-11 items-center px-3 text-muted hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-text lg:px-0"
    >
      {label}
    </Link>
  ));

  return (
    <div className="shrink-0 font-mono text-xs">
      <div className="hidden items-center gap-5 lg:flex">{links}</div>
      <details
        className="relative lg:hidden"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.currentTarget.open = false;
            event.currentTarget.querySelector('summary')?.focus();
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
        }}
      >
        <summary aria-label="Menu" className="group relative flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center border border-border px-3 py-3 text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-text [&::-webkit-details-marker]:hidden">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 4h10M3 8h10M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span aria-hidden="true" className="pointer-events-none absolute right-full mr-2 border border-border bg-bg px-2 py-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">
            Menu
          </span>
        </summary>
        <div
          className="absolute right-0 top-full mt-2 w-48 border border-border bg-bg p-2 shadow-xl"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) {
              const details = event.currentTarget.closest('details');
              if (details) details.open = false;
            }
          }}
        >
          {links}
        </div>
      </details>
    </div>
  );
}
