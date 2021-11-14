import React, { useState } from "react";

import "./ChooseSubscription.css";
import SubscriptionCard from "./subscriptionCard/SubscriptionCard";
import PaymentArea from "./paymentArea/PaymentArea";

const ChooseSubscription = (props) => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  return (
    <div className="subscription-chooser">
      <div className="subscription-choose-content">
        <div className="subscription-chooser__title">Subscribe to a plan</div>
        <div className="subscription-chooser__cards">
          <SubscriptionCard
            isSelected={selectedPlan === "monthly" ? true : false}
            label="Monthly"
            price="4.95"
            billed="monthly"
            setSelected={setSelectedPlan}
          />
          <SubscriptionCard
            isSelected={selectedPlan === "yearly" ? true : false}
            label="Yearly"
            price="50.00"
            billed="yearly"
            setSelected={setSelectedPlan}
          />
        </div>
        <div className="subscription-choose__due-dates">
          <div className="due-date">
            Total Due Today <div className="due-date__price">$0.00</div>
          </div>
          <div className="due-date">
            First Payment: 11/14/2021{" "}
            <div className="due-date__price">$50.00</div>
          </div>
        </div>
        <div className="subscription-chooser__payment-section">
          <PaymentArea />
        </div>
        <div className="subscription-chooser__submit-button-container">
          <button className="submit-button">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseSubscription;
