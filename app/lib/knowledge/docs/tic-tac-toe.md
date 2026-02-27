---
id: project-tic-tac-toe
title: Tic-Tac-Toe
category: projects
projectId: tic-tac-toe
keywords: realtime, convex, nextauth, mongodb, mongoose, leaderboard, multiplayer, openai
updatedAt: 2026-02-25
---
This project was originally built in 2023.
Multiplayer room state is managed with Convex (`convex/rooms.ts`) using mutations and queries for create, join, turn-taking, winner, draw, and board-size changes.
There is a Convex cleanup path for deleting rooms older than 24 hours (`delete24HoursOldRooms`).
Authentication uses NextAuth with GitHub provider routes under `app/api/auth/[...nextauth]/route.ts`.
User profiles, leaderboard data, and match history are stored with MongoDB/Mongoose (`app/models/user/*`) and support paginated game history.
The OpenAI route currently returns `{ message: "Disabled" }` in `app/api/openai/route.ts` (no active AI gameplay calls from that endpoint).
Code references:
- Convex room lifecycle + turn mutation logic: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/convex/rooms.ts
- Scheduled room cleanup for stale sessions: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/convex/crons.ts
- Multiplayer room page state + Convex hooks integration: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/app/room/%5Bid%5D/page.tsx
- Move interactions and winner/draw handling from the board: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/app/components/Square.tsx
- Leaderboard and game-history persistence with MongoDB/Mongoose: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/app/models/user/user.functions.ts
- GitHub auth provider setup via NextAuth: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/app/api/auth/%5B...nextauth%5D/route.ts
- OpenAI gameplay endpoint currently disabled response: https://github.com/JesseSinivuori/tic-tac-toe/blob/main/app/api/openai/route.ts
