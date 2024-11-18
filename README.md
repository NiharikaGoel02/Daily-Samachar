# DailySamachar: A React News Website

DailySamachar is a simple, modern, and responsive news website built with **React** that fetches the latest news articles using the **News API**. The website allows users to view top headlines from various categories, including general, business, technology, sports, etc.

## Features

- Displays the latest top headlines from various categories.
- Real-time fetching of news articles using the News API.
- Mobile-friendly, responsive design.
- Search functionality to find news articles by keyword.
- Infinite scrolling for smooth browsing.

## Technologies Used

- React.js: For building the user interface.
- News API: To fetch the latest news articles.
- Bootstrap: For responsive design and layout.
- React Infinite Scroll: For fetching more news articles as the user scrolls.
- CSS: For custom styling and responsive design.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 12.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Add Your News API Key

To fetch news, you'll need to create a free account on [News API](https://newsapi.org/) and obtain an API key.

1. Create an `.env` file in the root of the project.
2. Add the following line to the `.env` file with your API key:
   REACT_APP_API_KEY=your-news-api-key

### Run the Application

To start the development server, run:

npm start
This will start the React app, and you can view it at `http://localhost:3000/` in your browser.

## How It Works

1. The app fetches news articles from the News API based on the selected category (e.g., general, business, technology).
2. The data is displayed in a responsive grid with infinite scrolling.
3. Users can search for specific topics, and the results will dynamically update without needing to reload the page.

