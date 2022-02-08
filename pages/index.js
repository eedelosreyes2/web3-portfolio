import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from './components/header';
import Work from './components/work';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white px-10">
      <Head>
        <title>Elijah's Web2 Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="mx-auto max-w-7xl">
        <Work />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
