import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec
        dui consequat, pellentesque elit vel, pretium risus. Nunc magna justo,
        faucibus quis gravida nec, pulvinar id libero
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec
        dui consequat, pellentesque elit vel, pretium risus. Nunc magna justo,
        faucibus quis gravida nec, pulvinar id libero
      </p>
    </div>
  );
}
