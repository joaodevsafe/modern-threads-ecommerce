
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { formatCurrency } from '@/lib/utils';
import { useCart, getCartDetails } from '@/hooks/use-cart';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { X } from 'lucide-react';

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const cartDetails = getCartDetails();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Checkout functionality will be implemented in the next phase!');
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen mt-16">
        <h1 className="font-serif text-3xl mb-8">Your Cart</h1>
        <div className="text-center py-12">
          <h2 className="text-xl mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen mt-16">
      <h1 className="font-serif text-3xl mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="border-b border-gray-200 pb-2 mb-6 hidden md:grid md:grid-cols-12 gap-4">
            <div className="md:col-span-6">
              <span className="text-sm font-medium">Product</span>
            </div>
            <div className="md:col-span-2 text-center">
              <span className="text-sm font-medium">Price</span>
            </div>
            <div className="md:col-span-2 text-center">
              <span className="text-sm font-medium">Quantity</span>
            </div>
            <div className="md:col-span-2 text-right">
              <span className="text-sm font-medium">Total</span>
            </div>
          </div>
          
          {cartDetails.items.map((item) => {
            if (!item) return null;
            const { product, quantity, size, color, itemTotal } = item;
            
            return (
              <div key={`${product.id}-${size}-${color}`} className="py-6 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Product Info */}
                  <div className="md:col-span-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100">
                      <ImagePlaceholder 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="text-sm text-gray-600 mt-1 space-y-1">
                        <p>Size: {size}</p>
                        <p>Color: {color}</p>
                      </div>
                      <button 
                        type="button" 
                        className="text-sm text-red-600 hover:text-red-800 mt-2 flex items-center"
                        onClick={() => removeItem(product.id)}
                      >
                        <X size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden inline-block mr-2 text-sm font-medium">Price:</span>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="md:col-span-2 flex justify-center">
                    <div className="flex items-center border border-gray-300 rounded w-max">
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center text-gray-600"
                        disabled={quantity <= 1}
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center text-gray-600"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="md:col-span-2 text-right">
                    <span className="md:hidden inline-block mr-2 text-sm font-medium">Total:</span>
                    <span className="font-medium">{formatCurrency(itemTotal)}</span>
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded">
            <h2 className="font-medium text-lg mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatCurrency(cartDetails.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="font-semibold text-lg">{formatCurrency(cartDetails.subtotal)}</span>
              </div>
            </div>
            
            <Button 
              className="w-full mb-4" 
              disabled={isCheckingOut}
              onClick={handleCheckout}
            >
              {isCheckingOut ? 'Processing...' : 'Checkout'}
            </Button>
            
            <div className="text-center text-sm text-gray-500">
              <p>We accept:</p>
              <div className="flex justify-center space-x-2 mt-2">
                <span className="px-2 text-black font-semibold">Visa</span>
                <span className="px-2 text-black font-semibold">Mastercard</span>
                <span className="px-2 text-black font-semibold">PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
