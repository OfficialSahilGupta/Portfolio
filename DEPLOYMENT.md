# Deployment Guide - Sahil Gupta Portfolio

## Cloudflare Pages Deployment

### Prerequisites
- Cloudflare account
- Domain: sahilgupta8.com.np already configured in Cloudflare
- Git repository (GitHub, GitLab, or Gitea)

### Steps to Deploy

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize and select your repository
   - Configure build settings:
     - **Framework preset**: Create React App
     - **Build command**: `npm run build`
     - **Build output directory**: `build`
   - Click "Save and Deploy"

3. **Configure Custom Domain**
   - In Cloudflare Pages project settings
   - Go to "Custom domains"
   - Add `sahilgupta8.com.np`
   - Verify DNS records are pointing to Cloudflare

4. **Environment Variables** (if needed later)
   - Add in Pages project settings under "Environment variables"

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Preview production build locally
npm install -g serve
serve -s build
```

### Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── public/
│   └── _redirects
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

### Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations (optional)
- **React Intersection Observer** - Scroll animations

### Customization

1. **Update Personal Info**
   - Edit component files to add your actual information
   - Update social links in Footer.tsx
   - Add your real projects in Projects.tsx

2. **Add Resume**
   - Place your resume PDF in `public/` folder
   - Update the download link in Resume.tsx

3. **Modify Colors**
   - Edit `tailwind.config.js` for theme colors
   - Update gradient colors in component files

4. **Add More Animations**
   - Use Framer Motion for component animations
   - Use GSAP for complex timeline animations
   - Check `Hero.tsx` for canvas particle animation example

### Performance Tips

- Images are optimized by Cloudflare
- CSS is minified in production build
- JavaScript is code-split automatically
- Consider adding image optimization for project thumbnails

### Troubleshooting

**Build fails on Cloudflare Pages:**
- Check Node.js version compatibility
- Ensure all dependencies are in package.json
- Check build logs in Cloudflare dashboard

**Animations not working:**
- Verify Framer Motion is installed
- Check browser console for errors
- Ensure CSS is properly loaded

**Domain not resolving:**
- Verify DNS records in Cloudflare
- Check domain nameservers point to Cloudflare
- Wait for DNS propagation (up to 24 hours)

### Next Steps

1. Add your actual projects and descriptions
2. Update contact information
3. Add your resume PDF
4. Customize colors and animations
5. Test on mobile devices
6. Deploy to Cloudflare Pages
7. Monitor performance with Cloudflare Analytics
