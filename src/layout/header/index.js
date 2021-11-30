import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import Logo from "@/components/logo";
import MainMenu from "@/components/menu/mainMenu";
import SideBarMenu from "@/components/menu/sidebarMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".header-area");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = ({}) => {
    setScroll(window.scrollY);
  };
  return (
    <Fragment>
      <header className={`header-area ${scroll > headerTop ? "sticky" : ""}`}>
        <div className="container-fluid">
          <div className="header-content">
            <div className="header-logo">
              <Logo image="/img/logo.png" />
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <MainMenu />
            </div>
            <div className="hamburger-menu">
              <button className="btn-menu" onClick={handleShow}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <SideBarMenu show={show} handleClose={handleClose} />
    </Fragment>
  );
};

Header.propTypes = {
  classOption: PropTypes.string,
};

Header.defaultProps = {
  classOption: "header-area header-default sticky-header",
};

export default Header;
