# DESIGN.md

## About my design
I designed a dashboard for Asta's training plan before the fight with Lucifero. The progress percentage only shows how much of the training plan is finished. It does not predict that Asta will win. I did not add login, payments, chat or any extra features because they are not in my PRD.

## Dashboard sections
1. **Header:** shows the title "Asta's Preparation Dashboard" and a "Training Plan Active" label, so the user knows what the page is for.
2. **Threat brief:** a short note about Lucifero and why Asta needs to prepare. It also says the progress is not a victory prediction.
3. **Progress summary:** a big percentage, a "0/3 tasks completed" counter and a progress bar. I made this the main part of the page.
4. **Three task cards:** Sword control, Physical endurance and Team coordination. Each card has a picture, a short description, a status and a "Mark complete" button.

On desktop the brief and the progress are side by side, and the three task cards are in one row. On mobile everything is in one column so it is easier to scroll and tap.

## Colors I selected
- **Background:** dark navy (#0B1020). It gives a serious, battle feeling and makes the light text easy to read.
- **Cards:** dark slate (#1A2236). The cards stand out from the background without looking heavy.
- **Crimson (#f43f5e):** only for Lucifero and warnings, so red always means danger.
- **Green (#00ff87):** for "Training Plan Active" and the task counter, to show that things are going well.
- **Main text:** off-white (#F8FAFC) for good contrast.
- **Secondary text:** light gray (#CBD5E1) for descriptions.

## Typography
- **Font:** Inter, because it is clean and easy to read on small screens.
- **Page title:** bold, about 28-32px, in normal title case.
- **Progress percentage:** extra bold, about 48-64px. It is the biggest thing on the page because it is the most important.
- **Card titles:** semibold, about 18-20px.
- **Body text:** Inter, about 14-16px.
- **Headings and labels:** Anti-Magic Determination.

## Spacing
- I used an 8px base unit, so all gaps and padding are multiples of 8.
- Cards have 16-24px padding and 16-24px gaps between them.
- Sections are 32px apart.
- Cards have rounded corners (12-16px) and buttons have 8px.
- Buttons are full width in each card and at least 44px tall, so they are easy to tap on a phone.

## Required refinement
**Before:** docs/evidence/design-before.png
**After:** docs/evidence/design-after.png

**What I changed:**
- I changed the all-caps headings to normal title case so they are easier to read.
- I removed extra labels and tags that were confusing (like "Mandatory clarification" and the stage checkpoints) and kept simple ones like "Not complete".
- I made the progress number bigger and added one clear "0/3 tasks completed" counter.
- I changed the small "Mark as complete" text into full-width "Mark complete" buttons.
- I removed the footer with the session status and reset button because it was not in my PRD.

**Why I did it:**
In my first design the text was small, there were too many tags, and the labels sounded too technical. Someone who does not know the anime would not understand what to do. The progress number was easy to miss and the buttons were hard to tap on mobile. After the changes the main actions are clear: read the threat, check progress, and mark a task complete.