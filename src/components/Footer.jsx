// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Mail } from 'lucide-react';

// function Footer() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <footer className="bg-blue-900 text-white py-10 px-6 mt-20">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
//           {/* Branding */}
//           <div>
//             <h3 className="text-xl font-semibold mb-3">Fourways secondhand clothes</h3>
//             <p className="text-sm text-blue-200">
//               Handmade with passion. Designed to inspire. Beaded with love.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/" className="hover:underline">Home</Link></li>
//               <li><Link to="/shop" className="hover:underline">Shop</Link></li>
//               <li><Link to="/blog" className="hover:underline">Blog</Link></li>
//               <li><Link to="/about" className="hover:underline">About</Link></li>
//               <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//               <li><button onClick={() => setShowModal(true)} className="hover:underline">Terms & Returns</button></li>
//             </ul>
//           </div>

//           {/* Contact + Social */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Connect with Us</h4>
//             <div className="flex justify-center sm:justify-start gap-4 mb-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
//                 <Facebook />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
//                 <Instagram />
//               </a>
//               <a href="mailto:info@beadworks.com" className="hover:text-blue-300">
//                 <Mail />
//               </a>
//             </div>
//             <p className="text-sm text-blue-200">info@beadworks.com</p>
//           </div>
//         </div>

//         <div className="border-t border-blue-700 mt-10 pt-4 text-sm text-blue-300 text-center">
//           &copy; {new Date().getFullYear()} Fourways secondhand clothes. All rights reserved.
//         </div>
//       </footer>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full shadow-lg relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-4 text-xl font-bold text-grey-700 hover:text-red-500"
//             >
//               ×
//             </button>
//             <h2 className="text-lg font-bold mb-4">Terms of Service & Returns</h2>
//             <p className="text-sm mb-3">
//               All items are handmade with care. Orders are processed within 2–3 business days. Due to the custom nature of our products, we only accept returns for defective or damaged items.
//             </p>
//             <p className="text-sm">
//               If you have any issues with your order, please contact us within 7 days of delivery. Returns must be unused and in original packaging. Shipping costs are non-refundable.
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-blue-900 text-white py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-wide">Pak Fashion</h3>
            <p className="text-sm text-blue-300 max-w-xs mx-auto sm:mx-0 leading-relaxed">
              Clothes designed with passion, to inspire. Made with love.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Home', 'Shop', 'Blog', 'About', 'Contact'].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {page}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="hover:text-blue-400 transition-colors focus:outline-none"
                >
                  Terms & Returns
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact + Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect with Us</h4>
            <div className="flex justify-center sm:justify-start gap-5 mb-4">
              {[{
                href: 'https://facebook.com',
                icon: <Facebook />,
                label: 'Facebook'
              }, {
                href: 'https://instagram.com',
                icon: <Instagram />,
                label: 'Instagram'
              }, {
                href: 'mailto:info@pakfashion.com',
                icon: <Mail />,
                label: 'Email'
              }].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-700 transition text-white shadow-md"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-blue-300 font-mono select-all">info@pakfashion.com</p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-6 text-sm text-blue-300 text-center">
          &copy; {new Date().getFullYear()} Pak Fashion. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-red-600 transition focus:outline-none"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-5 text-gray-900">Terms of Service & Returns</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All items are handmade with care. Orders are processed within 2–3 business days. Due to the custom nature of our products, we only accept returns for defective or damaged items.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you have any issues with your order, please contact us within 7 days of delivery. Returns must be unused and in original packaging. Shipping costs are non-refundable.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
