# SpaceEdu — 3D Solar System (Node.js Project) 🚀

Poora project **Node.js** par chalta hai. VS Code me kholo, do terminal chalao, bas.

```
local-project/
├── backend/     → Node.js + Express (planets ka data API, port 8001)
│   ├── server.js
│   ├── planet-data.json   ← saara NASA data yahan hai (edit kar sakte ho)
│   └── package.json
└── frontend/    → React + Three.js (poori 3D website, port 3000)
    ├── src/               ← saara UI/3D code
    ├── public/textures/   ← real NASA planet textures
    └── .env               ← REACT_APP_BACKEND_URL=http://localhost:8001
```

## Chalane ka tarika (VS Code me)

**Step 0** — Node.js installed hona chahiye (v18+). Check: `node -v`

**Step 1 — Backend** (VS Code terminal):
```bash
cd backend
npm install        # ya: yarn install
npm start          # ya: node server.js
```
→ `SpaceEdu Node backend running on http://localhost:8001`

**Step 2 — Frontend** (naya terminal, `+` button se):
```bash
cd frontend
npm install        # ya: yarn install
npm start
```
→ Browser khulega: `http://localhost:3000` — website live! 🎉

## Kya-kya kar sakta hai
- Home → **START JOURNEY** → full 3D Solar System
- Planet pe **click** → camera udta hai + info panel khulta hai
- **Moons** → planet select karo, panel me moon pe click karo
- **Speed 1×/10×/50×** → time fast-forward (Neptune ko hilte dekho)
- **Drag** = ghumao, **scroll/pinch** = zoom, **Reset** button = wapas overview
- Planets page → har planet ka full NASA fact file
- About page → speeds aur scale kaise kaam karta hai

## Deploy kaise karu (upload)?

**Option 1 — Free & easiest: Vercel (frontend) + Render/Railway (backend)**
1. Backend: [render.com](https://render.com) → New Web Service → apna GitHub repo → root dir `backend`, start command `node server.js` → deploy → jo URL mile (jaise `https://xxx.onrender.com`) use note karo
2. Frontend: [vercel.com](https://vercel.com) → apna GitHub repo → root dir `frontend` → Environment Variables me `REACT_APP_BACKEND_URL` = backend ka URL → deploy
3. Done — link share karne layak live website!

**Option 2 — GitHub pe push:**
```bash
git init
git add .
git commit -m "SpaceEdu 3D solar system"
git remote add origin https://github.com/TERA-USERNAME/spaceedu.git
git push -u origin main
```

## Data edit karna?
`backend/planet-data.json` kholo — har planet ka `diameterKm`, `facts`, `moons` waghera. Save karte hi backend restart aur website update.

## Tech
React 19 • Three.js (@react-three/fiber) • Tailwind CSS • Express • real NASA data
