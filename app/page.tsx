"use client";

import { useMemo, useState } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium";
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: "sword-control",
    title: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
    completed: false,
  },
  {
    id: "physical-endurance",
    title: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
    completed: false,
  },
  {
    id: "team-coordination",
    title: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
    completed: false,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks],
  );
  const totalTasks = tasks.length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const toggleTask = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-[#0B1020] px-4 py-8 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#00ff87]">
              Training Plan Active
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Asta&apos;s Preparation Dashboard
            </h1>
          </div>
        </header>

        <main className="space-y-8">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-2xl border border-slate-700 bg-[#1A2236] p-6 shadow-lg shadow-slate-950/20">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f43f5e]">
                Threat brief
              </p>
              <h2 className="mb-3 text-2xl font-semibold text-[#F8FAFC]">
                Lucifero looms, but Asta is ready to train.
              </h2>
              <p className="text-base leading-7 text-[#CBD5E1]">
                The goal is clarity, not certainty. This preparation tracker keeps the
                plan focused on what can be controlled today: drills, endurance, and
                team coordination.
              </p>
            </article>

            <aside className="rounded-2xl border border-slate-700 bg-[#1A2236] p-6 shadow-lg shadow-slate-950/20">
              <p className="mb-2 text-sm font-medium text-[#CBD5E1]">Preparation status</p>
              <div className="mb-4 flex items-end gap-3">
                <span className="text-5xl font-black leading-none text-[#F8FAFC] sm:text-6xl">
                  {progressPercent}%
                </span>
              </div>
              <p className="mb-4 text-xl font-medium text-[#00ff87]">
                {completedCount}/{totalTasks} tasks completed
              </p>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-[#00ff87] transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                  aria-label={`Progress: ${progressPercent}%`}
                />
              </div>
            </aside>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {tasks.map((task) => {
              const isComplete = task.completed;

              return (
                <article
                  key={task.id}
                  className="flex min-h-65 flex-col rounded-2xl border border-slate-700 bg-[#1A2236] p-5 shadow-lg shadow-slate-950/20"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#CBD5E1]">
                        {task.priority} priority
                      </p>
                      <h3 className="text-2xl font-semibold text-[#F8FAFC]">
                        {task.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mb-6 text-base leading-7 text-[#CBD5E1]">
                    {task.description}
                  </p>

                  <div className="mt-auto space-y-4">
                    <p className="text-base font-medium text-[#F8FAFC]">
                      Status: <span className={isComplete ? "text-[#00ff87]" : "text-[#CBD5E1]"}>
                        {isComplete ? "Complete" : "Not complete"}
                      </span>
                    </p>

                    <button
                      type="button"
                      aria-pressed={isComplete}
                      onClick={() => toggleTask(task.id)}
                      className={`flex h-12 w-full items-center justify-center rounded-xl border px-4 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff87] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1020] ${
                        isComplete
                          ? "border-[#00ff87] bg-[#00ff87] text-[#0B1020] hover:bg-[#26ff9f]"
                          : "border-slate-600 bg-[#0B1020] text-[#F8FAFC] hover:bg-slate-800"
                      }`}
                    >
                      {isComplete ? "Undo complete" : "Mark complete"}
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
}
