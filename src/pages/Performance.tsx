import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Award, Target, BarChart3, Activity } from "lucide-react";

const Performance = () => {
  const performanceMetrics = [
    { title: "YTD Return", value: "24.8%", benchmark: "S&P 500: 12.4%", positive: true },
    { title: "1Y Return", value: "18.2%", benchmark: "Benchmark: 9.8%", positive: true },
    { title: "3Y Annualized", value: "15.7%", benchmark: "Market: 8.9%", positive: true },
    { title: "Max Drawdown", value: "-8.3%", benchmark: "Market: -12.1%", positive: true },
  ];

  const strategies = [
    { name: "Momentum Trading", return: "28.4%", sharpe: "1.89", trades: 87, winRate: "72%" },
    { name: "Mean Reversion", return: "15.7%", sharpe: "1.45", trades: 64, winRate: "68%" },
    { name: "Breakout Strategy", return: "22.1%", sharpe: "1.67", trades: 45, winRate: "64%" },
    { name: "Scalping", return: "8.9%", sharpe: "0.98", trades: 234, winRate: "58%" },
  ];

  const riskMetrics = [
    { metric: "Value at Risk (95%)", value: "$2,450", status: "normal" },
    { metric: "Expected Shortfall", value: "$3,780", status: "normal" },
    { metric: "Beta", value: "0.85", status: "good" },
    { metric: "Alpha", value: "12.4%", status: "excellent" },
    { metric: "Information Ratio", value: "1.23", status: "good" },
    { metric: "Tracking Error", value: "8.7%", status: "normal" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold text-foreground">Performance Analysis</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Export Report</Button>
              <Badge variant="outline" className="w-fit">
                <Activity className="w-3 h-3 mr-1" />
                Live
              </Badge>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric) => (
              <Card key={metric.title} className="bg-card">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <p className={`text-2xl font-bold ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{metric.benchmark}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="strategies" className="space-y-4">
            <TabsList>
              <TabsTrigger value="strategies">Strategy Performance</TabsTrigger>
              <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
              <TabsTrigger value="attribution">Performance Attribution</TabsTrigger>
              <TabsTrigger value="backtest">Backtest Results</TabsTrigger>
            </TabsList>

            <TabsContent value="strategies" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Strategy Performance Comparison
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Strategy</th>
                          <th className="text-right py-2 px-4">Return</th>
                          <th className="text-right py-2 px-4">Sharpe Ratio</th>
                          <th className="text-right py-2 px-4">Trades</th>
                          <th className="text-right py-2 px-4">Win Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {strategies.map((strategy) => (
                          <tr key={strategy.name} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">{strategy.name}</td>
                            <td className="py-3 px-4 text-right">
                              <span className="text-green-500 font-semibold">{strategy.return}</span>
                            </td>
                            <td className="py-3 px-4 text-right">{strategy.sharpe}</td>
                            <td className="py-3 px-4 text-right">{strategy.trades}</td>
                            <td className="py-3 px-4 text-right">{strategy.winRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Metrics Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {riskMetrics.map((item) => (
                        <div key={item.metric} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{item.metric}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.value}</span>
                            <Badge 
                              variant={item.status === 'excellent' ? 'default' : 
                                     item.status === 'good' ? 'secondary' : 'outline'}
                              className="text-xs"
                            >
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Drawdown Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Current Drawdown</span>
                        <span className="text-red-500 font-medium">-2.1%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Max Drawdown (YTD)</span>
                        <span className="text-red-500 font-medium">-8.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Recovery Time</span>
                        <span className="font-medium">18 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Avg Drawdown</span>
                        <span className="text-red-500 font-medium">-3.7%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="attribution" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Attribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Sector Contribution</h4>
                      <div className="space-y-2">
                        {['Technology', 'Healthcare', 'Financial', 'Energy'].map((sector, index) => (
                          <div key={sector} className="flex justify-between items-center">
                            <span className="text-sm">{sector}</span>
                            <span className={index < 2 ? 'text-green-500' : 'text-red-500'}>
                              {index === 0 ? '+4.2%' : index === 1 ? '+2.8%' : index === 2 ? '-0.9%' : '-1.1%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Time Period Analysis</h4>
                      <div className="space-y-2">
                        {['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'].map((quarter, index) => (
                          <div key={quarter} className="flex justify-between items-center">
                            <span className="text-sm">{quarter}</span>
                            <span className="text-green-500">
                              {index === 0 ? '+6.2%' : index === 1 ? '+4.8%' : index === 2 ? '+7.1%' : '+6.7%'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="backtest" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Backtest Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Test Period</span>
                        <span className="font-medium">Jan 2020 - Dec 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Return</span>
                        <span className="text-green-500 font-medium">127.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Annualized Return</span>
                        <span className="text-green-500 font-medium">22.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Win Rate</span>
                        <span className="font-medium">64.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Profit Factor</span>
                        <span className="font-medium">1.89</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Strategy Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <p className="text-sm font-medium">Recommended Adjustment</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Increase position sizing on momentum signals by 15% based on historical performance
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <p className="text-sm font-medium">Risk Management</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Consider tighter stop-losses during high volatility periods
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Performance;