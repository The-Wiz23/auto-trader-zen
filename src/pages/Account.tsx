import { Navigation } from '@/components/Navigation';
import { AccountSettings } from '@/components/AccountSettings';

const Account = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64">
        <AccountSettings />
      </main>
    </div>
  );
};

export default Account;