import Head from "next/head";
import Image from "next/Image";
import styles from "@/styles/Contact.module.css";
import Menu from "@/components/Menu/index.js";
import Grad from "@/components/Grad/index.js";
import bg from "@/public/background-images/backgroundMountainUpsideDown.jpg";
import arrow from "@/public/icons/upwardArrow.png";
import { use, useState } from "react";

export default function Contact() {
  const [first, setFirst] = useState("");
  const [firstWarning, setFirstWarning] = useState("");
  const [last, setLast] = useState("");
  const [lastWarning, setLastWarning] = useState("");
  const [email, setEmail] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const hasWarnings =
    firstWarning !== "" ||
    first.length < 1 ||
    lastWarning !== "" ||
    last.length < 1 ||
    emailWarning !== "" ||
    email.length < 1;

  function handleFirst(event) {
    var input = event.target.value;
    setFirst(input);
    const validater = new RegExp(/^[a-z]/);

    if (validater.test(input) == true) {
      setFirstWarning(
        "First Name error. First Letter must be capital. Must use alphabets only"
      );
    } else if (validater.test(input) == false) {
      setFirstWarning("");
    }
  }

  function handleLast(event) {
    var input = event.target.value;
    setLast(input);
    const validater = new RegExp(/^[a-z]/);

    if (validater.test(input) == true) {
      setLastWarning(
        "Last Name error. Last Letter must be capital. Must use alphabets only"
      );
    } else if (validater.test(input) == false) {
      setLastWarning("");
    }
  }

  function handleEmail(event) {
    var input = event.target.value;
    setEmail(input);
    const validater = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (validater.test(input) == false) {
      setEmailWarning("Email is Invalid");
    } else if (validater.test(input) == true) {
      setEmailWarning("");
    }
  }

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
          alt="background img"
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
              <form className={styles.contactbox__form}>
                <fieldset className={styles.contactbox__fieldset}>
                  <table className={styles.contactbox__table}>
                    <thead className={styles.theadtop}>
                      <tr className={styles.firstrow}>
                        <td>
                          <div>
                            <h4>First Name:</h4>
                            <input
                              placeholder="First Name Here"
                              value={first}
                              onChange={handleFirst}
                            ></input>
                          </div>
                          <div>
                            <h4>Last Name:</h4>
                            <input
                              placeholder="Last Name Here"
                              value={last}
                              onChange={handleLast}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </thead>
                    <thead className={styles.theadbtm}>
                      <tr className={styles.secondrow}>
                        <td>
                          <div>
                            <h4>Email:</h4>
                            <input
                              placeholder="Email Here"
                              value={email}
                              onChange={handleEmail}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    </thead>
                  </table>
                </fieldset>
                <div className={styles.feedback}>
                  <div className={styles.feedback__warnings}>
                    <p style={{ color: "red" }}>{firstWarning}</p>
                    <p style={{ color: "red" }}>{lastWarning}</p>
                    <p style={{ color: "red" }}>{emailWarning}</p>
                  </div>
                  <div className={styles.feedback__buttonwrapper}>
                    {!hasWarnings && (
                      <button className={styles.feedback__button}>
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <a href="/about">
          <span>
            <Image src={arrow} className={styles.arrow} alt="uparrow" />
          </span>
        </a>
      </main>
    </>
  );
}
