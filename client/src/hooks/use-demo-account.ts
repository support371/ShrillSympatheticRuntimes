import { useState, useEffect } from "react";

export interface DemoAccountState {
  balance: number;
  strategy: string;
  holdings: {
    cash: number;
    realEstate: number;
    crypto: number;
  };
  transactions: Array<{
    id: string;
    type: "buy" | "sell" | "rebalance";
    amount: number;
    date: string;
    asset: string;
  }>;
}

const DEFAULT_STATE: DemoAccountState = {
  balance: 100000,
  strategy: "Balanced Growth",
  holdings: {
    cash: 100000,
    realEstate: 0,
    crypto: 0,
  },
  transactions: [],
};

export function useDemoAccount() {
  const [account, setAccount] = useState<DemoAccountState>(DEFAULT_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("demo_account_v1");
    if (stored) {
      try {
        setAccount(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse demo account", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("demo_account_v1", JSON.stringify(account));
    }
  }, [account, isLoaded]);

  const simulateBuy = (amount: number, asset: "realEstate" | "crypto") => {
    if (amount > account.holdings.cash) return false;
    
    setAccount(prev => ({
      ...prev,
      holdings: {
        ...prev.holdings,
        cash: prev.holdings.cash - amount,
        [asset]: prev.holdings[asset] + amount
      },
      transactions: [
        {
          id: Math.random().toString(36).substr(2, 9),
          type: "buy",
          amount,
          date: new Date().toISOString(),
          asset
        },
        ...prev.transactions
      ]
    }));
    return true;
  };

  const resetDemo = () => {
    setAccount(DEFAULT_STATE);
  };

  return {
    account,
    simulateBuy,
    resetDemo,
    isLoaded
  };
}
