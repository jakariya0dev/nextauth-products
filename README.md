# NextAuth Google Authentication Example

This project demonstrates how to integrate **Google Authentication** in a **Next.js 14 app** using **NextAuth.js**.

It includes protected routes, a global provider setup, and deployment instructions for Vercel.

---

## 🚀 Live Demo

[🔗 Visit the Live Website](https://nextauth-products.vercel.app/)

---

## 📦 Setup & Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

```bash
git clone https://github.com/jakariya0dev/nextauth-products
cd nextauth-products
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment variables**  
   Create a `.env.local` file in the project root and add:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

4. **Run the development server**

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛣️ Route Summary

- `/` → Homepage (Public)
- `/protected` → Protected page (only accessible after sign in)
- `/api/auth/[...nextauth]` → NextAuth API route (handles authentication logic)
- `/404` → Custom Not Found page

---

## 🚀 Deployment on Vercel

1. Push the project to a **GitHub repo**.
2. Go to [Vercel](https://vercel.com), import the repo.
3. Add environment variables (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`) in Vercel dashboard.
4. Deploy — your app will be live within minutes!

---

## 📖 License

This project is licensed under the **MIT License** – feel free to use and modify as needed.
