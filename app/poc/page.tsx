"use client";

import { useState } from "react";

const tasks = [
  { id: "sword-control", label: "Sword control" },
  { id: "physical-endurance", label: "Physical endurance" },
  { id: "team-coordination", label: "Team coordination" },
];

export default function TaskProgressPoc() {
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
    <main>
      <h1>Task progress proof of concept</h1>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={completedTaskIds.has(task.id)}
                onChange={() => toggleTask(task.id)}
              />{" "}
              {task.label}
            </label>
          </li>
        ))}
      </ul>

      <p>
        {completedCount} / {tasks.length}
      </p>
      <p>{progressPercent}%</p>
    </main>
  );
}
