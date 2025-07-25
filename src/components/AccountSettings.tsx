import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target,
  Calendar,
  BarChart3,
  Award,
  Clock
} from 'lucide-react';

export const AccountSettings = () => {
  const tradingStats = {
    totalProfit: 15420.75,
    monthlyProfit: 2750.50,
    winRate: 84.5,
    totalTrades: 1247,
    avgHoldTime: '4h 23m',
    maxDrawdown: 8.2,
    sharpeRatio: 1.85,
    profitFactor: 2.34
  };

  const monthlyPerformance = [
    { month: 'Jan', profit: 1850, trades: 98 },
    { month: 'Feb', profit: 2200, trades: 102 },
    { month: 'Mar', profit: 1950, trades: 95 },
    { month: 'Apr', profit: 2850, trades: 118 },
    { month: 'May', profit: 2100, trades: 89 },
    { month: 'Jun', profit: 2750, trades: 106 },
  ];

  const achievements = [
    { title: '100 Winning Trades', description: 'Achieved 100 consecutive profitable trades', earned: true },
    { title: 'Risk Master', description: 'Maintained drawdown under 5% for 3 months', earned: true },
    { title: 'Consistency King', description: 'Monthly profit for 6 consecutive months', earned: false },
    { title: 'Strategy Expert', description: 'Successfully deployed 5+ trading strategies', earned: true },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Account Overview</h1>
            <p className="text-muted-foreground">Your trading performance and account details</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
              <DollarSign className="h-4 w-4 text-profit" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-profit">+${tradingStats.totalProfit.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{tradingStats.winRate}%</div>
              <Progress value={tradingStats.winRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
              <BarChart3 className="h-4 w-4 text-chart-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chart-blue">{tradingStats.sharpeRatio}</div>
              <p className="text-xs text-muted-foreground">Risk-adjusted return</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
              <TrendingDown className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{tradingStats.maxDrawdown}%</div>
              <p className="text-xs text-muted-foreground">Lowest point</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Monthly Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyPerformance.map((month, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-lg font-medium">{month.month}</div>
                    <div className="text-sm text-muted-foreground">{month.trades} trades</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${month.profit >= 0 ? 'text-profit' : 'text-loss'}`}>
                      +${month.profit.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trading Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Trading Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Total Trades:</span>
                <span className="font-medium">{tradingStats.totalTrades.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Average Hold Time:</span>
                <span className="font-medium">{tradingStats.avgHoldTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Profit Factor:</span>
                <span className="font-medium text-profit">{tradingStats.profitFactor}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Profit:</span>
                <span className="font-medium text-profit">+${tradingStats.monthlyProfit.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${achievement.earned ? 'bg-profit' : 'bg-muted'}`} />
                  <div className="flex-1">
                    <div className="font-medium">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </div>
                  {achievement.earned && <Badge className="bg-profit">Earned</Badge>}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Account Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button>Download Trading Report</Button>
              <Button variant="outline">Export Trade History</Button>
              <Button variant="outline">Performance Analytics</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};