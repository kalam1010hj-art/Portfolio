# Set up Neon for the Portfolio (React + Django)

This repo has two apps: `frontend/` (React/Vite) and `backend/` (Django/DRF).
**Postgres credentials belong only in Django's runtime, never in `VITE_*` variables.**
The backend already uses `dj-database-url` and `psycopg`; this branch adds root env loading so Neon's CLI-generated environment file works without manual copying.

## Initialize Neon (Windows PowerShell, repo root)

```powershell
cd C:\Users\kalam\Desktop\portfolio
npm i -g neon@latest
neon login
neon init -y --org-id org-shiny-smoke-73883434 --project-id ancient-star-37172272 --branch production --services postgres
neon config plan
neon deploy
```

If the global installation fails, use `npx neon@latest init ...` and `npx neon@latest deploy` instead. If sign-in opens a browser, finish signing in there. If authentication times out, run `neon login` and retry.

Neon writes the linked project/branch into `.neon` and pulls `DATABASE_URL` to the root `.env` if it exists, otherwise `.env.local`. Both are git-ignored. `.neon` is also ignored. The Django settings in this branch read those files, with deployed environment variables taking precedence.

**Do not commit your connection string or share it in logs/screenshots.**

## Install, migrate, verify PostgreSQL

```powershell
cd backend
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py check
python manage.py migrate
python manage.py shell -c "from django.db import connection; connection.ensure_connection(); print('DATABASE:', connection.vendor, connection.settings_dict['HOST'])"
python manage.py shell -c "from django.db import connection; c = connection.cursor(); c.execute('SELECT 1'); print('POSTGRES CHECK:', c.fetchone()[0])"
python manage.py runserver
```

Expect `DATABASE: postgresql` with a Neon host, and `POSTGRES CHECK: 1`. `migrate` creates tables on Neon; it does **not** transfer existing SQLite or Supabase records. Export and import your data separately before changing a production database.

In a second terminal:

```powershell
cd C:\Users\kalam\Desktop\portfolio
npm ci --prefix frontend
npm run build
npm --prefix frontend run dev
```

Verify in a browser:
- `http://127.0.0.1:8000/projects/` returns an HTTP 200 JSON response.
- `http://localhost:5173/` loads, and the Projects section fetches from Django.
- If testing the contact form, submit a test message and verify it appears in the Django admin/Neon database; remove the test record afterward.

## Render deployment

Put the **Neon `DATABASE_URL`** in the Render **backend** service's environment variables, not Vercel. Make sure Render runs `python manage.py migrate` in the deployment workflow, then redeploy the backend. The Vite frontend needs only its existing `VITE_API_URL` pointing to Django; it must never receive database credentials.

## Build from repository root

`npm run build` runs `npm --prefix frontend run build`. Frontend dependencies must be installed first with `npm ci --prefix frontend`.

## Security and production branch

The requested Neon branch is `production`. Review `neon config plan` before `neon deploy` because it may reconcile settings on that branch. No app code in this pull request provisions the database by itself; run the commands above on a machine with the Neon CLI, credentials and network access.
