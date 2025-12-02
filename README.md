<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally and deploy it to GitHub Pages.

View your app in AI Studio: https://ai.studio/apps/drive/19zX9MdUoJUETmPUFp7HEVWIoYUjVsY-E

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to the `main` branch or manually trigger the workflow from the Actions tab

### Automatic Deployment

The site will automatically deploy when you push to the `main` branch. The GitHub Actions workflow will:
- Build the Astro site
- Deploy to GitHub Pages
- Make the site available at: `https://Sathursan-S.github.io/browz.ai.pages/`

### Manual Deployment

You can also manually trigger a deployment:
1. Go to the "Actions" tab in your repository
2. Select "Deploy Astro site to Pages"
3. Click "Run workflow"

