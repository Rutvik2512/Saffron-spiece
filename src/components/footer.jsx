function footer(){
    return(
        <div className=" w-full h-50 bg-amber-950 flex justify-between">
            <div className=" content-center-safe">
                <div className="text-white pt-10 pl-10 font-serif font-semibold ">🍽️ Saffron & Spice</div>
                <p className="pt-4 pl-10 text-amber-100">Authentic Indian dining since 1999. Made <br></br>with tradition, spice, and heart — right here<br></br> in Ahmedabad.</p>
            </div>
            <div className="px-80 pt-9 content-center-safe ">
                <div className="text-white">Navigate</div>
             <div className="text-amber-100 pt-3 gap-1"> 
                 <a href=" /"><div>Home</div></a>
                <a href="Menu"><div>Menu</div></a>
                <a href="Offers"><div>Offers</div></a>
                <a href="Contact"><div>Contact</div></a>
                </div> 
            </div>
            <div className="content-center-safe  pr-15">
                <div className="text-white">CONTACT</div>
                <div className="text-amber-100 mt-3">
                    +91 98765 43210<br></br>
hello@saffronandspice.in<br></br>
Navrangpura, Ahmedabad
                </div>
            </div>
        </div>
    )
}
export default footer;