import Head from "next/head";
import Image from "next/Image";
import styles from "@/styles/Contact.module.css";
import Menu from "@/components/Menu/index.js";
import Grad from "@/components/Grad/index.js";
import bg from "@/public/background-images/backgroundMountainUpsideDown.jpg";
import { useRouter } from 'next/router'
import arrow from "@/public/icons/upwardArrow.png";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Image
          src={bg}
          fill
          style={{
            zIndex: -100,
          }}
        />

        <div className={styles.header}>
          <Menu></Menu>
          <Grad></Grad>
        </div>

        <div className={styles.main__content}>
          <div className={styles.main__content__title}>
            <div></div>
            <h1>Contact Us</h1>
            <div></div>
          </div>

          <div className={styles.main__content__contactbox}>
            <p>Want to discuss? Lets chat!</p>
            <div className={styles.contactbox__container}>
            </div>
          </div>
        </div>
        <a href="/about">
          <span>
            <Image
            src={arrow}
            className={styles.arrow}/>
          </span>
        </a>
      </main>
    </>
  );
}
