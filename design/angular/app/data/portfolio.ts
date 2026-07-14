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

export const DEFAULT_PROFILE_ID = 'maya-chen';

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

// ---------------------------------------------------------------------------
// Profiles directory — the people listed on the /profiles page.
// Cards link to the profile detail; this single-profile site points them all
// at the default profile. Give each its own id once real profiles exist.
// ---------------------------------------------------------------------------

export interface ProfileCard {
  id: string;
  initials: string;
  name: string;
  title: string;
  accent: Accent;
  location: string;
  summary: string;
  stack: string[];
}

export const profileCards: ProfileCard[] = [
  {
    id: DEFAULT_PROFILE_ID,
    initials: 'MC',
    name: 'Maya Chen',
    title: 'Staff Software Engineer',
    accent: 'accent',
    location: 'San Francisco, CA',
    summary:
      'Backend-leaning full-stack engineer building reliable distributed systems and the developer tooling that keeps them boring.',
    stack: ['Go', 'Kafka', 'Postgres', 'TypeScript'],
  },
  {
    id: DEFAULT_PROFILE_ID,
    initials: 'DP',
    name: 'Dev Patel',
    title: 'Platform Engineer',
    accent: 'primary',
    location: 'Austin, TX',
    summary:
      'Kubernetes and infra automation specialist focused on cutting deploy times and making on-call quiet again.',
    stack: ['Rust', 'K8s', 'Terraform', 'gRPC'],
  },
  {
    id: DEFAULT_PROFILE_ID,
    initials: 'LO',
    name: 'Lena Ortiz',
    title: 'Product Designer',
    accent: 'secondary',
    location: 'Brooklyn, NY',
    summary:
      'Interface designer who prototypes in code. Obsessed with motion, accessibility, and design systems that scale.',
    stack: ['Figma', 'React', 'Framer', 'CSS'],
  },
  {
    id: DEFAULT_PROFILE_ID,
    initials: 'AK',
    name: 'Arjun Kumar',
    title: 'ML Engineer',
    accent: 'primary',
    location: 'Seattle, WA',
    summary:
      'Builds and ships recommendation and ranking models end to end, from feature stores to low-latency serving.',
    stack: ['Python', 'PyTorch', 'Ray', 'Spark'],
  },
  {
    id: DEFAULT_PROFILE_ID,
    initials: 'SR',
    name: 'Sofia Rossi',
    title: 'Frontend Engineer',
    accent: 'accent',
    location: 'Lisbon, PT',
    summary:
      'Performance-focused frontend engineer who cares about the last 16ms and interfaces that feel instant.',
    stack: ['TypeScript', 'Svelte', 'WebGL', 'Vite'],
  },
  {
    id: DEFAULT_PROFILE_ID,
    initials: 'MJ',
    name: 'Marcus Johnson',
    title: 'Security Engineer',
    accent: 'secondary',
    location: 'Remote',
    summary:
      'Application security and threat modeling. Turns audit findings into paved roads developers actually want to use.',
    stack: ['Go', 'eBPF', 'AWS', 'Nix'],
  },
];

// ---------------------------------------------------------------------------
// Learnings — concepts, patterns, and architectures worth internalizing.
// Shown on /learnings; each opens a detail page at /learnings/:id.
// ---------------------------------------------------------------------------

export type LearningBlock =
  | { kind: 'p'; html: string }
  | { kind: 'h2'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'code'; html: string };

export interface RelatedLearning {
  id: string;
  title: string;
  category: string;
}

export interface Learning {
  id: string;
  title: string;
  category: string;
  accent: Accent;
  level: string;
  meta: string;
  summary: string;
  learnedOn: string;
  lede: string;
  oneSentence: string;
  tags: string[];
  body: LearningBlock[];
  related: RelatedLearning[];
}

export const learningFilters = [
  'All',
  'Distributed systems',
  'Architecture',
  'Databases',
  'Frontend',
  'Data structures',
];

export const learnings: Learning[] = [
  {
    id: 'backpressure',
    title: 'Backpressure & flow control',
    category: 'DISTRIBUTED SYSTEMS',
    accent: 'accent',
    level: 'Core',
    meta: 'Streaming · Reliability',
    summary:
      'Letting a slow consumer tell a fast producer to ease off — the difference between graceful degradation and a 3am OOM cascade.',
    learnedOn: 'Learned Mar 2026',
    lede: 'Letting a slow consumer tell a fast producer to <em>ease off</em> — the mechanism that separates a system that degrades gracefully from one that collapses all at once.',
    oneSentence:
      'Bound the work in flight and make "I can\u2019t keep up" a normal signal that flows upstream — never an exception that only surfaces as a crash.',
    tags: ['Streaming', 'Reliability', 'Kafka', 'Reactive Streams'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'Backpressure is the ability of a downstream component to slow down an upstream one. When a consumer can\u2019t keep pace and has no way to communicate that, the queue between them grows unbounded, memory climbs, and the pipeline tips over — usually at the worst possible moment.',
      },
      {
        kind: 'p',
        html: 'The fix is to treat capacity as a signal. Instead of an unbounded buffer that absorbs everything until it can\u2019t, you bound the in-flight work with a fixed-capacity channel, and let that boundary throttle the producer naturally.',
      },
      {
        kind: 'quote',
        text: 'A system without backpressure doesn\u2019t degrade gracefully. It works perfectly until the exact moment it doesn\u2019t.',
      },
      { kind: 'h2', text: 'How to recognize it' },
      {
        kind: 'p',
        html: 'You need backpressure whenever a fast producer feeds a slower consumer and the buffer between them can grow: message queues, socket reads, ETL stages, even a UI event loop. The tell-tale symptom of its absence is rising memory and latency under sustained load, followed by a sudden collapse rather than a smooth slowdown.',
      },
      {
        kind: 'ul',
        items: [
          'Bound in-flight work explicitly — a channel with a fixed capacity, never an unbounded queue.',
          'Make lag a first-class metric and alert on its rate of change, not just its value.',
          'Prefer pull-based consumption so the slow stage sets the pace, not the producer.',
          'Decide your load-shedding policy in advance, at the edge, before you\u2019re forced to improvise.',
        ],
      },
      { kind: 'h2', text: 'A minimal example' },
      {
        kind: 'p',
        html: 'A bounded channel is the simplest embodiment of the idea. The producer blocks when the buffer is full, so it can never outrun the consumer:',
      },
      {
        kind: 'code',
        html: '<span class="tok-c">// bounded channel = built-in backpressure</span>\nch := make(chan Job, <span class="tok-s">32</span>)   <span class="tok-c">// at most 32 in flight</span>\n\n<span class="tok-k">go func</span>() {\n  <span class="tok-k">for</span> job := <span class="tok-k">range</span> source {\n    ch &lt;- job         <span class="tok-c">// blocks when full → producer slows</span>\n  }\n  close(ch)\n}()\n\n<span class="tok-k">for</span> job := <span class="tok-k">range</span> ch {\n  process(job)        <span class="tok-c">// consumer sets the pace</span>\n}',
      },
      { kind: 'h2', text: 'Where it connects' },
      {
        kind: 'p',
        html: 'Once the concept clicks you start seeing it everywhere: TCP\u2019s sliding window is backpressure, Reactive Streams\u2019 <code>request(n)</code> is backpressure, and a database connection pool blocking on checkout is backpressure. They\u2019re all the same idea — a bounded resource pushing back so the system stays inside its safe operating envelope.',
      },
    ],
    related: [
      { id: 'consistent-hashing', title: 'Consistent hashing', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'write-ahead-logging', title: 'Write-ahead logging', category: 'DATABASES' },
      { id: 'debounce-throttle', title: 'Debounce vs. throttle', category: 'FRONTEND' },
    ],
  },
  {
    id: 'idempotency-keys',
    title: 'Idempotency keys',
    category: 'API DESIGN',
    accent: 'primary',
    level: 'Core',
    meta: 'HTTP · Payments',
    summary:
      'Make retries safe by giving every mutating request a client-generated key the server dedupes on. Essential anywhere money or side effects are involved.',
    learnedOn: 'Learned Feb 2026',
    lede: 'Make retries safe by giving every mutating request a client-generated key the server dedupes on — the difference between a double charge and a clean retry.',
    oneSentence:
      'A stable key attached to a request lets the server recognize a retry and return the original result instead of performing the action twice.',
    tags: ['HTTP', 'Payments', 'Reliability'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'Networks fail after the server has already done the work but before the client hears back. If the client retries, a naive server charges the card twice. An idempotency key — a unique token the client generates once per logical operation — lets the server dedupe: the first request wins, every retry returns the stored result.',
      },
      {
        kind: 'code',
        html: '<span class="tok-c">// client sends a stable key; server dedupes on it</span>\nPOST /v1/charges\nIdempotency-Key: <span class="tok-s">"a1f3-9c22-..."</span>\n\n<span class="tok-c">// server: first request wins, retries replay the result</span>\n<span class="tok-k">if</span> seen(key) { <span class="tok-k">return</span> storedResult(key) }\nresult := charge(amount)\nstore(key, result)',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Any non-idempotent write exposed over an unreliable channel: payments, order placement, sending mail, provisioning resources. The key must be stored durably with the result and scoped so a genuinely new operation gets a fresh key. Stripe\u2019s API is the canonical reference implementation.',
      },
    ],
    related: [
      { id: 'backpressure', title: 'Backpressure & flow control', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'write-ahead-logging', title: 'Write-ahead logging', category: 'DATABASES' },
      { id: 'strangler-fig', title: 'The strangler fig pattern', category: 'ARCHITECTURE' },
    ],
  },
  {
    id: 'cap-theorem',
    title: 'CAP theorem, in practice',
    category: 'DISTRIBUTED SYSTEMS',
    accent: 'accent',
    level: 'Foundational',
    meta: 'Consistency · Trade-offs',
    summary:
      'You don\u2019t choose C, A, or P once — you choose per operation, under partition. The useful version is PACELC, not the poster.',
    learnedOn: 'Learned Jan 2026',
    lede: 'You don\u2019t choose consistency, availability, or partition-tolerance once and for all — you choose per operation, under partition.',
    oneSentence:
      'When the network partitions, a system must trade consistency for availability or vice versa; the richer PACELC framing adds the latency-vs-consistency choice you make even when it doesn\u2019t.',
    tags: ['Consistency', 'Availability', 'PACELC'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'CAP says that during a network partition a distributed store can stay consistent or stay available, but not both. Partitions are not optional — so the real design question is which one you sacrifice when they happen, and that answer can differ per operation.',
      },
      {
        kind: 'p',
        html: 'The version worth internalizing is PACELC: if there is a Partition, choose Availability or Consistency; Else (normal operation) choose Latency or Consistency. Most production trade-offs actually live in that second clause, not the first.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Use it as a lens whenever you pick a datastore or design a replication scheme. A shopping cart can favor availability; a ledger cannot. Naming the trade-off explicitly per feature beats arguing about whether a database is "CP" or "AP" in the abstract.',
      },
    ],
    related: [
      { id: 'consistent-hashing', title: 'Consistent hashing', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'backpressure', title: 'Backpressure & flow control', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'write-ahead-logging', title: 'Write-ahead logging', category: 'DATABASES' },
    ],
  },
  {
    id: 'strangler-fig',
    title: 'The strangler fig pattern',
    category: 'ARCHITECTURE',
    accent: 'secondary',
    level: 'Intermediate',
    meta: 'Migration · Legacy',
    summary:
      'Replace a monolith incrementally by routing slices of traffic to new services until the old system is fully wrapped and can be removed.',
    learnedOn: 'Learned Dec 2025',
    lede: 'Replace a monolith incrementally — route slices of traffic to new services until the old system is fully wrapped and can be switched off.',
    oneSentence:
      'Grow the replacement around the legacy system one route at a time, so you never need a risky big-bang rewrite.',
    tags: ['Migration', 'Legacy', 'Refactoring'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'Named after a fig that grows around a host tree until the original rots away, the pattern puts a routing facade in front of a legacy system. New functionality — and gradually, migrated old functionality — lives in new services behind that facade. Traffic shifts route by route.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Any migration too large or risky to do at once. Because each slice ships and proves itself independently, you keep a working system the whole way and can pause or roll back a single route without abandoning the effort. The failure mode to watch for is a facade that becomes permanent — set a deadline to remove the host.',
      },
    ],
    related: [
      { id: 'idempotency-keys', title: 'Idempotency keys', category: 'API DESIGN' },
      { id: 'content-addressable-storage', title: 'Content-addressable storage', category: 'SYSTEMS' },
      { id: 'backpressure', title: 'Backpressure & flow control', category: 'DISTRIBUTED SYSTEMS' },
    ],
  },
  {
    id: 'content-addressable-storage',
    title: 'Content-addressable storage',
    category: 'SYSTEMS',
    accent: 'primary',
    level: 'Intermediate',
    meta: 'Hashing · Caching',
    summary:
      'Address data by the hash of its contents, not a location. Free dedup, immutability, and cache-forever semantics — the trick behind Git and Nix.',
    learnedOn: 'Learned Nov 2025',
    lede: 'Address data by the hash of its contents rather than a location — the idea underneath Git, Nix, and every serious content delivery system.',
    oneSentence:
      'If the address of a blob is the hash of its bytes, identical content is automatically deduplicated, immutable, and safe to cache forever.',
    tags: ['Hashing', 'Immutability', 'Caching'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'In a content-addressable store the key <em>is</em> the hash of the value. Store the same bytes twice and you get the same address, so deduplication is free. Because changing the content changes the address, every object is immutable — which makes aggressive, permanent caching completely safe.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Build systems, package managers, backups, and asset pipelines all benefit. Git stores every object under its SHA; Nix keys build outputs by the hash of their inputs. The cost is that references must be updated when content changes, since the address moves with it.',
      },
    ],
    related: [
      { id: 'bloom-filters', title: 'Bloom filters', category: 'DATA STRUCTURES' },
      { id: 'consistent-hashing', title: 'Consistent hashing', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'write-ahead-logging', title: 'Write-ahead logging', category: 'DATABASES' },
    ],
  },
  {
    id: 'debounce-throttle',
    title: 'Debounce vs. throttle',
    category: 'FRONTEND',
    accent: 'secondary',
    level: 'Practical',
    meta: 'Events · Performance',
    summary:
      'Two ways to tame noisy event streams. Debounce waits for quiet; throttle enforces a steady rate. Reaching for the wrong one is a classic UI bug.',
    learnedOn: 'Learned Oct 2025',
    lede: 'Two ways to tame noisy event streams — debounce waits for quiet, throttle enforces a steady rate. Picking the wrong one is a classic UI bug.',
    oneSentence:
      'Debounce fires once after the events stop; throttle fires at most once per interval while they continue.',
    tags: ['Events', 'Performance', 'UX'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'Both cap how often a handler runs, but on opposite triggers. <strong>Debounce</strong> resets a timer on every event and only runs after a quiet gap — perfect for a search box that should query once the user stops typing. <strong>Throttle</strong> runs at a fixed maximum rate regardless of how many events arrive — perfect for scroll or resize handlers.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Debounce for "do this once they\u2019re done": typeahead, autosave, validation. Throttle for "do this at a steady cadence while it happens": scroll position, drag tracking, analytics sampling. Using debounce where you need throttle makes a scroll handler feel dead until you stop.',
      },
    ],
    related: [
      { id: 'backpressure', title: 'Backpressure & flow control', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'bloom-filters', title: 'Bloom filters', category: 'DATA STRUCTURES' },
      { id: 'idempotency-keys', title: 'Idempotency keys', category: 'API DESIGN' },
    ],
  },
  {
    id: 'write-ahead-logging',
    title: 'Write-ahead logging',
    category: 'DATABASES',
    accent: 'accent',
    level: 'Core',
    meta: 'Durability · Recovery',
    summary:
      'Record the intent to change before changing it. The humble WAL is how databases survive crashes without losing your last commit.',
    learnedOn: 'Learned Sep 2025',
    lede: 'Record the intent to change before changing it — the humble write-ahead log is how databases survive a crash without losing your last commit.',
    oneSentence:
      'Append the change to a durable log and flush it before touching the real data, so recovery can always replay or undo in-flight work.',
    tags: ['Durability', 'Recovery', 'Postgres'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'Before a database mutates a page, it appends a record describing that change to a log and flushes the log to disk. Only then does it modify the data. If the process crashes, recovery replays the log to redo committed work and roll back the rest — the on-disk state is always reconstructable.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'It underpins durability in Postgres, SQLite, and virtually every storage engine, and the same log doubles as the source for replication and change-data-capture. Any system that must survive a crash without losing acknowledged writes wants a WAL at its core.',
      },
    ],
    related: [
      { id: 'backpressure', title: 'Backpressure & flow control', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'idempotency-keys', title: 'Idempotency keys', category: 'API DESIGN' },
      { id: 'cap-theorem', title: 'CAP theorem, in practice', category: 'DISTRIBUTED SYSTEMS' },
    ],
  },
  {
    id: 'bloom-filters',
    title: 'Bloom filters',
    category: 'DATA STRUCTURES',
    accent: 'primary',
    level: 'Intermediate',
    meta: 'Probabilistic · Memory',
    summary:
      'A tiny probabilistic set that answers "definitely not present" or "maybe present." Trades a false-positive rate for enormous memory savings.',
    learnedOn: 'Learned Aug 2025',
    lede: 'A tiny probabilistic set that answers "definitely not present" or "maybe present" — trading a small false-positive rate for enormous memory savings.',
    oneSentence:
      'Several hash functions set bits in a bit array; if any bit for a key is unset it is definitely absent, and if all are set it is probably present.',
    tags: ['Probabilistic', 'Memory', 'Hashing'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'A Bloom filter hashes each inserted key with <em>k</em> functions and sets those bits in a shared bit array. To test membership you check the same bits: if any is zero the key was never added; if all are one it is probably present, with a tunable false-positive rate. It never yields a false negative.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Use it as a cheap pre-filter in front of an expensive lookup — databases skip disk reads for keys the filter rejects, CDNs avoid origin fetches, and crawlers skip already-seen URLs. You accept occasional wasted lookups in exchange for a footprint a fraction of the real set\u2019s.',
      },
    ],
    related: [
      { id: 'content-addressable-storage', title: 'Content-addressable storage', category: 'SYSTEMS' },
      { id: 'consistent-hashing', title: 'Consistent hashing', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'debounce-throttle', title: 'Debounce vs. throttle', category: 'FRONTEND' },
    ],
  },
  {
    id: 'consistent-hashing',
    title: 'Consistent hashing',
    category: 'DISTRIBUTED SYSTEMS',
    accent: 'accent',
    level: 'Intermediate',
    meta: 'Sharding · Scaling',
    summary:
      'Distribute keys across nodes so that adding or removing one only remaps a small fraction — the backbone of caches and sharded stores.',
    learnedOn: 'Learned Jul 2025',
    lede: 'Distribute keys across nodes so that adding or removing one remaps only a small fraction of them — the backbone of distributed caches and sharded stores.',
    oneSentence:
      'Place both nodes and keys on a hash ring and assign each key to the next node clockwise, so a membership change moves only the keys near the affected node.',
    tags: ['Sharding', 'Scaling', 'Hashing'],
    body: [
      { kind: 'h2', text: 'The core idea' },
      {
        kind: 'p',
        html: 'Naive modulo sharding (<code>hash(key) % N</code>) remaps almost every key when N changes. Consistent hashing maps nodes and keys onto the same circular hash space; a key belongs to the first node clockwise from it. Add or remove a node and only the keys in its arc move — roughly 1/N of them.',
      },
      { kind: 'h2', text: 'When to reach for it' },
      {
        kind: 'p',
        html: 'Distributed caches, sharded databases, and load balancers all rely on it to scale without mass reshuffling. Virtual nodes — many points per physical node on the ring — smooth out the otherwise uneven key distribution and make rebalancing gradual.',
      },
    ],
    related: [
      { id: 'backpressure', title: 'Backpressure & flow control', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'cap-theorem', title: 'CAP theorem, in practice', category: 'DISTRIBUTED SYSTEMS' },
      { id: 'bloom-filters', title: 'Bloom filters', category: 'DATA STRUCTURES' },
    ],
  },
];

export function getLearning(id: string): Learning | undefined {
  return learnings.find((l) => l.id === id);
}
