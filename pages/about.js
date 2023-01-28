import styles from "@/styles/About.module.css";
import Menu from "@/components/Menu/index.js"
import Grad from "@/components/Grad/index.js"
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
    <title>About Us</title>
    <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta
          property="og:description"
          content="BCIT Digital Design and Development Diploma"
        />
        <link rel="icon" href="/favicon.png"/>
    </Head>
      <main className={styles.main}>

        <header className={styles.header}>
          <Menu></Menu>
          <Grad></Grad>
        </header>

        <div className={styles.main__content}>


            <div className={styles.main__content__about}>
                <div></div>
                <h1>About Us</h1>
                <div></div>
            </div>
            
            <div className={styles.content}>
                <div className={styles.content__intro}>
                <p>We are proud to deliver an education that goes beyond textbooks and classrooms.
                </p>
                <p>
                    Our students gain the technical skills, real-world experience, and problem-solving ability
                    <br />
                    needed to embrace complexity and lead innovation in a rapidly changing workforce.
                    </p>
                    <p>
                    Through close collaboration with industry, our network of alumni and partners continue to
                    <br />
                    achieve global success.
                    </p>
                </div>
                <div className={styles.content__infosessions}>
                    <h2>Information Sessions</h2>
                    <p>Information sessions are a simple way to figure out the next step along your career path.
                        <br />
                        Learn more about the programs that intrest you.
                    </p>
                </div>
                <div className={styles.content__biginfo}>
                    <h3>Big info</h3>
                    <p>Big info is the largest program expo and information session at BCIT. It's your change to find
                        <br />
                        out about all our programs - from business, computing, and health to engineering, trades,
                        <br /> 
                        and applied sciences.
                        </p>
                        <p>
                        If you missed our fall event the next Big Info is scheduled to return on Febuary 15, 2023.
                        </p>
                </div>
                <div className={styles.content__campustours}>
                    <h2>Campus Tours</h2>
                    <p>Tours run weekdays September to May, on our Burnaby campus, See BCIT in person and get a
                        <br />
                        taste of campus life.
                    </p>
                </div>
            </div>

        </div>


      </main>
    </>
  );
}
