import React, { useRef } from "react";
import { useFetchChart } from "../Hooks/useFetchChart";

const CandlestickChart = ({ coinId = "bitcoin", days = 30 }) => {
  const chartContainerRef = useRef(null);

  const { loading, error } = useFetchChart({
    coinId,
    days,
    containerRef: chartContainerRef,
  });

  return (
    <div style={{ position: "relative", height: 500 }}>
      {/* Chart container MUST always exist */}
      <div ref={chartContainerRef} style={{ height: "100%", backgroundColor:'black' }} />

      {loading && (
        <div className="">
          Loading chart data...
        </div>
      )}

      {error && (
        <div className="">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default CandlestickChart;
