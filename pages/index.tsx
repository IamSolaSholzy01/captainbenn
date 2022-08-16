import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/Layout";
import Image from "next/image";
import { PrimaryButton } from "../components/Buttons";
import Flex from "../components/Flex";

const Home: NextPage<{ title: string }> = ({ title }) => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.hero}>
            <Image alt={"logo"} src={"/images/hero.png"} layout={"fill"} />
          </div>
        </section>
        <section className={styles.rumbleSection}>
          <h3>Ready to Rumble</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div>
            <PrimaryButton text={"Get Started"} />
            <div>
              <span>Watch video</span>
              <div>
                <div className={styles.playContainer}>
                  <div className={styles.iconHolder}>
                    <svg
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 8.37117V5.2904C1 1.47117 3.35 -0.0980565 6.22 1.81733L8.53 3.36348L10.84 4.90964C13.71 6.82502 13.71 9.95194 10.84 11.8673L8.53 13.4135L6.22 14.9596C3.35 16.8404 1 15.2827 1 11.4519V8.37117Z"
                        fill="#0A3D04"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.standOutSection}>
          <h5>Why we stand out</h5>
          <Flex direction={"row"} justifyContent={"around"}>
            <Flex direction={"column"} alignItems={"center"}>
              <h4>50+</h4>
              <span>Videos</span>
            </Flex>
            <Flex direction={"column"} alignItems={"center"}>
              <h4>120+</h4>
              <span>Partners</span>
            </Flex>
            <Flex direction={"column"} alignItems={"center"}>
              <h4>20+</h4>
              <span>Players</span>
            </Flex>
          </Flex>
        </section>
        <section>About Us Section</section>
        <section>Popular Videos Section</section>
        <section>Meet Team Section</section>
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
