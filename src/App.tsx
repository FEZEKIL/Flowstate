import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import heroDashboard from "./assets/content1.jpg";
import launchPresentation from "./assets/content2.jpg";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-background border border-border p-2 shadow-lg hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

const heroGallery = [
  {
    src: heroDashboard,
    alt: "AI coding agent suggesting production-ready code inside a modern dashboard",
  },
  {
    src: launchPresentation,
    alt: "Founder presenting AI coding launch metrics to investors",
  },
];

const valuePoints = [
  {
    title: "Ship weeks faster",
    body: "Delegate repetitive engineering tasks to an agent that understands context and best practices.",
  },
  {
    title: "Safeguard quality",
    body: "Your workflows stay consistent with automated pull requests, test coverage, and release notes.",
  },
  {
    title: "Scale transparently",
    body: "Get insight dashboards that surface bottlenecks, velocity trends, and roadmap risks in real time.",
  },
  {
    title: "Launch with confidence",
    body: "Structured launch playbooks keep every stakeholder aligned across engineering, GTM, and customer success.",
  },
];

const benefits = [
  {
    title: "Accelerate launch timelines",
    description:
      "Transform product specs into production-ready prototypes overnight. Flowstate Agent maps requirements, drafts scaffolding, and opens pull requests so your team can focus on strategic decisions instead of boilerplate.",
    image: heroDashboard,
    alt: "AI agent converting product requirements into code artifacts",
  },
  {
    title: "Automate quality guardrails",
    description:
      "Every branch is pre-scanned for regressions, accessibility gaps, and performance drift. Review annotated diffs with suggested fixes and merge confidently when standards are met.",
    image: launchPresentation,
    alt: "AI agent generating review summary for release readiness",
  },
  {
    title: "Orchestrate cross-team launches",
    description:
      "Sync updates across marketing, success, and leadership through tailored briefings and launch rooms. Flowstate Agent keeps the whole organization informed on progress and blockers.",
    image: heroDashboard,
    alt: "Launch rooms view aligning cross-functional teams",
  },
];

const howItWorks = [
  {
    step: "Connect your repo",
    detail:
      "Link GitHub or GitLab, set branch protections, and import your engineering guidelines in under five minutes.",
  },
  {
    step: "Describe your launch",
    detail:
      "Outline scope, stakeholders, and success metrics. The agent drafts timelines, tasks, and aligned briefs instantly.",
  },
  {
    step: "Review & ship",
    detail:
      "Approve coordinated sprints, watch tasks auto-progress, and promote the release when dashboards signal ready.",
  },
  {
    step: "Scale confidently",
    detail:
      "Reuse launch playbooks, measure velocity, and unlock insights that steer your next growth milestone.",
  },
];

const testimonials = [
  {
    quote:
      "Flowstate cut our launch prep in half while keeping every release board audit-ready. Investors love the clarity.",
    name: "Maya Chen",
    title: "Co-Founder",
    company: "SynapseOS",
  },
  {
    quote:
      "Our engineering team finally ships without weekend crunch. The agent surfaces blockers before they snowball.",
    name: "Leo Martins",
    title: "CTO",
    company: "Ledgerline",
  },
  {
    quote:
      "From beta signups to enterprise pilots, Flowstate aligns product, sales, and success in a single view.",
    name: "Anaya Patel",
    title: "Head of GTM",
    company: "Nimbus AI",
  },
];

const metrics = [
  { label: "Faster launch cycles", value: "42%" },
  { label: "Waitlist founders", value: "3.1K" },
  { label: "Automated tasks", value: "68%" },
];

const features = [
  {
    title: "Launch playbooks",
    body: "Reusable templates tuned for SaaS fundraising milestones, private beta, and public announcements.",
  },
  {
    title: "Contextual coding",
    body: "AI-generated branches aligned to architecture constraints, lint configs, and security policies.",
  },
  {
    title: "Stakeholder briefing",
    body: "Tailored updates for investors, GTM, and support teams with next-step recommendations.",
  },
  {
    title: "Risk telemetry",
    body: "Signals surface dependency drift, regressions, and unmet metrics before they threaten launch dates.",
  },
  {
    title: "Knowledge capture",
    body: "Post-launch retros auto-summarized with highlights, lessons, and repeatable systems.",
  },
  {
    title: "Secure workspace",
    body: "Granular permissions with SOC2-grade audit logs, SSO support, and data residency controls.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "$0",
    cadence: "/forever",
    summary: "For pre-launch founders validating product-market fit.",
    items: [
      "Up to 3 active workspaces",
      "Agent-assisted code scaffolding",
      "Weekly launch heartbeat report",
      "Basic stakeholder briefings",
      "Email support",
    ],
  },
  {
    tier: "Growth",
    price: "$149",
    cadence: "/month",
    summary: "For seed-stage teams shipping to first customers.",
    items: [
      "Unlimited workspaces",
      "Automated QA and regression scans",
      "Advanced launch playbooks",
      "CRM and analytics integrations",
      "Priority support with launch concierge",
    ],
    featured: true,
  },
  {
    tier: "Scale",
    price: "Talk to us",
    cadence: "",
    summary: "For venture-backed teams coordinating multi-product launches.",
    items: [
      "Dedicated success architect",
      "Custom compliance workflows",
      "Executive dashboards & alerts",
      "On-call engineering reviews",
      "White-glove onboarding",
    ],
  },
];

const faqs = [
  {
    question: "How does the waitlist work?",
    answer:
      "Submit your email and we will invite founders in prioritized waves beginning Q1 2026. You will receive onboarding materials and a recorded playbook walkthrough ahead of activation.",
  },
  {
    question: "Is my code ever stored permanently?",
    answer:
      "Your repositories stay in your own source control. Flowstate Agent reads branches on-demand and discards transient data immediately after generating recommendations.",
  },
  {
    question: "What integrations are available?",
    answer:
      "Native support includes GitHub, GitLab, Linear, Jira, Notion, Slack, and HubSpot. Enterprise plans can connect to custom systems via the admin API.",
  },
  {
    question: "Can non-technical teams use the agent?",
    answer:
      "Yes. Launch rooms share tailored views for marketing, success, and leadership so everyone sees the same source of truth without needing IDE access.",
  },
  {
    question: "Do you offer compliance assurances?",
    answer:
      "We provide SOC2 Type II controls, role-based permissions, and detailed audit logs. Enterprise customers can request regional data residency and custom reviews.",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const autoplay = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroGallery.length);
    }, 5500);

    return () => clearInterval(autoplay);
  }, []);

  useEffect(() => {
    if (submissionState === "success") {
      const timer = setTimeout(() => setSubmissionState("idle"), 3500);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [submissionState]);

  const activeImage = useMemo(() => heroGallery[activeSlide], [activeSlide]);

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setSubmissionState("error");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionState("success");
      setEmail("");
    }, 900);
  };

  return (
    <div className="bg-background text-foreground">
      <ThemeToggle />
      <header className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--gradient-from))] via-[hsl(var(--gradient-via))] to-[hsl(var(--gradient-to))]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[hsl(var(--blur-bg-1))]/40 blur-3xl" />
          <div className="absolute top-24 -right-16 h-60 w-60 rounded-full bg-[hsl(var(--blur-bg-2))]/40 blur-3xl" />
        </div>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
          <div className="font-semibold tracking-tight text-foreground">Flowstate Agent</div>
          <div className="hidden gap-8 md:flex">
            <a className="transition hover:text-primary" href="#benefits">
              Benefits
            </a>
            <a className="transition hover:text-primary" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-primary" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-primary" href="#faq">
              FAQ
            </a>
          </div>
          <div className="hidden md:flex">
            <a
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition hover:border-border/80 hover:bg-background/60"
              href="#waitlist"
            >
              Join waitlist
            </a>
          </div>
        </nav>
        <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-sm backdrop-blur">
              Launch-ready AI coding agent
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Launch production code with an operator-grade AI teammate
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Flowstate Agent turns specs into tested code, automates release rituals, and keeps every launch stakeholder aligned. Founders stay focused on strategy while the agent sweeps the details.
            </p>
            <form
              id="waitlist"
              className="mt-10 flex w-full flex-col gap-4 sm:flex-row"
              onSubmit={handleSignup}
            >
              <div className="relative flex-1">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full rounded-full border border-border bg-background/80 px-6 py-3 text-base text-foreground shadow-sm outline-none transition focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/10"
                  type="email"
                  placeholder="Founder email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-describedby="waitlist-helper"
                />
              </div>
              <button
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Join waitlist"}
              </button>
            </form>
            <div className="mt-3 text-sm text-muted-foreground" id="waitlist-helper">
              No credit card required · Early access cohort opens January 2026
            </div>
            <div
              aria-live="polite"
              className="mt-4 text-sm font-medium"
            >
              {submissionState === "success" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-[#d1f3e1] px-4 py-2 text-[#0a7a46] shadow-sm">
                  Added to the waitlist. Check your inbox for next steps.
                </span>
              )}
              {submissionState === "error" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-[#fde2dd] px-4 py-2 text-[#9c1f17] shadow-sm">
                  Enter a valid email to reserve your invite.
                </span>
              )}
            </div>
          </div>
          <div className="relative z-10 w-full max-w-xl self-stretch lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl bg-[#101418] shadow-[0_25px_70px_-25px_rgba(17,20,24,0.45)]">
              <div className="relative h-[26rem] w-full overflow-hidden">
                <img
                  alt={activeImage.alt}
                  src={activeImage.src}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1014]/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {heroGallery.map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    aria-label={`Show slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === index
                        ? "w-10 bg-white"
                        : "w-5 bg-white/40 hover:bg-white/60"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20" id="value-proposition">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Why founders choose Flowstate Agent
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Launch faster without trading away trust. Flowstate blends purposeful AI with structured operating playbooks so your team can deliver ambitious releases on schedule.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {valuePoints.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-border bg-card/80 p-8 text-left shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-card-foreground">{point.title}</h3>
                <p className="mt-3 text-base text-muted-foreground">{point.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[hsl(var(--gradient-to))]" id="benefits">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Deliver every launch milestone without sacrificing quality
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Each workspace combines technical execution with stakeholder alignment. Your agent keeps documentation, testing, and communication synchronized from kickoff to post-launch retro.
              </p>
            </div>
            <div className="mt-14 space-y-16">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex flex-col items-center gap-12 lg:gap-16 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-card shadow-[0_25px_60px_-30px_rgba(17,24,39,0.5)]">
                    <img
                      alt={benefit.alt}
                      src={benefit.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full max-w-xl">
                    <h3 className="text-2xl font-semibold text-card-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24" id="how-it-works">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Get started in four deliberate steps
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flowstate Agent integrates into your existing stack and guides the entire launch lifecycle with structured, auditable checkpoints.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {howItWorks.map((item, index) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-border bg-card/80 p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{item.step}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#101418] text-white" id="social-proof">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Trusted by high-velocity SaaS teams preparing market-defining launches
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  From pre-seed velocity to Series B scale, Flowstate Agent delivers clarity on progress, risks, and outcomes so founders can earn trust and reinvest conviction.
                </p>
              </div>
              <div className="flex gap-6 text-center">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl bg-white/10 px-6 py-5 shadow-inner">
                    <div className="text-4xl font-semibold text-white">{metric.value}</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/70">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_22px_60px_-30px_rgba(0,0,0,0.65)]"
                >
                  <blockquote className="text-lg leading-relaxed text-white/90">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-white/70">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div>
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {["Arcwell", "Summit Labs", "Northstar", "Telemetry", "Atlas Cloud", "Peakline"]
                .map((brand) => (
                  <div
                    key={brand}
                    className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-[0.35em] text-white/60"
                  >
                    {brand}
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-24" id="features">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Operating system for launch-ready teams
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flowstate Agent pairs AI guidance with structured governance. Every module is designed to help founders protect momentum while scaling confidence across the company.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-card/80 p-8 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:shadow-[0_35px_80px_-50px_rgba(15,23,42,0.6)]"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {feature.title}
                </div>
                <p className="mt-4 text-base text-muted-foreground">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[hsl(var(--gradient-to))]" id="pricing">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Simple, transparent pricing for launch velocity
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start free while you prepare your launch, then scale into advanced automation and dedicated guidance as your team grows.
              </p>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.tier}
                  className={`flex h-full flex-col rounded-3xl border border-border bg-card/90 p-8 shadow-[0_22px_60px_-40px_rgba(16,24,39,0.6)] ${
                    plan.featured ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-2xl font-semibold text-card-foreground">{plan.tier}</h3>
                    {plan.featured && (
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-baseline gap-1 text-primary">
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    {plan.cadence && <span className="text-base text-muted-foreground">{plan.cadence}</span>}
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">{plan.summary}</p>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-10 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      plan.featured
                        ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                        : "border border-border bg-background text-foreground hover:border-border/80"
                    }`}
                    type="button"
                  >
                    {plan.tier === "Scale" ? "Talk to sales" : "Start waitlist access"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24" id="faq">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Frequently asked by founders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Clarity before you launch. If you need deeper answers, we will share a tailored session during onboarding.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-border bg-card/90 p-6 text-left shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]"
              >
                <summary className="cursor-pointer text-lg font-semibold text-card-foreground focus-visible:outline-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground group-open:animate-fade-in">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <section className="relative overflow-hidden bg-[#0f172a] py-20 text-white">
        <div className="absolute inset-0">
          <div className="absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#244466]/60 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to ship your next launch with confidence?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join the Flowstate waitlist to access the founder cohort, guided onboarding, and launch rooms designed for your next milestone.
          </p>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-3 text-base font-semibold text-[#0f172a] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="#waitlist"
          >
            Reserve early access
          </a>
        </div>
      </section>

      <footer className="bg-[#0b0f12] text-white">
        <div className="mx-auto max-w-6xl grid gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="text-lg font-semibold">Flowstate Agent</div>
            <p className="mt-3 text-sm text-white/70">
              The operator-grade AI coding agent helping SaaS founders deliver confident launches from private beta through scale.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="transition hover:text-white" href="#benefits">
                  Launch automation
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#features">
                  Feature overview
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="transition hover:text-white" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Investors
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="transition hover:text-white" href="#">
                  Docs
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Launch playbooks
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a className="transition hover:text-white" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Compliance
                </a>
              </li>
              <li>
                <a className="transition hover:text-white" href="#">
                  Responsible AI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Flowstate Labs. All rights reserved.</div>
            <div className="flex gap-4">
              {[
                { label: "X", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "YouTube", href: "#" },
              ].map((social) => (
                <a key={social.label} className="transition hover:text-white" href={social.href}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
