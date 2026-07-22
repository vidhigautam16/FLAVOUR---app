import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = getTotalPrice();
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    setIsOrdered(true);
    clearCart();
    toast({
      title: "Order placed successfully!",
      description: "Thank you for ordering with Flavour!",
      duration: 4000,
    });
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-primary-foreground">✓</span>
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              Ordered Successfully!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for ordering
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center p-6 border-b border-border">
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:text-accent transition-colors mr-4"
        >
          <ArrowLeft size={28} />
        </button>
        <h1 className="text-2xl font-bold text-primary">Your Cart</h1>
      </header>

      <div className="px-6 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-card border border-border rounded-lg p-4">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.cuisine} Cuisine</p>
                          <p className="font-bold text-primary">₹{item.price}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <Trash2 size={20} />
                          </button>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground p-1 rounded"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-primary text-primary-foreground hover:bg-accent p-1 rounded"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-card border border-border rounded-lg p-6 h-fit">
                <h2 className="text-xl font-bold text-primary mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="font-semibold">₹{deliveryFee}</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-accent transition-colors font-semibold"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="w-full border border-border text-foreground py-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery: <span className="font-semibold">25-30 min</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;