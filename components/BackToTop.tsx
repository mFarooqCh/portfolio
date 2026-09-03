'use client';

import { useEffect, useState } from 'react';

const SHOW_AFTER_PX = 480;

/**
 * Fixed bottom-right button, appears after scrolling past the hero and stays
 * visible all the way to the bottom of the page — that's the point of a
 * back-to-top button, it's most useful exactly there. An earlier version
 * also hid this once the footer scrolled into view (to avoid sitting on top
 * of the footer's email link); that traded a real bug for a worse one — the
 * button disappearing right when someone actually wants it. The overlap is
 * fixed properly instead, by giving the footer extra bottom padding on
 * mobile (see app/layout.tsx) so there's dedicated clear space at the
 * bottom of the page and nothing the button can ever sit on top of.
 * Respects prefers-reduced-motion for the scroll itself, matching the
 * "never for people who asked not to see it" rule already applied to the
 * rise-in animation in globals.css.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center border border-accent bg-bg text-accent transition-all duration-200 hover:bg-accent hover:text-bg ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 13V3M8 3L3.5 7.5M8 3L12.5 7.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
