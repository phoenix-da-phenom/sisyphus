import React from "react";

export default function PriceText({
  top = 0,
  color = "#22c55e",
  overlayPercentage = 0,
}) {
  return (
    <div
      className="price-row"
      style={{
        marginTop: top,
      }}
    >
      {/* Overlay */}
      <div
        className="price-row__overlay"
        style={{
          width: `${overlayPercentage}%`,
          backgroundColor: color,
        }}
      />

      {/* Content */}
      <div className="price-row__cell price">36,920.12</div>
      <div className="price-row__cell">0.758965</div>
      <div className="price-row__cell">28,020.98</div>
    </div>
  );
}
