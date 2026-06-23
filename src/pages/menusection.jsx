import { useState } from "react";

// Keep your existing image imports — adjust paths if needed
import specialImg from "./assets/dal-makhani.jpg";
import chickenImg from "./assets/saffron-chicken-tikka.jpg";
import biryaniImg from "./assets/hyderabadi-biryani.jpg";
import pannerImg from "./assets/paneer-gilafi.jpg";
import butterChickenImg from "./assets/butter-chicken.jpg";
import gulabjamunImg from "./assets/gulab-jamun.jpg";
import rasmalaiImg from "./assets/rasmalai.jpg";
import shakeImg from "./assets/kesar-badam.jpg";

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
        img: butterChickenImg,
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

export default function MenuSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredItems =
        activeFilter === "All"
            ? MENU_ITEMS
            : MENU_ITEMS.filter((item) => item.category === activeFilter);

    return (
        <section className="py-10">
            {/* Filter pills */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                            activeFilter === filter
                                ? "bg-red-600 text-white shadow-md"
                                : "bg-white text-gray-700 shadow-sm hover:bg-amber-50"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Menu grid */}
            <div className="flex flex-wrap justify-center gap-8 px-4">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="rounded-t-4xl h-58 w-100 object-cover"
                        />
                        <p className="px-5 mt-7 text-red-600 font-semibold uppercase text-sm">
                            {item.tag}
                        </p>
                        <p className="text-black font-serif text-xl px-5 mt-4 font-bold">
                            {item.name}
                        </p>
                        <p className="px-5 mt-3 text-gray-600">{item.desc}</p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="px-5 font-semibold">₹{item.price}</p>
                            <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold hover:bg-amber-600">
                                Order now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredItems.length === 0 && (
                <p className="text-center text-gray-500 mt-10">
                    No items found in this category.
                </p>
            )}
        </section>
    );
}