import { useEffect, useRef, memo } from "react";

interface TradingViewChartProps {
  symbol?: string;
  theme?: "light" | "dark";
}

function TradingViewChartComponent({ symbol = "BTCUSD", theme = "light" }: TradingViewChartProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "width": "100%",
          "height": "100%",
          "symbol": `COINBASE:${symbol}`,
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": theme,
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": container.current?.id
        });
      }
    };
    container.current.appendChild(script);
  }, [symbol, theme]);

  return (
    <div id={`tv-chart-${Math.random().toString(36).substr(2, 9)}`} className="w-full h-full" ref={container} />
  );
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export const TradingViewChart = memo(TradingViewChartComponent);
