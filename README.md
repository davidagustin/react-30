# 🎯 JavaScript30 - React Edition

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A modern React implementation of the popular JavaScript30 course, featuring 30 interactive projects built with cutting-edge web technologies.**

[Live Demo](#) • [Documentation](#documentation) • [Features](#-features)

</div>

---

## 📖 Overview

This project is a comprehensive reimagining of [Wes Bos's JavaScript30](https://javascript30.com/) course, transforming 30 vanilla JavaScript projects into modern, type-safe React components using Next.js, TypeScript, and Tailwind CSS. Each project demonstrates real-world web development skills including DOM manipulation, event handling, API integration, canvas manipulation, and more.

### 🎓 What is JavaScript30?

JavaScript30 is a free 30-day vanilla JavaScript coding challenge that teaches developers to build 30 things in 30 days. This React edition modernizes these projects while maintaining their core learning objectives, making them production-ready and demonstrating advanced React patterns and best practices.

---

## ✨ Features

### 🚀 **Modern Tech Stack**
- **Next.js 16** - App Router with Server Components
- **React 19** - Latest React features and optimizations
- **TypeScript 5** - Full type safety across the application
- **Tailwind CSS 4** - Utility-first styling with dark mode support
- **Biome** - Fast linter and formatter

### 🎨 **30 Interactive Projects**
- 🥁 **Drum Kit** - Keyboard-controlled drum machine
- 🕐 **Analog Clock** - CSS and JavaScript-powered clock
- 🎨 **CSS Variables** - Dynamic CSS variable manipulation
- 📊 **Array Methods** - Advanced array manipulation exercises
- 🖼️ **Flex Panel Gallery** - Animated image gallery
- 🔍 **Type Ahead** - Real-time search with autocomplete
- 🎨 **HTML5 Canvas** - Interactive drawing application
- 🎥 **Custom Video Player** - Full-featured media player
- 📹 **Webcam Integration** - Real-time webcam manipulation
- 🗣️ **Speech Recognition** - Voice-to-text functionality
- 📍 **Geolocation** - Location-based features
- 🎮 **Whack-a-Mole** - Classic game implementation
- *...and 18 more interactive projects*

### 🏗️ **Architecture & Best Practices**
- **Spec-Driven Development** - All features follow structured specifications
- **Component-Based Architecture** - Reusable, modular React components
- **Type Safety** - Comprehensive TypeScript coverage
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode** - Full dark mode support
- **Performance Optimized** - Code splitting, lazy loading, and optimizations
- **CI/CD Pipeline** - Automated testing and deployment workflows

### 📦 **Developer Experience**
- Hot module replacement for instant feedback
- ESLint and Biome for code quality
- TypeScript for compile-time error checking
- Automated formatting and linting
- Comprehensive project documentation

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.0.4 | React framework with SSR/SSG |
| [React](https://react.dev/) | 19.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |

### Development Tools
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[ESLint](https://eslint.org/)** - Code quality and best practices
- **npm** - Package management

### Key Libraries
- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes intelligently

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm/bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-30.git
   cd react-30
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run Biome linter
npm run lint:fix     # Fix linting issues automatically
npm run format       # Format code with Biome
```

---

## 📁 Project Structure

```
react-30/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   ├── project/              # Dynamic project routes
│   │   └── [slug]/           # Individual project pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── projects/             # 30 project components
│   └── Sidebar.tsx           # Navigation component
├── lib/                      # Utility functions
│   ├── projects.ts           # Project data and helpers
│   └── utils.ts              # Shared utilities
├── specs/                    # Spec-Driven Development
│   ├── 001-deployment-workflow/
│   └── 002-javascript30-react/
├── docs/                     # Documentation
│   ├── deployment.md
│   └── rollback.md
├── memory/                   # Project principles
│   └── constitution.md
└── public/                   # Static assets
```

---

## 🎯 Projects Showcase

### Interactive Projects (30 Total)

<details>
<summary><b>View All 30 Projects</b></summary>

1. **Drum Kit** - Play drums with keyboard keys
2. **JS and CSS Clock** - Analog clock with smooth animations
3. **CSS Variables** - Update CSS variables with JavaScript
4. **Array Cardio Day 1** - Filter, map, sort, reduce exercises
5. **Flex Panel Gallery** - Animated image gallery with flexbox
6. **Type Ahead** - Search cities with autocomplete
7. **Array Cardio Day 2** - Some, every, find, findIndex methods
8. **Fun with HTML5 Canvas** - Interactive drawing canvas
9. **Dev Tools Domination** - Console and debugging mastery
10. **Hold Shift and Check Checkboxes** - Multi-select functionality
11. **Custom Video Player** - Full-featured HTML5 video player
12. **Key Sequence Detection** - Konami code implementation
13. **Slide in on Scroll** - Scroll-triggered animations
14. **JavaScript References VS Copying** - Understanding references
15. **LocalStorage** - Persistent data storage
16. **Mouse Move Shadow** - Text shadow follows cursor
17. **Sort Without Articles** - Advanced sorting algorithms
18. **Adding Up Times with Reduce** - Time calculation with reduce
19. **Webcam Fun** - Real-time webcam manipulation
20. **Speech Detection** - Voice-to-text conversion
21. **Geolocation** - Location-based features with maps
22. **Follow Along Link Highlighter** - Animated link highlighting
23. **Speech Synthesis** - Text-to-speech functionality
24. **Sticky Nav** - Sticky navigation on scroll
25. **Event Capture, Propagation, Bubbling** - Event system mastery
26. **Stripe Follow Along Nav** - Advanced dropdown navigation
27. **Click and Drag** - Horizontal scrolling interaction
28. **Video Speed Controller** - Custom video playback controls
29. **Countdown Timer** - Timer with localStorage persistence
30. **Whack A Mole** - Classic arcade game

</details>

---

## 🏗️ Architecture Highlights

### Spec-Driven Development (SDD)

This project follows a structured development methodology:

1. **Specification** - Define requirements and goals
2. **Plan** - Create detailed implementation plan
3. **Tasks** - Break down into actionable tasks
4. **Implement** - Build following the plan
5. **Deploy** - Automated deployment workflow

All specifications are documented in the `specs/` directory.

### Component Architecture

- **Modular Components** - Each project is a self-contained React component
- **Type Safety** - Full TypeScript coverage with strict mode
- **Reusable Utilities** - Shared functions in `lib/` directory
- **Consistent Styling** - Tailwind CSS with design system approach

### Performance Optimizations

- **Code Splitting** - Automatic route-based code splitting
- **Image Optimization** - Next.js Image component
- **Lazy Loading** - Components loaded on demand
- **Server Components** - Reduced client-side JavaScript

---

## 🚢 Deployment

### Automated CI/CD Pipeline

This project includes a complete deployment workflow:

- **CI Pipeline** - Runs on every push and PR
  - Linting and type checking
  - Build verification
  - Automated testing

- **Staging** - Automatically deploys on merge to main
- **Production** - Requires manual approval for safety

### Deployment Documentation

- [Deployment Guide](./docs/deployment.md) - Complete setup instructions
- [Rollback Guide](./docs/rollback.md) - How to rollback deployments
- [Deployment Specification](./specs/001-deployment-workflow/spec.md) - Full specification

---

## 📚 Learning Outcomes

This project demonstrates proficiency in:

✅ **React & Next.js**
- Component composition and patterns
- Hooks and state management
- Server and Client Components
- Routing and navigation
- Performance optimization

✅ **TypeScript**
- Type definitions and interfaces
- Generic types
- Type inference
- Strict type checking

✅ **Modern CSS**
- Tailwind CSS utility classes
- Responsive design patterns
- Dark mode implementation
- CSS animations and transitions

✅ **Web APIs**
- DOM manipulation
- Canvas API
- WebRTC (webcam)
- Geolocation API
- Speech Recognition/Synthesis
- LocalStorage
- Media APIs

✅ **Development Practices**
- Code organization and structure
- Type safety
- Linting and formatting
- Git workflow
- CI/CD pipelines
- Documentation

---

## 🤝 Contributing

Contributions are welcome! This project follows spec-driven development:

1. Check existing specifications in `specs/`
2. Create a new spec for your feature
3. Follow the implementation plan
4. Ensure all tests pass
5. Submit a pull request

### Code Style

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write self-documenting code
- Add comments for complex logic
- Run `npm run lint` before committing

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Note**: This project is inspired by [Wes Bos's JavaScript30](https://javascript30.com/) course. The original course is free and open source. This React implementation is created for educational purposes and to demonstrate modern React development practices.

---

## 🙏 Acknowledgments

- **[Wes Bos](https://wesbos.com/)** - Creator of the original JavaScript30 course
- **[Next.js Team](https://nextjs.org/)** - Amazing React framework
- **[Vercel](https://vercel.com/)** - Deployment platform and Next.js creators
- **Open Source Community** - For the incredible tools and libraries

---

## 📞 Contact & Links

- **GitHub**: [Your Profile](https://github.com/yourusername)
- **Portfolio**: [Your Portfolio](#)
- **LinkedIn**: [Your LinkedIn](#)
- **Email**: your.email@example.com

---

<div align="center">

**Built with ❤️ using Next.js, React, and TypeScript**

⭐ Star this repo if you find it helpful!

</div>
