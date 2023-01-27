import Head from "next/head";
import Image from "next/Image";
import { Inter, Odor_Mean_Chey } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import bg from "@/public/background-images/backgroundMountain.jpg";
import Menu from "@/components/Menu/index.js";
import Grad from "@/components/Grad/index.js";
import arrow from "@/public/icons/down.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src={bg}
        fill
        style={{
          zIndex: -100,
        }}
      />

      <main className={styles.main}>
        <div className={styles.header}>
          <Menu className={styles.header__menu}></Menu>
          <Grad className={styles.header__grad}></Grad>
        </div>

        <div className={styles.contentbox}>
          <div className={styles.contentbox__headerbox}>
            <h1 className={styles.contentbox__header}>
              An investment in <br /> knowledge pays the best <br /> interest.
            </h1>
          </div>

          <div className={styles.contentbox__line}>
            <div
              style={{
                width: "25%",
                backgroundColor: "var(--secondary-color)",
                height: "5px",
                borderRadius: "50px",
              }}
            />
          </div>

          <div className={styles.contentbox__textbox}>
            <p>
              Different than a college or university, the British Columbia
              <br /> Institute of Technology offers practical, flexible, applied
              <br /> education with instructors who have direct, hands-on <br />
              experience in their field.
            </p>
          </div>

          <div className={styles.contentbox__buttonsbox}>
            <a>
              <button
                className={styles.contentbox__buttonsbox__button}
                name="More About Us"
              >
                More About Us
              </button>
              <button
                className={styles.contentbox__buttonsbox__button}
                name="Contact Us"
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>

        <a className={styles.arrow} href="/about">
          <span>
              <Image src={arrow} width={40} height={60}/>
          </span>
        </a>
      </main>
    </>
  );
}
