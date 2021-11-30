import PropTypes from "prop-types";
import Link from "next/link";

const BannerCard = ({ data }) => {
  return (
    <div
      className="intro-section"
      style={{
        backgroundImage: `url(${data.url})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slider-content">
              <p className="text animated delay1">
                Feel the difference with us
              </p>
              <h2
                className="title animated delay2"
                dangerouslySetInnerHTML={{
                  __html:
                    "Sell your Products Online <span class='d-block'>With best services</span>",
                }}
              />
              <Link href={process.env.PUBLIC_URL + "/"}>
                <a className="btn btn-danger me-3 animated delay1">
                  Membership Plan
                </a>
              </Link>
              <Link href={process.env.PUBLIC_URL + "/"}>
                <a className="btn btn-outline-secondary animated delay2">
                  Our Services
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerCard.propTypes = {
  data: PropTypes.object,
};

export default BannerCard;
