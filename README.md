This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📋 Spec-Driven Development

This project uses [Spec-Kit](https://github.com/github/spec-kit) for Spec-Driven Development (SDD). All features and changes follow a structured workflow:

1. **Specification** - Define requirements and goals
2. **Plan** - Create implementation plan
3. **Tasks** - Break down into actionable tasks
4. **Implement** - Build following the plan
5. **Deploy** - Automated deployment workflow

### Project Structure

```
.
├── memory/
│   └── constitution.md          # Project principles
├── specs/
│   └── 001-deployment-workflow/  # Feature specifications
├── templates/                    # Spec-kit templates
└── docs/                         # Documentation
```

See [CLAUDE.md](./CLAUDE.md) for more information about the spec-kit setup.

## 🚢 Deployment

This project includes an automated deployment workflow using GitHub Actions and Vercel.

### Quick Setup

See the [Deployment Quickstart Guide](./specs/001-deployment-workflow/quickstart.md) for step-by-step setup instructions.

### Deployment Workflow

- **CI Pipeline**: Runs on every push and PR (lint, type-check, build)
- **Staging**: Automatically deploys on merge to main
- **Production**: Requires manual approval

### Documentation

- [Deployment Guide](./docs/deployment.md) - Complete deployment documentation
- [Rollback Guide](./docs/rollback.md) - How to rollback deployments
- [Deployment Specification](./specs/001-deployment-workflow/spec.md) - Full specification

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🔗 Resources

- [Spec-Kit Repository](https://github.com/github/spec-kit) - Spec-Driven Development toolkit
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - Deploy your Next.js app
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
