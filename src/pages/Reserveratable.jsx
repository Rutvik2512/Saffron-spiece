function Reserveatable(){
    return(
        <div className="h-200 w-full bg-amber-50 flex justify-center">
            <div className="h-140 w-130 bg-white mt-20 rounded-2xl pl-7 ">
                <p className="mt-6 font-semibold text-amber-500 ">Reserve a Table</p>
                <p className="mt-2 text-2xl font-serif font-semibold">Make your Reservation</p>
                <div>
                    <form className="flex gap-5 mt-10">
                        <input type="text" placeholder="Your name" className=" rounded-lg bg-amber-50 px-4 py-2"></input>
                        <input type="tel" placeholder="Number" className=" rounded-lg bg-amber-50 px-4 py-2"></input>
                    </form>
                    <form className="flex gap-5 mt-5">
                        <input type="Date" placeholder="" className=" rounded-lg bg-amber-50 px-9.5 py-2"></input>
                        <input type="time" placeholder="" className=" rounded-lg bg-amber-50 px-14 py-2"></input>
                    </form>
                    <input type="number" placeholder="Number of Guest" className="rounded-lg bg-amber-50 px-34 py-2 mt-5"></input>
                    <input type="text" placeholder="Number of Guest " className="rounded-lg bg-amber-50 px-34 py-15 mt-5 "></input>

                </div>
                <div>
                    <button className="bg-amber-500 rounded-4xl px-3 py-1.5 mt-5 text-white font-semibold">Book my table</button>
                </div>
            </div>
           <div>
            
           </div>
        </div>
        
    )
}
export default Reserveatable;