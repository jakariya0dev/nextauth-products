# Next.js Product Management App

This is a **Next.js 15** application built with the **App Router** and **Turbopack**, featuring:

- **Public Pages:**
  - Landing page with Navbar, Hero, Product Highlights, and Footer
  - Product list and product details

- **Authentication:**
  - Google login using **NextAuth.js**
  - Conditional Navbar showing Login/Logout based on session
  - Protected routes for adding products

- **Product Management:**
  - View product list
  - Add new products (stored in JSON for development purposes)
  - Dynamic product details page

- **Enhancements:**
  - Loading spinners on async operations
  - Optional toast notifications
  - Light/Dark theme toggle (if implemented)

### **Tech Stack:**
- Next.js 15 (App Router)
- NextAuth.js (Google OAuth)
- React + Tailwind CSS
- JSON-based mock backend
- Vercel deployment ready

### **Usage:**
1. Clone the repo
2. Install dependencies: `npm install`
3. Create `.env.local` with your Google OAuth credentials and NextAuth secret
4. Run the dev server: `npm run dev`
5. Visit [http://localhost:3000](http://localhost:3000)

---

### **Notes:**
- JSON storage is **development only**; data will not persist on production (Vercel).  
- For production, replace JSON storage with a cloud database (MongoDB, Supabase, etc.).
