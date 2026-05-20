# The Multifaceted Goddesses

A digital exhibition exploring goddess figures from ancient Cyprus — featuring interactive 3D models, Gaussian splat viewers, and an interactive map of archaeological sites.

---

## For the grader / first-time visitor

You do **not** need to know how to code to run this. Just follow the steps below in order. If something goes wrong, the most common fixes are listed at the bottom.

---

## Step 1 — Install Node.js (only needed once, ever)

Node.js is the engine that runs this project on your computer.

1. Go to **https://nodejs.org**
2. Click the big **"LTS"** download button (LTS = Long Term Support, the stable version)
3. Run the installer and click through it — all default options are fine
4. When it is done, open a **Terminal** (Mac: press `Cmd + Space`, type `Terminal`, press Enter)
5. Type the following and press Enter to confirm it worked:

```
node --version
```

You should see something like `v20.x.x`. Any version 18 or higher is fine.

---

## Step 2 — Download this project

If you received a zip file, unzip it somewhere easy to find (like your Desktop).

If you are cloning from GitHub:

```
git clone <repository-url>
cd TheMultifacetedGodesses
```

---

## Step 3 — Open a Terminal inside the project folder

**On Mac:**
- Open Terminal
- Type `cd ` (with a space after it), then drag the project folder into the Terminal window, then press Enter

**On Windows:**
- Open the project folder in File Explorer
- Click the address bar at the top, type `cmd`, press Enter

You should now see the terminal prompt is "inside" the project folder.

---

## Step 4 — Install all dependencies (one command does everything)

This single command downloads everything the project needs — React, the 3D model viewer, Gaussian splats, the interactive map, and all other libraries:

```
npm install
```

> **What this installs automatically:**
> - **React + Vite** — the web framework and development server
> - **React Router** — handles navigation between pages
> - **Three.js** — the 3D rendering engine
> - **@mkkellogg/gaussian-splats-3d** — renders Gaussian splat `.ply` captures in the browser
> - **Leaflet + React-Leaflet** — the interactive map with multiple archaeological site pins
>
> You do **not** need to run any separate install commands for these. `npm install` reads the `package.json` file and handles all of them at once.

Wait for it to finish (usually 30–60 seconds). You will see a line like `added 72 packages`.

---

## Step 5 — Start the website

```
npm run dev
```

Vite will print a local address, for example:

```
  Local:   http://localhost:5173/
```

Open that address in your browser (Chrome or Firefox recommended). The site is now running on your computer.

> **To stop the server:** go back to the Terminal and press `Ctrl + C`.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm: command not found` | Node.js is not installed — go back to Step 1 |
| `npm install` fails with permission errors on Mac | Try `sudo npm install` and enter your Mac password when prompted |
| The page is blank or shows an error | Make sure you ran `npm install` before `npm run dev` |
| 3D models do not load | Large `.ply` and `.glb` files are tracked with Git LFS. If you cloned the repo, run `git lfs pull` to download them |
| Port already in use | Something else is using port 5173 — Vite will automatically suggest the next free port, just open that one in your browser instead |
| Map shows no tiles | The map tiles load live from OpenStreetMap and require an internet connection |

---

## Project structure (for the curious)

```
src/
  pages/          — one file per page (Home, Collection, Visit, About, TechComparison)
  components/     — reusable UI pieces (FlipCard, 3D model viewer, map)
  data/           — collection metadata (titles, tags, model paths)
  styles.css      — all styles in one file
public/
  flip-cards/     — illustration images for the epithet cards
  splats/         — Gaussian splat .ply files
```

---

## Tech stack at a glance

| Library | Purpose |
|---|---|
| React 19 + Vite | Web framework and fast development server |
| Three.js | WebGL 3D rendering |
| @mkkellogg/gaussian-splats-3d | Renders `.ply` Gaussian splat files in the browser |
| React-Leaflet + OpenStreetMap | Interactive map — no API key required |
| React Router v6 | Client-side navigation between pages |
