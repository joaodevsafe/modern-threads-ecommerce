
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { products, Product } from '@/data/products';
import { toast } from "@/components/ui/use-toast";

export type CartItem = {
  id: number;
  quantity: number;
  size: string;
  color: string;
};

interface CartStore {
  items: CartItem[];
  addItem: (id: number, quantity: number, size: string, color: string) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (id, quantity, size, color) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.id === id && item.size === size && item.color === color
        );
        
        if (existingItem) {
          // Update quantity of existing item
          const updatedItems = currentItems.map((item) => {
            if (item.id === id && item.size === size && item.color === color) {
              return { ...item, quantity: item.quantity + quantity };
            }
            return item;
          });
          
          set({ items: updatedItems });
          toast({
            title: "Item quantity updated in cart"
          });
        } else {
          // Add new item
          set({ items: [...currentItems, { id, quantity, size, color }] });
          toast({
            title: "Item added to cart"
          });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast({
          title: "Item removed from cart"
        });
      },
      
      updateQuantity: (id, quantity) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity };
          }
          return item;
        });
        
        set({ items: updatedItems });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'modern-threads-cart',
    }
  )
);

// Helper function to get cart details with product information
export const getCartDetails = () => {
  const { items } = useCart.getState();
  
  const cartItems = items.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return null;
    
    return {
      ...item,
      product,
      itemTotal: product.price * item.quantity
    };
  }).filter(Boolean);
  
  const subtotal = cartItems.reduce((sum, item) => sum + item!.itemTotal, 0);
  
  return {
    items: cartItems,
    subtotal,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
  };
};
