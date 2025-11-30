# Deployment Guide

This guide explains how to deploy the Next.js application using our automated deployment workflow.

## Overview

The deployment workflow uses GitHub Actions for CI/CD and Vercel as the deployment platform. Deployments are automated with the following flow:

1. **CI Pipeline**: Runs on every push and PR to validate code quality
2. **Staging Deployment**: Automatically deploys to staging on merge to main
3. **Production Deployment**: Requires manual approval before deploying to production

## Prerequisites

1. GitHub repository with Actions enabled
2. Vercel account and project connected to GitHub
3. Required secrets configured in GitHub (see below)

## Setup

### 1. Configure Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Import your GitHub repository in Vercel dashboard
3. Note your Vercel credentials:
   - Organization ID
   - Project ID
   - Access Token (create in Vercel dashboard → Settings → Tokens)

### 2. Configure GitHub Secrets

Add the following secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- `VERCEL_TOKEN`: Your Vercel access token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### 3. Configure GitHub Environments

1. Go to Settings → Environments
2. Create "staging" environment (optional, for separate staging project)
3. Create "production" environment
4. Add required reviewers for production environment (for approval gate)

### 4. Configure Environment Variables

Set environment variables in Vercel dashboard for each environment:

- **Staging**: Vercel Dashboard → Project → Settings → Environment Variables
- **Production**: Same location, select "Production" environment

## Deployment Process

### Automatic Staging Deployment

1. Merge a pull request to the `main` branch
2. GitHub Actions CI workflow runs automatically
3. If CI passes, staging deployment workflow triggers
4. Application deploys to Vercel staging environment
5. Health check runs to verify deployment
6. Deployment URL is available in GitHub Actions output

### Production Deployment

1. After staging deployment succeeds, production deployment job starts
2. Production deployment requires manual approval (if configured)
3. Approve the deployment in GitHub Actions (or via GitHub Environments)
4. Application deploys to Vercel production environment
5. Health check runs to verify deployment
6. Deployment URL is available in GitHub Actions output

### Manual Deployment

You can also trigger deployments manually:

1. Go to Actions tab in GitHub
2. Select "Deploy" workflow
3. Click "Run workflow"
4. Select branch and environment
5. Click "Run workflow"

## Health Checks

After each deployment, a health check runs against the `/api/health` endpoint. The deployment is considered successful if:

- The health check endpoint returns 200 OK
- The response includes `status: "healthy"`

If the health check fails, the deployment workflow will fail and you should investigate the issue.

## Monitoring Deployments

### GitHub Actions

- View deployment status in the Actions tab
- Check logs for each deployment step
- See deployment URLs in workflow output

### Vercel Dashboard

- View all deployments in Vercel dashboard
- See deployment logs and build output
- Monitor deployment analytics

## Troubleshooting

### Build Failures

1. Check GitHub Actions logs for error messages
2. Verify all dependencies are in `package.json`
3. Ensure Node.js version matches (20+)
4. Check for TypeScript or linting errors locally first

### Deployment Failures

1. Verify Vercel secrets are correctly configured
2. Check Vercel project is connected to GitHub
3. Verify environment variables are set in Vercel
4. Check Vercel dashboard for detailed error messages

### Health Check Failures

1. Verify the `/api/health` endpoint is accessible
2. Check application logs in Vercel dashboard
3. Ensure the application started correctly
4. Verify environment variables are set correctly

### Rollback

See [Rollback Guide](./rollback.md) for detailed rollback procedures.

## Environment Variables

### Required Variables

- `NODE_ENV`: Automatically set by Vercel (production/staging)

### Optional Variables

Add any custom environment variables needed by your application in the Vercel dashboard.

## Best Practices

1. **Always test in staging first**: Verify changes in staging before production
2. **Monitor deployments**: Watch for errors or warnings during deployment
3. **Use feature flags**: Consider feature flags for gradual rollouts
4. **Keep secrets secure**: Never commit secrets to the repository
5. **Review before production**: Always review staging deployment before approving production

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Vercel deployment logs
- See [Troubleshooting](#troubleshooting) section
- Open a GitHub issue

