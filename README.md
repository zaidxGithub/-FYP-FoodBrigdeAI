# FoodBridge AI — Share food. Spread hope.

A smart food redistribution platform connecting restaurants (donors) with verified NGOs.
**This package is frontend-only:** React + Tailwind, with all data stored in the browser's `localStorage`.
The backend, database and AI layers are included as an explicit, ready-to-extend scaffold in `server/` and `ai-ml/`.

## Run the frontend
```bash
cd client
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → client/dist
```

## Theme: yellow · white · black
The whole site uses one design system: Inter, #FFD600 yellow for primary actions and active states, #111111 black for headings and panel headers, white cards and #F5F5F5 backgrounds. The Tailwind `brand` scale in `client/tailwind.config.js` is now a neutral/black scale (and `lime.accent` is the yellow), so existing classes follow the theme automatically.

## Login / Signup UI
`/login` and `/signup` now share one animated sliding page (`client/src/pages/Auth.jsx`, styles in `client/src/styles/auth.css`, layout + footer in `client/src/components/AuthLayout.jsx`).
It keeps the existing auth logic (`login`, `register`, demo accounts, donor/NGO signup, map location) and adds inline validation, show/hide password and a stacked mobile layout.
Footer links go to `/privacy`, `/terms` and `/help`.

## Demo accounts (also one-click buttons on the Login page)
| Role            | Email                 | Password   |
| --------------- | --------------------- | ---------- |
| Donor           | donor@foodbridge.ai   | Donor@123  |
| NGO (verified)  | ngo@foodbridge.ai     | Ngo@123    |
| NGO (pending)   | hope@foodbridge.ai    | Ngo@123    |
| Admin           | admin@foodbridge.ai   | Admin@123  |

Use **Profile → Reset demo data** to restore the starting dataset.

## What's inside (from the PPT + architecture diagram)
| Area | Features |
| ---- | -------- |
| Users | Food donor, Food acceptor (NGO), Admin; role-based routes |
| Core modules | Auth & user management · food donation management · request & approval · location-based discovery (Leaflet/OSM, distance, filters) · notifications · ratings & reviews · impact & analytics dashboard |
| AI modules | Description generator · donor–NGO match scoring (transparent rules) · image tag/type/veg suggestions · demand outlook *(optional)* · chatbot *(optional)* |
| Workflow | Available → Requested → Approved → Picked up → Completed (plus Rejected / Cancelled / Expired) |
| Admin | NGO verification, user suspension, listing moderation, reports, audit log, 6 platform metrics |
| Safety | Donor must confirm food details; no food-safety certification claims; AI output is always a suggestion |

AI features run locally in `client/src/utils/ai.js` so the demo works offline. The same logic exists server-side in
`server/src/utils/` (Gemini calls stay behind the server so API keys never reach the browser).

## Folder structure
```
foodbridge-ai/
├── client/                      Frontend (React + Tailwind + Vite)
│   ├── public/                  favicon
│   ├── index.html
│   ├── package.json · vite.config.js · tailwind.config.js · postcss.config.js
│   └── src/
│       ├── components/          Navbar, Footer, DonationCard, MapView, Chatbot, StatusBadge, …
│       ├── pages/               Home, Login, Signup, Browse, DonationDetail, NewDonation,
│       │   │                    Dashboard, Notifications, Reviews, Impact, Profile, About
│       │   └── dashboard/       DonorDashboard, NgoDashboard, AdminDashboard
│       ├── context/             AppContext.jsx — all state + actions, persisted to localStorage
│       ├── utils/               storage, ai, geo, format, impact, constants, hash, image
│       ├── data/                seed.js — demo dataset
│       ├── hooks/               useGeolocation
│       ├── App.jsx · main.jsx · index.css
├── server/                      Backend + Database + AI services layers (scaffold, not wired in)
│   ├── .env.example · package.json · README.md
│   └── src/
│       ├── controllers/         auth, donation, request, review, admin, ai
│       ├── models/              User, Donation, Request, Review, Notification, AuditLog
│       ├── routes/              *.routes.js
│       ├── middlewares/         auth (JWT, roles, verified NGO), error
│       ├── utils/               gemini, matching, cloudinary, password
│       ├── config/              db.js
│       └── index.js
├── ai-ml/                       Optional demand-prediction model (Python)
├── docs/                        Architecture notes
└── README.md
```

## Moving to a real backend later
`client/src/context/AppContext.jsx` is the only file that reads or writes data. Swap its actions for `fetch('/api/…')`
calls to the routes in `server/src/routes/` and the UI stays the same.

## Notes
- localStorage is per-browser and ~5 MB; photos are resized before saving. Demo passwords use a non-secure hash — the server scaffold uses bcrypt.
- Map tiles come from OpenStreetMap, so the map views need an internet connection.
- Project code PCS26/59 · Supervisor: Mr. Mohammad Aalam Khan.
