# Momentum DJs Website Rebuild: Technical Plan

## 1. Introduction

This document outlines the technical plan for rebuilding the Momentum DJs website (www.momentumdjs.co.uk) using Next.js and Tailwind CSS. The goal is to create a modern, high-performance, SEO-friendly, and user-centric platform that effectively showcases Momentum DJs' services and brand, ultimately driving more inquiries and bookings.

## 2. Comprehensive Audit of www.momentumdjs.co.uk (Summary)

A thorough audit of the current Momentum DJs website revealed several key areas for improvement:

*   **Design & User Experience (UX):** The current design appears outdated. Navigation could be more intuitive, and the mobile experience needs significant enhancement.
*   **Performance:** Load times can be improved. Optimizing images and leveraging modern web practices will be crucial.
*   **SEO:** Current SEO performance is subpar. There's a lack of structured data, meta tag optimization, and a content strategy.
*   **Technology Stack:** The existing platform (likely WordPress based on common DJ site trends, though not explicitly stated in audit) may be limiting in terms of customization and performance compared to a modern Jamstack approach.
*   **Content:** While service information is present, it could be more engaging and better structured. A blog or news section is absent.
*   **Mobile Responsiveness:** The site is not fully optimized for mobile devices, which is critical in today's market.
*   **Call to Actions (CTAs):** CTAs could be clearer and more strategically placed to guide users towards inquiries.

This rebuild aims to address these points directly, leveraging the strengths of Next.js and Tailwind CSS.

## 3. Next.js Application Structure

A well-organized Next.js application structure is vital for maintainability and scalability.

### Routing

Next.js uses a file-system based router.
*   `pages/index.js`: Homepage
*   `pages/about.js`: About Us page
*   `pages/services/index.js`: Main services page
*   `pages/services/weddings.js`: Wedding DJ services page
*   `pages/services/corporate.js`: Corporate events page
*   `pages/gallery.js`: Photo/video gallery
*   `pages/testimonials.js`: Testimonials page
*   `pages/blog/index.js`: Blog listing page
*   `pages/blog/[slug].js`: Individual blog posts (dynamic routing)
*   `pages/contact.js`: Contact and booking inquiry page
*   `pages/api/contact-form.js`: API route for form submissions

Example of a dynamic route for blog posts (`pages/blog/[slug].js`):
```javascript
// pages/blog/[slug].js
import { useRouter } from 'next/router';

function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch blog post data based on slug

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      {/* Post content here */}
    </div>
  );
}

export default BlogPost;
```

### Components

Components will be organized for reusability and clarity.

*   **Layout Components (`components/layout`)**:
    *   `Layout.js`: Main site layout (header, footer, navigation).
    *   `Header.js`: Site header.
    *   `Footer.js`: Site footer.
    *   `Navigation.js`: Main navigation menu.
    *   `SeoHead.js`: Component to manage SEO meta tags using `next/head`.
*   **UI Components (`components/ui`)**:
    *   `Button.js`: Reusable button styles.
    *   `Card.js`: For displaying services, testimonials, blog posts.
    *   `Modal.js`: For pop-up information or forms.
    *   `Spinner.js`: Loading indicator.
*   **Section-Specific Components (`components/sections`)**:
    *   `HeroSection.js`: For the homepage hero area.
    *   `ServiceCard.js`: Specific card for services.
    *   `TestimonialSlider.js`: For displaying testimonials.
    *   `ContactForm.js`: The inquiry form.
    *   `GalleryGrid.js`: For the multimedia gallery.

Example of a `Layout.js` component:
```javascript
// components/layout/Layout.js
import Header from './Header';
import Footer from './Footer';
import SeoHead from './SeoHead';

export default function Layout({ children, title, description }) {
  return (
    <>
      <SeoHead title={title} description={description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

### Data Handling

*   **Static Site Generation (SSG)**: For pages like About Us, Services (overview), and potentially blog posts if they don't update frequently.
    *   `getStaticProps` will be used to fetch data at build time.
*   **Incremental Static Regeneration (ISR)**: For blog posts or testimonials that might update periodically without requiring a full site rebuild.
    *   `getStaticProps` with a `revalidate` property.
*   **Server-Side Rendering (SSR)**: Could be used for highly dynamic content, but SSG/ISR are preferred for performance.
    *   `getServerSideProps` if needed.
*   **API Routes**: For backend functionalities like handling form submissions.
    *   Files in `pages/api/` directory.

### State Management

*   **React Context API**: For global state like theme settings or user authentication (if implemented).
*   **Local Component State (`useState`, `useReducer`)**: For component-level state management.
*   For complex form state, libraries like `React Hook Form` will be used.

### Directory Structure Example

```
momentum-djs-nextjs/
├── components/
│   ├── layout/
│   │   ├── Layout.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│   ├── ui/
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── ...
│   └── sections/
│       ├── HeroSection.js
│       └── ...
├── pages/
│   ├── api/
│   │   └── contact-form.js
│   ├── blog/
│   │   ├── [slug].js
│   │   └── index.js
│   ├── services/
│   │   ├── weddings.js
│   │   └── index.js
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── about.js
│   └── ...
├── public/
│   ├── images/
│   ├── fonts/
│   └── ...
├── styles/
│   └── globals.css
├── lib/
│   └── (helper functions, constants, etc.)
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 4. UI/UX Enhancements Strategy

The UI/UX strategy focuses on creating a modern, engaging, and user-friendly experience that reflects Momentum DJs' brand and encourages inquiries.

*   **Modern Aesthetics & Branding:**
    *   Clean, professional design with high-quality imagery and video.
    *   Consistent branding (logo, color palette, typography) throughout the site.
    *   Subtle animations and transitions to enhance user engagement without sacrificing performance.
*   **Homepage Redesign:**
    *   Compelling hero section with a strong value proposition and clear CTA.
    *   Concise introduction to services.
    *   Featured testimonials.
    *   Links to key sections (Gallery, Blog, Contact).
*   **Navigation & Information Architecture:**
    *   Intuitive, simple main navigation (e.g., Home, Services, Gallery, Testimonials, Blog, Contact).
    *   Clear footer navigation with quick links.
    *   Breadcrumbs on deeper pages for easy orientation.
*   **Service Pages:**
    *   Dedicated pages for each core service (e.g., Wedding DJ, Corporate Events, Party DJ).
    *   Detailed descriptions, what's included, pricing guidelines (if applicable), and relevant imagery/videos.
    *   Specific CTAs on each service page.
*   **Gallery Page:**
    *   Visually appealing gallery showcasing high-quality photos and videos from past events.
    *   Categorization/filtering if applicable (e.g., by event type).
    *   Optimized image loading (`next/image`).
*   **Contact & Booking Process:**
    *   Prominently displayed contact information.
    *   User-friendly inquiry form with clear fields and validation.
    *   Multiple ways to get in touch (form, email, phone).
*   **Testimonials Page & Integration:**
    *   Dedicated page for all testimonials.
    *   Curated testimonials featured on the homepage and relevant service pages.
    *   Consider integrating with a review platform if applicable.
*   **Blog/News Section:**
    *   To share insights, event highlights, music trends, and improve SEO.
    *   Clear categories and tagging for posts.
*   **Accessibility (WCAG AA):**
    *   Adherence to WCAG 2.1 AA guidelines.
    *   Semantic HTML, ARIA attributes where necessary, keyboard navigability, sufficient color contrast.
*   **Mobile-First & Responsive Design:**
    *   Design and develop for mobile screens first, then scale up to tablet and desktop.
    *   Ensure a seamless experience across all device sizes using Tailwind CSS's responsive utilities.
*   **Visual Mock-up Descriptions (Examples):**
    *   **Homepage:** Full-width hero video background with overlay text: "Unforgettable Events, Powered by Music - Momentum DJs" and a "Get a Quote" button. Below, a grid of 3 cards: "Weddings", "Corporate", "Parties", each with an icon and short description.
    *   **Service Page (Weddings):** Hero image of a wedding reception. Section detailing "Our Wedding DJ Philosophy", followed by "What's Included" (bullet points), a carousel of wedding photos, and a "Book Your Wedding DJ" CTA linking to the contact form.

## 5. Tailwind CSS Integration Plan

Tailwind CSS will be the primary styling framework, enabling rapid UI development with a utility-first approach.

### Installation and Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
This creates `tailwind.config.js` and `postcss.config.js`.

Configure `tailwind.config.js` to include paths to all component and page files:
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Customizations here (colors, fonts, etc.)
      colors: {
        primary: '#FF6347', // Example primary color
        secondary: '#4A90E2', // Example secondary color
      },
    },
  },
  plugins: [],
}
```

Import Tailwind styles in `styles/globals.css`:
```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Development Workflow

*   Utilize Tailwind's utility classes directly in JSX.
*   Create reusable components with pre-styled elements.
*   Minimize custom CSS; rely on Tailwind's design system.

### Customization (`tailwind.config.js`)

*   **Colors:** Define a custom color palette aligned with Momentum DJs' branding.
*   **Fonts:** Integrate custom web fonts.
*   **Spacing, Breakpoints:** Adjust as needed for the desired layout.
*   **Theme Extensions:** Use `theme.extend` to add custom values without overriding Tailwind's defaults.

### Responsive Design

Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) will be used extensively.
Example:
```jsx
<div className="w-full md:w-1/2 lg:w-1/3 p-4">
  {/* This div will take full width on small screens, 
      half width on medium screens, and one-third width on large screens */}
</div>
```

### Plugins

*   **`@tailwindcss/forms`**: For basic form styling resets.
    ```bash
    npm install -D @tailwindcss/forms
    ```
    Add to `tailwind.config.js` plugins: `require('@tailwindcss/forms')`.
*   **`@tailwindcss/typography`**: For styling markdown-generated content (e.g., blog posts).
    ```bash
    npm install -D @tailwindcss/typography
    ```
    Add to `tailwind.config.js` plugins: `require('@tailwindcss/typography')`. Apply with the `prose` class.

### Best Practices

*   Keep utility class lists readable; consider `@apply` for complex, repeated patterns in a global CSS file if necessary, but use sparingly.
*   Leverage Tailwind's configuration for consistency.
*   Purge unused styles in production (Next.js handles this automatically with Tailwind CSS v2.0+ when `NODE_ENV` is `production`).

## 6. SEO Optimization Strategy

A robust SEO strategy is crucial for visibility and attracting organic traffic.

### Keyword Research

*   Identify primary and secondary keywords relevant to DJ services in the target locations (e.g., "DJ hire London", "wedding DJ Kent", "corporate event DJ").
*   Use tools like Google Keyword Planner, Ahrefs, or SEMrush.
*   Focus on long-tail keywords for specific niches.

### On-Page SEO

*   **Meta Tags with `next/head`:**
    *   Unique, descriptive titles (50-60 characters).
    *   Compelling meta descriptions (150-160 characters) with CTAs.
    ```javascript
    // components/layout/SeoHead.js
    import Head from 'next/head';

    export default function SeoHead({ title, description, keywords, canonicalUrl }) {
      const siteTitle = 'Momentum DJs';
      const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

      return (
        <Head>
          <title>{fullTitle}</title>
          <meta name="description" content={description} />
          {keywords && <meta name="keywords" content={keywords} />}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
          {/* Add Open Graph and Twitter Card tags here */}
        </Head>
      );
    }
    ```
*   **Headers (H1-H6):** Use hierarchically for content structure. Main keyword in H1.
*   **Content:** High-quality, original, and keyword-rich content.
*   **Image SEO with `next/image`:**
    *   Descriptive alt text for all images.
    *   Optimized image file sizes.
    ```jsx
    import Image from 'next/image';

    <Image
      src="/images/dj-at-wedding.jpg"
      alt="Momentum DJs performing at a wedding reception"
      width={800}
      height={600}
      layout="responsive" // Or "intrinsic" or "fixed"
    />
    ```
*   **Internal Linking:** Link relevant pages together to distribute link equity and improve navigation.
*   **URL Structure:** Clean, readable, and keyword-inclusive URLs (e.g., `/services/wedding-dj-london`).

### Technical SEO

*   **Structured Data (Schema Markup) with JSON-LD:**
    *   Implement for services, events, local business, reviews.
    ```html
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MusicEvent",
      "name": "Wedding Reception DJ Set by Momentum DJs",
      "performer": {
        "@type": "PerformingGroup",
        "name": "Momentum DJs"
      },
      "startDate": "2024-12-31T19:00",
      "location": {
        "@type": "Place",
        "name": "The Grand Hall",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main St",
          "addressLocality": "London",
          "postalCode": "SW1A 1AA",
          "addressCountry": "UK"
        }
      },
      "description": "Professional DJ services for wedding receptions.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GBP",
        "url": "https://www.momentumdjs.co.uk/contact"
      }
    }
    </script>
    ```
    This can be dynamically generated and injected using `next/head`.
*   **Mobile-Friendliness:** Ensured by responsive design with Tailwind CSS.
*   **Site Speed:** Optimized through Next.js (SSG/ISR, image optimization, code splitting) and good development practices.
*   **XML Sitemap:** Generate and submit to search engines (`next-sitemap` package can be used).
*   **`robots.txt`:** Guide search engine crawlers.
    ```
    # public/robots.txt
    User-agent: *
    Allow: /
    Disallow: /admin # If there's an admin section
    Sitemap: https://www.momentumdjs.co.uk/sitemap.xml
    ```
*   **HTTPS:** Standard with Vercel hosting.
*   **Canonical URLs:** Use `rel="canonical"` for duplicate content issues (handled by `SeoHead` component).

### Content Strategy

*   **Blog:** Regularly publish articles about event planning, music trends, DJ tips, past event highlights.
*   **Location-Specific Pages/Content:** If targeting multiple areas, create content specific to those locations.
*   **FAQs:** Comprehensive FAQ section addressing common client questions.

### Monitoring & Reporting

*   Google Analytics 4 (GA4) and Google Search Console (GSC) are essential for tracking performance.

## 7. Multimedia Content Integration

Effective use of multimedia will enhance user engagement and showcase Momentum DJs' work.

### General Principles

*   **High Quality:** Use professional photos and videos.
*   **Relevance:** Ensure multimedia directly relates to the content it supports.
*   **Optimization:** Compress images and videos for fast loading without significant quality loss.
*   **Accessibility:** Provide alt text for images and captions/transcripts for videos.

### Image Galleries

*   **`next/image`:** Utilize for optimized image loading.
*   **Layout:** Grid, masonry, or carousel layouts for galleries.
    *   CSS Grid or Flexbox with Tailwind CSS for responsive layouts.
*   **Lightbox:** Implement a lightbox feature for viewing larger images without leaving the page. Libraries like `yet-another-react-lightbox` can be used.
    Example with `next/image`:
    ```jsx
    // components/sections/GalleryGrid.js
    import Image from 'next/image';
    // Assume images is an array of objects like { src: '/path/to/img.jpg', alt: 'Description' }
    
    export default function GalleryGrid({ images }) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square"> {/* aspect-square for square images */}
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:opacity-75 transition-opacity"
                // Add onClick for lightbox functionality
              />
            </div>
          ))}
        </div>
      );
    }
    ```

### Video Integration

*   **Embedding:** Embed videos from platforms like YouTube or Vimeo for better performance and features.
*   **Responsive Embeds:** Ensure videos resize correctly. Tailwind's `@tailwindcss/aspect-ratio` plugin can help, or custom CSS.
    Example for responsive YouTube embed:
    ```jsx
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/your-video-id"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Momentum DJs Showcase"
      ></iframe>
    </div>
    ```
*   **Lazy Loading:** Use `loading="lazy"` attribute on iframes if supported, or React libraries for lazy loading components.
*   **Custom Thumbnails:** Use `next/image` for video thumbnails that, when clicked, load the video player.

### Audio Samples

*   **HTML5 `<audio>` Tag:** For embedding audio mixes or samples.
    ```html
    <audio controls>
      <source src="/audio/momentum-djs-mix.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    ```
    Style the controls or create custom controls for better branding.
*   Consider SoundCloud embeds for longer mixes.

### Performance Considerations

*   **Compression:** Use tools like TinyPNG/JPG for images, HandBrake for videos.
*   **Lazy Loading:** Implement for images and videos below the fold. `next/image` has built-in lazy loading.
*   **CDNs:** Vercel automatically uses a CDN. For self-hosted videos/audio, consider a CDN.

## 8. Inquiry and Booking Form Implementation

The inquiry form is a critical conversion point.

### User Experience (UX) and Design

*   **Simplicity:** Only ask for essential information initially.
*   **Clarity:** Clearly labeled fields, visual hierarchy.
*   **Multi-step form (optional):** For complex inquiries, break into logical sections to reduce cognitive load.
*   **Prominent Placement:** Easy to find on the contact page and via CTAs.

### Component Structure and Technology

*   **React Hook Form:** Recommended for managing form state, validation, and submission.
    ```bash
    npm install react-hook-form
    ```
    Example structure (`components/sections/ContactForm.js`):
    ```javascript
    // components/sections/ContactForm.js
    import { useForm } from 'react-hook-form';

    export default function ContactForm() {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = async (data) => {
        // Send data to API route (pages/api/contact-form.js)
        const response = await fetch('/api/contact-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        // Handle response (success/error message)
      };

      return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" {...register("name", { required: "Name is required" })} 
                   className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          {/* Add other fields: email, phone, eventDate, eventType, message etc. */}
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Send Inquiry</button>
        </form>
      );
    }
    ```

### Client-Side Validation

*   Handled by React Hook Form based on defined rules (required, minLength, pattern, etc.).
*   Provides instant feedback to the user.

### Server-Side Validation

*   Crucial for security and data integrity.
*   Implemented in the Next.js API route (`pages/api/contact-form.js`).
*   Validate all incoming data before processing (e.g., sending an email).

### Backend Integration (Next.js API Route for Email Sending)

*   Use a library like `Nodemailer` to send emails from the API route.
    ```bash
    npm install nodemailer
    ```
    Example (`pages/api/contact-form.js`):
    ```javascript
    // pages/api/contact-form.js
    import nodemailer from 'nodemailer';

    export default async function handler(req, res) {
      if (req.method === 'POST') {
        const { name, email, message, eventDate, eventType } = req.body;

        // Basic server-side validation
        if (!name || !email || !message) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        // Configure Nodemailer transporter (use environment variables for credentials)
        const transporter = nodemailer.createTransport({
          service: 'gmail', // or other email service
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        try {
          await transporter.sendMail({
            from: email, // Sender's email from form
            to: process.env.ADMIN_EMAIL, // Your receiving email
            subject: `New Inquiry from ${name} - Event: ${eventType || 'N/A'}`,
            text: `Name: ${name}\nEmail: ${email}\nEvent Date: ${eventDate || 'N/A'}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Event Date:</strong> ${eventDate || 'N/A'}</p>
                   <p><strong>Event Type:</strong> ${eventType || 'N/A'}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
          });
          res.status(200).json({ success: 'Email sent successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error sending email' });
        }
      } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    }
    ```
    **Note:** Store email credentials in environment variables (`.env.local`).

### User Feedback Mechanisms

*   Success messages upon form submission.
*   Clear error messages if submission fails or validation errors occur.
*   Loading indicators while the form is submitting.

### Security and Spam Prevention

*   **Server-side validation:** As mentioned.
*   **Rate Limiting:** Consider for API routes to prevent abuse.
*   **CSRF Protection:** Next.js has some built-in protections, but be mindful.
*   **Honeypot field:** A hidden field that, if filled out, indicates a bot.
*   **reCAPTCHA (Google):** Can be integrated for more robust spam protection.

## 9. Analytics and Monitoring Tools Recommendation

Tracking website performance and user behavior is essential for ongoing optimization.

*   **Google Analytics 4 (GA4):**
    *   **Purpose:** Comprehensive website traffic analysis, user behavior tracking, conversion tracking.
    *   **Integration:** Add GA4 tracking code to `pages/_document.js` or `pages/_app.js`.
    Example for `pages/_document.js` (ensure it's correctly placed if using `next/script` `afterInteractive` strategy for `_app.js`):
    ```javascript
    // pages/_document.js
    import { Html, Head, Main, NextScript } from 'next/document';

    export default function Document() {
      const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // Store in .env.local

      return (
        <Html lang="en">
          <Head>
            {GA_TRACKING_ID && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                      });
                    `,
                  }}
                />
              </>
            )}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
    ```
    Alternatively, use `next/script` in `_app.js` for better performance:
    ```javascript
    // pages/_app.js
    import Script from 'next/script';
    // ... other imports

    function MyApp({ Component, pageProps }) {
      const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
      return (
        <>
          {GA_TRACKING_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <Script
                id="ga-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
          <Layout> {/* Assuming Layout component handles page structure */}
            <Component {...pageProps} />
          </Layout>
        </>
      );
    }
    export default MyApp;
    ```
*   **Google Search Console (GSC):**
    *   **Purpose:** Monitor organic search performance, indexing status, crawl errors, keyword queries.
    *   **Integration:** Verify site ownership via DNS record or HTML tag. Submit sitemap.
*   **Vercel Analytics:**
    *   **Purpose:** Real-time performance monitoring (Speed Insights) and audience data, directly integrated with Vercel hosting.
    *   **Integration:** Enabled via Vercel project settings. No code changes typically needed for basic metrics.
*   **Hotjar / Microsoft Clarity:**
    *   **Purpose:** Qualitative data: heatmaps, session recordings, user feedback polls.
    *   **Integration:** Add their respective tracking scripts to the site head (similar to GA4).
*   **Sentry / LogRocket:**
    *   **Purpose:** Error tracking and session replay for debugging. Sentry for error monitoring, LogRocket for combined error tracking and session replay.
    *   **Integration:** SDK installation and configuration within the Next.js application.

### Summary Table & Recommendation Strategy

| Tool                     | Type                       | Key Use Cases                                     | Primary User      | Recommendation                                 |
| :----------------------- | :------------------------- | :------------------------------------------------ | :---------------- | :--------------------------------------------- |
| **Google Analytics 4**   | Quantitative Web Analytics | Traffic, engagement, conversions, user demographics | Marketing, Admin  | **Essential**                                  |
| **Google Search Console**| SEO & Technical            | Organic performance, indexing, crawl errors       | SEO, Admin, Dev   | **Essential**                                  |
| **Vercel Analytics**     | Performance & Audience     | Core Web Vitals, visitor stats (privacy-focused)  | Dev, Admin        | **Highly Recommended** (if hosting on Vercel) |
| **Hotjar/Clarity**       | Qualitative UX Analytics   | Heatmaps, session recordings, feedback            | UX, Marketing     | **Recommended** (Clarity is free)              |
| **Sentry**               | Error Monitoring           | JavaScript error tracking, issue alerts           | Dev               | **Recommended** for production stability       |
| **LogRocket**            | Error Monitoring & Replay  | Error tracking, detailed session replay           | Dev, Support      | Alternative to Sentry + Hotjar for some uses   |

**Recommendation Strategy:**
1.  **Must-Haves:** GA4 and GSC are fundamental.
2.  **Hosting Dependent:** Vercel Analytics if deploying on Vercel.
3.  **UX Insights:** Start with Microsoft Clarity (free) for heatmaps/recordings. Consider Hotjar if more advanced survey/feedback tools are needed.
4.  **Stability:** Implement Sentry for proactive error monitoring once the site is live.

## 10. Conclusion

This technical plan provides a comprehensive roadmap for rebuilding the Momentum DJs website. By leveraging Next.js for its performance and SEO capabilities, Tailwind CSS for rapid and responsive UI development, and a strong focus on UX, SEO, and multimedia integration, the new website will be well-positioned to attract more visitors and convert them into clients. Adherence to the outlined strategies for structure, content, and analytics will ensure a successful project outcome.
