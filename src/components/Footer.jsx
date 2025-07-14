// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Mail } from 'lucide-react';

// function Footer() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <footer className="bg-black text-white py-12 px-6 mt-20">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
//           {/* Branding */}
//           <div>
//             <h3 className="text-2xl font-bold mb-3 tracking-wide text-yellow-500">Pak Fashions</h3>
//             <p className="text-sm text-gray-400 max-w-xs mx-auto sm:mx-0 leading-relaxed">
//               Clothes designed with passion, to inspire. Made with love.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <nav>
//             <h4 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h4>
//             <ul className="space-y-3 text-sm font-medium">
//               {['Home', 'Shop', 'Blog', 'About', 'Contact', 'FAQs', 'Testimonials'].map((page) => (
//                 <li key={page}>
//                   <Link
//                     to={`/${page.toLowerCase()}`}
//                     className="hover:text-yellow-500 transition-colors"
//                   >
//                     {page}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <button
//                   onClick={() => setShowModal(true)}
//                   className="hover:text-yellow-500 transition-colors focus:outline-none"
//                 >
//                   Terms & Returns
//                 </button>
//               </li>
//             </ul>
//           </nav>

//           {/* Contact + Social */}
//           <div>
//             <h4 className="text-xl font-semibold mb-4 text-yellow-400">Connect with Us</h4>
//             <div className="flex justify-center sm:justify-start gap-5 mb-4">
//               {[
//                 {
//                   href: 'https://facebook.com',
//                   icon: <Facebook />,
//                   label: 'Facebook'
//                 },
//                 {
//                   href: 'https://instagram.com',
//                   icon: <Instagram />,
//                   label: 'Instagram'
//                 },
//                 {
//                   href: 'mailto:info@pakfashion.com',
//                   icon: <Mail />,
//                   label: 'Email'
//                 }
//               ].map(({ href, icon, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 hover:bg-yellow-700 transition text-white shadow-md"
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//             <p className="text-sm text-gray-400 font-mono select-all">info@pakfashion.com</p>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
//           &copy; {new Date().getFullYear()} Pak Fashions. All rights reserved.
//         </div>
//       </footer>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-red-600 transition focus:outline-none"
//               aria-label="Close modal"
//             >
//               ×
//             </button>
//             <h2 className="text-xl font-bold mb-5 text-gray-900">Terms of Service & Returns</h2>
//             <p className="text-gray-700 mb-4 leading-relaxed">
//               All items are handmade with care. Orders are processed within 2–3 business days.
//               Due to the custom nature of our products, we only accept returns for defective or
//               damaged items.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               If you have any issues with your order, please contact us within 7 days of
//               delivery. Returns must be unused and in original packaging. Shipping costs are
//               non-refundable.
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
  const [activeModal, setActiveModal] = useState(null); // 'terms', 'returns', 'privacy', 'shipping'

  const closeModal = () => setActiveModal(null);

  const modalContent = {
  terms: {
    title: 'Terms of Service',
    content: (
      <>
        <p className="mb-3">
          Welcome to <strong>Pak Fashions</strong> — your trusted fashion destination in Nanyuki. By using our platform, you agree to the following terms and conditions. We reserve the right to update these terms without prior notice.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>All items are intended for personal use only unless otherwise stated.</li>
          <li>Reselling of our products without prior written consent is strictly prohibited.</li>
          <li>All orders are subject to stock availability and confirmation of the order price.</li>
          <li>Prices and product descriptions may be updated periodically without notification.</li>
          <li>By placing an order, you confirm that all details provided are accurate and complete.</li>
        </ul>
      </>
    ),
  },

  returns: {
    title: 'Return & Exchange Policy',
    content: (
      <>
        <p className="mb-3">
          At <strong>Pak Fashions</strong>, we want you to be fully satisfied with your purchase. However, if you are not completely happy with an item, we accept returns under the following conditions:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Returns must be initiated within <strong>7 days</strong> of delivery.</li>
          <li>Items must be unused, unwashed, and in their original condition and packaging.</li>
          <li>Defective or damaged items may be returned or exchanged at no extra cost.</li>
          <li>Customized or clearance items are <strong>non-returnable</strong>.</li>
          <li>Shipping fees are non-refundable unless the error was on our end.</li>
        </ul>
        <p className="mt-3">
          For assistance, please contact our team via WhatsApp or email. We’re based in Nanyuki and can assist with quick local exchanges when necessary.
        </p>
      </>
    ),
  },

  privacy: {
    title: 'Privacy Policy',
    content: (
      <>
        <p className="mb-3">
          Your privacy is very important to us. We are committed to protecting the personal information you share with us.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>We collect minimal information needed to process orders and communicate updates.</li>
          <li>Your contact information is never sold or shared with third parties.</li>
          <li>Payment details are securely handled through trusted payment gateways.</li>
          <li>You may request to have your account or data permanently deleted at any time.</li>
          <li>Our site uses cookies to improve user experience and analytics.</li>
        </ul>
        <p className="mt-3">
          For privacy-related questions, contact us at <strong>privacy@pakfashion.com</strong>.
        </p>
      </>
    ),
  },

  shipping: {
    title: 'Shipping Information',
    content: (
      <>
        <p className="mb-3">
          We offer fast, affordable, and reliable shipping across Kenya. Orders are typically processed within <strong>24–48 hours</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Free delivery within Nanyuki town</strong> and surrounding areas.</li>
          <li>Orders outside Nanyuki are delivered within 2–5 business days via trusted courier services.</li>
          <li>Tracking information is shared via email or SMS once your order is dispatched.</li>
          <li>Shipping is free for orders above <strong>Ksh 5,000</strong> nationwide.</li>
          <li>Same-day delivery may be available within Nanyuki for orders placed before 1 PM.</li>
        </ul>
        <p className="mt-3">
          If you have specific delivery needs around Nanyuki estates or neighboring towns, contact our delivery support.
        </p>
      </>
    ),
  },
};


  return (
    <>
      <footer className="bg-black text-white py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-12 text-center sm:text-left">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-wide text-yellow-500">Pak Fashions</h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto sm:mx-0 leading-relaxed">
              Clothes designed with passion, inspired by culture. Made with love in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {['Home', 'Shop', 'Blog', 'About', 'Contact', 'FAQs', 'Testimonials'].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page.toLowerCase()}`}
                    className="hover:text-yellow-500 transition-colors"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help & Info (Modal-based) */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Help & Info</h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { key: 'shipping', label: 'Shipping Information' },
                { key: 'returns', label: 'Return Policy' },
                { key: 'privacy', label: 'Privacy Policy' },
                { key: 'terms', label: 'Terms of Service' },
              ].map(({ key, label }) => (
                <li key={key}>
                  <button
                    onClick={() => setActiveModal(key)}
                    className="hover:text-yellow-500 transition-colors focus:outline-none"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <p className="text-sm text-gray-400 mb-2">Email: info@pakfashion.com</p>
            <p className="text-sm text-gray-400 mb-4">Call/WhatsApp: +254 712 345 678</p>
            <p className="text-sm text-gray-400 mb-6">Working Hours: Mon–Sat, 9am–6pm</p>
            <div className="flex justify-center sm:justify-start gap-5">
              {[
                { href: 'https://facebook.com', icon: <Facebook />, label: 'Facebook' },
                { href: 'https://instagram.com', icon: <Instagram />, label: 'Instagram' },
                { href: 'mailto:info@pakfashion.com', icon: <Mail />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 hover:bg-yellow-700 transition text-white shadow-md"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Pak Fashions. All rights reserved.
        </div>
      </footer>

      {/* Modal Display */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-red-600 transition focus:outline-none"
              aria-label="Close modal"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-5 text-gray-900">{modalContent[activeModal].title}</h2>
            <div className="text-gray-700 text-sm leading-relaxed">
              {modalContent[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
