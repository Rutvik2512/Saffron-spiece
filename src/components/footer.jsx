import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Restaurant Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">
              🍽️ Saffron & Spice
            </h2>

            <p className="text-amber-100 leading-7">
              Authentic Indian dining since 1999. Made with
              tradition, spice, and heart — right here in
              Ahmedabad.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Navigate
            </h2>

            <div className="flex flex-col gap-2 text-amber-100">
              <Link to="/" className="hover:text-white">
                Home
              </Link>

              <Link to="/Menu" className="hover:text-white">
                Menu
              </Link>

              <Link to="/Offers" className="hover:text-white">
                Offers
              </Link>

              <Link to="/Contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact
            </h2>

            <div className="text-amber-100 leading-7">
              <p>+91 98765 43210</p>
              <p>hello@saffronandspice.in</p>
              <p>Navrangpura, Ahmedabad</p>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-amber-800 mt-8 pt-6 text-center text-amber-200 text-sm">
          © 2026 Saffron & Spice. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;