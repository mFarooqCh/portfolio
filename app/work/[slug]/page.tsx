import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllWork, getWorkBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllWork().map((w) => ({ slug: w.meta.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
  if (!item) return {};
  return { title: `${item.meta.title} — Muhammad Farooq Chaudhry`, description: item.meta.summary };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
  if (!item) notFound();

  const { meta, body } = item;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/#work" className="font-mono text-xs text-muted hover:text-accent">
        ← all work
      </Link>

      <header className="mt-8 border-b border-border pb-10">
        <div className="mb-4 flex flex-wrap items-center gap-x-3 font-mono text-xs text-muted">
          <span>{meta.year}</span>
          <span className="text-border">/</span>
          <span>{meta.context}</span>
          <span className="text-border">/</span>
          <span>{meta.role}</span>
        </div>

        <h1 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {meta.title}
        </h1>

        <p className="mt-6 max-w-measure text-lg leading-[1.7] text-fg/70">{meta.summary}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {meta.stack.map((s) => (
            <span key={s} className="border border-border px-2 py-1 font-mono text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>
      </header>

      <article className="prose-case mt-4">
        <MDXRemote source={body} />
      </article>

      <div className="mt-20 border-t border-border pt-10">
        <p className="mb-5 max-w-measure leading-relaxed text-fg/70">
          Working on something like this? Tell me what&apos;s in the way.
        </p>
        <Link
          href="/#contact"
          className="inline-block border border-accent px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          Start a conversation →
        </Link>
      </div>
    </main>
  );
}
