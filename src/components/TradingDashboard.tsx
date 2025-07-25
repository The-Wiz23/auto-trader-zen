import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  DollarSign, 
  BarChart3, 
  Settings, 
  Play, 
  Pause, 
  AlertTriangle,
  Target,
  Clock,
  Zap
} from 'lucide-react';

interface Trade {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  lotSize: number;
  entryPrice: number;
  currentPrice: number;
  pnl: number;
  status: 'OPEN' | 'CLOSED' | 'PENDING';
  timestamp: Date;
}

interface Strategy {
  name: string;
  winRate: number;
  totalTrades: number;
  profit: number;
  active: boolean;
}

export const TradingDashboard = () => {
  const [isAutoTradingEnabled, setIsAutoTradingEnabled] = useState(false);
  const [accountBalance, setAccountBalance] = useState(50000);
  const [totalProfit, setTotalProfit] = useState(2750.50);
  const [drawdown, setDrawdown] = useState(3.2);
  const [winRate, setWinRate] = useState(84.5);

  const [strategies] = useState<Strategy[]>([
    { name: 'EMA Crossover', winRate: 87.2, totalTrades: 145, profit: 1450.30, active: true },
    { name: 'RSI Reversal', winRate: 82.1, totalTrades: 98, profit: 890.75, active: true },
    { name: 'MACD Momentum', winRate: 79.8, totalTrades: 76, profit: 610.45, active: false },
    { name: 'Order Block', winRate: 91.3, totalTrades: 23, profit: 345.60, active: true }
  ]);

  const [currentTrades] = useState<Trade[]>([
    {
      id: '1',
      pair: 'EURUSD',
      type: 'BUY',
      lotSize: 0.1,
      entryPrice: 1.0845,
      currentPrice: 1.0862,
      pnl: 17.0,
      status: 'OPEN',
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: '2',
      pair: 'GBPJPY',
      type: 'SELL',
      lotSize: 0.05,
      entryPrice: 189.45,
      currentPrice: 189.21,
      pnl: 12.0,
      status: 'OPEN',
      timestamp: new Date(Date.now() - 3600000)
    }
  ]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-green bg-clip-text text-transparent">
              SmartEA Autopilot Trader
            </h1>
            <p className="text-muted-foreground">Advanced AI-Powered Trading System</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="auto-trading">Auto Trading</Label>
              <Switch 
                id="auto-trading" 
                checked={isAutoTradingEnabled}
                onCheckedChange={setIsAutoTradingEnabled}
              />
            </div>
            <Button variant={isAutoTradingEnabled ? "destructive" : "default"}>
              {isAutoTradingEnabled ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoTradingEnabled ? 'Pause' : 'Start'} Trading
            </Button>
          </div>
        </div>

        {/* Account Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${accountBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+2.1% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-profit" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-profit">+${totalProfit.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{winRate}%</div>
              <p className="text-xs text-muted-foreground">342 trades total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drawdown</CardTitle>
              <AlertTriangle className={`h-4 w-4 ${drawdown > 10 ? 'text-destructive' : 'text-warning'}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${drawdown > 10 ? 'text-destructive' : 'text-warning'}`}>
                {drawdown}%
              </div>
              <Progress value={drawdown} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
            <TabsTrigger value="trades">Active Trades</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Market Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Market Session Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>London Session</span>
                    <Badge variant="default" className="bg-profit">ACTIVE</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>New York Session</span>
                    <Badge variant="secondary">Opening in 2h</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Asian Session</span>
                    <Badge variant="outline">CLOSED</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Strategy Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {strategies.slice(0, 3).map((strategy, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{strategy.name}</p>
                          <p className="text-sm text-muted-foreground">{strategy.totalTrades} trades</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-profit">+${strategy.profit.toFixed(2)}</p>
                          <p className="text-sm text-muted-foreground">{strategy.winRate}% win rate</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Trades */}
            <Card>
              <CardHeader>
                <CardTitle>Active Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentTrades.map((trade) => (
                    <div key={trade.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Badge variant={trade.type === 'BUY' ? 'default' : 'destructive'}>
                          {trade.type}
                        </Badge>
                        <div>
                          <p className="font-medium">{trade.pair}</p>
                          <p className="text-sm text-muted-foreground">
                            {trade.lotSize} lots • Entry: {trade.entryPrice}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${trade.pnl >= 0 ? 'text-profit' : 'text-loss'}`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Current: {trade.currentPrice}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strategies.map((strategy, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    <Switch checked={strategy.active} />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Win Rate:</span>
                        <span className="font-medium text-primary">{strategy.winRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Trades:</span>
                        <span className="font-medium">{strategy.totalTrades}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profit:</span>
                        <span className="font-medium text-profit">+${strategy.profit.toFixed(2)}</span>
                      </div>
                      <Progress value={strategy.winRate} className="mt-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trades" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Trade History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentTrades.map((trade) => (
                    <div key={trade.id} className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <Badge variant={trade.type === 'BUY' ? 'default' : 'destructive'}>
                          {trade.type}
                        </Badge>
                        <span className="font-medium">{trade.pair}</span>
                        <span className="text-sm text-muted-foreground">
                          {trade.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">{trade.lotSize} lots</span>
                        <span className={`font-medium ${trade.pnl >= 0 ? 'text-profit' : 'text-loss'}`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                        </span>
                        <Badge variant="outline">{trade.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Timeframe Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>H1 Trend:</span>
                      <Badge className="bg-profit">BULLISH</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>H4 Trend:</span>
                      <Badge className="bg-profit">BULLISH</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Daily Trend:</span>
                      <Badge variant="secondary">NEUTRAL</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Regime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">TRENDING</div>
                      <p className="text-sm text-muted-foreground">Strong directional movement detected</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Volatility:</span>
                        <span>Medium</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ATR:</span>
                        <span>0.0089</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Economic Calendar & News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">USD NFP Release</p>
                      <p className="text-sm text-muted-foreground">15:30 GMT • High Impact</p>
                    </div>
                    <Badge variant="destructive">HIGH</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">EUR CPI Flash</p>
                      <p className="text-sm text-muted-foreground">10:00 GMT • Medium Impact</p>
                    </div>
                    <Badge className="bg-warning text-warning-foreground">MEDIUM</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Risk Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="risk-per-trade">Risk Per Trade (%)</Label>
                    <Input id="risk-per-trade" type="number" defaultValue="2" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-drawdown">Max Drawdown (%)</Label>
                    <Input id="max-drawdown" type="number" defaultValue="15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-daily-trades">Max Daily Trades</Label>
                    <Input id="max-daily-trades" type="number" defaultValue="10" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Trading Sessions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="london-session">London Session</Label>
                    <Switch id="london-session" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ny-session">New York Session</Label>
                    <Switch id="ny-session" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="asian-session">Asian Session</Label>
                    <Switch id="asian-session" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};