# Basic Text Echo App (Vue + Hono + Docker)

A simple full-stack app I built to learn **Docker, Vue.js, Hono (Node.js)**, and containerized deployment.

---

## Project Overview

- **Frontend:** Vue.js
  - Simple UI with a textarea and submit button
  - Sends text input to the backend without page refresh
- **Backend:** Hono + Node.js
  - Receives text input and echoes it back
- **Dockerized:** Both frontend and backend run in separate containers
  - Managed with `docker-compose` for easy start/stop
- **Goal:** Learn how to build, containerize, and run a full-stack app locally using Docker

---

## Folder Structure

your-project/

├─ src/

│ ├─ frontend/ # Vue.js app

│ └─ backend/ # Hono + Node.js app

├─ .gitignore

├─ docker-compose.yml

├─ README.md

---

## Getting Started

### Prerequisites
- Docker & Docker Compose installed
- Node.js (only if you want to run outside Docker)

### Run with Docker
1. Clone the repository:
```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```
2. Build and start containers:
```bash
docker-compose up --build -d
```
3. Access the app:

Frontend: http://localhost:80

Backend: http://localhost:3000

### Stop Containers
```bash
docker-compose down
```

## What I Learned

- How to structure a small full-stack project (frontend + backend)
- Building and running Docker containers for multiple services
- Using Docker Compose to manage multi-container apps
- Handling CORS for frontend-backend communication
- Exposing ports and testing locally in WSL/Windows
