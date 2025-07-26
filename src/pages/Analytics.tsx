import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, Activity, Target, BarChart3 } from "lucide-react";

const Analytics = () => {
  const stats = [
    { title: "Total P&L", value: "$12,450.80", change: "+8.2%", positive: true, icon: DollarSign },
    { title: "Win Rate", value: "68.5%", change: "+2.1%", positive: true, icon: Target },
    { title: "Total Trades", value: "147", change: "+12", positive: true, icon: Activity },
    { title: "Avg. Trade", value: "$84.70", change: "-$5.20", positive: false, icon: BarChart3 },
  ];

  const monthlyData = [
    { month: "Jan", profit: 2150, loss: -800 },
    { month: "Feb", profit: 1890, loss: -1200 },
    { month: "Mar", profit: 2950, loss: -650 },
    { month: "Apr", profit: 3200, loss: -900 },
    { month: "May", profit: 2800, loss: -1100 },
    { month: "Jun", profit: 3450, loss: -750 },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
            <Badge variant="outline" className="w-fit">Live Data</Badge>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.title} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-sm flex items-center gap-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        {stat.change}
                      </p>
                    </div>
                    <stat.icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Analysis</TabsTrigger>
              <TabsTrigger value="strategies">Strategy Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>P&L Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center text-muted-foreground">
                      Chart showing daily P&L trends would be rendered here
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Win/Loss Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Winning Trades</span>
                        <span className="text-green-500 font-medium">101 (68.5%)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '68.5%' }}></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Losing Trades</span>
                        <span className="text-red-500 font-medium">46 (31.5%)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '31.5%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Performance Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthlyData.map((month) => (
                      <div key={month.month} className="flex items-center justify-between p-4 border rounded-lg">
                        <span className="font-medium">{month.month}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-green-500">${month.profit.toLocaleString()}</span>
                          <span className="text-red-500">${month.loss.toLocaleString()}</span>
                          <span className="font-bold text-foreground">
                            ${(month.profit + month.loss).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategies" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {['Trend Following', 'Mean Reversion', 'Breakout', 'Scalping'].map((strategy, index) => (
                        <div key={strategy} className="flex justify-between items-center">
                          <span className="text-sm">{strategy}</span>
                          <Badge variant={index < 2 ? "default" : "secondary"}>
                            {index === 0 ? '+15.2%' : index === 1 ? '+8.7%' : index === 2 ? '+3.1%' : '-2.4%'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Sharpe Ratio</span>
                        <span className="font-medium">1.67</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Max Drawdown</span>
                        <span className="font-medium text-red-500">-8.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Volatility</span>
                        <span className="font-medium">12.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Beta</span>
                        <span className="font-medium">0.85</span>
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

export default Analytics;