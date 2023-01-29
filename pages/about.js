import styles from "@/styles/About.module.css";
import "@/styles/About.module.css";
import Menu from "@/components/Menu/index.js";
import Grad from "@/components/Grad/index.js";
import Head from "next/head";
import Image from "next/Image";
import jsonData from "@/data/data.json";
import { useState, useEffect } from "react";
import leftar from "@/public/icons/leftArrow.png";
import rightar from "@/public/icons/rightArrow.png";
import upar from "@/public/icons/upwardArrow.png";
import downar from "@/public/icons/down.png";
import { useRouter } from 'next/router'

export default function About() {
  const [SlideID, setSlideID] = useState(0);
  const [data, setData] = useState([]);
  const caroimg = require(`@/public/carousel-images/${SlideID}.jpg`);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      if (SlideID === 0) {
        setSlideID(data.length - 1);
      } else {
        setSlideID(SlideID - 1);
      }
    } else {
      if (SlideID === data.length - 1) {
        setSlideID(0);
      } else {
        setSlideID(SlideID + 1);
      }
    }
  };

  const router = useRouter()

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
        <link rel="icon" href="/favicon.png" />
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
              <p>
                We are proud to deliver an education that goes beyond textbooks
                and classrooms.
              </p>
              <p>
                Our students gain the technical skills, real-world experience,
                and problem-solving ability
                <br />
                needed to embrace complexity and lead innovation in a rapidly
                changing workforce.
              </p>
              <p>
                Through close collaboration with industry, our network of alumni
                and partners continue to
                <br />
                achieve global success.
              </p>
            </div>
            <div className={styles.content__infosessions}>
              <h2>Information Sessions</h2>
              <p>
                Information sessions are a simple way to figure out the next
                step along your career path.
                <br />
                Learn more about the programs that intrest you.
              </p>
            </div>
            <div className={styles.content__biginfo}>
              <h3>Big info</h3>
              <p>
                Big info is the largest program expo and information session at
                BCIT. It's your change to find
                <br />
                out about all our programs - from business, computing, and
                health to engineering, trades,
                <br />
                and applied sciences.
              </p>
              <p>
                If you missed our fall event the next Big Info is scheduled to
                return on Febuary 15, 2023.
              </p>
            </div>
            <div className={styles.content__campustours}>
              <h2>Campus Tours</h2>
              <p>
                Tours run weekdays September to May, on our Burnaby campus, See
                BCIT in person and get a
                <br />
                taste of campus life.
              </p>
            </div>
          </div>
          <div className={styles.content__carousel}>
            <Image className={styles.content__carouselimage} src={caroimg} />
            <div
              id="carouselImage"
              style={{
                height: "12.5em",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "2.5em 0em",
                width: "31.25em",
              }}
            >
              <div className={styles.carouselcontent}>
                <Image
                  src={leftar}
                  style={{
                    zIndex: 1,
                    width: "3.125em",
                    height: "3.125em",
                  }}
                  onClick={() => handleArrowClick("left")}
                />
                {data.map((caption, index) => {
                  if (index === SlideID) {
                    return (
                      <>
                        <Image />
                        <div
                          key={index}
                          id="testOnImageHere"
                          style={{
                            backgroundColor: "rgba(16, 46, 53, 0.5)",
                            padding: "0.625em",
                            margin: "0em 3.125em",
                            zIndex: 1,
                          }}
                        >
                          {index === SlideID && caption.value}
                        </div>
                      </>
                    );
                  }
                })}
                <Image
                  src={rightar}
                  style={{
                    zIndex: 1,
                    width: "3.125em",
                    height: "3.125em",
                  }}
                  onClick={() => handleArrowClick("right")}
                />
              </div>
            </div>
          </div>

          <div className={styles.content__departments}>
            <div></div>
            <h1>Departments</h1>
            <div></div>
          </div>

          <div className={styles.content__departments__list}>
            <ul>
              <li>Applied & Natural Sciences</li>
              <li>Business & Media</li>
              <li>Computing & IT</li>
              <li>Engineering</li>
              <li>Health Sciences</li>
              <li>Trades & Apprenticeships</li>
            </ul>
          </div>
        </div>
        <a>
          <span className={styles.arrowcontain}>
            <Image src={upar} className={styles.arrowup} onClick={() => router.push('http://localhost:3000/')}/>
            <Image src={downar} className={styles.downar} onClick={() => router.push('http://localhost:3000/contact')}/>
          </span>
        </a>
      </main>
    </>
  );
}
