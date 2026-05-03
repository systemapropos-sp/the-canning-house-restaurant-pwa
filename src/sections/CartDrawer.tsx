import { Minus, Plus, Trash2, ShoppingBag, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    // In a real app, this would send to a backend
    toast.success('Order submitted!', {
      description: 'We will call you to confirm your order.',
    });
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:w-[400px] bg-brand-darker border-white/10 flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-white flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Order ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="w-16 h-16 text-white/10 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Your cart is empty</h3>
            <p className="text-white/40 text-sm mb-6">
              Browse our menu and add some delicious items to your cart!
            </p>
            <Button
              onClick={() => {
                setIsOpen(false);
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Browse Menu
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-white font-bold text-sm">{item.name}</h4>
                          <p className="text-white/40 text-xs mt-0.5">{item.description}</p>
                        </div>
                        <span className="text-primary font-bold text-sm shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white font-bold text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-white/30 hover:text-red-400 transition-colors ml-auto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.06).toFixed(2)}</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="flex items-center justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>${(totalPrice * 1.06).toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl shadow-glow"
              >
                <Phone className="w-4 h-4 mr-2" />
                Place Order
              </Button>
              <p className="text-white/30 text-xs text-center mt-2">
                We will call you to confirm your order details
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
