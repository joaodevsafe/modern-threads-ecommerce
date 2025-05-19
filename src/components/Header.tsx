
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCart } from '@/hooks/use-cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  
  const cartItemsCount = items.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="flex items-center">
              <h1 className="font-serif text-xl font-semibold">LOJAODAFE</h1>
            </Link>
          </div>
          
          <nav className={`
            ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-lg py-4' : 'hidden'} 
            lg:flex lg:items-center lg:static lg:shadow-none lg:py-0
          `}>
            <ul className={`
              flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 px-4 lg:px-0
              ${isMenuOpen ? 'animate-fade-in' : ''}
            `}>
              <li>
                <Link to="/products?gender=women" className="text-gray-800 hover:text-black font-medium" onClick={() => setIsMenuOpen(false)}>
                  Women
                </Link>
              </li>
              <li>
                <Link to="/products?gender=men" className="text-gray-800 hover:text-black font-medium" onClick={() => setIsMenuOpen(false)}>
                  Men
                </Link>
              </li>
              <li>
                <Link to="/products?collection=new" className="text-gray-800 hover:text-black font-medium" onClick={() => setIsMenuOpen(false)}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-800 hover:text-black font-medium" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-black font-medium" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search size={20} />
            </Button>
            <Link to="/admin">
              <Button variant="ghost" size="icon" aria-label="Admin">
                <User size={20} />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
