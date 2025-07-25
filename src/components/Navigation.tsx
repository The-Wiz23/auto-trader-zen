import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  BarChart3, 
  Bell,
  Menu,
  X,
  TrendingUp,
  Activity,
  Shield,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const mainNavItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Performance', href: '/performance', icon: TrendingUp },
    { name: 'Activity', href: '/activity', icon: Activity },
  ];

  const accountNavItems = [
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Account', href: '/account', icon: CreditCard },
    { name: 'Security', href: '/security', icon: Shield },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-chart-green bg-clip-text text-transparent">
              SmartEA Trader
            </h1>
            <p className="text-sm text-muted-foreground">Autopilot Trading</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Trading
              </h3>
              <ul className="space-y-1">
                {mainNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActiveRoute(item.href);
                  
                  return (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                        {isActive && <Badge variant="secondary" className="ml-auto text-xs">Active</Badge>}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Account Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Account
              </h3>
              <ul className="space-y-1">
                {accountNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActiveRoute(item.href);
                  
                  return (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                        {isActive && <Badge variant="secondary" className="ml-auto text-xs">Active</Badge>}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Status */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-md">
              <div className="w-2 h-2 bg-profit rounded-full animate-pulse" />
              <div className="flex-1">
                <p className="text-sm font-medium">Trading Status</p>
                <p className="text-xs text-muted-foreground">Auto-pilot Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};