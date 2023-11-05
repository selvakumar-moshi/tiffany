import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/Header.css';
import '@/styles/Footer.css';
import '@/styles/Home.css';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
