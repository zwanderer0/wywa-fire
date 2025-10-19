# WYWA FI-RE Deployment Notes

## Successful Deployment Configuration (Working as of 2025-10-16)

### Overview
Successfully deployed WYWA FI-RE website to https://www.wywa.ai with:
- React SPA main site
- Astro blog at /updates
- Decap CMS admin panel at /updates/admin/
- Netlify Identity authentication for admin access

### Key Components That Work

#### 1. Authentication Setup
- **Backend**: Git Gateway with Netlify Identity
- **Config Location**: `/updates/public/admin/config.yml`
```yaml
backend:
  name: git-gateway
  branch: main
```

#### 2. Build Configuration
- **Fixed Astro Build Issue**: Added npm install step for updates subdirectory
- **Package.json build script**:
```json
"build:astro": "npm --prefix updates install && npm --prefix updates run build && npm run sync:updates"
```
This ensures Astro dependencies are installed before building on Netlify.

#### 3. Netlify Identity Widget Integration
- **Added via Vite Plugin** in `vite.config.ts`
- Creates `netlifyIdentityPlugin()` that injects:
  - Identity widget script in head
  - Invite token handler in body
  - Login redirect to /updates/admin/
- This ensures the widget loads in production builds

#### 4. File Structure
```
wywa-fire/
├── client/          # React SPA source
├── updates/         # Astro blog source
│   ├── public/admin/config.yml  # CMS config
│   └── src/pages/admin/index.astro  # Admin panel
├── dist/
│   ├── spa/         # Built React app
│   │   └── updates/ # Copied Astro build
│   └── server/      # Express server
└── scripts/sync-updates.mjs  # Copies Astro to dist/spa
```

#### 5. Admin Access Process
1. Admin users invited via Netlify Identity dashboard
2. Users receive email with invite link
3. Click link → Opens Identity widget on main site
4. Set password in the widget
5. Login at /updates/admin/ with email and password

### Working URLs
- Main site: https://www.wywa.ai
- Blog: https://www.wywa.ai/updates/
- Admin: https://www.wywa.ai/updates/admin/

### Authorized Admins
- anirudh.zw@gmail.com
- nveeturi@gmail.com

### GitHub Repository
- Repo: zwanderer0/wywa-fire
- Branch: main
- Automatic deploys on push

### Netlify Project
- Project: stupendous-puppy-b42f40
- Custom domain: wywa.ai
- Build command: `npm run build`
- Publish directory: `dist/spa`

### Key Fixes Applied
1. **Build Script**: Added `npm --prefix updates install` to install Astro dependencies
2. **Identity Widget**: Added via Vite plugin to ensure it's in production builds
3. **Sync Script**: Fixed to copy updates to `dist/spa/updates` not `dist/updates`
4. **CMS Backend**: Using git-gateway instead of GitHub OAuth for simpler setup

### How to Resume Development
1. Pull latest changes from GitHub
2. Run `npm install` in root
3. Run `npm run dev` for local development
4. Push changes to trigger Netlify deployment

### Notes
- Identity widget MUST be present on main site for invite links to work
- Build process: Client → Astro → Sync → Server
- Netlify only installs root dependencies, hence the npm install fix for updates/
- The Vite plugin ensures Identity widget is included in production builds