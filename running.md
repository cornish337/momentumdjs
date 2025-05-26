To run the site, you'll need to have Node.js and npm (or yarn) installed on your computer. Here are the basic steps:

### Clone the Repository: If you haven't already, clone the repository to your local machine.
Navigate to Project Directory: Open your terminal or command prompt and navigate into the project's root directory.
Install Dependencies: Run the command npm install (or yarn install if you prefer yarn). This will download all the necessary packages defined in package.json.

### Set Up Environment Variables (Crucial for Contact Form):
Create a file named .env.local in the root of the project.
Add the following lines to it, replacing the placeholder values with your actual email credentials for sending the contact form emails:

EMAIL_SERVICE=your_email_service_provider # e.g., 'gmail', 'hotmail'
EMAIL_HOST=your_smtp_host # Optional, e.g., 'smtp.gmail.com'
EMAIL_PORT=your_smtp_port # Optional, e.g., 587 (for TLS) or 465 (for SSL)
EMAIL_SECURE=false # true for port 465, false for others like 587
EMAIL_USER=your_sending_email_address@example.com
EMAIL_PASS=your_email_password_or_app_password
ADMIN_EMAIL=recipient_email_for_inquiries@example.com
SITE_URL=http://localhost:3000 # Or your actual deployment URL for sitemap

Note: For Gmail, if you have 2-Factor Authentication enabled, you'll likely need to generate an "App Password" to use in EMAIL_PASS.

### NPM 
npm install -D tailwindcss postcss autoprefixer
npm fund


### Run in Development Mode:
Execute the command: `npm run dev`
This will start the development server, usually at <http://localhost:3000>. Open this URL in your web browser to see the site. Any changes you make to the code will typically auto-reload in the browser.

### Build for Production:

When you're ready to build the site for a production environment, run: npm run build
This creates an optimized build in the .next folder.
Run in Production Mode (After Building):
After a successful build, you can start the site in production mode with: npm start
This will serve the optimized build, also usually at http://localhost:3000 unless configured otherwise.

### Images

Configuration: I need to tell Next.js which external domains are allowed to serve images. This is done by adding an images configuration to your next.config.js file. For example:
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'http'
        hostname: 'some-external-domain.com', // The domain where images are hosted
        port: '', // Usually empty unless a specific port is needed
        pathname: '/path/to/images/**', // Optional: if images are under a specific path
      },
    ],
  },
};
I'd need to identify all the external hostnames your original site uses for images.
Using next/image: Once configured, you can use the next/image component with the full external URL as the src prop:
import Image from 'next/image';

<Image src="https://some-external-domain.com/path/to/your/image.jpg" alt="Description" width={500} height={300} />
You'll still need to provide width and height (or use layout="fill" with a sized container) for next/image to prevent layout shift and optimize correctly.
