import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Trove - Invest in US, Chinese Stocks From Nigeria</title>
      <meta
        name='description'
        content='Start trading and investing in US stocks from Nigeria, 
          all from the tap of a button. You also have access to Nigerian and Chinese stocks on the Trove app.'
      />
      <link rel='icon' href='https://www.troveapp.co/favicon.ico' />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href='https://www.troveapp.co/'>Trove!</a>
      </h1>
    </main>
  </div>
);

export default Home;
