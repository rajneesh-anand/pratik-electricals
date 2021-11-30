import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="widget-item-nav">
            <div className="widget-footer-nav">
              <nav>
                <ul>
                  <li>
                    <Link href={process.env.PUBLIC_URL + "/termsofuse"}>
                      <a target="_blank">Terms &amp; Service</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.PUBLIC_URL + "/privacypolicy"}>
                      <a target="_blank">Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={process.env.PUBLIC_URL + "/contact"}>
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="widget-item-social">
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
      </div>
    </footer>
  );
};

export default Footer;
