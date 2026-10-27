"use client";

import Image from "next/image";
import { useState } from "react";

export type TrainingTaskId =
  | "sword-control"
  | "physical-endurance"
  | "team-coordination";

export type TrainingTask = {
  id: TrainingTaskId;
  title: string;
  description: string;
  priority: "High" | "Medium";
  image: string;
  imageAlt: string;
};

type TaskProgressProps = {
  tasks: TrainingTask[];
};

export default function TaskProgress({ tasks }: TaskProgressProps) {
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(
    new Set(),
  );
  const completedCount = completedTaskIds.size;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  function toggleTask(taskId: string) {
    setCompletedTaskIds((currentCompletedTaskIds) => {
      const nextCompletedTaskIds = new Set(currentCompletedTaskIds);

      if (nextCompletedTaskIds.has(taskId)) {
        nextCompletedTaskIds.delete(taskId);
      } else {
        nextCompletedTaskIds.add(taskId);
      }

      return nextCompletedTaskIds;
    });
  }

  return (
    <>
      <aside className="rounded-xl border border-slate-700/80 bg-[#141a2a]/90 p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Readiness evaluation
            </p>
            <h2 className="text-lg font-semibold">Preparation progress</h2>
          </div>
          <p className="shrink-0 rounded-md border border-emerald-400/20 bg-emerald-400/5 px-2.5 py-1.5 text-xs font-semibold text-emerald-300">
            {completedCount} / {tasks.length} tasks completed
          </p>
        </div>

        <div className="mb-4 flex items-end gap-2">
          <p className="text-5xl font-black leading-none tracking-tight sm:text-6xl">
            {progressPercent}%
          </p>
          <span className="pb-1 text-xs font-bold uppercase tracking-wider text-slate-400">
            completed
          </span>
        </div>

        <div
          className="h-2.5 overflow-hidden rounded-full bg-slate-800"
          role="progressbar"
          aria-label="Training task progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
        >
          <div
            className="h-full rounded-full bg-[#00ff87] transition-[width] duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div
          aria-hidden="true"
          className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-500"
        >
          <span>0% start</span>
          <span>100% of tasks completed</span>
        </div>
      </aside>

      <section className="lg:col-span-2" aria-labelledby="assigned-tasks-title">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              Assigned training tasks
            </p>
            <h2 id="assigned-tasks-title" className="text-xl font-semibold">
              Today&apos;s focus
            </h2>
          </div>
          <p className="text-xs text-slate-400">Select a task to toggle completion</p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {tasks.map((task) => {
            const isComplete = completedTaskIds.has(task.id);

            return (
              <li key={task.id} className="min-w-0">
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-700/80 bg-[#141a2a]">
                  <div className="relative h-32 shrink-0 overflow-hidden">
                    <Image
                      src={task.image}
                      alt={task.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-black/70"
                    />
                    <span className="absolute left-4 top-4 rounded border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      {task.priority} priority
                    </span>
                    <span className="absolute right-4 top-4 rounded border border-white/20 bg-black/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {isComplete ? "Complete" : "Not complete"}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="mb-2 text-lg font-bold">{task.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-5 text-slate-300">
                      {task.description}
                    </p>
                    <p className="mb-3 text-sm font-medium text-slate-200">
                      Status:{" "}
                      <span
                        className={
                          isComplete ? "text-emerald-300" : "text-slate-300"
                        }
                      >
                        {isComplete ? "Complete" : "Not complete"}
                      </span>
                    </p>
                    <button
                      type="button"
                      aria-pressed={isComplete}
                      onClick={() => toggleTask(task.id)}
                      className={`min-h-11 w-full rounded-lg border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ff87] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141a2a] ${
                        isComplete
                          ? "border-[#00ff87]/60 bg-[#00ff87] text-[#0B1020] hover:bg-emerald-300"
                          : "border-slate-600 bg-[#20283a] text-slate-100 hover:border-slate-400 hover:bg-[#293348]"
                      }`}
                    >
                      {isComplete ? "Undo complete" : "Mark complete"}
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
