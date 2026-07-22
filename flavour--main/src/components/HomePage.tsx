import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { cuisines } from '@/data/foodData';

const HomePage = () => {
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const cartItemCount = getItemCount();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="flex justify-between items-center p-6">
        <div></div> {/* Empty div for spacing */}
        <nav className="flex gap-8">
          <button 
            onClick={() => navigate('/')}
            className="flex flex-col items-center gap-1 text-primary hover:text-accent transition-colors"
          >
            <Home size={24} />
            <span className="text-sm font-medium">Home</span>
          </button>
          <div className="relative">
            <button 
              onClick={() => {
                // Show dropdown menu
                const dropdown = document.getElementById('cuisine-dropdown');
                if (dropdown) {
                  dropdown.classList.toggle('hidden');
                }
              }}
              className="flex flex-col items-center gap-1 text-primary hover:text-accent transition-colors"
            >
              <Menu size={24} />
              <span className="text-sm font-medium">Menu</span>
            </button>
            {/* Dropdown Menu */}
            <div id="cuisine-dropdown" className="hidden absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10 min-w-48">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => {
                    navigate(`/cuisine/${cuisine.toLowerCase()}`);
                    document.getElementById('cuisine-dropdown')?.classList.add('hidden');
                  }}
                  className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>
          <button 
            onClick={() => navigate('/cart')}
            className="flex flex-col items-center gap-1 text-primary hover:text-accent transition-colors relative"
          >
            <ShoppingCart size={24} />
            <span className="text-sm font-medium">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-12">
        <div className="text-center max-w-4xl">
          {/* Welcome Message */}
          <h1 className="font-zapf text-4xl md:text-6xl text-primary mb-4">
            Welcome to
          </h1>
          
          {/* Restaurant Name */}
          <h2 className="font-university text-5xl md:text-8xl text-primary mb-8 tracking-wide">
            Flavour
          </h2>
          
          {/* Tagline */}
          <p className="font-caslon text-xl md:text-2xl text-primary italic mb-12">
            Crave more, Have more!!!
          </p>
          
          {/* Call to Action */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground mb-8">
              Discover delicious cuisines from around the world
            </p>
            <button
              onClick={() => {
                const dropdown = document.getElementById('cuisine-dropdown');
                if (dropdown) {
                  dropdown.classList.toggle('hidden');
                }
              }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent transition-colors shadow-lg"
            >
              Explore Our Menu
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;