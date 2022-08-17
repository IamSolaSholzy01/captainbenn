import Layout from "../layouts/Layout";
import { NextPage } from "next";
import Script from "next/script";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../components/Buttons";
import Flex from "../components/Flex";

const Contact: NextPage<{ title: string }> = ({ title }) => {
  return (
    <>
    <Script
      src="https://www.google.com/recaptcha/api.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
    <Layout title={title}>
      <div className={styles.container}>
        <section className={styles.helpSection}>
          <h2>How can we help?</h2>
          <p>Send us a message</p>
        </section>
        <form id="contact-form" className={styles.contactFormSection}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.left} htmlFor="lastName">Last Name</label>
              <input className={styles.left} type="text" name="lastName" id="lastName" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.left} htmlFor="phoneNumber">Phone Number</label>
              <input className={styles.left} type="text" name="phoneNumber" id="phoneNumber" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="20"></textarea>
          </div>
          <div className={styles.recaptcha}>
            <div className="g-recaptcha" data-sitekey="your_site_key"></div>
          </div>
          <button type="submit">Submit</button>
        </form>
        <section className={styles.foundationSection}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"between"}
          >
            <div>
              <h3>Join our Foundation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet
              </p>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet
              </p>
              <PrimaryButton text={"Get Started"} />
            </div>
            <div className={styles.imageContainer}>
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"end"}
              >
                <Image
                  src={"/images/teamLineUp.png"}
                  alt={"lineup"}
                  height={"500px"}
                  width={"500px"}
                />
              </Flex>
            </div>
          </Flex>
        </section>
      </div>
      {/* <Link href={"/"}>Home</Link> */}
    </Layout>
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  return {
    props: {
      title: "Contact",
    },
  };
}
