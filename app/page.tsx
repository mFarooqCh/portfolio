import { getAllWork } from '@/lib/content';
import { Section } from '@/components/Section';
import { WorkCard } from '@/components/WorkCard';
import experience from '@/content/experience.json';

const FACTS = [
  { n: '16 TB+', l: 'media platform in production' },
  { n: '11', l: 'cloud storage providers integrated' },
  { n: '80K', l: 'files per transfer operation' },
  { n: '6 yrs', l: 'shipping .NET in production' },
];

const APPROACH = [
  {
    h: "I tell you when something won't work, before you've paid for it.",
    p: "The expensive failures aren't bad code. They're the wrong thing, built well, discovered late. If I think your approach has a problem, you'll hear it in week one — not in the invoice.",
  },
  {
    h: 'You get status, not silence.',
    p: "You'll always know what's done, what's next, and what's at risk. If something slips you'll hear it from me first, with a plan attached.",
  },
  {
    h: 'I own it end to end.',
    p: 'Design, build, deploy, secure, maintain. Not a pile of code handed over with a shrug about infrastructure.',
  },
  {
    h: 'I work on systems that are already running.',
    p: "Most of what I do is inside live production systems that can't stop while I change them. Legacy migrations, re-architectures, foundations replaced underneath running services.",
  },
];

const CAPABILITIES = [
  ['Backend architecture', 'C#, .NET 8, microservices, DDD, CQRS, modular monoliths. Systems designed to be changed later, not just shipped once.'],
  ['AI systems in production', 'Concurrent extraction pipelines, vision-LLM tagging, face detection and deduplication, RAG search with reranking. Built for real load, failure handling included.'],
  ['Cloud infrastructure', 'Azure, AWS, Oracle Cloud. App Services, Front Door, Blob Storage, VM Scale Sets, Terraform provisioning.'],
  ['High-throughput data movement', 'Cross-cloud transfer, streaming APIs, event-driven processing, queue and change-stream architectures.'],
  ['Security and production readiness', 'Encrypted storage, fine-grained access control, audit logging, firewall and DDoS protection.'],
  ['Legacy modernisation', '.NET Framework to .NET 8 migrations, re-architecting services that grew without a plan, without taking them offline.'],
];

export default function Home() {
  const work = getAllWork();

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-32">
        <div className="rise">
          <p className="mb-6 flex items-center gap-2 font-mono text-xs text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Available for new projects
          </p>

          <h1 className="max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl">
            Your backend works. It just won&apos;t survive what&apos;s coming next.
          </h1>

          <p className="mt-8 max-w-measure text-lg leading-[1.7] text-fg/75">
            I design and build systems for the point where the simple version stops holding —
            high-throughput file processing, multi-cloud infrastructure, and AI pipelines running
            under real production load, not as demos.
          </p>

          <p className="mt-5 max-w-measure leading-[1.7] text-fg/60">
            Six years shipping .NET for SaaS, ERP, and enterprise media platforms. I own problems end
            to end: design, build, deploy, secure, maintain.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="border border-accent px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              See the work →
            </a>
            <a
              href="#contact"
              className="border border-border px-5 py-2.5 font-mono text-sm text-fg/80 transition-colors hover:border-fg/40"
            >
              Start a conversation →
            </a>
          </div>
        </div>
      </section>

      {/* Facts */}
      <div className="mx-auto max-w-5xl px-6">
        <dl className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.l} className="bg-bg px-5 py-6">
              <dt className="font-mono text-2xl text-fg">{f.n}</dt>
              <dd className="mt-2 text-sm leading-snug text-muted">{f.l}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Work */}
      <Section id="work" label="Selected work">
        <p className="mb-10 max-w-measure leading-relaxed text-fg/70">
          Three systems, described by what they had to survive rather than what they were built with.
          Client details are omitted deliberately; the engineering is the point.
        </p>
        <div>
          {work.map((w) => (
            <WorkCard key={w.meta.slug} meta={w.meta} />
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section id="approach" label="How I work">
        <div className="grid gap-10 sm:grid-cols-2">
          {APPROACH.map((a) => (
            <div key={a.h}>
              <h3 className="mb-3 font-medium leading-snug text-fg">{a.h}</h3>
              <p className="leading-relaxed text-fg/65">{a.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Capabilities */}
      <Section label="Capabilities">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {CAPABILITIES.map(([h, p]) => (
            <div key={h} className="bg-bg p-6">
              <h3 className="mb-2 font-mono text-sm text-accent">{h}</h3>
              <p className="text-sm leading-relaxed text-fg/65">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section label="Experience">
        <ol className="space-y-8">
          {experience.map((e) => (
            <li key={`${e.company}-${e.start}`} className="border-t border-border pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium text-fg">
                  {e.role} <span className="text-muted">· {e.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {e.start} — {e.end}
                </span>
              </div>
              <p className="mt-2 max-w-measure text-sm leading-relaxed text-fg/60">{e.note}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <h3 className="mb-4 text-2xl font-medium tracking-tight">Let&apos;s talk about your project</h3>
        <p className="mb-8 max-w-measure leading-relaxed text-fg/70">
          Tell me what you&apos;re building and what&apos;s currently in the way. If I&apos;m not the
          right person for it, I&apos;ll say so and point you somewhere better.
        </p>

        {/*
          TODO(form): wire to Resend via a serverless route, or Formspree.
          A freelance site whose contact form silently fails is worse than useless.
          Verify delivery to a real inbox before launch, and again after the domain is attached.
        */}
        <a
          href="mailto:farooqchaudhry749@gmail.com"
          className="inline-block border border-accent px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          farooqchaudhry749@gmail.com
        </a>
      </Section>
    </main>
  );
}
