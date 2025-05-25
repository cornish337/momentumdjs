// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.momentumdjs.co.uk', // Get from env or default
  generateRobotsTxt: true, // Will generate robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      // Add other policies if needed, e.g., { userAgent: '*', disallow: '/admin' }
    ],
    // additionalSitemaps: [ // Example for additional sitemaps
    //   'https://www.momentumdjs.co.uk/my-custom-sitemap-1.xml',
    // ],
  },
  // exclude: ['/server-sitemap.xml'], // Example: exclude server-generated sitemap
  // Optional: Default is to scan all pages. If you have dynamic pages not discoverable, list them here.
  // For example, if you have /services/[slug].js and they are not linked from anywhere discoverable by the crawler.
  // additionalPaths: async (config) => [
  //   await config.transform(config, '/services/wedding-dj'),
  //   await config.transform(config, '/services/corporate-events'),
  // ],
};
