import shutterstockingImg from '../assets/shutterstock_2262574417.jpg'
import shakeImg from '../assets/shake.jpg'
import biryaniImg from '../assets/Biryani.jpeg'
import chickenImg from '../assets/chicken.jpg'
import gulabjamunImg from '../assets/gulab-jamun.jpg'
import pannerImg from '../assets/panner.webp'
import specialImg from '../assets/special-dish.webp'

function Menu(){
    return(
        <div><div className="bg-amber-50 h-350 w-full py-10">
                        <div className="flex justify-between ">
                            <div className="px-20 mt-10 ">
                                <div className=" text-amber-600 text-lg">Our Menu</div>
                                <div className="text-4xl font-serif font-semibold mt-2">Crafted with Spice & Care</div>
                            </div>
                            
                        </div>
                    
                    <section>
                        {/* row-1 */}
                        <div className="flex justify-center py-10 gap-8">
                            {/* 1st */}
                            <div className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg">
                                <img src={specialImg} className=" rounded-t-4xl"></img>
                                <p className="px-5 mt-7 text-red-600 font-semibold">Chef's Special</p>
                                <p className="text-black font-serif text-xl px-5 mt-4 font-bold">Dal Makhani Royale</p>
                                <p className="px-5 mt-3">Slow-cooked black lentils simmered<br></br> overnight in tomato gravy, finished with<br></br> cream and butter.</p>
                                <div className="flex justify-between mt-5">
                                    <p className="px-5">₹320</p>
                                    <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold">Order now</button>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg">
                                <img src={chickenImg} className=" rounded-t-4xl h-58"></img>
                                <p className="px-5 mt-7 text-red-600 font-semibold">Tandoor</p>
                                <p className="text-black font-serif text-xl px-5 mt-4 font-bold">Saffron Chicken Tikka</p>
                                <p className="px-5 mt-3">Tender chicken marinated in saffron-yogurt<br></br> spice blend, grilled in a traditional clay oven.</p>
                                <div className="flex justify-between mt-5">
                                    <p className="px-5">₹480</p>
                                    <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold">Order now</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg">
                                <img src={biryaniImg} className=" rounded-t-4xl h-58 w-100"></img>
                                <p className="px-5 mt-7 text-red-600 font-semibold">Biryani</p>
                                <p className="text-black font-serif text-xl px-5 mt-4 font-bold">Hyderabadi Dum Biryani</p>
                                <p className="px-5 mt-3">Aged basmati rice layered with slow-cooked<br></br> mutton, fried onions, and aromatic whole<br></br> spices.
        </p>
                                <div className="flex justify-between mt-5">
                                    <p className="px-5">₹550</p>
                                    <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold">Order now</button>
                                </div>
                            </div>
                        </div>
                        {/* row-2 */}
                        <div className="flex justify-center  gap-8">
                            {/* 1st */}
                            <div className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg">
                                <img src={pannerImg} className=" rounded-t-4xl h-57 w-100"></img>
                                <p className="px-5 mt-7 text-red-600 font-semibold">Starter</p>
                                <p className="text-black font-serif text-xl px-5 mt-4 font-bold">Paneer Gilafi Seekh</p>
                                <p className="px-5 mt-3">Cottage cheese seekh kebab wrapped in <br></br>colourful bell peppers, chargrilled.</p>
                                <div className="flex justify-between mt-5">
                                    <p className="px-5">₹360</p>
                                    <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold">Order now</button>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg">
                                <img src={gulabjamunImg} className=" rounded-t-4xl"></img>
                                <p className="px-5 mt-7 text-red-600 font-semibold">Dessert</p>
                                <p className="text-black font-serif text-xl px-5 mt-4 font-bold">Gulab Jamun Lava</p>
                                <p className="px-5 mt-3">Warm gulab jamun with a molten rose syrup<br></br> core, paired with saffron ice cream.</p>
                                <div className="flex justify-between mt-5">
                                    <p className="px-5">₹200</p>
                                    <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold">Order now</button>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div className="h-120 rounded-4xl bg-white w-100 hover:bg-amber-100 shadow-lg">
                                <img src={shakeImg} className=" rounded-t-4xl"></img>
                                <p className="px-5 mt-7 text-red-600 font-semibold">Beverages</p>
                                <p className="text-black font-serif text-xl px-5 mt-4 font-bold">Kesar Badam Sharbat</p>
                                <p className="px-5 mt-3">Chilled almond and saffron milk blended<br></br> with rose water and pistachios.</p>
                                <div className="flex justify-between mt-5">
                                    <p className="px-5">₹150</p>
                                    <button className="rounded-3xl bg-amber-500 py-1 px-3 mr-5 text-white font-semibold">Order now</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    </div>
                    </div>
    )
}
export default Menu;