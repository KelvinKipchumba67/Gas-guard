# GasGuard - Smart LPG Tracking

## GasGuard is a modern, responsive web application designed to eliminate the guesswork and anxiety associated with tracking household LPG consumption. This project was developed as a submission for the Green Wells Innovation Challenge, aiming to reimagine the consumer energy experience.

### The Problem

For millions of households in Kenya, running out of cooking gas unexpectedly is a common and frustrating experience. Traditional methods of checking gas levels—shaking the cylinder, lifting it, or pouring warm water—are inaccurate and inconvenient. This leads to:

Unexpected Interruptions: Gas running out in the middle of preparing a meal.

Constant Anxiety: The persistent worry about whether there's enough gas for the next few days.

Inefficient Reordering: Either making last-minute emergency calls for a refill or ordering too early.

GasGuard solves this by providing a simple, smart, and proactive solution.

Core Features

Smart Predictive Tracking: Estimates remaining gas percentage and "days left" based on a user's household profile.

Adaptive Learning Algorithm: The app gets smarter with every refill. It learns the user's actual consumption patterns and refines its predictions, becoming more accurate over time.

Fully Adaptive UI: The interface provides a tailored experience on any device. It features a streamlined single-column view on mobile phones and an enhanced two-column layout on tablets and desktops, which includes a Usage History panel.

Usage History: On larger screens, users can view their past refill cycles, providing valuable insights into their consumption habits.

Persistent State: The application uses the browser's localStorage to remember all user data, ensuring a seamless experience between sessions without requiring repeated setups.

Technology Stack

This project was built using a modern, efficient, and scalable front-end technology stack:

Framework: React (v18)

Styling: Tailwind CSS

Language: JavaScript (ES6+)

State Management: React Hooks (useState, useEffect)

Deployment: Netlify / Vercel

Getting Started

To run this project locally, follow these simple steps.

Prerequisites

Node.js (v16 or later)

npm (Node Package Manager)

Installation & Setup

Clone the repository:

git clone (https://github.com/KelvinKipchumba67/Gas-guard)


Navigate to the project directory:

cd gusguard-mvp


Install the required dependencies:

npm install


Running the Application

Start the development server:

npm start


Open your browser and navigate to http://localhost:3000 to see the application running.

Project Structure

The application is built with a clean, component-based architecture to ensure maintainability and scalability.

/src
├── /components       # Reusable React components
│   ├── Onboarding.jsx  # First-time user setup screen
│   ├── Dashboard.jsx   # Main display for gas levels
│   ├── GasGauge.jsx    # Visual gauge component
│   └── UsageHistory.jsx# Panel for past refill data (large screens)
└── App.jsx           # Main application logic and state management
