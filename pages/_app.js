import '../styles/globals.css'; // Assuming you have a global CSS file
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  // Extract title and description from pageProps, or use defaults
  const title = pageProps.title || "Momentum DJs";
  const description = pageProps.description || "Momentum DJs - Professional DJ services for your events.";

  return (
    <Layout title={title} description={description}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
