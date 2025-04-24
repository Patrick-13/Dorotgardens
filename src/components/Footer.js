import React from "react"
import { Link } from "gatsby"
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-orchiddark text-white py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
          <Link to="/">
            <img
              src="../images/logo.png"
              alt="Dorot Gardens Logo"
              className="h-32 mb-6 mx-auto md:mx-0"
            />
          </Link>
          <p className="text-md leading-relaxed">
            Our flash-frozen pre-portioned garlic, onions, and herb packs give
            you all the flavor of fresh ingredients without the pesky chopping
            and measuring.
          </p>
        </div>

        {/* Quick Links & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-extrabold text-lg mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm font-bold">
              {[
                "Products",
                "Recipes",
                "Cooking Classes",
                "Blog",
                "FAQs",
                "Our Story",
                "Where To Find Us",
              ].map((text, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white no-underline hover:underline">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-lg mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>72 New Hook Rd., Bayonne, NJ 07002</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaEnvelope />
                <span>info@dorotgardens.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhone />
                <span>718-369-4600</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h4 className="font-extrabold text-lg mb-3">Let's Get Social</h4>
          <p className="text-sm mb-4">
            Find inspiring recipes, see exciting updates and share your dishes
            with us!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {[FaFacebookF, FaInstagram, FaTiktok, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="p-2 border rounded-full hover:bg-white hover:text-purple-800 transition"
              >
                <Icon size={32} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-400 mt-10 pt-4 text-sm font-semibold text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-2">
        <a href="#" className="text-white no-underline hover:underline">
          Privacy Policy
        </a>
        <span className="hidden md:inline-block">|</span>
        <a href="#" className="text-white no-underline hover:underline">
          Terms of Use
        </a>
      </div>
    </footer>
  )
}
