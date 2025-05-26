# Momentum DJs Website

A modern, responsive website for professional DJ services built with Next.js, TypeScript, and Tailwind CSS.

![Momentum DJs Website](https://img.shields.io/badge/Next.js-15.3.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss)

## Features

- 🎵 **Professional DJ Services** - Weddings, Corporate Events, Private Parties, Club Nights
- 📱 **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Gradient designs, smooth animations, and interactive elements
- ⭐ **Client Testimonials** - Showcase of customer reviews and ratings
- 📞 **Contact Form** - Easy inquiry system for potential clients
- 🚀 **Fast Performance** - Built with Next.js for optimal loading speeds

## Screenshots

### Desktop View
- Hero section with call-to-action buttons
- Services grid with professional icons
- About section with company statistics
- Client testimonials with star ratings

### Mobile View
- Responsive hamburger navigation
- Touch-friendly interface
- Optimized layout for smaller screens

## Tech Stack

- **Framework**: Next.js 15.3.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/momentum-djs.git
   cd momentum-djs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## Setup from Scratch

If you want to create this project from scratch:

### Method 1: Automated Setup (Recommended)

1. **Create a new Next.js project**
   ```bash
   npx create-next-app@latest momentum-djs --typescript --tailwind --eslint
   cd momentum-djs
   ```

2. **Install additional dependencies**
   ```bash
   npm install lucide-react
   ```

3. **Copy the component code**
   - Replace the content of `src/app/page.tsx` with the provided component
   - Make sure to add `"use client";` at the top of the file

4. **Run the development server**
   ```bash
   npm run dev
   ```

### Method 2: Manual Setup

1. **Create project directory**
   ```bash
   mkdir momentum-djs
   cd momentum-djs
   npm init -y
   ```

2. **Install core dependencies**
   ```bash
   npm install next@latest react@latest react-dom@latest typescript @types/react @types/node @types/react-dom
   ```

3. **Install development dependencies**
   ```bash
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

4. **Install UI dependencies**
   ```bash
   npm install lucide-react
   ```

5. **Initialize Tailwind CSS**
   ```bash
   npx tailwindcss init -p
   ```

6. **Create project structure**
   ```
   src/
   ├── app/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   └── globals.css
   ```

## Configuration Files

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `package.json` scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## Troubleshooting

### Common Issues

#### 1. PostCSS/Tailwind Error with Turbopack
If you encounter PostCSS errors with Next.js 15 Turbopack:

**Quick Fix:**
```bash
npm run dev -- --no-turbo
```

**Alternative Fix:**
```bash
npm install @tailwindcss/postcss
```

Then update `postcss.config.js`:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

#### 2. React Hooks Error
If you see "You're importing a component that needs useState":

Add `"use client";` at the top of your component file:
```typescript
"use client";

import React, { useState } from 'react';
// ... rest of your imports
```

#### 3. Port Already in Use
If port 3000 is occupied:
```bash
npm run dev -- --port 3001
```

#### 4. Clean Reinstall
If you're having persistent issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Project Structure

```
momentum-djs/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout
│       ├── page.tsx            # Main component
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── package.json               # Dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## Component Features

### Navigation
- Responsive navigation with mobile hamburger menu
- Smooth scroll to sections
- Sticky header

### Sections
- **Hero**: Eye-catching banner with gradient background
- **Services**: Grid layout showcasing DJ services
- **About**: Company information with statistics
- **Testimonials**: Client reviews with star ratings
- **Contact**: Contact form and company information
- **Footer**: Links and company details

### Styling
- Purple/pink gradient theme
- Responsive design (mobile-first)
- Hover effects and smooth transitions
- Professional typography
- Accessible color contrast

## Customization

### Colors
The site uses a purple/pink gradient theme. To customize colors, update the Tailwind classes:
- Primary: `purple-600`, `purple-800`, `purple-900`
- Secondary: `pink-600`, `pink-800`
- Accent: `yellow-400`

### Content
All content can be easily modified in the component:
- Services array
- Testimonials array
- Company information
- Contact details

### Styling
Built with Tailwind CSS utility classes for easy customization:
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Spacing: `p-4`, `m-8`, `space-y-6`
- Colors: `bg-purple-600`, `text-white`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Website**: [www.momentumdjs.co.uk](https://www.momentumdjs.co.uk)
- **Email**: info@momentumdjs.co.uk
- **Project Link**: [https://github.com/yourusername/momentum-djs](https://github.com/yourusername/momentum-djs)

---

**Built with ❤️ for Momentum DJs**