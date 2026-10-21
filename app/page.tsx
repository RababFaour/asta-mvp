import TaskProgress, { type TrainingTask } from "./components/TaskProgress";

const tasks: TrainingTask[] = [
  {
    id: "sword-control",
    title: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
    image: "/images/sword-control.jpg",
    imageAlt: "Sword control training",
  },
  {
    id: "physical-endurance",
    title: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
    image: "/images/physical-endurance.jpg",
    imageAlt: "Physical endurance training",
  },
  {
    id: "team-coordination",
    title: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
    image: "/images/team-coordination.jpg",
    imageAlt: "Team coordination training",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1020] px-4 py-6 text-[#F8FAFC] sm:px-6 sm:py-8 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-0" aria-hidden="true">
        <div className="absolute -top-48 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-rose-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-700/70 pb-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-lg border border-[#00ff87]/40 bg-[#00ff87]/10 text-lg font-black text-[#00ff87]"
            >
              A
            </span>
            <div>
              <p className="text-xs font-medium tracking-wide text-slate-400">
                Tactical readiness for the Lucifero encounter
              </p>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Asta&apos;s Preparation Dashboard
              </h1>
            </div>
          </div>

          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs font-semibold text-emerald-300">
            <span className="size-2 rounded-full bg-[#00ff87]" aria-hidden="true" />
            Training plan active
          </p>
        </header>

        <section className="mb-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-xl border border-slate-700/80 bg-[#141a2a]/90 p-5 sm:p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-rose-400">
              Threat brief
            </p>
            <h2 className="mb-3 text-xl font-semibold leading-snug sm:text-2xl">
              Lucifero looms, but Asta is ready to train.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Focus on what can be controlled today: precise drills, endurance,
              and team coordination. This progress reflects completed training,
              not a prediction of the battle.
            </p>
          </article>

          <TaskProgress tasks={tasks} />
        </section>
      </div>
    </main>
  );
}
