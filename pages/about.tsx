import Layout from "../layouts/Layout";
import { NextPage } from "next";
import Link from "next/link";

const About: NextPage<{ title: string }> = ({ title }) => {
  return (
    <Layout title={title}>
      About
      <Link href={"/"}>Home</Link>
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
