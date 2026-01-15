# 📰 DailySamachar – A React News Website

**DailySamachar** is a modern, responsive news web application built with **React (class-based components)**. It fetches real-time news from the **GNews API** and allows users to browse top Indian headlines across multiple categories, search for news by keywords, and enjoy smooth infinite scrolling — all **without using any backend**.

---

## 🚀 Features

* 🇮🇳 **Latest Indian News** from multiple categories:

  * General, Business, Technology, Sports, Health, Science, Entertainment
* 🔍 **Search Functionality**

  * Search news articles by keyword directly from the navbar
* ♾️ **Infinite Scrolling**

  * Automatically loads more news as you scroll
* ⏳ **Top Loading Bar & Spinner**

  * Visual feedback while news is being fetched
* 📱 **Fully Responsive UI**

  * Optimized for desktop and mobile screens
* 🔗 **Read Full Article**

  * Redirects to the original news source

---

## 🛠️ Technologies Used

* **React.js** (Class-based components)
* **React Router DOM** – for category routing
* **GNews API** – for fetching real-time news
* **Bootstrap 5** – responsive layout and styling
* **React Infinite Scroll Component**
* **React Top Loading Bar**
* **CSS** – custom styling

---

## ⚙️ Getting Started

### 📋 Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v12 or higher)
* npm (comes with Node.js)

---

## 🔑 Add Your GNews API Key

DailySamachar uses the **GNews API** (free plan supported).

1. Create a free account at
   👉 [https://gnews.io/](https://gnews.io/)
2. Generate your API key.
3. Create a `.env` file in the project root.
4. Add the following line:

```env
REACT_APP_GNEWS_API_KEY=your-gnews-api-key
```

⚠️ **Important:** Restart the development server after adding the `.env` file.

---

## ▶️ Run the Application

Install dependencies and start the app:

```bash
npm install
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🧠 How It Works

1. On page load, the app fetches **top headlines from India** using the GNews API.
2. Category navigation updates news using **React Router**.
3. Searching from the navbar dynamically updates results without page reload.
4. Infinite scrolling loads additional articles as the user scrolls.
5. A loading bar and spinner provide real-time feedback during API calls.

---

## 📌 Notes

* No backend is used — the app directly consumes the public GNews API.
* API usage limits depend on the GNews free plan.
* Designed primarily for learning React, API integration, and UI/UX best practices.

---

