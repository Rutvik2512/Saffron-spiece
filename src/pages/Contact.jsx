function Contact(){
    return(
        <div className="h-150  pt-10 pl-10 flex justify-between bg-amber-50">
            <div>
            <p className="font-semibold">Find Us</p>
            <p className="text-3xl font-semibold font-serif mt-2 text-green-950">Come Dine with Us</p>
            <p className="mt-2 text-amber-800">
                We'd love to have you. Walk-ins welcome, reservations<br></br> preferred on weekends.
            </p>
            <div className="flex mt-5 ">
                <div>📍</div>
                <div className="ml-5">
                    <p className="uppercase">Address</p>
                    <p>
                        12, Navrang Circle, Navrangpura, <br></br>Ahmedabad — 380009
                    </p>
                </div>
            </div >
            <div className="flex mt-2 ">
                <div>📞</div>
                <div className="ml-3">
                    <p className="uppercase">Phone</p>
                    <p>+91 8780221863</p>
                </div>
            </div>
            <div className="flex mt-2 ">
                <div>✉️</div>
                <div className="ml-3">
                    <p className="uppercase">email</p>
                    <p>hello@saffronandspice.in</p>
                </div>
            </div>
            </div>
            <div className="mr-20">
                <p className="uppercase text-sm font-semibold text-amber-500">Opening Hours</p>
                <table className=" mt-5 ">
                    
                    
                     <tr >
                        <td>MONDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>
                    
                    <tr >
                        <td>TUESDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>

                    <tr >
                        <td>WEDNESDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>
                    <tr >
                        <td>THURSDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>
                    <tr >
                        <td>FRIDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>
                    <tr >
                        <td>SATURDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>
                    <tr >
                        <td>SUNDAY</td>
                        <td>11:00 AM – 10:30 PM</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Contact;