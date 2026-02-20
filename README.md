# PATREON NEO 🎨⚡

A bold, neobrutalist-styled Patreon clone featuring a landing page, creator profiles, and a functional user dashboard. Built with raw attitude and modern web standards.

## ✨ Features

- **Neobrutalist Design**: High contrast, bold borders, offset shadows, and vibrant colors (Lime, Yellow, Cyan).
- **Multi-View SPA**: Smooth transitions between the Landing Page, Creator Profiles, and User Dashboard.
- **Internationalization (i18n)**: Full support for English (LTR) and Farsi (RTL) with dynamic layout switching.
- **Creator Search**: Find your favorite creators in real-time.
- **User Dashboard**: Inspired by modern creator platforms, featuring a card-style sidebar with full borders and an activity feed.
- **Fully Responsive**: Optimized for Desktop, Tablet, and Mobile devices.

## 🚀 Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (variables), Flexbox, and Grid.
- **JavaScript (Vanilla)**: State management, routing, and i18n logic.

## 🛠️ Usage

Simply open `index.html` in any modern web browser. 

For the best experience, use a local server:
```bash
npx http-server .
```

## 🌍 Language Support

Click the language toggle in the navbar to switch between:
- **English (EN)**
- **Farsi (FA)** - Automatically enables Right-to-Left (RTL) layout and text alignment.

## 📸 Design Philosophy

This project follows the **Neobrutalism** aesthetic:
- **Borders**: 4px solid black.
- **Shadows**: 8px offset (hard shadows).
- **Typography**: Bold 'Public Sans' with 900 weight headings.
- **Colors**: RAW and UNFILTERED.

## 🗄️ Database Setup (PostgreSQL)

A PostgreSQL schema is provided in `schema.sql`. To set it up:

1. **Create the database**:
   ```sql
   CREATE DATABASE patreon_neo;
   ```
2. **Run the schema**:
   ```bash
   psql -d patreon_neo -f schema.sql
   ```

The schema includes tables for `users`, `creators`, `tiers`, `posts`, and `memberships`, along with seed data to get you started.

> **Note**: To fully connect this database to the frontend, you will need to implement a backend API (using Node.js, Python, etc.) to handle data fetching and authentication.

---
Designed with attitude. Not a real site. 🤘
