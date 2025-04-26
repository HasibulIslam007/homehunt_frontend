# HomeHunt Frontend

Welcome to **HomeHunt** – a modern rental housing solution platform!  
This is the **frontend** application built with **Next.js 15**, **TypeScript**, **TailwindCSS**, and **Server Actions**.

---

## 🚀 Features

- ⚡ Fully typed with **TypeScript**
- 🏠 Fetch, display, and manage **housing products**
- 🔥 Optimized with **Next.js Server Actions** and **Dynamic Cache Revalidation**
- 🎨 Responsive and modern **TailwindCSS** design
- 🔐 Supports **Role-Based Access** via JWT (Landlord, Tenant, Admin)
- 🧹 Organized with clean folder structure and scalable codebase

---

## 🛠️ Tech Stack

- **Next.js 15**
- **TypeScript**
- **TailwindCSS**
- **React Hook Form** (for forms)
- **Next Auth (Custom Authentication)** (optional if you add auth later)
- **Server Actions** (for form submissions / data fetching)
- **Vercel Deployment**

---

## 📦 Installation

1. **Clone the repository**:

   ```bash
  https://github.com/HasibulIslam007/homehunt_server.git

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Setup environment variables**:

   Create a `.env.local` file at the root and add:

 

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   

---

## 🏗️ Project Structure

```
/app
  /components
  /hooks
  /services
  /(WithCommonLayout)
    /(home)
      page.tsx
/lib
  verifyToken.ts
/public
/styles
.env.local
```

- `app/`: Next.js 15 App Router based structure
- `lib/`: Utility functions (e.g., token handling)
- `services/`: API calls (`getAllProducts`, `getSingleProduct`, etc.)
- `(WithCommonLayout)/(home)/`: Home page that fetches and lists products

---

## 🧹 Build for Production

```bash
npm run build
npm run start
```

Make sure your API server is live and your environment variables are properly set.

---

## 🐞 Common Issues

- **API Not Found (404)**:
  - Check your `NEXT_PUBLIC_BASE_API` in `.env.local`
  - It should point to your `/api/v1` backend route.
- **Prerender Errors**:
  - Ensure your backend always returns valid JSON (not HTML error pages).
- **Deployment**:
  - Set correct environment variables on Vercel during deployment.

---

## ✨ Contributing

PRs are welcome! Let's build a better rental housing experience together!

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Special Thanks

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [TailwindCSS](https://tailwindcss.com/)

---

# 🏡 Happy HomeHunting!

