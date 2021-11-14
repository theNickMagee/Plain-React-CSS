import React from "react";

import "./PaymentArea.css";
const PaymentArea = (props) => {
  return (
    <div className="payment-area">
      <div className="payment-area__card-area">
        <label className="payment-area__label" for="ccn">
          CARD NUMBER
        </label>
        <input
          id="ccn"
          type="tel"
          inputmode="numeric"
          pattern="[0-9\s]{13,19}"
          autocomplete="cc-number"
          maxlength="19"
          placeholder=""
        />
      </div>
      <div className="payment-area__card-details">
        <div className="expiration" id="experation">
          <label className="payment-area__label">EXPIRATION</label>
          <div
            className="detail-input payment-details__input"
            id="expiration-inputs"
          >
            <input
              type="text"
              name="month"
              placeholder="MM"
              maxlength="2"
              size="2"
              className="expiration-input-field"
            />
            <span>/</span>
            <input
              type="text"
              name="year"
              placeholder="YY"
              maxlength="2"
              size="2"
              className="expiration-input-field"
            />
          </div>
        </div>
        <div className=" cvc" id="cvc">
          <label className="payment-area__label " for="cvc">
            CVC
          </label>
          <div className="detail-input">
            <input
              type="text"
              name="cvc"
              placeholder=""
              maxlength="3"
              size="3"
              className="payment-details__input"
            />
          </div>
        </div>
        <div className="zip-code" id="zip-code">
          <label className="payment-area__label" for="zip-code">
            ZIP CODE
          </label>
          <div className="detail-input ">
            <input
              type="text"
              name="zip code"
              placeholder=""
              maxlength="5"
              size="5"
              className="payment-details__input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentArea;
