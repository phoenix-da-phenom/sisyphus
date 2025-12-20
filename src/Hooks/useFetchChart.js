import { useEffect, useRef, useState } from "react";
import { createChart } from "lightweight-charts";

export function useFetchChart({ coinId, days, containerRef }) {
    const chartRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async() => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`, {
                        headers: {
                            'x-cg-demo-api-key': 'CG-WSLkmexpjkQGXzWUXSZCJQpJ'
                        }
                    }
                );


                if (!response.ok) throw new Error("Fetch failed");

                const apiData = await response.json();
                console.log(apiData)

                const formattedData = apiData.map(item => ({
                    time: item[0] / 1000,
                    open: item[1],
                    high: item[2],
                    low: item[3],
                    close: item[4],
                }));

                console.log("container ref is : " + containerRef)

                // ⏳ wait until DOM ref exists
                if (!containerRef.current || !isMounted) return;

                // cleanup old chart
                if (chartRef.current) {
                    chartRef.current.remove();
                    chartRef.current = null;
                }

                const chart = createChart(containerRef.current, {
                    width: containerRef.current.clientWidth,
                    height: 500,

                    layout: {
                        background: { color: "#0f172a" }, // slate-900
                        textColor: "#e5e7eb", // gray-200
                    },

                    grid: {
                        vertLines: { color: "rgba(11, 202, 27, 0.05)" },
                        horzLines: { color: "rgba(27, 94, 7, 0.05)" },
                    },

                    crosshair: {
                        mode: 1,
                        vertLine: {
                            color: "#379c37ff",
                            width: 1,
                            style: 3,
                        },
                        horzLine: {
                            color: "#94a3b8",
                            width: 1,
                            style: 3,
                        },
                    },

                    rightPriceScale: {
                        borderColor: "rgba(255,255,255,0.1)",
                    },

                    timeScale: {
                        borderColor: "rgba(255,255,255,0.1)",
                    },
                });
                const candleSeries = chart.addCandlestickSeries({
                    upColor: "#22c55e", // green
                    downColor: "#ef4444", // red
                    borderUpColor: "#22c55e",
                    borderDownColor: "#ef4444",
                    wickUpColor: "#22c55e",
                    wickDownColor: "#ef4444",
                });

                // chart.addCandlestickSeries().setData(formattedData);
                candleSeries.setData(formattedData);
                chartRef.current = chart;


            } catch (err) {
                if (isMounted) setError(err.message);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
            if (chartRef.current) {
                chartRef.current.remove();
                chartRef.current = null;
            }
        };
    }, [coinId, days]);

    return { loading, error };
}