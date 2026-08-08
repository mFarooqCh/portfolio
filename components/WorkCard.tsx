import Link from 'next/link';
import type { WorkMeta } from '@/lib/content';

export function WorkCard({ meta }: { meta: WorkMeta }) {
  return (
    <Link
      href={`/work/${meta.slug}`}
      className="group block border-t border-border py-8 transition-colors hover:border-accent/50"
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-3 font-mono text-xs text-muted">
        <span>{meta.year}</span>
        <span className="text-border">/</span>
        <span>{meta.context}</span>
      </div>

      <h3 className="mb-3 text-xl font-medium leading-snug text-fg group-hover:text-accent sm:text-2xl">
        {meta.title}
      </h3>

      <p className="mb-5 max-w-measure leading-relaxed text-fg/70">{meta.summary}</p>

      <div className="flex flex-wrap gap-2">
        {meta.stack.slice(0, 6).map((s) => (
          <span
            key={s}
            className="border border-border px-2 py-1 font-mono text-[11px] text-muted"
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
