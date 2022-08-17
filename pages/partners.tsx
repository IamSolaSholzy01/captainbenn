import Layout from "../layouts/Layout";
import { NextPage } from "next";
import styles from "../styles/partners.module.css";
import Link from "next/link";
import { PrimaryButton } from "../components/Buttons";

const Partners: NextPage<{ title: string }> = ({ title }) => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <section className={styles.mindsSection}>
          <h2>
            Meet the minds behind the Captain Benn Hirsch Football Foundation.
          </h2>
        </section>
        <section className={styles.visionSection}>
          <h4>Our Vision</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
          <div>Images</div>
          <Link href={"/about"}>
            <div className={styles.link}>
              <span>View All Images</span>
            </div>
          </Link>
          <div className={styles.padding}></div>
        </section>
        <section className={styles.pioneerSection}>
          <h5>Meet the pioneers</h5>
          <div>Pictures of pioneers</div>
          <PrimaryButton text={"Click to start your application"} />
        </section>
      </div>
    </Layout>
  );
};

export default Partners;

export async function getStaticProps() {
  return {
    props: {
      title: "Partners",
    },
  };
}
