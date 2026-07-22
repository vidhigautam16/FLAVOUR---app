import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ShoppingCart, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { foodItems } from '@/data/foodData';
import { useToast } from '@/hooks/use-toast';

const CuisinePage = () => {
  const { cuisine } = useParams<{ cuisine: string }>();
  const navigate = useNavigate();
  const { addToCart, getItemCount } = useCart();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const cartItemCount = getItemCount();
  const cuisineName = cuisine ? cuisine.charAt(0).toUpperCase() + cuisine.slice(1) : '';
  const items = foodItems[cuisineName] || [];
  
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-border">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="text-primary hover:text-accent transition-colors"
        >
          <ArrowLeft size={28} />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search food items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        {/* Cart Button */}
        <button
          onClick={() => navigate('/cart')}
          className="text-primary hover:text-accent transition-colors relative"
        >
          <ShoppingCart size={28} />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </button>
      </header>

      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {cuisineName} Cuisine
        </h1>
      </div>

      {/* Food Items Grid */}
      <main className="px-6 pb-8">
        {filteredItems.length === 0 && searchTerm ? (
          <div className="text-center py-12">
            <p className="text-xl italic text-muted-foreground">
              Item not found
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow">
                {/* Food Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Food Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-secondary">
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-accent transition-colors shadow-md"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CuisinePage;