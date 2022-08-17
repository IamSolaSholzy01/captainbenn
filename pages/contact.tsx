import Layout from "../layouts/Layout";
import { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage<{ title: string }> = ({ title }) => {
  return (
    <Layout title={title}>
      Contact
      <Link href={"/"}>Home</Link>
    </Layout>
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
