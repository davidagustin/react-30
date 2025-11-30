# Project Constitution

## Core Principles

### 1. Spec-Driven Development
- All features and changes must be specified before implementation
- Specifications serve as the single source of truth
- Implementation must align with approved specifications

### 2. Quality First
- Code must be tested, linted, and type-checked before deployment
- All deployments must pass automated checks
- Performance and accessibility are non-negotiable

### 3. Incremental Delivery
- Break down work into small, deliverable increments
- Each increment should provide value independently
- Deploy frequently and safely

### 4. Documentation
- Code should be self-documenting
- Complex logic requires inline documentation
- API changes must be documented

### 5. Security
- Never commit secrets or credentials
- Use environment variables for configuration
- Follow security best practices for Next.js applications

### 6. Deployment Standards
- All deployments must be automated
- Rollback procedures must be documented
- Production deployments require approval
- Environment parity must be maintained (dev → staging → production)

## Technology Stack

- **Framework**: Next.js 16.0.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Package Manager**: npm
- **Deployment Platform**: Vercel (primary), with support for other platforms

## Development Workflow

1. Create specification for feature/change
2. Review and approve specification
3. Create implementation plan
4. Break down into tasks
5. Implement following TDD when applicable
6. Test and validate
7. Deploy through CI/CD pipeline

## Deployment Workflow Principles

- Automated testing before deployment
- Environment-specific configuration
- Zero-downtime deployments
- Health checks and monitoring
- Clear rollback procedures

