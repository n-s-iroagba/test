import { HomePage } from '@/views/home';
import { Navbar } from '@/widgets/navigation';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HomePage />
    </div>
  );
}
