import { Navigation } from '@/components/Navigation';
import { TradingDashboard } from '@/components/TradingDashboard';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64">
        <TradingDashboard />
      </main>
    </div>
  );
};

export default Index;