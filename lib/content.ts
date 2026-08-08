import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';

const WorkFrontmatter = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  summary: z.string().min(1),
  context: z.string().min(1),
  role: z.string().min(1),
  year: z.string().min(1),
  stack: z.array(z.string()).min(1),
  featured: z.boolean().default(false),
  order: z.number(),
  diagram: z.string().optional(),
  relatedPosts: z.array(z.string()).default([]),
});

export type WorkMeta = z.infer<typeof WorkFrontmatter>;
export type WorkItem = { meta: WorkMeta; body: string };

const WORK_DIR = path.join(process.cwd(), 'content', 'work');

/**
 * Loads every case study, validating frontmatter at build time.
 * A malformed or incomplete case study fails the build rather than
 * shipping a broken card — this is the whole reason there is no admin panel.
 */
export function getAllWork(): WorkItem[] {
  if (!fs.existsSync(WORK_DIR)) return [];

  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(WORK_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const parsed = WorkFrontmatter.safeParse(data);

      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in content/work/${file}:\n` +
            parsed.error.issues.map((i) => `  - ${i.path.join('.')}: ${i.message}`).join('\n')
        );
      }

      // Guard against publishing with unresolved authoring notes.
      if (/\bTODO\b/.test(content)) {
        throw new Error(`content/work/${file} still contains a TODO. Resolve it before building.`);
      }

      return { meta: parsed.data, body: content };
    })
    .sort((a, b) => a.meta.order - b.meta.order);
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return getAllWork().find((w) => w.meta.slug === slug);
}
