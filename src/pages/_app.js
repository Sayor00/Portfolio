// src/pages/_app.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tahsin Faiyaz (Sayor) - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Tahsin Faiyaz (Sayor)'s portfolio. Explore my projects, skills, and experience as a Full-Stack Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:title" content="Tahsin Faiyaz (Sayor) - Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Welcome to Tahsin Faiyaz (Sayor)'s portfolio. Explore my projects, skills, and experience as a Full-Stack Developer." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourdomain.com/" />
        <meta property="twitter:title" content="Tahsin Faiyaz (Sayor) - Full-Stack Developer Portfolio" />
        <meta property="twitter:description" content="Welcome to Tahsin Faiyaz (Sayor)'s portfolio. Explore my projects, skills, and experience as a Full-Stack Developer." />
        <meta property="twitter:image" content="/images/og-image.jpg" />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
