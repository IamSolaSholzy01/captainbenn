import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import { HomeButton } from "../components/Buttons";
import Logo from "../components/Logo";
import FooterLogo from "../components/FooterLogo";

const pages = [
  { label: "Home", to: "/", id: "home" },
  { label: "About", to: "/about", id: "about" },
  { label: "Videos", to: "/about", id: "videos" },
  { label: "Partners", to: "/partners", id: "partners" },
  { label: "Contact", to: "/contact", id: "contact" },
];

const footerLinks = [
  {
    header: "Company",
    id: "company",
    subs: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Videos", to: "/" },
      { label: "Partners", to: "/" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    header: "About Us",
    id: "aboutUs",
    subs: [
      { label: "Careers", to: "/" },
      { label: "Press and News", to: "/" },
      { label: "Partnership", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
    ],
  },
  {
    header: "Contact",
    id: "contact",
    subs: [
      { label: "Get Connected with" },
      { label: "Facebook", to: "/about" },
      { label: "Twitter", to: "/" },
      { label: "Instagram", to: "/" },
      { label: "LinkedIn", to: "/" },
    ],
  },
];

const DesktopHeader: ({ title }: { title: string }) => JSX.Element = ({
  title,
}) => (
  <header className={styles.homeHeader}>
    <nav className={styles.homeNav}>
      {title === "Home" || <Logo />}
      <ul>
        {pages.map((page) => (
          <li
            className={title == page.label ? styles.active : ""}
            key={page.id}
          >
            <Link href={page.to}>{page.label}</Link>
          </li>
        ))}
      </ul>
      <HomeButton />
    </nav>
  </header>
);
const DesktopFooter: ({}: {}) => JSX.Element = () => (
  <footer className={styles.footer}>
    <div className={styles.subscription}>
      <h1>Subscribe to our newsletter</h1>
      <h4>
        Stay up to date with the latest football trends straight to your inbox.
      </h4>
      <form className={styles.subscriptionForm}>
        <div className={styles.formGroup}>
          <input placeholder={"Enter your email address"} type="email" />
          <button>Subscribe</button>
        </div>
      </form>
    </div>
    <div className={styles.footerLinks}>
      <div className={styles.footerLogoContainer}>
        <FooterLogo />
      </div>
      <div className={styles.footerLinksContainer}>
        {footerLinks.map((link) => (
          <div key={link.id}>
            <h4>{link.header}</h4>
            <ul>
              {link.subs.map((l, index) => (
                <li key={index}>
                  {l.to && <Link href={l.to}>{l.label}</Link>}
                  {!l.to && <span>{l.label}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.rights}>
      2022. Captain Ben Hirsch Football Foundation. All Rights Reserved.
    </div>
  </footer>
);

const MobileNav: ({
  show,
  setShow,
  title,
}: {
  show: boolean;
  setShow: any;
  title: string;
}) => JSX.Element = ({ show, setShow, title }) => (
  <>
    {show && (
      <nav className={styles.mobileNav}>
        <div className={styles.closeNav}>
          <span onClick={() => setShow(false)}>
            Close menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#10005;
          </span>
        </div>
        <ul>
          {pages.map((page) => (
            <li
              className={title == page.label ? styles.active : ""}
              key={page.id}
            >
              <Link style={{ marginBottom: "14px" }} href={page.to}>
                {page.label}
              </Link>
              <hr />
            </li>
          ))}
        </ul>
      </nav>
    )}
  </>
);

const MobileHeader: ({ title }: { title: string }) => JSX.Element = ({
  title,
}) => {
  const [showMobileNav, setMobileNav] = React.useState(false);
  return (
    <>
      <MobileNav show={showMobileNav} setShow={setMobileNav} title={title} />
      <span onClick={() => setMobileNav(true)}>burger</span>
    </>
  );
};

const MobileFooter: ({}: {}) => JSX.Element = () => (
  <footer>
    <div className={styles.subscription}>
      <h1>Subscribe to our newsletter</h1>
      <h4>
        Stay up to date with the latest football trends straight to your inbox.
      </h4>
      <form className={styles.subscriptionForm}>
        <div className={styles.formGroup}>
          <input placeholder={"Enter your email address"} type="email" />
          <button>Subscribe</button>
        </div>
      </form>
    </div>
    <div className={styles.mobileFooterLinks}>
      <div className={styles.mobileFooterLogoContainer}>
        <FooterLogo />
      </div>
      <div className={styles.mobileFooterLinksContainer}>
        {footerLinks.map((link) => (
          <div key={link.id}>
            <h4>{link.header}</h4>
            <ul>
              {link.subs.map((l, index) => (
                <li key={index}>
                  {l.to && <Link href={l.to}>{l.label}</Link>}
                  {!l.to && <span>{l.label}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.rights}>
      2022. Captain Ben Hirsch Football Foundation. All Rights Reserved.
    </div>
  </footer>
);
const Layout: NextPage<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  const mobile = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <Head>
        <title>{title + " - Captain Ben Hirsch Foundation"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {mobile && <MobileHeader title={title} />}
      {!mobile && <DesktopHeader title={title} />}

      <main className={styles.main}>{children}</main>

      {mobile && <MobileFooter />}
      {mobile || <DesktopFooter />}
    </>
  );
};

export default Layout;
