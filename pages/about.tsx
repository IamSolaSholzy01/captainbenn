import Layout from "../layouts/Layout";
import { NextPage } from "next";
import styles from "../styles/about.module.css";
import Flex from "../components/Flex";
import Link from "next/link";
import Image from "next/image";

const About: NextPage<{ title: string }> = ({ title }) => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <section className={styles.welcomeSection}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"between"}
          >
            <div>
              <h3>Who We Are</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
            <blockquote>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              "Football is like life. It requires perseverance, self-denial,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              hard work, sacrifice, dedication, and respect for authority." –
              Vince Lombardi
            </blockquote>
          </Flex>
          <h3>Gallery</h3>
          Another set of images
        </section>
        <section className={styles.whatWeDoSection}>
          <Flex
            direction={"row"}
            justifyContent={"between"}
            alignItems={"center"}
          >
            <h5>What we do</h5>
            <Link href={"/about"}>
              <div className={styles.link}>
                <span>View All</span>
              </div>
            </Link>
          </Flex>
          <Flex direction={"row"} alignItems={"center"}>
            <Flex direction={"column"}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet
              </p>
            </Flex>
            <div className={styles.imageContainer}>
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"end"}
              >
                <Image
                  src={"/images/friends.png"}
                  alt={"lineup"}
                  height={"400px"}
                  width={"400px"}
                />
              </Flex>
            </div>
          </Flex>
          <Flex direction={"row"} alignItems={"center"}>
            <div className={styles.altImageContainer}>
              <Flex
                direction={"row"}
                alignItems={"center"}
                justifyContent={"start"}
              >
                <Image
                  src={"/images/post.png"}
                  alt={"lineup"}
                  height={"400px"}
                  width={"400px"}
                />
              </Flex>
            </div>
            <Flex
              direction={"column"}
              justifyContent={"end"}
              alignItems={"end"}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet
              </p>
            </Flex>
          </Flex>
        </section>
        <section className={styles.valuesSection}>
          <h3>Our Values</h3> Hardwork Consistency Sportsmanship
        </section>
        <section className={styles.teamSection}>
          <Flex
            direction={"row"}
            justifyContent={"between"}
            alignItems={"center"}
          >
            <h5>Watch our past Videos</h5>
            <Link href={"/about"}>
              <div className={styles.link}>
                <span>View All</span>
              </div>
            </Link>
          </Flex>
          <div>Videos will go here</div>
        </section>
      </div>
    </Layout>
  );
};

export default About;

export async function getStaticProps() {
  return {
    props: {
      title: "About",
    },
  };
}
