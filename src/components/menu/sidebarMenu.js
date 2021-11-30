import React from "react";
import Link from "@/utils/activeLink";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import Offcanvas from "react-bootstrap/Offcanvas";

const SideMenu = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="start"
      style={{ width: "320px" }}
    >
      <OffcanvasHeader>
        <OffcanvasTitle style={{ width: "100%" }}>
          Pratik Electricals
        </OffcanvasTitle>
      </OffcanvasHeader>

      <OffcanvasBody>
        <nav>
          <ul className="aside-menu">
            <li>
              <Link href="/spirituality" activeClassName="active">
                <a className="main-menu-link">Spirituality</a>
              </Link>
            </li>
            <li>
              <Link href="/meditation" activeClassName="active">
                <a className="main-menu-link">Meditation</a>
              </Link>
            </li>
            <li>
              <Link href="/yoga" activeClassName="active">
                <a className="main-menu-link">Yoga</a>
              </Link>
            </li>
            <li>
              <Link href="/shop" activeClassName="active">
                <a className="main-menu-link">Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/query" activeClassName="active">
                <a className="main-menu-link">Send Us Query ?</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="aside-footer-area">
          <div className="article-share">
            <ul className="social">
              <li>
                <span>Follow Us </span>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="facebook"
                  target="_blank"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="twitter"
                  target="_blank"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  className="linkedin"
                  target="_blank"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="instagram"
                  target="_blank"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default SideMenu;
