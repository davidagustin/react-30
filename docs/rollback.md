# Rollback Guide

This guide explains how to rollback a deployment if something goes wrong.

## When to Rollback

Consider rolling back if:
- Application is not responding or returning errors
- Critical bugs are discovered in production
- Performance degradation is observed
- Security issues are identified
- Health checks are failing

## Rollback Methods

### Method 1: Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the "Deployments" tab
4. Find the previous working deployment
5. Click the three dots menu (⋯) next to the deployment
6. Select "Promote to Production"
7. Confirm the rollback

### Method 2: Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. List recent deployments:
   ```bash
   vercel ls
   ```

3. Rollback to a specific deployment:
   ```bash
   vercel rollback [deployment-url]
   ```

### Method 3: Git Revert + Redeploy

1. Identify the commit that introduced the issue
2. Revert the commit:
   ```bash
   git revert <commit-hash>
   ```

3. Push the revert:
   ```bash
   git push origin main
   ```

4. This will trigger a new deployment automatically

## Post-Rollback Verification

After rolling back:

1. **Verify Health Check**:
   ```bash
   curl https://your-app.vercel.app/api/health
   ```
   Should return `{"status":"healthy"}`

2. **Test Critical Functionality**:
   - Test main user flows
   - Verify key features work
   - Check for any errors in browser console

3. **Monitor Application**:
   - Check Vercel analytics
   - Monitor error rates
   - Watch for any anomalies

4. **Notify Team**:
   - Inform team of the rollback
   - Document the issue that caused rollback
   - Plan fix for the rolled-back changes

## Prevention

To minimize the need for rollbacks:

1. **Test Thoroughly**: Always test in staging before production
2. **Use Feature Flags**: Gradual rollouts reduce risk
3. **Monitor Closely**: Watch metrics after deployment
4. **Have a Plan**: Know your rollback procedure before deploying
5. **Small Increments**: Deploy small changes frequently

## Emergency Contacts

- **On-Call Engineer**: [Add contact]
- **DevOps Team**: [Add contact]
- **Vercel Support**: [support@vercel.com](mailto:support@vercel.com)

## Rollback Checklist

- [ ] Identified the issue causing problems
- [ ] Determined which deployment to rollback to
- [ ] Notified team of rollback plan
- [ ] Executed rollback using chosen method
- [ ] Verified health check passes
- [ ] Tested critical functionality
- [ ] Monitored application for stability
- [ ] Documented the issue and rollback
- [ ] Planned fix for the rolled-back changes

