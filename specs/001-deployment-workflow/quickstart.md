# Quickstart: Deployment Workflow Setup

This quickstart guide will help you set up the automated deployment workflow for this Next.js application.

## Prerequisites Checklist

- [ ] GitHub repository with Actions enabled
- [ ] Vercel account created
- [ ] Node.js 20+ installed locally
- [ ] Git configured with access to repository

## Step 1: Set Up Vercel (5 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. Click "Deploy"
6. Wait for initial deployment to complete

## Step 2: Get Vercel Credentials (2 minutes)

1. In Vercel dashboard, go to Settings → General
2. Note your **Organization ID** (under "Organization")
3. Note your **Project ID** (under "Project ID")
4. Go to Settings → Tokens
5. Create a new token with name "GitHub Actions"
6. Copy the token (you won't see it again!)

## Step 3: Configure GitHub Secrets (3 minutes)

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret" and add:
   - Name: `VERCEL_TOKEN`, Value: [token from Step 2]
   - Name: `VERCEL_ORG_ID`, Value: [org ID from Step 2]
   - Name: `VERCEL_PROJECT_ID`, Value: [project ID from Step 2]

## Step 4: Set Up GitHub Environments (Optional, 2 minutes)

For production approval gates:

1. Go to Settings → Environments
2. Click "New environment"
3. Name it "production"
4. Add required reviewers (optional but recommended)
5. Click "Configure environment"

## Step 5: Test the Workflow (5 minutes)

1. Make a small change to the code (e.g., update README)
2. Commit and push to main:
   ```bash
   git add .
   git commit -m "Test deployment workflow"
   git push origin main
   ```
3. Go to Actions tab in GitHub
4. Watch the CI workflow run
5. After CI passes, staging deployment should trigger
6. Verify deployment in Vercel dashboard

## Step 6: Verify Health Check

1. After deployment, visit: `https://your-app.vercel.app/api/health`
2. You should see: `{"status":"healthy","timestamp":"...","environment":"production"}`

## Troubleshooting

### CI Workflow Fails
- Check that `npm ci` works locally
- Verify linting passes: `npm run lint`
- Verify build works: `npm run build`

### Deployment Fails
- Verify all three secrets are set correctly
- Check Vercel project is connected to GitHub
- Verify Vercel token has correct permissions

### Health Check Fails
- Wait a few minutes for deployment to fully complete
- Check Vercel deployment logs
- Verify `/api/health` route exists

## Next Steps

- Review the full [Deployment Guide](../docs/deployment.md)
- Read the [Rollback Guide](../docs/rollback.md)
- Explore the [Specification](./spec.md) for detailed requirements
- Check the [Implementation Plan](./plan.md) for architecture details

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Review Vercel deployment logs
3. See [Troubleshooting](../docs/deployment.md#troubleshooting) section
4. Open a GitHub issue

