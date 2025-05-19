
import { Link } from 'react-router-dom';
import { Product, products } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <h2 className="font-serif text-3xl font-medium mb-4 md:mb-0">Featured Products</h2>
          <Button asChild variant="outline">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
