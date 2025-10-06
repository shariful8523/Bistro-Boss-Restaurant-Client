
🍽️ Bistro Boss — Modern Restaurant Web Application

Live Demo: https://bistro-boss-restorent-cb0b2.web.app/

Bistro Boss is a modern, responsive restaurant web application designed for browsing menus, placing orders, and handling secure online payments. Built with a production-ready frontend stack and hosted on Firebase, it provides role-based dashboards, analytics, and a smooth checkout flow.

✨ Highlights

Dynamic menu browsing with category filters

Shopping cart + secure Stripe checkout

Firebase Authentication (Email / Google)

Role-based admin & user dashboards

Data visualizations with Recharts

Fast, cache-friendly data fetching via TanStack Query (react-query)

Responsive UI with Tailwind CSS + DaisyUI

Polished UX: Lottie animations, SweetAlert2 notifications

🎯 Demo (How to test)

To quickly review the app on the live deployment, use the demo accounts below. These accounts are created solely for public testing and do not expose any sensitive or production data. Do NOT publish real credentials.

Demo Admin (for interface & management testing)

Email: demo.admin@bistroboss.test

Password: DemoAdmin123!

Demo User (for ordering flow)

Email: demo.user@bistroboss.test

Password: DemoUser123!

Steps

Open the Live Demo: https://bistro-boss-restorent-cb0b2.web.app/

Click Login / Sign In and enter one of the demo accounts above.

As Admin: access the Admin Dashboard to view/manage items, view analytics, and test admin-only flows.

As User: browse menu, add items to cart, and proceed to checkout to test the Stripe flow (see Payment Testing below).

⚠️ Security reminder: Never commit real admin credentials or secrets to a public README or repository. Use demo/test accounts only.

💳 Payment Testing

Stripe is integrated in test mode. Use the following test card to simulate payments:

Card: 4242 4242 4242 4242

Expiry: any valid future date (e.g., 12/34)

CVC: 123

🛠️ Technology Stack

Frontend & UI

React 18

Vite

React Router DOM

Tailwind CSS + DaisyUI

Lottie React, Swiper, React Icons, React Tabs

State & Data

TanStack Query (react-query)

Axios

localforage (client-side caching)

Auth, Hosting & Backend

Firebase Authentication

Firebase Hosting (live demo likely hosted here)

Payments & Utilities

Stripe (react-stripe-js & stripe-js)

date-fns, match-sorter, sweetalert2, react-hook-form

Dev Tools

ESLint, vite, dotenv
