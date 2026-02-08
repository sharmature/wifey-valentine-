# Step-by-Step Vercel Deployment Guide

## Quick Deploy (5 minutes)

### Step 1: Login to Vercel
Run this command in your terminal:
```bash
npx vercel login
```
This will open your browser to authenticate with Vercel (you can use GitHub, GitLab, or email).

### Step 2: Deploy
Once logged in, run:
```bash
npx vercel
```

### Step 3: Follow the Prompts
- **Set up and deploy?** → Type `Y` and press Enter
- **Which scope?** → Select your account
- **Link to existing project?** → Type `N` (for first time)
- **What's your project's name?** → Press Enter (uses default: `wifey-valentine`)
- **In which directory is your code located?** → Press Enter (uses: `./`)
- **Override settings?** → Type `N` and press Enter

### Step 4: Get Your URLs!
After deployment, you'll get:
- **Preview URL**: For testing
- **Production URL**: The main URL to share!

## Your URLs Will Be:

Once deployed, you'll have:
- **Demo Mode**: `https://your-project.vercel.app/?demo=true`
- **Real Mode**: `https://your-project.vercel.app/`

## Alternative: Deploy via Vercel Website

If you prefer using the web interface:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login (free with GitHub)
3. Click "Add New Project"
4. Import your Git repository OR drag & drop the project folder
5. Vercel will auto-detect Vite and deploy!

## After Deployment

✅ **Test Demo Mode**: Visit `https://your-url.vercel.app/?demo=true`
✅ **Test Real Mode**: Visit `https://your-url.vercel.app/`
✅ **Share with her**: Give her the real mode URL (without `?demo=true`)

## Troubleshooting

If you get errors:
- Make sure you've run `npm install` first
- Make sure `public/our-photo.jpg` exists
- Check that the build works: `npm run build`

