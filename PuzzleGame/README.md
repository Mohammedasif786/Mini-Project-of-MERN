# 🧩 PuzzleGame: A Modern Web-Based Interactive Experience

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.2-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![MUI](https://img.shields.io/badge/MUI-5.15.0-007FFF?logo=mui&logoColor=white)](https://mui.com/)

## 📖 Project Overview

**PuzzleGame** is a sophisticated, highly interactive web application built to demonstrate modern frontend engineering principles. Developed using the latest **Vite 7** build tool and **React 18**, this project prioritizes performance, type safety, and a premium user experience.

The application combines the utility of **Material UI (MUI)** with the flexibility of **Tailwind CSS v4** to create a unique design system that is both functional and aesthetically pleasing.

### Why this project?
This project was built to solve the common "UI Jitter" problem found in many modern SPAs (Single Page Applications). By implementing a custom API orchestration layer, the game ensures that transitions between data states are smooth, intentional, and visually stable.

---

## 🛠️ Advanced Tech Stack

### Frontend Core
- **React 18**: Utilizing advanced hooks and the latest concurrent rendering features.
- **TypeScript**: Implementing strict type-checking across the entire codebase to reduce runtime errors and improve developer experience.
- **Vite 7**: Leveraging the latest in ES module bundling for lightning-fast development and optimized production builds.

### UI & Styling
- **Tailwind CSS v4**: Using the next generation of Tailwind for high-performance utility styling and tight Vite integration.
- **Material UI (MUI) v5**: Employing complex components like Dialogs, Modals, and Buttons for a professional, "corporate-ready" feel.
- **Tailwind-Animate**: Specialized animations for smooth transitions in game elements.

### Infrastructure
- **Axios**: Configured with custom instances for clean API interaction.
- **ESLint 9**: Enforcing the latest JavaScript and React linting standards.

---

## ✨ Key Features & Technical Implementations

### 1. The "Graceful Loading" Strategy (Axios + Promise.all)
A core feature of PuzzleGame is the intentional 2-second loading delay. This isn't just a timer; it’s a UX strategy to prevent "Flash of Unstyled Content" (FOUC).
- **The Problem**: Rapid API responses (e.g., 20ms) cause loading spinners to flicker, which looks like a glitch to the user.
- **The Solution**: We use `Promise.all` to wrap the API request and a `setTimeout` promise simultaneously. The UI only updates once **both** are resolved, ensuring a minimum of 2 seconds of smooth animation.