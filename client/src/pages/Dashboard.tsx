import { Layout } from "@/components/layout/Layout";
import { useInvestments, useTransactions, useCurrentUser } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TrendingUp, DollarSign, PieChart, Activity } from "lucide-react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { data: user, isLoading: userLoading } = useCurrentUser();
  const { data: investments, isLoading: investmentsLoading } = useInvestments();
  const { data: transactions, isLoading: transactionsLoading } = useTransactions();
  const [, setLocation] = useLocation();

  if (!user && !userLoading) {
    setLocation("/login");
    return null;
  }

  const totalInvested = investments?.reduce((sum, inv) => sum + parseFloat(inv.amount), 0) || 0;
  const totalValue = investments?.reduce((sum, inv) => sum + parseFloat(inv.currentValue || inv.amount), 0) || 0;
  const totalReturn = totalValue - totalInvested;
  const returnPercentage = totalInvested > 0 ? ((totalReturn / totalInvested) * 100).toFixed(2) : "0.00";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary">Investor Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user?.fullName || user?.email}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Invested</span>
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            {investmentsLoading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold font-mono">${totalInvested.toLocaleString()}</div>
            )}
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Current Value</span>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            {investmentsLoading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold font-mono">${totalValue.toLocaleString()}</div>
            )}
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Return</span>
              <PieChart className="h-5 w-5 text-blue-600" />
            </div>
            {investmentsLoading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className={`text-2xl font-bold font-mono ${totalReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {totalReturn >= 0 ? '+' : ''}${totalReturn.toLocaleString()} ({returnPercentage}%)
              </div>
            )}
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Active Investments</span>
              <Activity className="h-5 w-5 text-purple-600" />
            </div>
            {investmentsLoading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold font-mono">{investments?.length || 0}</div>
            )}
          </Card>
        </div>

        {/* Investments Table */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">My Investments</h2>
          {investmentsLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ) : investments && investments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Strategy</th>
                    <th className="text-left py-3 px-4 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold">Current Value</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((inv) => (
                    <tr key={inv.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{inv.strategyId}</td>
                      <td className="py-3 px-4 font-mono">${parseFloat(inv.amount).toLocaleString()}</td>
                      <td className="py-3 px-4 font-mono">${parseFloat(inv.currentValue || inv.amount).toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${inv.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">
                        {new Date(inv.purchaseDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No investments yet. Start investing to see your portfolio.</p>
          )}
        </Card>

        {/* Recent Transactions */}
        <Card className="p-6">
          <h2 className="text-xl font-serif font-bold text-primary mb-4">Recent Transactions</h2>
          {transactionsLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          ) : transactions && transactions.length > 0 ? (
            <div className="space-y-3">
              {transactions.slice(0, 10).map((tx) => (
                <div key={tx.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${tx.type === 'deposit' ? 'bg-green-500' : tx.type === 'withdrawal' ? 'bg-red-500' : 'bg-blue-500'}`} />
                    <div>
                      <div className="font-medium capitalize">{tx.type}</div>
                      <div className="text-sm text-muted-foreground">{tx.description || 'No description'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold">${parseFloat(tx.amount).toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{new Date(tx.createdAt).toLocaleDateString()}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-muted-foreground">No transactions yet.</p>
          )}
        </Card>
      </div>
    </Layout>
  );
}
