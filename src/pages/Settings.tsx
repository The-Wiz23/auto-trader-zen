import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Globe,
  Palette,
  Database,
  Zap
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your application preferences and configurations</p>
          </div>

          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-5">UTC-5 (Eastern)</SelectItem>
                      <SelectItem value="utc-6">UTC-6 (Central)</SelectItem>
                      <SelectItem value="utc-7">UTC-7 (Mountain)</SelectItem>
                      <SelectItem value="utc-8">UTC-8 (Pacific)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trading Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Trading Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-trading">Auto Trading</Label>
                  <p className="text-sm text-muted-foreground">Enable automated trading execution</p>
                </div>
                <Switch id="auto-trading" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="risk-management">Advanced Risk Management</Label>
                  <p className="text-sm text-muted-foreground">Use AI-powered risk controls</p>
                </div>
                <Switch id="risk-management" defaultChecked />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="default-lot">Default Lot Size</Label>
                  <Input id="default-lot" type="number" defaultValue="0.1" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-spread">Max Spread (pips)</Label>
                  <Input id="max-spread" type="number" defaultValue="3" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive trade alerts via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Browser push notifications</p>
                </div>
                <Switch id="push-notifications" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="telegram-alerts">Telegram Alerts</Label>
                  <p className="text-sm text-muted-foreground">Send alerts to Telegram bot</p>
                </div>
                <Switch id="telegram-alerts" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telegram-token">Telegram Bot Token</Label>
                <Input id="telegram-token" placeholder="Enter your bot token" />
              </div>
            </CardContent>
          </Card>

          {/* API & Integration Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                API & Integrations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mt4-server">MT4/MT5 Server</Label>
                <Input id="mt4-server" placeholder="Enter server address" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="account-number">Account Number</Label>
                  <Input id="account-number" placeholder="Trading account number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="investor-password">Investor Password</Label>
                  <Input id="investor-password" type="password" placeholder="Read-only password" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sheets-url">Google Sheets URL</Label>
                <Input id="sheets-url" placeholder="Trade logging spreadsheet URL" />
              </div>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex gap-4">
            <Button>Save All Settings</Button>
            <Button variant="outline">Reset to Default</Button>
            <Button variant="destructive">Export Settings</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;