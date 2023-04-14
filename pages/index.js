import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    /* The empty <><?> tag makea the Head and div not conflict */
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec dui consequat, pellentesque elit vel, pretium risus. Nunc magna
          justo, faucibus quis gravida nec, pulvinar id libero
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nec dui consequat, pellentesque elit vel, pretium risus. Nunc magna
          justo, faucibus quis gravida nec, pulvinar id libero
        </p>
        <Link className={styles.btn} href="/ninjas">
          Ninjas List
        </Link>
      </div>
    </>
  );
}
