# PRD: Asta's Training Tracker

## Problem
Asta needs a way to see his training tasks and track completion
before his fight against Lucifero.

## User
Asta, a mage-knight from the Black Bull squad who trains every day
and has limited time before the battle.

## Goal
A simple dashboard where Asta can see his tasks, tick them off,
and know how ready he is.

## Must-have features
1. See a list of training tasks (e.g. "Swing the sword 1000 times",
   "Mana control drills", "Anti-magic sword practice")
2. Mark a task as done or not done
3. See overall progress (e.g. "3 of 8 done" with a progress bar)
4. Add a new task
5. Filter tasks: All / Done / Not done

## Out of scope
- Login or accounts
- Database or saving to a server
- Multiple users
- Combat or game mechanics

## Acceptance criteria
- [ ] The task list shows on the first screen with no setup
- [ ] Ticking a task updates the progress count immediately
- [ ] Adding a task shows it in the list right away
- [ ] Each filter shows only the correct tasks
- [ ] Works on a phone-size screen and a laptop screen

## Open questions
- Should progress reset every day?
- Should tasks have a difficulty or priority?