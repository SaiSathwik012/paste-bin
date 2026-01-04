# Paste Bin

A lightweight and secure text-sharing web application that allows users to create temporary pastes with optional expiration time and view limits. Designed with simplicity, performance, and reliability in mind.

Repository:
https://github.com/SaiSathwik012/paste-bin.git

Live Demo : https://paste-bin-one.vercel.app/
---

## ✨ Features

- Create and share text snippets instantly
- Optional Time-to-Live (TTL) for automatic expiration
- Optional Maximum View Limit for controlled access
- Pastes automatically delete themselves after expiry or view limit
- Session-based paste history on the client
- Responsive and clean user interface
- Health check API for backend monitoring
- Deterministic testing support using custom request headers

---

## 🧰 Tech Stack

- Frontend Framework: Next.js (Pages Router)
- Backend: Next.js API Routes
- Database: MongoDB (Mongoose ODM)
- Styling: Tailwind CSS
- UI Components: shadcn/ui
- Icons: Lucide React
- Notifications: Sonner
- Deployment Platform: Vercel

---

## 🗄️ Database Design & Persistence

The application uses MongoDB as the persistence layer.

### Why MongoDB?

- Flexible schema for paste documents
- Natural fit for JSON-based data
- Supports atomic update operations

### Reliability Measures

- Atomic operators enforce maximum view limits
- Prevents race conditions under concurrent access
- Ensures consistency when decrementing view counts

---

## ✅ Functional Requirements Covered

- Create a paste with arbitrary text content
- Automatic expiration using TTL
- View-based self-destruction of pastes
- Thread-safe view count enforcement
- Test-mode support using x-test-now-ms header
- Health check endpoint at /api/healthz
- Fully responsive UI across devices

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SaiSathwik012/paste-bin.git
cd paste-bin

#2. Install dependencies
npm install
# or
bun install

#3. Environment Configuration

Create a .env.local file in the project root.

cp .env.example .env.local

#Update .env.local with your configuration:

MONGODB_URI=your_mongodb_connection_string
TEST_MODE=1

#4. Run the development server
npm run dev
# or
bun dev

#Open the application at:

http://localhost:3000

🧪 API Endpoints

/api/pastes — Create and retrieve pastes

/api/healthz — Health check and database connectivity


📄 License

This project is intended for educational and assignment purposes.
EOF


---

### ✅ After this, commit and push

```bash
git add README.md
git commit -m "Update README"
git push
```

#👤 Author

Sai Sathwik Samudram
LinkedIn : https://www.linkedin.com/in/samudram-sai-sathwik-884585230
Leetcode : https://leetcode.com/u/SaiSathwikSamudram/
