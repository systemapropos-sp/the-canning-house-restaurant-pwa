import { useState, useRef, useEffect } from 'react';
import { UtensilsCrossed, Sun, Salad, Flame, Sandwich, CookingPot } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  image: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'To Share & Dip',
    icon: UtensilsCrossed,
    image: '/images/starters.jpg',
    items: [
      { name: 'Crabby Cheese Fries', price: '17', description: 'Fries tossed in old bay topped with house beer cheese & jumbo lump crab', image: '/images/crabby-fries.jpg' },
      { name: 'Spicy Shrimp', price: '16', description: 'Five succulent shrimp lightly fried & tossed in house thai chili sauce', image: '/images/starters.jpg' },
      { name: 'Thai Chili Mozz Moons', price: '12', description: 'Three breaded mozzarella moons tossed in house thai chili sauce', image: '/images/mozz-moons.jpg' },
      { name: 'Black Truffle Mac & Cheese', price: '15', description: 'House beer mac & cheese topped with parmesan, parsley, tartufi truffle oil & truffle shavings', image: '/images/truffle-mac.jpg', badge: 'Popular' },
      { name: 'Brulee PBJ', price: '14', description: 'Toasted ciabatta with peanut butter, house berry jam, bruleed banana & nut crumble', image: '/images/brulee-pbj.jpg' },
      { name: 'Catsmo Smoked Salmon Avocado Toast', price: '23', description: 'Toasted ciabatta with catsmo smoked salmon, smashed avocado, cucumber, red onion, alfalfa sprouts & lemon zest', image: '/images/salmon-toast.jpg', badge: 'Chef Pick' },
      { name: 'Sunrise Avocado Toast', price: '14', description: 'Toasted ciabatta with smashed avocado, toasted sunflower seeds, shichimi togarashi, alfalfa sprouts & lemon zest', image: '/images/salmon-toast.jpg', badge: 'Veggie' },
      { name: 'Cali Chick Ciabatta', price: '15', description: 'Smashed avocado, house chicken salad (apples, pecans, oregano, apple cider vinegar) with apricot jam', image: '/images/starters.jpg' },
      { name: 'Cauli Wings', price: '14', description: 'Buttermilk dipped & southern battered cauliflower with trio of house sauces', image: '/images/starters.jpg', badge: 'Veggie' },
      { name: 'Mini Dutch Pancake Bites', price: '8', description: 'Eight miniature dutch pancakes with powdered sugar & pure maple syrup', image: '/images/brunch.jpg' },
      { name: 'Fried Mac Balls', price: '12', description: 'House beer mac n cheese, balled and fried, served with tomato soup', image: '/images/truffle-mac.jpg' },
      { name: 'Canning Hot Sampler', price: '20', description: 'Two thai chili mozz moons, two spicy shrimp, cauli wings with dueling sauces', image: '/images/starters.jpg' },
    ],
  },
  {
    id: 'brunch',
    label: 'Brunch Bucket List',
    icon: Sun,
    image: '/images/brunch.jpg',
    items: [
      { name: 'Cheesy Breakfast Bowl', price: '13', description: 'Home fries with scrambled eggs, beer cheese & caramelized onions', image: '/images/brunch.jpg' },
      { name: 'Cajun Shrimp & Crab Breakfast Bowl', price: '28', description: 'Home fries with scrambled eggs, cajun shrimp, lump & claw crab & beer cheese', image: '/images/crabby-fries.jpg', badge: 'Premium' },
      { name: 'Canning Griddle Sando', price: '13', description: 'Cage-free eggs, cooper sharp cheese, hot honey & bacon on house brioche french toast', image: '/images/griddle-sando.jpg', badge: 'Popular' },
      { name: 'Fresh Berry Brunch', price: '17', description: 'House made waffle or french toast topped with fresh blueberries, raspberries, strawberries & blackberries with whipped cream', image: '/images/berry-brunch.jpg' },
      { name: 'Bananas Foster', price: '17', description: 'House made waffle or french toast with fresh bananas, banana nut crumble & caramel sauce', image: '/images/berry-brunch.jpg' },
      { name: 'Fried Chicken & Waffles', price: '20', description: 'Buttermilk dredged fried chicken atop a house-made waffle with hot honey butter', image: '/images/chicken-waffles.jpg', badge: 'Best Seller' },
      { name: 'French Toast or Pearl Waffle Fried Chicken Sando', price: '15', description: 'Southern style fried chicken with maple syrup & bacon on brioche french toast or pearl sugar waffles', image: '/images/chicken-waffles.jpg' },
      { name: 'The 900 Classic', price: '16', description: 'Two cage-free eggs, choice of sourdough/rye/whole wheat, applewood bacon or house sausage, house jam, black sea salt butter & OJ', image: '/images/brunch.jpg' },
      { name: 'Breakfast Bagel Sando', price: '12', description: 'Cage-free eggs, cooper sharp cheese, sriracha aioli, smashed avocado & bacon or sausage on everything bagel', image: '/images/griddle-sando.jpg' },
      { name: 'Breakfast Rito', price: '12', description: 'Cage-free eggs, cooper sharp cheese, PA maple syrup, sriracha aioli, smashed avocado & bacon or sausage', image: '/images/brunch.jpg' },
      { name: 'Brunch Burger', price: '19', description: '8oz prime cut burger, cage-free fried egg, coopers sharp, sriracha aioli, applewood bacon or house sausage on brioche roll', image: '/images/brunch-burger.jpg' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    icon: Salad,
    image: '/images/salads.jpg',
    items: [
      { name: 'Tahini Caesar Salmon', price: '24', description: 'Little gem lettuce, multicolor cherry tomatoes, cucumbers, garlic breadcrumbs, grilled atlantic salmon, house tahini caesar', image: '/images/salmon-salad.jpg', badge: 'Popular' },
      { name: 'Canning Cobb', price: '20', description: 'Romaine hearts, hardboiled egg, bacon, cashews, cherry tomatoes, organic pesto chicken, bleu cheese crumbles, bleu cheese dressing', image: '/images/salads.jpg' },
      { name: "Izzi's Ranchhouse", price: '18', description: 'Artisan lettuce with pecans, bleu cheese crumbles, grilled pesto chicken, bacon, cherry tomatoes, ranch dressing', image: '/images/salads.jpg' },
      { name: 'Falafel', price: '15', description: 'Artisan lettuce, feta, chickpeas, pickled red onion, falafel croquettes, tzatziki, lemon vinaigrette', image: '/images/salads.jpg', badge: 'Veggie' },
      { name: 'Hot Honey Power', price: '17', description: 'Little gem lettuce, diced tomatoes, cucumbers, pickled red onions, roasted garbanzo beans, pesto marinated hot honey grilled chicken, lemon vinaigrette', image: '/images/salads.jpg' },
      { name: 'Power', price: '16', description: 'Romaine hearts, diced tomatoes, cucumbers, raw onions with tuna or chicken salad (apples, apricot jam, pecans, oregano & apple cider vinegar)', image: '/images/salads.jpg' },
      { name: 'Caesar', price: '12', description: 'Little gem lettuce with parmigiano-reggiano & roasted croutons, house caesar dressing', image: '/images/salads.jpg' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    icon: Flame,
    image: '/images/burgers.jpg',
    items: [
      { name: 'O.G.', price: '16', description: "Cooper's sharp, lettuce, tomato, red & caramelized onion, pickles, house secret sauce", image: '/images/burgers.jpg' },
      { name: "Bacon N' Bleu", price: '18', description: 'Blue cheese crumbles, caramelized onion, applewood smoked bacon', image: '/images/burgers.jpg', badge: 'Popular' },
    ],
  },
  {
    id: 'sandos',
    label: 'Sandos',
    icon: Sandwich,
    image: '/images/sandos.jpg',
    items: [
      { name: 'Slow Roasted Turkey', price: '16', description: "Koch's organic turkey, roasted garlic aioli, apricot jam, cheddar, bacon & baby kale on whole wheat", image: '/images/sandos.jpg' },
      { name: 'Canning House Reuben', price: '17', description: 'Thirteen-hour IPA braised corn beef, sauerkraut, swiss cheese & russian dressing on rye', image: '/images/reuben.jpg', badge: 'Signature' },
      { name: 'Fried Chicken Sando', price: '14', description: 'Southern-style buttermilk chicken breast with lettuce, house-pickled onions & pickles, chipotle ranch on brioche', image: '/images/hot-honey-chicken.jpg' },
      { name: 'Hot Honey Fried Chicken Sando', price: '16', description: 'Buttermilk dredged fried chicken with sliced cheddar, lettuce, hot honey, garlic aioli & pickles', image: '/images/hot-honey-chicken.jpg', badge: 'Popular' },
      { name: 'Bee-L-T-A', price: '16', description: 'Applewood smoked bacon, avocado, little gem lettuce & tomato with house chipotle aioli on toasted whole wheat', image: '/images/sandos.jpg' },
      { name: 'Canning Cuban', price: '18', description: 'Black forest ham, braised CAB short rib, dijon mustard, house pickles & swiss on buttered sourdough', image: '/images/sandos.jpg' },
      { name: 'Grilled Cheese', price: '13', description: 'Provolone, swiss, cheddar & cooper cheese melted on buttered sourdough with house tomato basil bisque', image: '/images/grilled-cheese.jpg' },
      { name: 'French Dip Grilled Cheese', price: '21', description: 'Braised CAB short rib, caramelized onions, provolone & mozzarella on buttered sourdough with au jus', image: '/images/grilled-cheese.jpg', badge: 'Premium' },
      { name: 'Crabby Grilled Cheese', price: '22', description: 'Sliced cooper & white cheddar, claw & jumbo lump crab, sprinkled with old bay on buttered sourdough', image: '/images/crabby-grilled-cheese.jpg', badge: 'Premium' },
      { name: 'Tuna or Chicken Salad', price: '16', description: 'Albacore tuna or organic chicken with apples, apricot jam, pecans, oregano & apple cider vinegar on artisan lettuce, red onion & tomato on rye', image: '/images/sandos.jpg' },
      { name: 'Chicken Bacon Caesar Wrap', price: '16', description: 'Romaine hearts, organic pesto-rubbed chicken, applewood smoked bacon, roasted garlic croutons & parmigiano-reggiano in caesar wrap', image: '/images/sandos.jpg' },
      { name: 'Ham and Swiss Grilled Cheese', price: '17', description: 'Sliced black forest ham, caramelized onions, mustard & swiss on buttered sourdough', image: '/images/grilled-cheese.jpg' },
    ],
  },
  {
    id: 'sides',
    label: 'Premium Sides',
    icon: CookingPot,
    image: '/images/sides.jpg',
    items: [
      { name: 'Mac and Cheese', price: '7', description: 'Creamy house mac and cheese', image: '/images/sides.jpg' },
      { name: 'Black Truffle Parmesan Mac', price: '15', description: 'Our mac and cheese elevated with black truffle & parmesan', image: '/images/truffle-mac.jpg', badge: 'Premium' },
      { name: 'Loaded Home Fries', price: '9', description: 'Seasoned home fries with caramelized onions & beer cheese', image: '/images/sides.jpg' },
      { name: 'Mini Waffle', price: '7', description: 'Pearl sugar waffle with fresh berries', image: '/images/berry-brunch.jpg' },
      { name: 'Seasonal Fruit', price: '9', description: 'Blackberries, strawberries, blueberries, raspberries & seasonal melon', image: '/images/sides.jpg' },
      { name: 'Applewood Bacon or House Breakfast Sausage', price: '6', description: 'Choose your side of premium breakfast meat', image: '/images/sides.jpg' },
      { name: 'Truffle Parmesan Fries', price: '8', description: 'Crispy fries with truffle oil & parmesan', image: '/images/truffle-fries.jpg' },
      { name: 'French Fries', price: '5', description: 'Classic crispy french fries', image: '/images/sides.jpg' },
      { name: 'Bagel with Cream Cheese', price: '5', description: 'Everything bagel with cream cheese spread', image: '/images/sides.jpg' },
    ],
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('brunch');
  const sectionRef = useRef<HTMLDivElement>(null);
  const currentCategory = menuCategories.find(c => c.id === activeCategory) || menuCategories[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.menu-card').forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section id="menu" className="py-20 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Menu</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">Crafted with Care</h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            From farm-fresh salads to indulgent brunch favorites, every dish tells a story.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          {menuCategories.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap font-semibold text-sm transition-all ${
                  activeCategory === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Category Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 h-48 sm:h-64">
          <img src={currentCategory.image} alt={currentCategory.label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/90 via-brand-darker/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <currentCategory.icon className="w-8 h-8 text-primary mb-2" />
              <h3 className="text-white font-black text-2xl sm:text-3xl">{currentCategory.label}</h3>
              <p className="text-white/50 text-sm mt-1">{currentCategory.items.length} items</p>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div ref={sectionRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="menu-card group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.4s ease, transform 0.4s ease' }}
            >
              {/* Item Image - SPECIFIC TO THE DISH */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold">
                    {item.badge}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 text-primary font-black text-xl">
                  ${item.price}
                </span>
              </div>

              {/* Item Content */}
              <div className="p-4">
                <h4 className="text-white font-bold text-base group-hover:text-primary transition-colors leading-tight">
                  {item.name}
                </h4>
                <p className="text-white/40 text-sm mt-2 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
