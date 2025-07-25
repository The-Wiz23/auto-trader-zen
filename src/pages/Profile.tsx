import { Navigation } from '@/components/Navigation';
import { UserProfile } from '@/components/UserProfile';

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Navigation />
      <main className="flex-1 lg:ml-64">
        <UserProfile />
      </main>
    </div>
  );
};

export default Profile;