import React from "react";
import "./SubscriptionCard.css";

const SubscriptionCard = ({ isSelected, label, price, billed }) => {
  return (
    <div className={`subscription-card  ${isSelected && "selected"}`}>
      <div className="subscription-card__label">{label}</div>
      <div className="subscription-card__billing-info">
        <div className="subscription-card__price">${price}</div>
        <div className="subscription-card__billing-description">
          Billed {billed}
        </div>
      </div>
      <div className={`subscription-card__button  ${isSelected && "selected"}`}>
        {isSelected ? "Selected" : "Select"}
      </div>
    </div>
  );
};

export default SubscriptionCard;
