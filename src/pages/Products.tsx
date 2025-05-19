
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { products, Product, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Filter, X } from 'lucide-react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilters, setActiveFilters] = useState<{
    category?: string;
    gender?: 'men' | 'women' | 'unisex';
    collection?: string; // 'new' or 'sale'
    sort?: string;
  }>({});
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Parse query parameters
  useEffect(() => {
    const category = searchParams.get('category') || undefined;
    const gender = searchParams.get('gender') as 'men' | 'women' | 'unisex' | undefined;
    const collection = searchParams.get('collection') || undefined;
    const sort = searchParams.get('sort') || undefined;
    
    setActiveFilters({ category, gender, collection, sort });
  }, [searchParams]);
  
  // Apply filters
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (activeFilters.category && activeFilters.category !== 'all') {
      filtered = filtered.filter(product => product.category === activeFilters.category);
    }
    
    // Filter by gender
    if (activeFilters.gender) {
      filtered = filtered.filter(product => 
        product.gender === activeFilters.gender || product.gender === 'unisex'
      );
    }
    
    // Filter by collection
    if (activeFilters.collection === 'new') {
      filtered = filtered.filter(product => product.newArrival);
    } else if (activeFilters.collection === 'sale') {
      filtered = filtered.filter(product => product.discount);
    }
    
    // Apply sorting
    if (activeFilters.sort) {
      switch (activeFilters.sort) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        default:
          // Default sorting could be by newest or featured
          break;
      }
    }
    
    setFilteredProducts(filtered);
  }, [activeFilters]);

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-medium mb-2">
            {activeFilters.gender 
              ? `${activeFilters.gender.charAt(0).toUpperCase() + activeFilters.gender.slice(1)}'s` 
              : ''} 
            {activeFilters.collection === 'new' ? 'New Arrivals' : ''}
            {activeFilters.collection === 'sale' ? 'Sale Items' : ''}
            {!activeFilters.gender && !activeFilters.collection ? 'All Products' : ''}
          </h1>
          <p className="text-gray-600">{filteredProducts.length} products</p>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <div className="relative">
            <label className="text-sm mr-2">Sort by:</label>
            <select 
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={activeFilters.sort || 'featured'}
              onChange={(e) => setActiveFilters({ ...activeFilters, sort: e.target.value })}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center md:hidden"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            {filtersOpen ? <X size={16} className="mr-2" /> : <Filter size={16} className="mr-2" />}
            {filtersOpen ? 'Close Filters' : 'Filters'}
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Filters Sidebar */}
        <div className={`
          md:w-56 md:pr-8 md:block
          ${filtersOpen ? 'block' : 'hidden'}
          mb-6 md:mb-0
        `}>
          <div className="mb-6">
            <h3 className="font-medium mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex items-center">
                  <input 
                    type="checkbox"
                    id={`category-${category.id}`}
                    checked={activeFilters.category === category.id}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        category: activeFilters.category === category.id ? undefined : category.id
                      });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor={`category-${category.id}`} className="text-sm">
                    {category.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Gender</h3>
            <div className="space-y-2">
              {['men', 'women', 'unisex'].map(gender => (
                <div key={gender} className="flex items-center">
                  <input 
                    type="checkbox"
                    id={`gender-${gender}`}
                    checked={activeFilters.gender === gender}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        gender: activeFilters.gender === gender 
                          ? undefined 
                          : gender as 'men' | 'women' | 'unisex'
                      });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor={`gender-${gender}`} className="text-sm capitalize">
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-3">Collection</h3>
            <div className="space-y-2">
              {[
                { id: 'new', label: 'New Arrivals' },
                { id: 'sale', label: 'Sale Items' }
              ].map(collection => (
                <div key={collection.id} className="flex items-center">
                  <input 
                    type="checkbox"
                    id={`collection-${collection.id}`}
                    checked={activeFilters.collection === collection.id}
                    onChange={() => {
                      setActiveFilters({
                        ...activeFilters,
                        collection: activeFilters.collection === collection.id ? undefined : collection.id
                      });
                    }}
                    className="mr-2"
                  />
                  <label htmlFor={`collection-${collection.id}`} className="text-sm">
                    {collection.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline"
            size="sm"
            onClick={() => setActiveFilters({})}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl mb-4">No products found</h2>
              <p className="text-gray-600 mb-6">Try changing your filters to find products.</p>
              <Button onClick={() => setActiveFilters({})}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
