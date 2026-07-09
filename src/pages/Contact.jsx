function Contact() {
  return (
    <section className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase text-amber-600 font-semibold tracking-widest">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-green-950 mt-3">
            Come Dine with Us
          </h2>

          <p className="text-amber-800 mt-4 max-w-2xl mx-auto">
            We'd love to have you. Walk-ins are always welcome,
            and reservations are recommended during weekends.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex items-start gap-4 mb-8">
              <span className="text-3xl">📍</span>

              <div>
                <h3 className="font-bold uppercase text-gray-700">
                  Address
                </h3>

                <p className="text-gray-600 mt-2">
                  12, Navrang Circle,
                  <br />
                  Navrangpura,
                  <br />
                  Ahmedabad - 380009
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <span className="text-3xl">📞</span>

              <div>
                <h3 className="font-bold uppercase text-gray-700">
                  Phone
                </h3>

                <p className="text-gray-600 mt-2">
                  +91 8780221863
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">✉️</span>

              <div>
                <h3 className="font-bold uppercase text-gray-700">
                  Email
                </h3>

                <p className="text-gray-600 mt-2">
                  hello@saffronandspice.in
                </p>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="uppercase text-amber-600 font-bold text-lg mb-6">
              Opening Hours
            </h3>

            <table className="w-full">

              <tbody>

                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day) => (
                  <tr
                    key={day}
                    className="border-b border-gray-200"
                  >
                    <td className="py-4 font-semibold text-gray-700">
                      {day}
                    </td>

                    <td className="py-4 text-right text-gray-600">
                      11:00 AM – 10:30 PM
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;