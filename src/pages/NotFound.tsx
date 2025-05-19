
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[70vh]">
        <div className="max-w-md mx-auto text-center px-4">
          <h1 className="font-serif text-5xl mb-6">404</h1>
          <h2 className="text-2xl font-medium mb-4">Page not found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
