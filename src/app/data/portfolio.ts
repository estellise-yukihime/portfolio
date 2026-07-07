// ---------------------------------------------------------------------------
// Data model + placeholder content for the portfolio.
// Swap the `profile` object below with real content (or wire it to an API).
// ---------------------------------------------------------------------------

export type Accent = 'accent' | 'primary' | 'secondary';

export interface SocialLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Certification {
  name: string;
  year: string;
}

export interface Education {
  degree: string;
  school: string;
  years: string;
  detail: string;
}

export interface Project {
  title: string;
  summary: string;
  stack: string[];
  /** Caption labels for placeholder image slots — replace with real image URLs. */
  images: string[];
}

export interface Company {
  name: string;
  role: string;
  start: string;
  end: string;
  accent: Accent;
  /** Short project names shown on the profile overview. */
  summaryProjects: string[];
  /** Full project detail shown on the projects page. */
  projects: Project[];
}

export type ArticleBlock =
  | { kind: 'p'; html: string }
  | { kind: 'h2'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'ul'; items: string[] };

export interface Article {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  accent: Accent;
  excerpt: string;
  body: ArticleBlock[];
}

export interface Profile {
  id: string;
  initials: string;
  name: string;
  role: string;
  tagline: string;
  location: string;
  status: string;
  heroLead: string;
  heroTailStart: string;
  bio: string;
  email: string;
  resumeUrl: string;
  socials: SocialLink[];
  skills: SkillGroup[];
  certifications: Certification[];
  education: Education;
  companies: Company[];
  articles: Article[];
}

export const DEFAULT_PROFILE_ID = 'estellise';

export const profile: Profile = {
  id: DEFAULT_PROFILE_ID,
  initials: 'MC',
  name: 'Maya Chen',
  role: 'Staff Software Engineer',
  tagline: 'Distributed systems & developer platforms',
  location: 'San Francisco',
  status: 'SOFTWARE ENGINEER · SAN FRANCISCO · OPEN TO WORK',
  heroLead: 'I build',
  heroTailStart: 'and',
  bio: 'Backend-leaning full-stack engineer with eight years shipping distributed systems, developer tooling, and the occasional pixel-perfect frontend. Currently focused on platform reliability and DX.',
  email: 'hi@mayachen.dev',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Email', href: '#' },
  ],
  skills: [
    { label: 'LANGUAGES', items: ['Go', 'Rust', 'TypeScript', 'Python', 'SQL'] },
    {
      label: 'SYSTEMS & INFRA',
      items: ['Kafka', 'Postgres', 'Kubernetes', 'gRPC', 'Redis', 'Terraform'],
    },
    {
      label: 'PRACTICES',
      items: ['Observability', 'Distributed tracing', 'CI/CD', 'Incident response'],
    },
  ],
  certifications: [
    { name: 'Certified Kubernetes Administrator', year: '2023' },
    { name: 'AWS Solutions Architect — Pro', year: '2021' },
  ],
  education: {
    degree: 'B.S. Computer Science',
    school: 'University of California, Berkeley',
    years: '2013 — 2017',
    detail: 'Distributed systems focus',
  },
  companies: [
    {
      name: 'Meridian Data',
      role: 'Staff Software Engineer',
      start: 'May 2022',
      end: 'Present',
      accent: 'accent',
      summaryProjects: [
        'Realtime ingestion pipeline (4M events/s)',
        'Cross-store query federation layer',
        'Per-team cost attribution service',
      ],
      projects: [
        {
          title: 'Realtime ingestion pipeline',
          summary:
            'Rebuilt the core ingestion path to sustain 4M events/second at p99 latency under 200ms. Designed a backpressure-aware consumer model on Kafka, introduced a schema registry to stop breaking downstream consumers, and cut infra spend 38% by moving hot partitions to tiered storage. Owned the migration end to end with zero customer-visible downtime.',
          stack: ['Go', 'Kafka', 'ClickHouse', 'Protobuf', 'Kubernetes'],
          images: ['pipeline dashboard', 'architecture', 'latency graphs'],
        },
        {
          title: 'Cross-store query federation',
          summary:
            'Built a federation layer that lets analysts query Postgres, ClickHouse, and object storage through a single SQL surface. Wrote a cost-based planner that pushes predicates down to each engine and a caching layer keyed on query fingerprints. Reduced median dashboard load from 9s to 1.4s.',
          stack: ['Rust', 'Arrow', 'Postgres', 'Redis'],
          images: ['query planner UI', 'explain plan'],
        },
      ],
    },
    {
      name: 'Helia Labs',
      role: 'Senior Software Engineer',
      start: 'Mar 2019',
      end: 'Apr 2022',
      accent: 'primary',
      summaryProjects: [
        'Developer CLI & polyglot SDK',
        'Feature-flag & experimentation platform',
        'Edge caching & invalidation',
      ],
      projects: [
        {
          title: 'Developer CLI & polyglot SDK',
          summary:
            "Led the DX effort behind Helia's public API: a single-binary CLI and generated SDKs for five languages from one OpenAPI spec. Shipped an interactive onboarding that took time-to-first-call from 40 minutes to under 5. The CLI became the most-starred repo in the org.",
          stack: ['Go', 'TypeScript', 'OpenAPI', 'Cobra'],
          images: ['CLI session', 'SDK docs'],
        },
        {
          title: 'Feature-flag & experimentation platform',
          summary:
            'Built the flagging system every team now ships behind — targeting rules, gradual rollouts, and a streaming evaluation SDK with sub-millisecond overhead. Added a stats engine for A/B tests so PMs could read significance without a data scientist in the loop.',
          stack: ['TypeScript', 'Node', 'gRPC', 'Postgres'],
          images: ['flag console', 'rollout metrics'],
        },
      ],
    },
    {
      name: 'Northwind Systems',
      role: 'Software Engineer',
      start: 'Jul 2017',
      end: 'Feb 2019',
      accent: 'secondary',
      summaryProjects: ['Zero-downtime billing migration', 'Multi-channel notification service'],
      projects: [
        {
          title: 'Zero-downtime billing migration',
          summary:
            'Moved 12 years of billing data off a monolith to a new double-entry ledger without a maintenance window. Wrote the dual-write reconciliation harness and the cutover plan; caught and fixed a rounding bug that would have mis-invoiced 2,000 accounts. My first taste of "boring is good" in production.',
          stack: ['Python', 'Postgres', 'Airflow'],
          images: ['migration runbook', 'reconciliation report'],
        },
      ],
    },
  ],
  articles: [
    {
      id: 'backpressure-is-a-feature',
      title: 'Backpressure is a feature, not a failure',
      date: 'MAR 18, 2026',
      readingTime: '9 min read',
      category: 'Distributed systems',
      accent: 'accent',
      excerpt:
        "Most ingestion outages I've debugged weren't caused by too much traffic — they were caused by a system that refused to say \u201cslow down.\u201d Here's how I learned to design consumers that push back gracefully instead of falling over…",
      body: [
        {
          kind: 'p',
          html: 'Most ingestion outages I\u2019ve debugged weren\u2019t caused by too much traffic. They were caused by a system that refused to say <em>\u201cslow down.\u201d</em> When a consumer can\u2019t keep up and has no way to signal that upstream, the queue grows, memory climbs, and the whole pipeline tips over at once — usually at 3am, usually during a launch.',
        },
        {
          kind: 'p',
          html: 'Backpressure is the mechanism that lets a slow component tell a fast one to ease off. It sounds like a failure mode. It\u2019s actually the single most important reliability property a streaming system can have.',
        },
        { kind: 'h2', text: 'The failure that taught me this' },
        {
          kind: 'p',
          html: 'Early at Meridian we had a pipeline that happily accepted everything Kafka threw at it. Under normal load it was fine. During a customer\u2019s Black Friday spike, the enrichment stage fell behind by a few hundred milliseconds per batch. With no backpressure, the consumer kept pulling anyway, buffering unprocessed records in memory until the pod OOM-killed itself — and then its replacement inherited the same lag and died the same way.',
        },
        {
          kind: 'quote',
          text: 'A system without backpressure doesn\u2019t degrade gracefully. It works perfectly until the exact moment it doesn\u2019t.',
        },
        {
          kind: 'p',
          html: 'The fix wasn\u2019t more capacity. It was teaching the consumer to pull only what it could actually process, using the lag itself as the control signal.',
        },
        { kind: 'h2', text: 'What good backpressure looks like' },
        {
          kind: 'p',
          html: 'The pattern I reach for now has three properties. The consumer measures its own processing rate, it bounds how much unacknowledged work it holds in flight, and it lets the broker\u2019s <code>fetch.max.bytes</code> and a bounded channel do the throttling instead of an unbounded buffer.',
        },
        {
          kind: 'ul',
          items: [
            'Bound in-flight work explicitly — a channel with a fixed capacity, never an unbounded queue.',
            'Make lag a first-class metric and alert on its derivative, not just its value.',
            'Prefer pull-based consumption so the slow stage sets the pace, not the producer.',
            'Shed load deliberately at the edge when you must, with a policy you chose in advance.',
          ],
        },
        {
          kind: 'p',
          html: 'None of this is exotic. It\u2019s mostly the discipline to make \u201cI can\u2019t keep up\u201d a normal, expected message that flows through the system — rather than an exception that only surfaces as a crash.',
        },
        { kind: 'h2', text: 'The mental shift' },
        {
          kind: 'p',
          html: 'The reframe that stuck with me: throughput is not the goal, <em>sustainable</em> throughput is. A pipeline that does 4M events/second right up until it collapses is worse than one that does 3M forever. Backpressure is how you buy the second one. Treat it as a feature you design for on day one, not a patch you bolt on after the first incident.',
        },
      ],
    },
    {
      id: 'a-cli-is-a-product',
      title: 'A CLI is a product, so treat it like one',
      date: 'JAN 27, 2026',
      readingTime: '6 min read',
      category: 'Developer experience',
      accent: 'primary',
      excerpt:
        'Engineers will forgive a slow web dashboard but never a CLI that lies about its progress bar. The tools we hand other developers deserve the same craft as any customer-facing surface — onboarding included…',
      body: [
        {
          kind: 'p',
          html: 'Engineers will forgive a slow web dashboard but rarely a CLI that lies about its progress bar. The tools we hand other developers are products too, and they deserve the same craft — clear errors, honest feedback, and an onboarding that respects the reader\u2019s time.',
        },
        { kind: 'h2', text: 'Time-to-first-call is the only metric that matters' },
        {
          kind: 'p',
          html: 'When we rebuilt Helia\u2019s CLI, the number we obsessed over was how long it took a brand-new user to make their first successful API call. Everything else followed from driving that down.',
        },
      ],
    },
    {
      id: 'migrating-billing',
      title: 'Migrating billing without a maintenance window',
      date: 'DEC 09, 2025',
      readingTime: '11 min read',
      category: 'Reliability',
      accent: 'secondary',
      excerpt:
        "Money bugs are the ones that get you fired, and billing migrations touch every account you have. This is the dual-write reconciliation pattern I've used twice now to move ledgers with nobody noticing…",
      body: [
        {
          kind: 'p',
          html: 'Money bugs are the ones that get you fired, and billing migrations touch every account you have. The good news: you can move a ledger with nobody noticing if you\u2019re willing to run the old and new systems side by side and reconcile relentlessly.',
        },
        { kind: 'h2', text: 'Dual-write, then reconcile' },
        {
          kind: 'p',
          html: 'Write to both ledgers, compare them continuously, and only cut over reads once the diff has been zero for long enough that you trust it.',
        },
      ],
    },
    {
      id: 'query-planner-magic',
      title: 'The query planner is where the magic hides',
      date: 'OCT 02, 2025',
      readingTime: '7 min read',
      category: 'Databases',
      accent: 'accent',
      excerpt:
        'Federating three storage engines behind one SQL surface sounds impossible until you realize the planner is doing 90% of the work. A tour of predicate pushdown, cost estimation, and the caching layer that made it fast…',
      body: [
        {
          kind: 'p',
          html: 'Federating three storage engines behind one SQL surface sounds impossible until you realize the planner is doing 90% of the work. Push the right predicates down to each engine and most queries never touch the slow path.',
        },
        { kind: 'h2', text: 'Predicate pushdown pays the rent' },
        {
          kind: 'p',
          html: 'The single biggest win was teaching the planner which filters each backing store could evaluate natively, then shipping only those to the engine that could run them cheapest.',
        },
      ],
    },
  ],
};

export function getProfile(_profileId: string): Profile {
  // Single-profile site — always returns the one profile regardless of id.
  return profile;
}

export function getArticle(articleId: string): Article | undefined {
  return profile.articles.find((a) => a.id === articleId);
}
