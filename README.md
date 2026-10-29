This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Asta's Preparation Dashboard

**Author:** [Rabab Ali Faour]

## Summary
A small MVP dashboard that tracks Asta's training plan before the Lucifero encounter. It has a threat brief, three task cards (Sword control, Physical endurance, Team coordination) and a progress summary. Progress means task completion, not a prediction that Asta will win. Tasks can be completed and undone, and the count and percentage come from one state source.

## Install and run
```bash
npm install
npm run dev      # open http://localhost:3000
npm run build    # production build
```

## Documents
- [PRD](docs/PRD.md)
- [DESIGN](docs/DESIGN.md)
- [MCP](docs/MCP.md)
- [POC](docs/POC.md)
- [REVIEW](docs/REVIEW.md)


## Known issue
On Windows, `npm run build` shows a warning that `@next/swc-win32-x64-msvc` is "not a valid Win32 application". The build still completes. The scripts use `--webpack` because the Turbopack native bindings did not load in my environment.

## Known Limitations
Task completion progress is stored in React state and is not persisted. Refreshing the page resets the completed tasks, so progress returns to its initial state. The application does not currently save task progress to local storage or a backend database.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
