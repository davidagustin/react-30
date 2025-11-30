# Claude Code Assistant Configuration

This project uses Spec-Driven Development (SDD) with the spec-kit methodology. This document provides context for AI assistants working on this codebase.

## Project Overview
This is a Next.js 16.0.4 application with TypeScript and Tailwind CSS. The project follows spec-kit principles for all feature development and deployment.

## Spec-Kit Structure

### Directory Organization
```
.
├── memory/
│   └── constitution.md          # Project principles and guidelines
├── specs/
│   └── 001-deployment-workflow/  # Feature specifications
│       ├── spec.md               # Feature specification
│       ├── plan.md               # Implementation plan
│       └── tasks.md              # Task breakdown
├── templates/
│   ├── spec-template.md          # Template for new specs
│   ├── plan-template.md          # Template for implementation plans
│   └── tasks-template.md         # Template for task breakdowns
└── scripts/                      # Helper scripts
```

## Workflow

### Creating a New Feature
1. Create a new directory in `specs/` (e.g., `specs/002-feature-name/`)
2. Create `spec.md` using `templates/spec-template.md`
3. Create `plan.md` using `templates/plan-template.md`
4. Create `tasks.md` using `templates/tasks-template.md`
5. Implement following the tasks in order
6. Deploy using the deployment workflow

### Deployment Workflow
- All deployments are automated via GitHub Actions
- Staging deploys automatically on merge to main
- Production requires manual approval
- See `specs/001-deployment-workflow/` for details

## Key Principles
- **Spec-Driven**: All features must be specified before implementation
- **Quality First**: Tests, linting, and type checking are mandatory
- **Incremental Delivery**: Small, deliverable increments
- **Documentation**: Code and processes must be documented

## Technology Stack
- Next.js 16.0.4
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4
- npm

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## References
- [Spec-Kit Repository](https://github.com/github/spec-kit)
- [Next.js Documentation](https://nextjs.org/docs)
- [Project Constitution](./memory/constitution.md)

