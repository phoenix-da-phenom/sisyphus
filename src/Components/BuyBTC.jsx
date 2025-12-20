import React from "react";
import BuySellTab from "./BuySellTab";
import TextBox from "./TextBox";
import BuyBTCButton from "./BuyBTCButton";
import HorizontalRule from "./HorizontalRule";

export default function BuyBTC() {
  return (
    <div className="order-book__container">
      <BuySellTab />
      <div className="options">
        <div>
          <div>
            <span className="active">Limit</span>
          </div>
          <div>
            <span>Market</span>
          </div>
          <div>
            <span>Stop-Limit</span>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <TextBox placeHolder={"Limit Price"} />
        <TextBox placeHolder={"Amount"} />
        <TextBox placeHolder={"Type "} />
      </div>
      <div style={{ padding: "20px 0px", fontSize: "12px", color: "#A7B1BC" }}>
        <input type="checkbox" /> <label>Post only</label>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#A7B1BC",
          paddingBottom: "10px",
        }}
      >
        <p>Total</p>
        <p>0.00</p>
      </div>
      <div>
        <BuyBTCButton />
      </div>
      <div style={{ padding: "15px 5px" }}>
        <HorizontalRule />
      </div>

      <section className="buy-BTC-total">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "5px",
            }}
          >
            <p style={{ fontSize: "12px" }}>Total account value</p>
            <p style={{ fontSize: "12px" }}>NGN</p>
          </div>

          <h4 style={{ color: "var(--primary-Angel-White)" }}>0.00</h4>

          <div
            style={{
              padding: "10px 0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <p style={{ fontSize: "12px" }}>Open Orders</p>
              <h4 style={{ color: "white" }}>0.00</h4>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <p style={{ fontSize: "12px" }}>Available</p>
              <h4>0.00</h4>
            </div>
          </div>
        </div>

        <div style={{ padding: "20px 0px 50px 0px" }}>
          <button
            style={{
              padding: "10px",
              background: "#2764FF",
              borderRadius: "8px",
              border: "0px",
              color: "var(--Primary-Angel-White)",
              width: "80px",
              height: "40px",
              cursor: "pointer",
            }}
          >
            Deposit
          </button>
        </div>
      </section>
    </div>
  );
}
