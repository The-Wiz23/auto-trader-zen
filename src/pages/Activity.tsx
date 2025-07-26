import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Activity as ActivityIcon, 
  Search, 
  Filter, 
  Download, 
  TrendingUp, 
  TrendingDown, 
  Settings, 
  Shield,
  Clock,
  DollarSign
} from "lucide-react";

const Activity = () => {
  const recentTrades = [
    { 
      id: "T001", 
      symbol: "AAPL", 
      type: "BUY", 
      quantity: 100, 
      price: 185.50, 
      time: "2024-01-26 14:32:15", 
      pnl: "+$245.00",
      positive: true 
    },
    { 
      id: "T002", 
      symbol: "TSLA", 
      type: "SELL", 
      quantity: 50, 
      price: 210.75, 
      time: "2024-01-26 13:45:22", 
      pnl: "-$87.50",
      positive: false 
    },
    { 
      id: "T003", 
      symbol: "MSFT", 
      type: "BUY", 
      quantity: 75, 
      price: 415.30, 
      time: "2024-01-26 12:18:44", 
      pnl: "+$156.75",
      positive: true 
    },
    { 
      id: "T004", 
      symbol: "GOOGL", 
      type: "SELL", 
      quantity: 25, 
      price: 142.80, 
      time: "2024-01-26 11:29:03", 
      pnl: "+$89.25",
      positive: true 
    },
    { 
      id: "T005", 
      symbol: "NVDA", 
      type: "BUY", 
      quantity: 60, 
      price: 875.25, 
      time: "2024-01-26 10:15:18", 
      pnl: "+$312.00",
      positive: true 
    },
  ];

  const accountEvents = [
    { 
      type: "deposit", 
      description: "Funds deposited via wire transfer", 
      amount: "$10,000.00", 
      time: "2024-01-26 09:15:30",
      icon: DollarSign 
    },
    { 
      type: "security", 
      description: "Two-factor authentication enabled", 
      amount: "", 
      time: "2024-01-25 16:45:12",
      icon: Shield 
    },
    { 
      type: "settings", 
      description: "Risk management settings updated", 
      amount: "", 
      time: "2024-01-25 14:22:08",
      icon: Settings 
    },
    { 
      type: "trade", 
      description: "Stop-loss order executed (AMZN)", 
      amount: "-$45.80", 
      time: "2024-01-25 11:30:45",
      icon: TrendingDown 
    },
    { 
      type: "trade", 
      description: "Take-profit order executed (META)", 
      amount: "+$234.50", 
      time: "2024-01-25 09:45:22",
      icon: TrendingUp 
    },
  ];

  const systemEvents = [
    { 
      level: "info", 
      message: "Trading session started", 
      time: "2024-01-26 09:30:00" 
    },
    { 
      level: "warning", 
      message: "High volatility detected in TSLA", 
      time: "2024-01-26 13:42:15" 
    },
    { 
      level: "success", 
      message: "Daily profit target reached", 
      time: "2024-01-26 14:15:30" 
    },
    { 
      level: "info", 
      message: "Market data feed reconnected", 
      time: "2024-01-26 10:05:22" 
    },
    { 
      level: "error", 
      message: "Order rejected: Insufficient margin", 
      time: "2024-01-25 15:33:45" 
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'success': return 'default';
      case 'warning': return 'secondary';
      case 'error': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl font-bold text-foreground">Activity Log</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Badge variant="outline" className="w-fit">
                <Clock className="w-3 h-3 mr-1" />
                Real-time
              </Badge>
            </div>
          </div>

          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search activity..." 
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="default">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="trades" className="space-y-4">
            <TabsList>
              <TabsTrigger value="trades">Recent Trades</TabsTrigger>
              <TabsTrigger value="account">Account Events</TabsTrigger>
              <TabsTrigger value="system">System Events</TabsTrigger>
              <TabsTrigger value="audit">Audit Trail</TabsTrigger>
            </TabsList>

            <TabsContent value="trades" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ActivityIcon className="h-5 w-5" />
                    Trading Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Trade ID</th>
                          <th className="text-left py-2 px-4">Symbol</th>
                          <th className="text-left py-2 px-4">Type</th>
                          <th className="text-right py-2 px-4">Quantity</th>
                          <th className="text-right py-2 px-4">Price</th>
                          <th className="text-right py-2 px-4">P&L</th>
                          <th className="text-left py-2 px-4">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentTrades.map((trade) => (
                          <tr key={trade.id} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-mono text-sm">{trade.id}</td>
                            <td className="py-3 px-4 font-semibold">{trade.symbol}</td>
                            <td className="py-3 px-4">
                              <Badge variant={trade.type === 'BUY' ? 'default' : 'secondary'}>
                                {trade.type}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-right">{trade.quantity}</td>
                            <td className="py-3 px-4 text-right">${trade.price}</td>
                            <td className={`py-3 px-4 text-right font-semibold ${trade.positive ? 'text-green-500' : 'text-red-500'}`}>
                              {trade.pnl}
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{trade.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Account Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {accountEvents.map((event, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50">
                        <event.icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{event.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                        </div>
                        {event.amount && (
                          <span className={`text-sm font-semibold ${event.amount.startsWith('+') ? 'text-green-500' : event.amount.startsWith('-') ? 'text-red-500' : 'text-foreground'}`}>
                            {event.amount}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>System Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant={getLevelBadge(event.level) as any}>
                            {event.level.toUpperCase()}
                          </Badge>
                          <span className="text-sm">{event.message}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{event.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audit" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Security & Audit Trail</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Login Activity</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Last login</span>
                            <span className="text-muted-foreground">2024-01-26 08:30:15</span>
                          </div>
                          <div className="flex justify-between">
                            <span>IP Address</span>
                            <span className="text-muted-foreground">192.168.1.100</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Device</span>
                            <span className="text-muted-foreground">Chrome on MacOS</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Security Events</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>2FA Status</span>
                            <Badge variant="default">Enabled</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Failed logins (24h)</span>
                            <span className="text-muted-foreground">0</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Password changed</span>
                            <span className="text-muted-foreground">30 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Recent Security Events</h4>
                      {[
                        "Two-factor authentication code generated",
                        "Password verification successful",
                        "API key access logged",
                        "Session timeout warning",
                      ].map((event, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <span className="text-sm">{event}</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(Date.now() - index * 3600000).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Activity;