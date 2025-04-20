## 🔧 Database Design: Why MongoDB + PostgreSQL?

We used a hybrid approach:

### 🗂️ PostgreSQL (menu_items)
- Stores structured, tabular menu data
- Better suited for filtering and category-based browsing
- Ensures consistent fields (name, price, description, category)
- Good for structured analytics

### 📦 MongoDB (orders)
- Used for flexible, nested order documents
- Orders contain dynamic arrays of cart items
- Easy to store and retrieve without strict relational schema
- More scalable for order placement

This separation allows optimal performance and design flexibility, leveraging the best of both database types.




# 🍽️ The Digital Diner – MERN + PostgreSQL Restaurant Ordering App

A full-stack web application for browsing a restaurant menu and placing simplified pickup orders.

## 🚀 Features
- View categorized menu (Appetizers, Main Course, etc.)
- Add to cart & view total
- Place order with contact info
- See order confirmation
- Basic order history (via phone number)

## 🛠 Tech Stack
- Frontend: React (deployed on Netlify)
- Backend: Express.js (Node.js)
- Databases: 
  - PostgreSQL → Menu Items
  - MongoDB → Orders
- Libraries: Mongoose, pg, Axios, React Router

## 🧩 Database Design
| Data           | DB         | Reason |
|----------------|------------|--------|
| Menu Items     | PostgreSQL | Structured, tabular, categorized |
| Orders         | MongoDB    | Nested, flexible order structure |

## 🌐 Live Demo
➡️ [View App on Netlify](https://your-app-link.netlify.app)

## 📦 Setup Locally
1. Clone repo
2. Setup `.env` with Mongo URI + Postgres creds
3. Run backend: `npm start`
4. Run frontend: `npm start` in `/client`

