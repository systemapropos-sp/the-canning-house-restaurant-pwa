import { useState } from 'react';
import { Plus, Flame, Drumstick, Pizza, Salad, IceCreamCone, CookingPot, UtensilsCrossed, Sandwich } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  badge?: string;
}

const menuData: MenuItem[] = [
  // Starters
  { id: 'nachos-chicken', name: 'Nachos - Chicken', price: 10, description: 'Shredded lettuce, diced tomato, jalapenos, BOOYAH! Melted Cheddar Cheese, cilantro lime sour cream', category: 'starters' },
  { id: 'nachos-pork', name: 'Nachos - Pulled Pork', price: 11, description: 'Loaded with slow-cooked pulled pork and all the fixings', category: 'starters' },
  { id: 'nachos-shrimp', name: 'Nachos - Shrimp', price: 13, description: 'Grilled shrimp atop crispy chips with cheese and toppings', category: 'starters' },
  { id: 'bites', name: 'BOOYAH! Cooper Sticks (5)', price: 8, description: 'House breaded & lightly fried Cooper Cheese sticks. Served with our Sweet Sauce', category: 'starters' },
  { id: 'cheesesteak-eggrolls', name: 'Philly Cheesesteak Eggrolls', price: 8, description: 'House blended cheese, sauteed onions & green peppers. Spicy ketchup on side', category: 'starters' },
  { id: 'onion-rings', name: 'BOOYAH! Onion Rings', price: 7, description: 'Served with BOOM BOOM Sauce', category: 'starters' },
  { id: 'quesadilla', name: 'Buffalo Chicken Quesadilla', price: 10, description: 'Grilled chicken, buffalo sauce, our house cheese blend & a side of blue cheese', category: 'starters' },

  // Chicken & Wings
  { id: 'boneless-bites-small', name: 'BOOYAH! Boneless Bites - Small', price: 9, description: 'Our boneless bites tossed in your choice of sauce', category: 'chicken' },
  { id: 'boneless-bites-large', name: 'BOOYAH! Boneless Bites - Large', price: 13, description: 'Larger portion of our famous boneless bites', category: 'chicken' },
  { id: 'gluten-free-bites', name: 'Gluten Free BOOYAH! Bites', price: 13, description: '10 pieces gluten free crispy bites tossed in your choice of sauce', category: 'chicken' },
  { id: 'tenders-3pc', name: 'Hand Battered Crispy Tenders (3pc)', price: 10, description: 'Grilled, battered or spicy. Served with fries & includes 1 sauce', category: 'chicken' },
  { id: 'tenders-5pc', name: 'Hand Battered Crispy Tenders (5pc)', price: 13, description: 'Grilled, battered or spicy. Served with fries & includes 2 sauces', category: 'chicken' },
  { id: 'wings-10pc', name: 'Classic Bone-In Wings (10)', price: 15, description: 'Includes a side of blue cheese or ranch & house cut carrot sticks', category: 'chicken' },
  { id: 'wings-family', name: 'Classic Bone-In Wings (Family Style 30)', price: 43, description: 'Large family portion with sides', category: 'chicken' },
  { id: 'shrimp-combo', name: 'Fried Shrimp Combo (20)', price: 14, description: 'Grilled, battered or spicy shrimp served with hand-cut fries & coleslaw', category: 'chicken' },
  { id: 'chicken-fries', name: 'BOOYAH! Chicken Fries', price: 10, description: 'Thinly hand-cut chicken tenders with dipping sauce', category: 'chicken', badge: 'NEW' },

  // Burgers
  { id: 'cheese-burger', name: 'BOOYAH! Cheese Burger', price: 11, description: 'Your choice of American, Swiss, Cheddar or Cooper Cheese', category: 'burgers', badge: 'Popular' },
  { id: 'chicken-sandwich', name: 'Marinated Chicken Sandwich', price: 11, description: 'Grilled, crispy or spicy', category: 'burgers' },
  { id: 'turkey-burger', name: 'Turkey Burger', price: 11, description: 'Your choice of American Sauce or Cheddar Cheese', category: 'burgers' },
  { id: 'texas-burger', name: 'Texas Burger', price: 12, description: 'Chili, onion straws, American cheese', category: 'burgers' },
  { id: 'smash-burger', name: 'BOOYAH! Smash Burger', price: 12, description: 'Butter infused Angus beef patty, "smashed". Melted American cheese, bacon, onion jam, lettuce, tomato, pickle', category: 'burgers', badge: 'Best Seller' },
  { id: 'smash-double', name: 'BOOYAH! Smash Burger - Double', price: 14, description: 'Double patty smash burger with all the fixings', category: 'burgers' },
  { id: 'smash-triple', name: 'BOOYAH! Smash Burger - Triple', price: 16, description: 'Triple patty for the hungry', category: 'burgers' },
  { id: 'mushroom-swiss', name: 'Mushroom & Swiss Burger', price: 12, description: 'House formed burger, sauteed mushrooms, melted Swiss cheese', category: 'burgers' },
  { id: 'spicy-chicken', name: 'Spicy Southern Fried Chicken', price: 13, description: 'Buttermilk marinated spicy fried chicken, lettuce, tomato, crispy bacon, pickle, hot honey mayo', category: 'burgers' },
  { id: 'philly-steak', name: 'Philly Cheese Steak', price: 13, description: 'American cheese, sauteed onions, grilled mushrooms & green peppers on a fresh hoagie roll', category: 'burgers' },
  { id: 'buffalo-hoagie', name: 'BOOYAH! Buffalo Bite Hoagie', price: 11, description: 'Grilled or crispy chicken, blue cheese with your choice of wing sauce on a fresh hoagie roll', category: 'burgers' },
  { id: 'bbq-pork', name: 'Southern BBQ Pulled Pork', price: 10, description: 'Slow cooked pulled pork BBQ, coleslaw, onion straws', category: 'burgers' },
  { id: 'chili-dogs', name: '2 Hot Dogs with Chili & Cheese', price: 12, description: 'Classic loaded hot dogs', category: 'burgers' },
  { id: 'pulled-pork-grilled', name: 'Pulled Pork Grilled Cheese', price: 12, description: 'Slow cooked pulled pork in a grilled cheese', category: 'burgers' },

  // Pizza
  { id: 'bakery-pizza-sm', name: 'Bakery Pizza - Small', price: 9, description: 'Sicilian style pizza with Cooper cheese under our homemade sweet sauce', category: 'pizza' },
  { id: 'bakery-pizza-lg', name: 'Bakery Pizza - Large', price: 15, description: 'Larger Sicilian style pizza', category: 'pizza' },
  { id: 'meat-lovers-sm', name: 'Meat Lovers Pizza - Small', price: 16, description: 'Pepperoni, sausage, and bacon on our homemade pizza', category: 'pizza' },
  { id: 'meat-lovers-lg', name: 'Meat Lovers Pizza - Large', price: 19, description: 'Large meat lovers', category: 'pizza' },
  { id: 'chicken-wing-pizza-sm', name: 'Chicken Wing Pizza - Small', price: 16, description: 'Our homemade chicken bites tossed in sauce with blue cheese or ranch', category: 'pizza' },
  { id: 'chicken-wing-pizza-lg', name: 'Chicken Wing Pizza - Large', price: 19, description: 'Large chicken wing pizza', category: 'pizza' },
  { id: 'shrimp-pepper-sm', name: 'Shrimp Hot Pepper Pizza - Small', price: 16, description: 'Our homemade pizza with shrimp, garlic and banana peppers', category: 'pizza' },
  { id: 'shrimp-pepper-lg', name: 'Shrimp Hot Pepper Pizza - Large', price: 19, description: 'Large shrimp hot pepper pizza', category: 'pizza' },
  { id: 'supreme-sm', name: 'Supreme Pizza - Small', price: 17, description: 'Green peppers, mushrooms, sausage, pepperoni and onions', category: 'pizza' },
  { id: 'supreme-lg', name: 'Supreme Pizza - Large', price: 20, description: 'Large supreme', category: 'pizza' },
  { id: 'ricotta-sm', name: 'White Broccoli Ricotta Pizza - Small', price: 16, description: 'Our white pizza served with broccoli, ricotta and garlic', category: 'pizza' },
  { id: 'ricotta-lg', name: 'White Broccoli Ricotta Pizza - Large', price: 19, description: 'Large white broccoli ricotta', category: 'pizza' },
  { id: 'tomato-garlic-sm', name: 'Tomato & Garlic Pizza - Small', price: 16, description: 'Our white pizza served with tomato, garlic & oregano', category: 'pizza' },
  { id: 'tomato-garlic-lg', name: 'Tomato & Garlic Pizza - Large', price: 19, description: 'Large tomato & garlic', category: 'pizza' },
  { id: 'build-own-sm', name: 'Build Your Own - Small', price: 9, description: 'Our homemade pizza with your choice of sweet or regular sauce', category: 'pizza' },
  { id: 'build-own-lg', name: 'Build Your Own - Large', price: 15, description: 'Large build your own', category: 'pizza' },
  { id: 'gluten-free-pizza', name: 'Gluten Free Pizza', price: 15, description: 'Gluten free crust with your choice of toppings', category: 'pizza' },

  // Loaded Fries
  { id: 'fries-sm', name: 'Hand Cut Fries - Small', price: 5, description: 'Crispy hand-cut fries', category: 'fries' },
  { id: 'fries-lg', name: 'Hand Cut Fries - Large', price: 8, description: 'Large portion of hand-cut fries', category: 'fries' },
  { id: 'garlic-parmesan', name: 'Garlic Parmesan Fries', price: 10, description: 'Tossed with garlic parmesan sauce & old bay seasoning', category: 'fries' },
  { id: 'crabby-fries', name: 'Crabby Fries', price: 10, description: 'With BOOYAH! cheddar cheese sauce & old bay seasoning', category: 'fries' },
  { id: 'buffalo-chicken-fries', name: 'Buffalo Chicken Cheese Fries', price: 10, description: 'Topped with buffalo chicken and cheese', category: 'fries' },
  { id: 'bbq-bacon-fries', name: 'BBQ Bacon Cheddar Ranch Fries', price: 10, description: 'BBQ sauce, bacon, cheddar & ranch', category: 'fries' },
  { id: 'sriracha-bacon', name: 'Sriracha Bacon Cheese Fries', price: 10, description: 'Sriracha, bacon & melted cheese', category: 'fries' },
  { id: 'chili-cheese', name: 'Chili Cheese Fries', price: 10, description: 'Loaded with chili and melted cheese', category: 'fries' },

  // Salads
  { id: 'boneless-salad', name: 'Boneless Bite Salad', price: 13, description: 'Mixed greens, tomato, cucumber, herb croutons. Our famous homemade bites, crisp iceberg lettuce, cucumbers', category: 'salads' },
  { id: 'shrimp-avocado', name: 'Shrimp & Avocado Salad', price: 13, description: 'Grilled shrimp, avocado, English cucumber, mixed greens, creamy dressing', category: 'salads' },
  { id: 'garden-salad', name: 'Garden Salad', price: 10, description: 'Lettuce, tomato, onion, cucumber, croutons', category: 'salads' },
  { id: 'add-chicken', name: 'Add Grilled Chicken', price: 4, description: 'Add to any salad', category: 'salads' },
  { id: 'add-shrimp', name: 'Add Grilled Shrimp (10)', price: 7, description: 'Add to any salad', category: 'salads' },

  // Mac & Cheese
  { id: 'buffalo-mac', name: 'Buffalo Chicken Mac & Cheese', price: 13, description: 'Crispy bites, buffalo sauce, blue cheese crumbles over our creamy mac & cheese', category: 'mac' },
  { id: 'bbq-mac', name: 'BBQ Pulled Pork Mac', price: 13, description: 'Slow cooked pulled pork, BBQ sauce, crispy onion straws over our creamy mac & cheese', category: 'mac' },
  { id: 'philly-mac', name: 'Philly Cheesesteak Mac', price: 13, description: 'Shaved beef, mushrooms, onions & green peppers over our creamy mac & cheese', category: 'mac' },

  // Milkshakes
  { id: 'milkshake', name: 'Hand Spun Milkshake', price: 7, description: '2 ingredients included, whipped cream & cherry', category: 'shakes' },
  { id: 'seasonal-sundae', name: 'Grab & Go Seasonal Sundae', price: 7.5, description: 'Over 20 unique flavors to choose from', category: 'shakes' },
  { id: 'ice-cream-sandwich', name: 'Ice Cream Sandwich', price: 3, description: 'Single ice cream sandwich', category: 'shakes' },
  { id: 'ice-cream-pack', name: 'Ice Cream Sandwich (6 Pack)', price: 13, description: 'Pack of 6 ice cream sandwiches', category: 'shakes' },

  // Kids
  { id: 'kids-mac', name: 'Creamy Mac & Cheese', price: 10, description: 'Served with fries or juice box', category: 'kids' },
  { id: 'kids-burger', name: 'Cheeseburger', price: 10, description: 'Kids size with fries or juice box', category: 'kids' },
  { id: 'kids-bites', name: 'Chicken Bites', price: 10, description: 'Served with fries or juice box', category: 'kids' },
  { id: 'kids-fries', name: 'Chicken Fries', price: 10, description: 'Served with fries or juice box', category: 'kids' },
  { id: 'kids-grilled', name: 'Grilled Cheese', price: 10, description: 'Served with fries or juice box', category: 'kids' },
  { id: 'kids-dog', name: 'Hot Dog', price: 10, description: 'Served with fries or juice box', category: 'kids' },
];

const categoryTabs = [
  { id: 'starters', label: 'Starters', icon: UtensilsCrossed },
  { id: 'chicken', label: 'Chicken & Wings', icon: Drumstick },
  { id: 'burgers', label: 'Burgers', icon: Flame },
  { id: 'pizza', label: 'Pizza', icon: Pizza },
  { id: 'fries', label: 'Loaded Fries', icon: CookingPot },
  { id: 'salads', label: 'Salads', icon: Salad },
  { id: 'mac', label: 'Mac & Cheese', icon: Sandwich },
  { id: 'shakes', label: 'Milkshakes', icon: IceCreamCone },
  { id: 'kids', label: 'Kids Menu', icon: Sandwich },
];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const { addItem } = useCart();

  const filteredItems = menuData.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
    });
    toast.success(`${item.name} added to cart!`, {
      description: `$${item.price.toFixed(2)}`,
    });
  };

  return (
    <section id="menu" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Full Menu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Order Your Favorites
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            Browse our complete menu and add items to your cart for easy online ordering
          </p>
        </div>

        {/* Category Tabs - Scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap font-semibold text-sm transition-all ${
                  activeCategory === tab.id
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-white font-bold text-base group-hover:text-primary transition-colors truncate">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-sm mt-1 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.badge && (
                      <Badge className="bg-primary/20 text-primary border-0 text-xs shrink-0">
                        {item.badge}
                      </Badge>
                    )}
                    <span className="text-primary font-bold text-lg shrink-0">
                      ${item.price.toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleAddToCart(item)}
                className="shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/40">No items found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
