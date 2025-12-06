import { Button } from "@/components/ui/button";
import { RefreshCw, TrendingUp, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DemoActionsProps {
  onBuy: (amount: number, asset: "realEstate" | "crypto") => boolean;
  onReset: () => void;
}

export function DemoActions({ onBuy, onReset }: DemoActionsProps) {
  const { toast } = useToast();

  const handleBuy = () => {
    const success = onBuy(5000, "realEstate");
    if (success) {
      toast({
        title: "Order Executed",
        description: "Purchased $5,000 of Real Estate Allocation",
      });
    } else {
      toast({
        title: "Insufficient Funds",
        description: "Not enough cash balance for this trade.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Simulator Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        <Button onClick={handleBuy} className="bg-green-600 hover:bg-green-700 text-white">
          <TrendingUp className="mr-2 h-4 w-4" /> Simulate Buy
        </Button>
        <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
          <TrendingDown className="mr-2 h-4 w-4" /> Simulate Sell
        </Button>
      </div>
      <Button variant="ghost" onClick={onReset} className="w-full text-muted-foreground hover:text-primary">
        <RefreshCw className="mr-2 h-4 w-4" /> Reset Demo Account
      </Button>
    </div>
  );
}
