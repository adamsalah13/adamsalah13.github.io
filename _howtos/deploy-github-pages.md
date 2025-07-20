---
layout: post
title: "How to Deploy to GitHub Pages"
date: 2025-07-20
categories: [tutorial, deployment]
tags: [github, github-pages, deployment, jekyll]
difficulty: "intermediate"
estimated_time: "15 minutes"
requirements: 
  - "GitHub account"
  - "Git installed locally"
  - "Jekyll project"
tools_needed:
  - "Web browser"
  - "Git"
author: "Adam Salah"
excerpt: "Learn how to deploy your Jekyll site to GitHub Pages for free hosting with automatic deployment."
---

GitHub Pages provides free hosting for static websites, making it perfect for Jekyll blogs, portfolios, and project documentation.

## Prerequisites

Make sure you have:

- [ ] A GitHub account
- [ ] Git installed and configured
- [ ] A Jekyll project ready to deploy

## Step 1: Prepare Your Repository

1. **Create a GitHub Repository**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `yourusername.github.io` (replace with your username)
   - Make it public
   - Don't initialize with README if you already have local files

2. **Connect Local Project to GitHub**

   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Enable GitHub Pages

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section

2. **Configure Source**
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Click "Save"

## Step 3: Verify Deployment

1. **Check Build Status**
   - Go to "Actions" tab in your repository
   - Watch for the build process to complete
   - Green checkmark = successful deployment

2. **Visit Your Site**
   - Your site will be available at: `https://yourusername.github.io`
   - Initial deployment may take 5-10 minutes

## Step 4: Set Up Automatic Deployment

GitHub Pages automatically rebuilds your site when you:

- Push changes to the main branch
- Edit files directly on GitHub

## Custom Domain (Optional)

To use your own domain:

1. Add a `CNAME` file to your repository root
2. Put your domain name in the file
3. Configure DNS with your domain provider

## Troubleshooting

**Build failing?**

- Check the Actions tab for error details
- Ensure your `_config.yml` is valid YAML
- Verify all plugins are GitHub Pages compatible

**Site not updating?**

- Wait 5-10 minutes for changes to propagate
- Clear your browser cache
- Check if the build completed successfully

## Next Steps

- Set up a custom domain
- Configure Google Analytics
- Add SEO optimizations
- Set up automated testing
