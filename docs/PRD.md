# PRD: Asta's Preparation Dashbaord

## Summary 
Asta is a fictional fighter whose training notes are scattered.
He needs a clear view of his task and progress. 

## User
Asta, a mage-knight from the Black Bull squad who trains every day
and has limited time before the battle.

## Problem
Asta needs a way to see his training tasks and track completion
before his fight against Lucifero.

## Goal of the first version
A simple dashboard where Asta can see his tasks, tick them off,
and know how ready he is.

## Must-have features
1.View training tasks.
2.Toggle completion(complete and undo) for each task.
3.See calculated progress(completed / total and a percentage).

## User stories
-Asta:I want to see my training tasks so i know what to do.
-Asta:I want to mark a task complete, and undo it if i was wrong.
-Asta:Iwant to see my progress, so I know how prepared I am.

## Sample data and expected behavior
| Task | Description | Priority |
| --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High |
| Physical endurance | Complete a focused strength and stamina session. | Medium |
| Team coordination | Review a preparation plan with the Black Bulls. | High |

## Acceptance criteria
- On load, the dashboard shows 3 tasks, 0 / 3 and 0%.
- With one of three tasks complete, it shows 1 / 3 and 33%.
- With two complete, it shows 2 / 3 and 67%.
- With all three complete, it shows 3 / 3 and 100%.
- Undoing a completion returns the count and percentage correctly
  (e.g. 1 / 3 back to 0 / 3 and 0%).
- Clicking a task's button repeatedly never counts it twice.


## Design and accessibility requirements
- One dashboard screen, readable on mobile.
- Clear status text per task (e.g. "Complete" / "Not complete"),
  not color alone.
- All controls usable with the keyboard, with visible focus.
- Sufficient text contrast.

## Stack
Next.js, TypeScript, Tailwind CSS.

## Assumptions and limitations
- Progress is session-only and resets after refresh.
- Percentage is completed / total, rounded to a whole number.

## Out of scope
Login, accounts, database, payments, chatbots, combat simulation,
multiplayer, live anime data, adding/editing/deleting tasks,
saving after refresh, extra routes.