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
            Close menu &nbsp;&nbsp;&nbsp;&nbsp;&#10005;
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
              <span className={styles.hr}></span>
            </li>
          ))}
        </ul>
        <div className={styles.mobileKeepTouch}>
          <span>Keep in touch</span>
          <div className={styles.mobileNavSocial}>
            <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg></Link>
            <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg></Link>
            <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg></Link>
          </div>
        </div>
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
    <header className={styles.mobile}>
      <div className={styles.headerNav}>
        {title === "Home" || <Logo />}
        <span className={styles.burger} onClick={() => setMobileNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </span>
      </div>
    </header>
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
    <div className={mobile ? styles.absolute : ""}>
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
    </div>
  );
};

export default Layout;
