import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = ({ page }) => {
  const [optSmModal, setOptSmModal] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);

  const FooterCredits = () => {
    const footerCreditsLinks = [
      {
        name: "Izabela",
        link: "https://www.linkedin.com/in/izabela-koz%C5%82owska-1b1b3a1b9/",
      },
      {
        name: "Rami",
        link: "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
      },
      {
        name: "Thilina",
        link: "https://www.linkedin.com/in/thilina-priyalal-punchi-hewage-57235a226/",
      },
    ];

    return (
      <p className="text-reset fw-bold">
        {page} page by{" "}
        <a href="https://www.linkedin.com/in/rami-al-saadi-16a14223a/">
          {" "}
          Rami Al-Saadi{" "}
        </a>{" "}
        2022-{new Date().getFullYear()} &copy;
        <br />
        Project by{" "}
        {footerCreditsLinks.map((link, index) => (
          <a key={index} href={link.link} target="_blank" rel="noreferrer">
            {link.name}
            {index < footerCreditsLinks.length - 2
              ? ", "
              : index === footerCreditsLinks.length - 2
              ? ", and "
              : ""}
          </a>
        ))}
      </p>
    );
  };

  const pageLinks = [
    {
      name: "IRT Online Restaurant",
      link: "/restaurant",
    },
    {
      name: "Our E-Shop",
      link: "/eshop",
    },
    {
      name: "The Records Store",
      link: "/records",
    },
    {
      name: "Main Entrance",
      link: "/",
    },
  ];

  const socialIconsLinks = [
    {
      name: "facebook-f",
      link: "https://www.facebook.com/",
    },
    {
      name: "twitter",
      link: "https://twitter.com/",
    },
    {
      name: "google",
      link: "https://www.google.com/",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
    },
    {
      name: "github",
      link: "https://github.com/Rami24t",
    },
  ];

  const useFullLinks = [
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Contact Us",
      link: "#contact",
    },
    {
      name: "Terms of Use",
      link: "#terms",
    },
    {
      name: "Privacy Policy",
      link: "#privacy",
    },
  ];

  return (
    <footer>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            {socialIconsLinks.map((link) => (
              <a
                href={link.link}
                key={link.name}
                target="_blank"
                rel="noreferrer"
                className="me-4 text-reset"
              >
                <MDBIcon color="secondary" fab icon={link.name} />
              </a>
            ))}
          </div>
        </section>

        <section>
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  IRT E-Mall
                </h6>
                <p> A React.js Webdevelopment Project.</p>
                <FooterCredits />
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  E-Stores open now
                </h6>
                {pageLinks.map((link, index) => (
                  <p key={index}>
                    <Link to={link.link} className="text-reset">
                      {link.name}
                    </Link>
                  </p>
                ))}
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                {useFullLinks.map((link, index) => (
                  <p key={index}>
                    <Link to={link.link} className="text-reset">
                      {link.name}
                    </Link>
                  </p>
                ))}
              </MDBCol>

              <MDBCol
                onClick={toggleShow}
                md="4"
                lg="3"
                xl="3"
                className="mx-auto mb-md-0 mb-4"
              >
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Germany ...
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />{" "}
                  ...
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  49 ...
                </p>
                <p>
                  <MDBIcon color="secondary" icon="print" className="me-3" /> +
                  49 ...
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          onClick={toggleShow}
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <FooterCredits />
          {/* <p className='text-reset fw-bold'>
          Rami Al-Saadi
        </p> */}
        </div>

        <Modal
          page={page}
          optSmModal={optSmModal}
          toggleShow={toggleShow}
          setOptSmModal={setOptSmModal}
          children=<FooterCredits />
        />
      </MDBFooter>
    </footer>
  );
};

export default Footer;
