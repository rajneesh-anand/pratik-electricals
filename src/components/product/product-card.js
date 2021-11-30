import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Link from "next/link";

const ProductCard = ({ data }) => {
  return (
    <div className="product-card-details">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xl-4 pt-3">
          <img src={data.image.thumbnail} alt={data.name} />
        </div>
        <div className="col-md-8 col-sm-8 col-xl-8 pt-3">
          <div className="product-name">
            <h4>{data.name}</h4>
          </div>

          <div className="d-flex justify-content-center">
            <div className="row">
              {data.price.map((item, index) => (
                <div
                  key={index}
                  className="col-sm-auto col-6  text-center price-item"
                >
                  <h6>{item.range}</h6>
                  <h6>&#x20B9;{item.rate}</h6>
                </div>
              ))}
            </div>
          </div>

          <div className="product-description">
            <Table>
              <tbody>
                <tr>
                  <td>Minimum Quantity</td>
                  <td>100 Pcs</td>
                </tr>
                <tr>
                  <td>Dimensions (L x B x H) Cm</td>
                  <td>40 x 60 x 70 Cm</td>
                </tr>
                <tr>
                  <td>Weight (grams)</td>
                  <td>1000 Grams</td>
                </tr>
                <tr>
                  <td>Product Details</td>
                  <td> Grams</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="product-contact d-flex justify-content-center">
            <div className="row">
              <div className="col-sm-auto pt-3 text-center">
                <div className="mobile">
                  <i className="bx bx-phone-call"></i>
                  <span>Contact Us</span>
                  <h6>+91-98745312658</h6>
                </div>
              </div>
              <div className="col-sm-6 pt-3 text-center">
                <div className="address">
                  <i className="icofont-location-pin"></i>
                  <span>Address</span>
                  <p>
                    Plot No. 33/7 Gali No 3 Anand Parbat Industrial Area New
                    Delhi -110052 , India
                  </p>
                </div>
              </div>
              <div className="col-sm-auto pt-3 text-center">
                <div className="timing">
                  <i className="bx bx-time-five"></i>
                  <span>Office Hours</span>
                  <h6>09:00 A.M - 19:00 P.M</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <a className="default-btn">Send Your Query</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
};

export default ProductCard;
