# 🐎 Hackathon Project: "Neigh-ber" (Horse Tinder)

**Context:** We are in a 2-hour hackathon. The goal is to build a fast, frontend-only MVP of a Tinder-like webapp for horses. We need ruthless prioritization. No backend. All data is hardcoded.

## 🛠️ Tech Stack

- **Framework:** React + TypeScript (via Vite)
- **Styling:** Tailwind CSS
- **Swiping Logic:** `react-tinder-card`
- **Routing:** Simple state-based routing (or `react-router-dom` if configured quickly)
- **Deployment:** Cloudflare Pages / Vercel (static export)

## 🗂️ App Structure & Views

### 1. Mock Data (`src/data/horses.ts`)

Create an array of 5-7 horse profiles.

- **Interface:** `id`, `name`, `age`, `bio`, `imageUrl`.
- **Example Data:**
  - "BoJack", 9, "Looking for someone to ride into the sunset with. No riders allowed."
  - "Spirit", 5, "Free spirit, love running wild. Sugar cubes are the way to my heart."
  - _Use standard Unsplash URLs for horse images._

### 2. Hero Page (`HeroView`)

- **UI:** Full-screen background image of a romantic/funny horse.
- **Content:** Big catchy title "Find Your Mane Match" and a primary CTA button "Start Swiping".
- **Action:** Clicking the CTA transitions the app state to the `SwipeView`.

### 3. Swipe Page (`SwipeView`)

- **UI:** A centered card layout showing the horse's image, name, age, and bio. Include two large buttons below the card: ❌ (Nope) and 💚 (Like).
- **Functionality:**
  - Use `react-tinder-card` to allow swipe gestures (left/right).
  - Swiping Left (Nope): Moves to the next horse.
  - Swiping Right (Like): Moves to the next horse.
  - **Match Logic:** Hardcode a trigger so that on the 3rd "Like" (or a specific horse), a "Match Modal" pops up.
  - **Match Modal UI:** "It's a Match! 🐴❤️🐴", showing both avatars, with a "Send a Message" button that transitions to the `ChatView`.

### 4. Chat Page (`ChatView`)

- **UI:** Mobile-style chat interface (like WhatsApp/Tinder). A header with the matched horse's name and picture.
- **Functionality:**
  - User can type and send a message.
  - **Hackathon Magic (Auto-Responder):** Whenever the user sends a message, simulate a 1-second delay and make the horse reply with a random hardcoded string (e.g., "Neigh! 🐴", "Do you have a sugar cube?", "I'm not looking for a one-night trot.").

## 🤖 AI Agent Instructions (Execution Plan)

1. Initialize the Vite + React + TS project and install Tailwind CSS and `react-tinder-card`.
2. Generate the `horses.ts` mock data file with Unsplash image URLs.
3. Build the main `App.tsx` with state-based routing between `HeroView`, `SwipeView`, and `ChatView`.
4. Implement the 3 views with Tailwind styling (focus on mobile-first, responsive design).
5. Implement the Match Modal and the Chat auto-responder logic.
6. Ensure the code is clean, has no TypeScript errors, and is ready for immediate deployment.

**Please generate the necessary files and code to make this MVP work right now.**

---

## 🚀 Getting Started (local)

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # type-check (tsc) + production build → dist/
npm run preview  # serve the production build locally to sanity-check
```

Requires Node 18+ (Node 20/22 recommended).

## 📁 What was built

```
index.html                     # entry, fonts, favicon, meta tags
src/
  main.tsx                     # React root
  App.tsx                      # state-based routing: hero → swipe → chat
  index.css                    # Tailwind directives + base styles
  types.ts                     # Horse / View / ChatMessage types
  data/horses.ts               # 6 hardcoded horse profiles (Unsplash images)
  components/
    HorseImage.tsx             # image with emoji fallback if a URL 404s
    MatchModal.tsx             # "It's a Match!" overlay
  views/
    HeroView.tsx               # landing + "Start Swiping" CTA
    SwipeView.tsx              # react-tinder-card stack, match on 3rd like
    ChatView.tsx               # chat UI + 1s auto-responder
```

Design choices worth noting: the match triggers on the **3rd like** (`MATCH_ON_LIKE`
in `SwipeView.tsx`), swipe buttons drive the same programmatic swipe as the gestures,
and every horse photo has an emoji fallback so the demo never shows a broken image.

## ☁️ Deploy to Cloudflare Pages

The easiest path — no CLI — connects your existing GitHub repo so every push auto-deploys:

1. `npm run build` locally once to confirm it builds clean, then commit & push:
   ```bash
   git add -A && git commit -m "Neigh-ber MVP" && git push origin main
   ```
2. Go to **dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the `horse-tinder` repo and set:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy.** You'll get a public URL like `https://horse-tinder.pages.dev`
   to send your friends. Every future `git push` redeploys automatically.

### Alternative: one-off CLI deploy (no GitHub needed)

```bash
npm run build
npx wrangler pages deploy dist --project-name=horse-tinder
```

Wrangler will prompt you to log in to Cloudflare in the browser the first time.
Both paths are free on Cloudflare's Pages plan.

