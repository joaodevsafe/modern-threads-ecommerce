
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { products } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { useCart } from '@/hooks/use-cart';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : null;
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    
    addItem(product.id, quantity, selectedSize, selectedColor);
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-16">
      <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-black mb-8">
        <ArrowLeft size={16} className="mr-2" />
        Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="grid grid-cols-1 gap-4">
          <div className="aspect-square bg-gray-100 mb-4">
            <ImagePlaceholder 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {Array(4).fill(0).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-100">
                <ImagePlaceholder 
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-serif font-medium mb-2">{product.name}</h1>
          
          <div className="flex items-center space-x-2 mb-6">
            {discountedPrice ? (
              <>
                <span className="text-xl font-medium">{formatCurrency(discountedPrice)}</span>
                <span className="text-gray-500 line-through">{formatCurrency(product.price)}</span>
                <span className="text-red-600 font-medium">Save {product.discount}%</span>
              </>
            ) : (
              <span className="text-xl font-medium">{formatCurrency(product.price)}</span>
            )}
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Color: {selectedColor || 'Select a color'}</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.name ? 'border-black' : 'border-transparent'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={`Select ${color.name} color`}
                  onClick={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">Size: {selectedSize || 'Select a size'}</h3>
              <button type="button" className="text-sm text-gray-600 underline">Size Guide</button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`min-w-[3rem] h-10 px-3 rounded border ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-gray-900'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">Quantity</h3>
            <div className="flex items-center border border-gray-300 rounded w-max">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center text-gray-600"
                disabled={quantity <= 1}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center text-gray-600"
                disabled={quantity >= product.stock}
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-10 pt-6 border-t border-gray-200 space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Free Returns</h3>
              <p className="text-sm text-gray-600">Within 30 days of purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
