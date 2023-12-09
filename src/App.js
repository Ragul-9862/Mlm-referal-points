import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const MLMComponent = () => {
  const [referralPoints, setReferralPoints] = useState({
    A: 0,
    B: 0,
  });

  const handleJoin = (referralPerson) => {
    if (referralPerson === "B") {
      setReferralPoints((prevPoints) => ({
        ...prevPoints,
        A: prevPoints.A + 10,
      }));
    } else if (referralPerson === "C") {
      setReferralPoints((prevPoints) => ({
        ...prevPoints,
        A: prevPoints.A + 20,
        B: prevPoints.B + 10,
      }));
    }
  };

  const handleDismiss = () => {
    setReferralPoints((prevPoints) => ({
      ...prevPoints,
      A: Math.max(prevPoints.A - 8, 0),
      B: Math.max(prevPoints.B - 7, 0),
    }));
  };

  const handleRejoin = () => {
    setReferralPoints((prevPoints) => ({
      ...prevPoints,
      A: prevPoints.A + 20,
      B: prevPoints.B + 10,
    }));
  };

  return (
    <div className="mlm-main">
      <div className="mlm-container">
        <h1 className="mlm-heading">MLM Referral Points</h1>
        <div className="mlm-person-points">
          <p>Person A Points: {referralPoints.A}</p>
          <p>Person B Points: {referralPoints.B}</p>
        </div>
        <div className="mlm-buttons">
          <button
            className="mlm-join-button btn btn-primary"
            onClick={() => handleJoin("B")}
          >
            Person B Join
          </button>
          <button
            className="mlm-join-button btn btn-primary"
            onClick={() => handleJoin("C")}
          >
            Person C Join
          </button>
          <button
            className="mlm-dismiss-button btn btn-danger"
            onClick={handleDismiss}
          >
            Dismiss Person C
          </button>
          <button
            className="mlm-join-button btn btn-primary"
            onClick={handleRejoin}
          >
            Person C Rejoin
          </button>
        </div>
      </div>
    </div>
  );
};

export default MLMComponent;
