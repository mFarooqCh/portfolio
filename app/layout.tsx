import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { SectionNavigation } from '@/components/SectionNavigation';
import { Logo } from '@/components/Logo';
import { BackToTop } from '@/components/BackToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Farooq Chaudhry — Backend & cloud architecture',
  description:
    'I design and build backend systems for the point where the simple version stops holding — high-throughput file processing, multi-cloud infrastructure, and AI pipelines under real production load.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/95 backdrop-blur">
          <nav aria-label="Main navigation" className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
            <Logo />
            <SectionNavigation />
          </nav>
        </header>

        {children}

        <footer id="site-footer" className="mt-32 border-t border-border/60">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 pt-10 pb-24 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <Logo variant="footer" />
            <a href="mailto:farooqchaudhry749@gmail.com" className="hover:text-fg">
              farooqchaudhry749@gmail.com
            </a>
          </div>
        </footer>

        <BackToTop />
      </body>
    </html>
  );
}
