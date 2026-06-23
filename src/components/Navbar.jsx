import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="w-full h-30 bg-amber-50 flex justify-between border-2 border-amber-100">
            <div className=" flex justify-start">
                <div className="flex justify-start text-3xl font-black  font-serif px-8 py-11"> 🍽️ Saffron & Spice</div>
            </div>
            <div className="flex justify-center gap-7 text-lg   py-13 pl-4 ">
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                
                <Link to="/Contact">Contact</Link>
            </div>
            <div className=" flex justify-center gap-4 py-11 px-15 ">
              <Link to="/Reserve"><button className="rounded-4xl bg-amber-500 px-3 py-2 font-semibold text-white">Reserve a Table</button></Link>
               <Link to="/Aadmin">  <div className="bg-black rounded-4xl text-white py-1.5 px-5 font-semibold">Admin</div></Link>
            </div>
        </div>
    )
}
export default Navbar;