import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/Layout";
import Image from "next/image";

const Home: NextPage<{ title: string }> = ({ title }) => {
  return (
    <Layout title={title}>
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <Image alt={"logo"} src={"/images/hero.png"} layout={"fill"} />
        </div>
      </section>
      <section>
        <h3>Ready to Rumble</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </span>
        <div>
          <button>Get Started</button>
          <div>Watch video</div>
        </div>
      </section>
      <section>Why we stand out section</section>
      <section>About Us Section</section>
      <section>Popular Videos Section</section>
      <section>Meet Team Section</section>
      <section>Join our Foundation Section</section>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      title: "Home",
    },
  };
}
