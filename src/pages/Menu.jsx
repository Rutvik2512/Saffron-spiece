import shutterstockingImg from '../assets/shutterstock_2262574417.jpg'
import shakeImg from '../assets/shake.jpg'
import biryaniImg from '../assets/Biryani.jpeg'
import chickenImg from '../assets/chicken.jpg'
import gulabjamunImg from '../assets/gulab-jamun.jpg'
import pannerImg from '../assets/panner.webp'
import specialImg from '../assets/special-dish.webp'
import butterchickenImg from '../assets/butterchicken.jpg'
import rasmalaiImg from '../assets/rasmalai.webp'
import { useState } from 'react'

const FILTERS = ["All", "Starters", "Mains", "Desserts", "Beverages"];

const MENU_ITEMS = [
    {
        id: 1,
        category: "Mains",
        tag: "Chef's Special",
        img: specialImg,
        name: "Dal Makhani Royale",
        desc: "Slow-cooked black lentils simmered overnight in tomato gravy, finished with cream and butter.",
        price: 320,
    },
    {
        id: 2,
        category: "Starters",
        tag: "Tandoor",
        img: chickenImg,
        name: "Saffron Chicken Tikka",
        desc: "Tender chicken marinated in saffron-yogurt spice blend, grilled in a traditional clay oven.",
        price: 480,
    },
    {
        id: 3,
        category: "Mains",
        tag: "Biryani",
        img: biryaniImg,
        name: "Hyderabadi Dum Biryani",
        desc: "Aged basmati rice layered with slow-cooked mutton, fried onions, and aromatic whole spices.",
        price: 550,
    },
    {
        id: 4,
        category: "Starters",
        tag: "Starter",
        img: pannerImg,
        name: "Paneer Gilafi Seekh",
        desc: "Cottage cheese seekh kebab wrapped in colourful bell peppers, chargrilled.",
        price: 360,
    },
    {
        id: 5,
        category: "Mains",
        tag: "Mains",
        img: butterchickenImg,
        name: "Butter Chicken Masala",
        desc: "Classic chicken curry simmered in a velvety tomato-butter gravy with warm spices.",
        price: 420,
    },
    {
        id: 6,
        category: "Desserts",
        tag: "Dessert",
        img: gulabjamunImg,
        name: "Gulab Jamun Lava",
        desc: "Warm gulab jamun with a molten rose syrup core, paired with saffron ice cream.",
        price: 200,
    },
    {
        id: 7,
        category: "Desserts",
        tag: "Dessert",
        img: rasmalaiImg,
        name: "Rasmalai Delight",
        desc: "Soft cottage cheese dumplings soaked in chilled saffron-cardamom milk.",
        price: 250,
    },
    {
        id: 8,
        category: "Beverages",
        tag: "Beverages",
        img: shakeImg,
        name: "Kesar Badam Sharbat",
        desc: "Chilled almond and saffron milk blended with rose water and pistachios.",
        price: 150,
    },
];

function Menu(){
    const [activeFilter, setActiveFilter] = useState("All");
    
        const filteredItems =
            activeFilter === "All"
                ? MENU_ITEMS
                : MENU_ITEMS.filter((item) => item.category === activeFilter);
    return (
  <div className="bg-amber-50 min-h-screen py-12">

    <div className="max-w-7xl mx-auto px-5">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-amber-600 text-lg font-semibold">
          Our Menu
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-3">
          Crafted with Spice & Care
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">

        {FILTERS.map((filter) => (

          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 sm:px-6 py-2 rounded-full font-semibold duration-300 ${
              activeFilter === filter
                ? "bg-red-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-amber-500 hover:text-white shadow"
            }`}
          >
            {filter}
          </button>

        ))}

      </div>

      {/* Menu Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredItems.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">

              <p className="text-red-600 font-semibold uppercase text-sm tracking-wide">
                {item.tag}
              </p>

              <h3 className="text-2xl font-serif font-bold mt-2">
                {item.name}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-6">

                <span className="text-xl font-bold text-gray-800">
                  ₹{item.price}
                </span>

                <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition">
                  Order Now
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {filteredItems.length === 0 && (
        <div className="text-center mt-12">

          <p className="text-gray-500 text-lg">
            No items found in this category.
          </p>

        </div>
      )}

    </div>

  </div>
);
}
export default Menu;