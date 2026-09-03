export function Section({
  id,
  label,
  children,
}: {
  id?: string;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      {label && (
        <h2 className="mb-10 font-mono text-xs uppercase tracking-[0.18em] text-accent-text">{label}</h2>
      )}
      {children}
    </section>
  );
}
