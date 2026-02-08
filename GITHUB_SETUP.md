# GitHub Repository Setup Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name**: `wifey-valentine` (or any name you like)
   - **Description**: "Valentine's Day surprise website"
   - **Visibility**: Choose **Private** (so it's just for you!)
   - **DO NOT** check "Initialize with README" (we already have files)
4. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/wifey-valentine.git

# Push your code
git branch -M main
git push -u origin main
```

**Note**: You might be asked to authenticate. If you have 2FA enabled, you'll need a Personal Access Token instead of your password.

## Step 3: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Find your `wifey-valentine` repository and click **"Import"**
5. Vercel will auto-detect Vite settings - just click **"Deploy"**!
6. Wait 1-2 minutes for deployment
7. You'll get your live URL! 🎉

## Your URLs After Deployment

- **Demo Mode**: `https://your-project.vercel.app/?demo=true`
- **Real Mode**: `https://your-project.vercel.app/`

## Benefits of GitHub + Vercel

✅ **Auto-deploy**: Every time you push to GitHub, Vercel automatically deploys
✅ **Version control**: Track all your changes
✅ **Easy updates**: Just push to GitHub, Vercel handles the rest
✅ **Private repo**: Keep it secret until Valentine's Day!

