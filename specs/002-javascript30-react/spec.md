# Specification: JavaScript30 React Edition

## Overview
This specification covers the conversion of all 30 vanilla JavaScript projects from the JavaScript30 course into a React-based application using TypeScript, Biome, and Tailwind CSS. The application will showcase all projects in an interactive, navigable format with both card-based and sidebar navigation.

## Goals
- Convert all 30 JavaScript30 projects to React components
- Create an intuitive navigation system (sidebar + card grid)
- Ensure Vercel and Next.js compatibility
- Follow Biome and Tailwind CSS best practices
- Maintain the original functionality of each project

## Requirements

### Functional Requirements
- Display all 30 projects in a card grid on the home page
- Provide sidebar navigation for quick access to projects
- Each project should be accessible via a unique route
- All projects must function as their original JavaScript30 counterparts
- Projects should be responsive and work on all device sizes
- Support dark mode

### Non-Functional Requirements
- Performance: Fast initial load, optimized React components
- Security: No XSS vulnerabilities, safe user inputs
- Accessibility: Keyboard navigation, ARIA labels where appropriate
- Scalability: Easy to add new projects in the future
- Code Quality: TypeScript strict mode, Biome linting, consistent formatting

## User Stories
1. As a user, I want to see all 30 projects on the home page, so that I can quickly browse what's available
2. As a user, I want to navigate between projects using a sidebar, so that I can quickly switch between projects
3. As a user, I want to click on project cards, so that I can view and interact with each project
4. As a developer, I want the code to be well-structured, so that it's easy to maintain and extend

## Acceptance Criteria
- [x] All 30 projects are converted to React components
- [x] Home page displays all projects in a card grid
- [x] Sidebar navigation is functional and highlights active project
- [x] Each project has its own route (/project/[slug])
- [x] All projects maintain original functionality
- [x] Application is Vercel-compatible
- [x] Code passes Biome linting
- [x] TypeScript compilation succeeds
- [x] Responsive design works on mobile, tablet, and desktop

## Technical Constraints
- Must use Next.js 16.0.4 App Router
- Must use TypeScript
- Must use Biome for linting and formatting
- Must use Tailwind CSS for styling
- Must be compatible with Vercel deployment
- Must follow React best practices (hooks, functional components)

## Dependencies
- Next.js 16.0.4
- React 19.2.0
- TypeScript 5+
- Biome
- Tailwind CSS 4
- clsx and tailwind-merge for className utilities

## Out of Scope
- Unit tests (can be added later)
- E2E tests (can be added later)
- Audio files for drum kit (using placeholder paths)
- External API integrations beyond what's needed for projects

## Success Metrics
- All 30 projects functional: 100%
- Build time: < 30 seconds
- Lighthouse score: > 90
- TypeScript errors: 0
- Biome linting errors: 0

## References
- [JavaScript30 Course](https://javascript30.com/)
- [JavaScript30 GitHub Repository](https://github.com/wesbos/JavaScript30)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Biome Documentation](https://biomejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

