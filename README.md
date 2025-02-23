# Portfolio Website

Welcome to my personal portfolio website repository. This project is built with React and Vite to showcase my projects, skills, and professional experience with a modern, responsive design.

## Live Demo

Check out the live demo here: [Live Demo](https://kavirajvedi.github.io/Portfolio/)

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

This portfolio website is designed to present my work in a clean and organized manner. It utilizes modern web technologies and best practices to ensure a seamless experience for visitors.

## Technologies Used

- **React** – JavaScript library for building user interfaces
- **Vite** – Next-generation frontend tooling for fast development and optimized builds
- **TypeScript** – Adds static type-checking to JavaScript for improved reliability
- **ESLint** – Linting utility to maintain code quality

## File Structure
```
Portfolio/ 
├── src/                   # Source files and components 
│ ├── App.tsx              # Main application component 
│ ├── index.css            # Global styles 
│ ├── main.tsx             # Application entry point 
├── .gitignore             # Specifies files and directories to ignore in Git 
├── README.md              # Project documentation 
├── eslint.config.js       # ESLint configuration 
├── index.html             # Main HTML file 
├── package-lock.json      # Auto-generated file for exact dependency versions 
├── package.json           # Project dependencies and scripts 
├── tsconfig.app.json      # TypeScript configuration for the app 
├── tsconfig.json          # Base TypeScript configuration 
├── tsconfig.node.json     # TypeScript configuration for Node environment 
└── vite.config.ts         # Vite configuration file
```
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later recommended)
- npm (or Yarn)

#### Installation

1. **Clone the repository:**

  ```
  git clone https://github.com/KaviRajVedi/Portfolio.git
  cd Portfolio
  ```
2. **Install dependencies:**

  ```
  npm install
  ```
#### Running Locally
1. **Start the development server:**
  ```
  npm run dev
  ```
2. **Running:**
Visit http://localhost:3000 (or the port specified by Vite) to view the website.

#### Building for Production:
**Generate an optimized production build:**
  ```
  npm run build
  ```
The production-ready files will be output to the dist folder.

## Usage
After building the project, deploy the contents of the dist folder to your preferred static hosting provider such as GitHub Pages, Netlify, or Vercel.

## Contributing
Contributions are welcome! If you have suggestions, improvements, or find any issues, feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

Happy coding!
