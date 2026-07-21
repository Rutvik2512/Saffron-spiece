import shutterstockingImg from "../assets/shutterstock_2262574417.jpg";
import shakeImg from "../assets/shake.jpg";
import biryaniImg from "../assets/Biryani.jpeg";
import chickenImg from "../assets/chicken.jpg";
import gulabjamunImg from "../assets/gulab-jamun.jpg";
import pannerImg from "../assets/panner.webp";
import specialImg from "../assets/special-dish.webp";
import {Link} from "react-router-dom";

function Home() {
  const menuItems = [
    {
      image: specialImg,
      category: "Chef's Special",
      title: "Dal Makhani Royale",
      desc: "Slow-cooked black lentils simmered overnight in tomato gravy, finished with cream and butter.",
      price: "₹320",
    },
    {
      image: chickenImg,
      category: "Tandoor",
      title: "Saffron Chicken Tikka",
      desc: "Tender chicken marinated in saffron yogurt spice blend, grilled in a traditional clay oven.",
      price: "₹480",
    },
    {
      image: biryaniImg,
      category: "Biryani",
      title: "Hyderabadi Dum Biryani",
      desc: "Aged basmati rice layered with slow-cooked mutton, fried onions and aromatic spices.",
      price: "₹550",
    },
    {
      image: pannerImg,
      category: "Starter",
      title: "Paneer Gilafi Seekh",
      desc: "Cottage cheese seekh kebab wrapped in colourful bell peppers and chargrilled.",
      price: "₹360",
    },
    {
      image: gulabjamunImg,
      category: "Dessert",
      title: "Gulab Jamun Lava",
      desc: "Warm gulab jamun with molten rose syrup core paired with saffron ice cream.",
      price: "₹200",
    },
    {
      image: shakeImg,
      category: "Beverages",
      title: "Kesar Badam Sharbat",
      desc: "Chilled almond and saffron milk blended with rose water and pistachios.",
      price: "₹150",
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* Hero Section */}

      <section className="relative">
        <img
          src={shutterstockingImg}
          alt="food"
          className="w-full h-[500px] md:h-[650px] object-cover  blur-xs"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">

          <p className="uppercase tracking-widest text-amber-300 text-sm md:text-lg">
            Authentic Indian Cuisine
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mt-4 leading-tight">
            Taste the Soul of
            <br />
            India, Tonight
          </h1>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <Link to="/menu">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold duration-300">
                Explore Menu
              </button>
            </Link>

            <Link to="/Reserve">
              <button className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full font-semibold duration-300">
                Book a Table
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* Menu Section */}

      <section className="bg-amber-50 py-16">

        <div className="max-w-7xl mx-auto px-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <div>

              <p className="text-amber-600 font-semibold">
                Our Menu
              </p>

              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">
                Crafted with Spice & Care
              </h2>

            </div>
    <Link to="/menu">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold duration-300">
                View Full Menu
              </button>
            </Link>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {menuItems.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <p className="text-red-500 font-semibold">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-serif font-bold mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7">
                    {item.desc}
                  </p>

                  <div className="flex justify-between items-center mt-6">

                    <span className="text-xl font-bold">
                      {item.price}
                    </span>

                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold duration-300">
                      Order Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;