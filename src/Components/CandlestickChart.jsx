import React, { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, CrosshairMode } from 'lightweight-charts';

const CandlestickChart = ({ coinId = 'bitcoin', days = 30 }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const candleSeriesRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`,
          {
            headers: {
              'x-cg-demo-api-key': 'CG-WSLkmexpjkQGXzWUXSZCJQpJ'
            }
          }
        );
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const apiData = await response.json();
        
        // Convert API data to the format expected by Lightweight Charts
        const formattedData = apiData.map(item => ({
          time: item[0] / 1000, // Convert milliseconds to seconds
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4]
        }));

        initializeChart(formattedData);
      } catch (err) {
        setError(err.message);
        console.error('API fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    const initializeChart = (data) => {
      if (!chartContainerRef.current || !data || data.length === 0) return;

      try {
        // Initialize chart
        chartRef.current = createChart(chartContainerRef.current, {
          layout: {
            background: { type: ColorType.Solid, color: '#1C2127' },
            textColor: '#A7B1BC',
          },
          grid: {
            vertLines: { color: '#262932' },
            horzLines: { color: '#262932' },
          },
          crosshair: {
            mode: CrosshairMode.Normal,
          },
          rightPriceScale: {
            borderColor: '#262932',
          },
          timeScale: {
            borderColor: '#262932',
            timeVisible: true,
          },
          width: chartContainerRef.current.clientWidth,
          height: 500,
        });

        // Add candlestick series
        candleSeriesRef.current = chartRef.current.addCandlestickSeries({
          upColor: '#00C076',
          downColor: '#FF6838',
          borderDownColor: '#FF6838',
          borderUpColor: '#00C076',
          wickDownColor: '#FF6838',
          wickUpColor: '#00C076',
        });

        // Set data
        candleSeriesRef.current.setData(data);

        // Handle resize
        const handleResize = () => {
          chartRef.current.applyOptions({ 
            width: chartContainerRef.current.clientWidth 
          });
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (chartRef.current) {
            chartRef.current.remove();
            chartRef.current = null;
          }
        };
      } catch (err) {
        setError(err.message);
        console.error('Chart initialization error:', err);
      }
    };

    fetchData();
  }, [coinId, days]);

  if (loading) {
    return <div style={{ color: '#A7B1BC', textAlign: 'center', padding: '20px' }}>Loading chart data...</div>;
  }

  if (error) {
    return <div style={{ color: '#FF6838' }}>Error loading chart: {error}</div>;
  }

  return (
    <div 
      ref={chartContainerRef} 
      style={{ 
        width: '100%', 
        height: '500px',
        backgroundColor: '#1C2127',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    />
  );
};

export default CandlestickChart;