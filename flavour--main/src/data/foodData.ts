import { FoodItem } from '@/contexts/CartContext';

// Import food images
import indianButterChicken from '@/assets/indian-butter-chicken.jpg';
import indianTandoori from '@/assets/indian-tandoori.jpg';
import italianCarbonara from '@/assets/italian-carbonara.jpg';
import italianPizza from '@/assets/italian-pizza.jpg';
import japaneseSushi from '@/assets/japanese-sushi.jpg';
import japaneseRamen from '@/assets/japanese-ramen.jpg';
import mexicanTacos from '@/assets/mexican-tacos.jpg';
import mexicanQuesadilla from '@/assets/mexican-quesadilla.jpg';
import koreanBibimbap from '@/assets/korean-bibimbap.jpg';
import koreanBulgogi from '@/assets/korean-bulgogi.jpg';
import chineseSweetSourPork from '@/assets/chinese-sweet-sour-pork.jpg';
import chineseKungPao from '@/assets/chinese-kung-pao.jpg';

export const cuisines = [
  'Indian',
  'Italian', 
  'Japanese',
  'Mexican',
  'Korean',
  'Chinese'
];

export const foodItems: Record<string, FoodItem[]> = {
  Indian: [
    {
      id: 'indian-1',
      name: 'Butter Chicken',
      price: 450,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Creamy tomato-based curry with tender chicken'
    },
    {
      id: 'indian-2', 
      name: 'Tandoori Chicken',
      price: 420,
      image: indianTandoori,
      cuisine: 'Indian',
      description: 'Clay oven roasted chicken with aromatic spices'
    },
    {
      id: 'indian-3',
      name: 'Biryani',
      price: 380,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Fragrant basmati rice with spiced meat'
    },
    {
      id: 'indian-4',
      name: 'Dal Makhani',
      price: 280,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Rich and creamy black lentil curry'
    },
    {
      id: 'indian-5',
      name: 'Palak Paneer',
      price: 320,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Cottage cheese in spiced spinach gravy'
    },
    {
      id: 'indian-6',
      name: 'Masala Dosa',
      price: 180,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Crispy crepe with spiced potato filling'
    },
    {
      id: 'indian-7',
      name: 'Chicken Tikka',
      price: 390,
      image: indianTandoori,
      cuisine: 'Indian',
      description: 'Grilled chicken chunks marinated in yogurt'
    },
    {
      id: 'indian-8',
      name: 'Rogan Josh',
      price: 480,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Aromatic lamb curry from Kashmir'
    },
    {
      id: 'indian-9',
      name: 'Samosa',
      price: 120,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Crispy fried pastry with spiced filling'
    },
    {
      id: 'indian-10',
      name: 'Gulab Jamun',
      price: 150,
      image: indianButterChicken,
      cuisine: 'Indian',
      description: 'Sweet milk dumplings in sugar syrup'
    }
  ],
  Italian: [
    {
      id: 'italian-1',
      name: 'Spaghetti Carbonara',
      price: 520,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Classic pasta with eggs, cheese and pancetta'
    },
    {
      id: 'italian-2',
      name: 'Margherita Pizza',
      price: 480,
      image: italianPizza,
      cuisine: 'Italian',
      description: 'Traditional pizza with tomato, mozzarella and basil'
    },
    {
      id: 'italian-3',
      name: 'Lasagna',
      price: 580,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Layered pasta with meat sauce and cheese'
    },
    {
      id: 'italian-4',
      name: 'Fettuccine Alfredo',
      price: 490,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Creamy pasta with parmesan cheese'
    },
    {
      id: 'italian-5',
      name: 'Risotto Mushroom',
      price: 450,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Creamy rice with mixed mushrooms'
    },
    {
      id: 'italian-6',
      name: 'Bruschetta',
      price: 280,
      image: italianPizza,
      cuisine: 'Italian',
      description: 'Toasted bread with tomato and basil'
    },
    {
      id: 'italian-7',
      name: 'Osso Buco',
      price: 720,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Braised veal shanks in wine sauce'
    },
    {
      id: 'italian-8',
      name: 'Tiramisu',
      price: 320,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Coffee-flavored dessert with mascarpone'
    },
    {
      id: 'italian-9',
      name: 'Gnocchi',
      price: 420,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Potato dumplings with tomato sauce'
    },
    {
      id: 'italian-10',
      name: 'Gelato',
      price: 180,
      image: italianCarbonara,
      cuisine: 'Italian',
      description: 'Artisanal Italian ice cream'
    }
  ],
  Japanese: [
    {
      id: 'japanese-1',
      name: 'Sushi Platter',
      price: 680,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Assorted fresh sushi with wasabi and ginger'
    },
    {
      id: 'japanese-2',
      name: 'Ramen Bowl',
      price: 420,
      image: japaneseRamen,
      cuisine: 'Japanese',
      description: 'Rich broth with noodles, pork and egg'
    },
    {
      id: 'japanese-3',
      name: 'Tempura',
      price: 380,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Lightly battered and fried seafood'
    },
    {
      id: 'japanese-4',
      name: 'Teriyaki Chicken',
      price: 450,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Grilled chicken with sweet soy glaze'
    },
    {
      id: 'japanese-5',
      name: 'Yakitori',
      price: 320,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Grilled chicken skewers with tare sauce'
    },
    {
      id: 'japanese-6',
      name: 'Miso Soup',
      price: 180,
      image: japaneseRamen,
      cuisine: 'Japanese',
      description: 'Traditional soybean paste soup with tofu'
    },
    {
      id: 'japanese-7',
      name: 'Katsu Curry',
      price: 520,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Breaded pork cutlet with Japanese curry'
    },
    {
      id: 'japanese-8',
      name: 'Udon Noodles',
      price: 350,
      image: japaneseRamen,
      cuisine: 'Japanese',
      description: 'Thick wheat noodles in hot broth'
    },
    {
      id: 'japanese-9',
      name: 'Sashimi',
      price: 720,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Fresh raw fish slices without rice'
    },
    {
      id: 'japanese-10',
      name: 'Mochi',
      price: 220,
      image: japaneseSushi,
      cuisine: 'Japanese',
      description: 'Sweet rice cake with various fillings'
    }
  ],
  Mexican: [
    {
      id: 'mexican-1',
      name: 'Beef Tacos',
      price: 320,
      image: mexicanTacos,
      cuisine: 'Mexican',
      description: 'Soft corn tortillas with seasoned beef'
    },
    {
      id: 'mexican-2',
      name: 'Cheese Quesadilla',
      price: 280,
      image: mexicanQuesadilla,
      cuisine: 'Mexican',
      description: 'Grilled tortilla with melted cheese'
    },
    {
      id: 'mexican-3',
      name: 'Burrito Bowl',
      price: 380,
      image: mexicanTacos,
      cuisine: 'Mexican',
      description: 'Rice bowl with beans, meat and toppings'
    },
    {
      id: 'mexican-4',
      name: 'Nachos Supreme',
      price: 420,
      image: mexicanQuesadilla,
      cuisine: 'Mexican',
      description: 'Tortilla chips with cheese and toppings'
    },
    {
      id: 'mexican-5',
      name: 'Enchiladas',
      price: 350,
      image: mexicanTacos,
      cuisine: 'Mexican',
      description: 'Rolled tortillas with sauce and cheese'
    },
    {
      id: 'mexican-6',
      name: 'Guacamole & Chips',
      price: 220,
      image: mexicanQuesadilla,
      cuisine: 'Mexican',
      description: 'Fresh avocado dip with tortilla chips'
    },
    {
      id: 'mexican-7',
      name: 'Fajitas',
      price: 480,
      image: mexicanTacos,
      cuisine: 'Mexican',
      description: 'Sizzling chicken with peppers and onions'
    },
    {
      id: 'mexican-8',
      name: 'Churros',
      price: 180,
      image: mexicanQuesadilla,
      cuisine: 'Mexican',
      description: 'Fried dough pastry with cinnamon sugar'
    },
    {
      id: 'mexican-9',
      name: 'Tamales',
      price: 320,
      image: mexicanTacos,
      cuisine: 'Mexican',
      description: 'Steamed corn masa with filling'
    },
    {
      id: 'mexican-10',
      name: 'Salsa Verde',
      price: 150,
      image: mexicanQuesadilla,
      cuisine: 'Mexican',
      description: 'Green tomatillo sauce with herbs'
    }
  ],
  Korean: [
    {
      id: 'korean-1',
      name: 'Bibimbap',
      price: 420,
      image: koreanBibimbap,
      cuisine: 'Korean',
      description: 'Mixed rice bowl with vegetables and beef'
    },
    {
      id: 'korean-2',
      name: 'Bulgogi',
      price: 480,
      image: koreanBulgogi,
      cuisine: 'Korean',
      description: 'Marinated grilled beef with vegetables'
    },
    {
      id: 'korean-3',
      name: 'Kimchi Jjigae',
      price: 350,
      image: koreanBibimbap,
      cuisine: 'Korean',
      description: 'Spicy kimchi stew with pork'
    },
    {
      id: 'korean-4',
      name: 'Korean BBQ',
      price: 580,
      image: koreanBulgogi,
      cuisine: 'Korean',
      description: 'Grilled meat with banchan sides'
    },
    {
      id: 'korean-5',
      name: 'Japchae',
      price: 320,
      image: koreanBibimbap,
      cuisine: 'Korean',
      description: 'Sweet potato noodles with vegetables'
    },
    {
      id: 'korean-6',
      name: 'Tteokbokki',
      price: 280,
      image: koreanBibimbap,
      cuisine: 'Korean',
      description: 'Spicy rice cakes in gochujang sauce'
    },
    {
      id: 'korean-7',
      name: 'Korean Fried Chicken',
      price: 450,
      image: koreanBulgogi,
      cuisine: 'Korean',
      description: 'Crispy chicken with sweet and spicy glaze'
    },
    {
      id: 'korean-8',
      name: 'Galbi',
      price: 620,
      image: koreanBulgogi,
      cuisine: 'Korean',
      description: 'Marinated short ribs grilled to perfection'
    },
    {
      id: 'korean-9',
      name: 'Mandu',
      price: 250,
      image: koreanBibimbap,
      cuisine: 'Korean',
      description: 'Korean dumplings with meat and vegetables'
    },
    {
      id: 'korean-10',
      name: 'Bingsu',
      price: 220,
      image: koreanBibimbap,
      cuisine: 'Korean',
      description: 'Shaved ice dessert with sweet toppings'
    }
  ],
  Chinese: [
    {
      id: 'chinese-1',
      name: 'Sweet & Sour Pork',
      price: 420,
      image: chineseSweetSourPork,
      cuisine: 'Chinese',
      description: 'Battered pork with tangy sweet sauce'
    },
    {
      id: 'chinese-2',
      name: 'Kung Pao Chicken',
      price: 380,
      image: chineseKungPao,
      cuisine: 'Chinese',
      description: 'Spicy diced chicken with peanuts'
    },
    {
      id: 'chinese-3',
      name: 'Peking Duck',
      price: 680,
      image: chineseSweetSourPork,
      cuisine: 'Chinese',
      description: 'Crispy duck with pancakes and sauce'
    },
    {
      id: 'chinese-4',
      name: 'Mapo Tofu',
      price: 320,
      image: chineseKungPao,
      cuisine: 'Chinese',
      description: 'Silky tofu in spicy Sichuan sauce'
    },
    {
      id: 'chinese-5',
      name: 'Fried Rice',
      price: 280,
      image: chineseSweetSourPork,
      cuisine: 'Chinese',
      description: 'Wok-fried rice with eggs and vegetables'
    },
    {
      id: 'chinese-6',
      name: 'Dim Sum Platter',
      price: 450,
      image: chineseKungPao,
      cuisine: 'Chinese',
      description: 'Assorted steamed dumplings and buns'
    },
    {
      id: 'chinese-7',
      name: 'Chow Mein',
      price: 350,
      image: chineseSweetSourPork,
      cuisine: 'Chinese',
      description: 'Stir-fried noodles with vegetables'
    },
    {
      id: 'chinese-8',
      name: 'Hot Pot',
      price: 520,
      image: chineseKungPao,
      cuisine: 'Chinese',
      description: 'Spicy broth for cooking meat and vegetables'
    },
    {
      id: 'chinese-9',
      name: 'Spring Rolls',
      price: 220,
      image: chineseSweetSourPork,
      cuisine: 'Chinese',
      description: 'Crispy rolls with vegetable filling'
    },
    {
      id: 'chinese-10',
      name: 'Mango Pudding',
      price: 180,
      image: chineseKungPao,
      cuisine: 'Chinese',
      description: 'Smooth mango dessert with coconut'
    }
  ]
};