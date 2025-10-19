# WYWA Site Editing & Deployment Guide

## Overview
This guide documents how to edit, update, and deploy changes to the WYWA website hosted at wywa.ai.

## Project Structure
```
wywa-fire/
├── client/              # React frontend code
│   ├── pages/          # Page components
│   │   ├── Index.tsx   # Homepage (wywa.ai)
│   │   └── FirePage.tsx # Fire project page (wywa.ai/fire)
│   └── App.tsx         # Main app with routing
├── public/             # Static assets (images, favicon, etc.)
├── updates/            # Astro blog at /updates
├── index.html          # Main HTML entry point
├── netlify.toml        # Netlify configuration
└── package.json        # Dependencies and scripts
```

## Common Editing Tasks

### 1. Edit Homepage (wywa.ai)
```bash
# Edit the homepage content
# File: client/pages/Index.tsx
```

### 2. Edit Fire Page (wywa.ai/fire)
```bash
# Edit the fire project page
# File: client/pages/FirePage.tsx
```

### 3. Update Favicon
```bash
# Add new favicon to public/favicon.svg or public/favicon.ico
# Update index.html to reference it:
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Git Workflow

### Check Status & Add Changes
```bash
# See what files have changed
git status

# Add all changes
git add -A

# Or add specific files
git add client/pages/Index.tsx
```

### Commit Changes
```bash
# Commit with a descriptive message
git commit -m "Update homepage content and styling"

# Or use multi-line commit message
git commit -m "$(cat <<'EOF'
Update homepage content

- Changed description to embodied AI systems
- Added new collaborator criteria
- Made WYWA FIRE link blue

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Push to GitHub
```bash
# Push changes to main branch
git push

# Or if setting up tracking
git push -u origin main
```

## Netlify Deployment

### Manual Deploy
```bash
# Deploy to production
netlify deploy --prod

# This will:
# 1. Run npm run build (builds React app and Astro blog)
# 2. Upload dist/spa folder to Netlify
# 3. Make changes live at wywa.ai
```

### Build Process
The build command in package.json runs:
1. `build:client` - Builds React app with Vite
2. `build:astro` - Builds Astro blog in updates/
3. `build:server` - Builds server functions

### Netlify CLI Commands
```bash
# Login to Netlify (one-time setup)
netlify login

# Link to existing site (one-time setup)
netlify link

# Check deployment status
netlify status

# Open site in browser
netlify open
```

## Authentication & Permissions

### GitHub
- Repository: https://github.com/zwanderer0/wywa-fire
- Account: zwanderer0
- Check current user: `git config user.email`

### Netlify
- Site: stupendous-puppy-b42f40
- Domain: wywa.ai
- Check status: `netlify status`

## Common Patterns

### Text Changes
1. Read the file to see current content
2. Use Edit tool to replace specific text
3. Commit and push changes
4. Deploy with `netlify deploy --prod`

### Adding New Sections
1. Edit the appropriate .tsx file
2. Add new JSX components or sections
3. Test locally if needed: `npm run dev`
4. Commit, push, and deploy

### Styling Changes
- Most styling uses Tailwind CSS classes
- Common classes:
  - Colors: `text-gray-900`, `bg-gray-100`, `border-gray-300`
  - Spacing: `p-4`, `mb-6`, `space-y-4`
  - Typography: `font-mono`, `text-sm`, `font-bold`

## Blog/Updates Section

### Accessing the Blog Editor
1. **Go to Admin Panel**: https://www.wywa.ai/updates/admin/
2. **Login with Netlify Identity**:
   - Authorized emails: `anirudh.zw@gmail.com`, `nveeturi@gmail.com`
   - Use password set via invite email
   - If no password, check email for Netlify invite

### Using the CMS Editor
Once logged in, you can:
- **Create New Post**: Click "New Blog" or "New Post" button
- **Edit Existing Posts**: Click any post from the list
- **Add Images**: Drag and drop or use media library
- **Preview Changes**: Use preview pane before publishing
- **Publish**: Click "Publish" to make changes live

### Alternative: Edit Blog Files Directly
Location: `updates/src/content/blog/`

Create new post:
```markdown
# File: updates/src/content/blog/2025-10-19-your-title.md
---
title: "Your Post Title"
description: "Brief description"
pubDate: 2025-10-19
author: "Your Name"
tags: ["updates", "fire", "ai"]
---

Your blog content here in Markdown...
```

Deploy blog changes:
```bash
git add -A
git commit -m "Add new blog post"
git push
netlify deploy --prod
```

### Blog Structure
- **Admin Panel**: https://www.wywa.ai/updates/admin/
- **Public Blog**: https://www.wywa.ai/updates/
- **Blog Files**: `updates/src/content/blog/`
- **Blog Config**: `updates/public/admin/config.yml`
- **Built with**: Astro static site generator
- **CMS**: Decap CMS (formerly Netlify CMS) with Netlify Identity

### Troubleshooting Blog Login
If you can't login to admin panel:

1. **Request New Invite**:
```bash
netlify sites:invite-user
# Enter email when prompted
```

2. **Reset Password**:
   - Go to https://www.wywa.ai/updates/admin/
   - Click "Forgot Password?"
   - Check email for reset link

3. **Check Identity Settings**:
```bash
netlify open
# Navigate to: Site Settings → Identity → Settings
# Ensure registration is invite-only
# Check invited users list
```

## Important Files
- `netlify.toml` - Deployment configuration
- `package.json` - Build scripts and dependencies
- `vite.config.ts` - Build configuration
- `public/_redirects` - URL routing for SPA

## Troubleshooting

### Build Failures
- Check `npm install` runs successfully
- Verify all imports in .tsx files are correct
- Look for TypeScript errors

### Routing Issues
- SPA routes handled by `_redirects` file
- All routes serve index.html, then React Router takes over

### Deploy Not Updating
- Clear browser cache
- Check Netlify dashboard for deploy status
- Verify changes were pushed to GitHub

## Quick Deploy Workflow
```bash
# Make your edits to files

# Commit and deploy in one go
git add -A && \
git commit -m "Update site content" && \
git push && \
netlify deploy --prod
```

## Notes
- The site is a React SPA (Single Page Application)
- Uses Vite for fast builds
- Deployed automatically when pushing to GitHub (if webhook configured)
- Manual deploy with Netlify CLI also works
- All changes go live immediately after successful deploy

---

Last updated: October 19, 2025
Session changes included:
- Updated homepage to embodied AI focus
- Simplified team section on /fire page
- Changed favicon to minimal W design
- Fixed consistency in fonts and colors
- Added live inference dashboard