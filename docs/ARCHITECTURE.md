# Architecture

```
Users ──► Frontend (React + Tailwind) ──► Backend (Express) ──► Database (MongoDB)
                                              │
                                              └──► AI & external services (Gemini, ML, Maps, Cloudinary)
```

In this package the Frontend layer talks to **localStorage** through `AppContext`; the other layers live in `server/` and `ai-ml/`.

## Donation lifecycle
`available → requested → approved → picked_up → completed`  ·  alternatives: `rejected`, `cancelled`, `expired`, `removed`

- Donor creates a listing → `available`
- Verified NGO sends a request → `requested`
- Donor approves one request (others auto-rejected) → `approved`
- NGO marks picked up → `picked_up`
- Donor confirms handover → `completed` (impact updated)
- Past pickup deadline and not collected → `expired`

## Match score (0–100)
distance 30 · quantity fit 25 · time left 20 · category & diet 15 · NGO verification & capacity 10
