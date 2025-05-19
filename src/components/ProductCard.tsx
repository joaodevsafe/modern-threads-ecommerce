
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import ImagePlaceholder from './ImagePlaceholder';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100)
    : null;
  
  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
          <ImagePlaceholder 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {product.newArrival && (
            <div className="absolute top-2 left-2 bg-black text-white text-xs font-medium px-2 py-1">
              New
            </div>
          )}
          
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-medium px-2 py-1">
              {product.discount}% Off
            </div>
          )}
        </div>
        
        <h3 className="font-medium text-lg mb-1">{product.name}</h3>
        
        <div className="flex items-center space-x-2">
          {discountedPrice ? (
            <>
              <span className="font-medium">{formatCurrency(discountedPrice)}</span>
              <span className="text-gray-500 line-through text-sm">{formatCurrency(product.price)}</span>
            </>
          ) : (
            <span className="font-medium">{formatCurrency(product.price)}</span>
          )}
        </div>
        
        <div className="mt-2 flex space-x-1">
          {product.colors.map((color) => (
            <div 
              key={color.name} 
              className="w-3 h-3 rounded-full border border-gray-300" 
              style={{ backgroundColor: color.hex }} 
              title={color.name}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
