import Head from 'next/head';

const SeoHead = ({ title, description }) => {
  const defaultTitle = "Momentum DJs";
  const siteTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description || 'Default description'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SeoHead;
