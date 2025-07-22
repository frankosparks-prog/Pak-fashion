// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Menu,
//   X,
//   Home,
//   ShoppingBag,
//   Info,
//   Phone,
//   ChevronDown,
//   ShoppingCart,
//   Search,
//   Shirt,
//   Sparkles,
//   Palette,
//   Image,
// } from "lucide-react";
// import SearchModal from "./SearchModal";
// import { useCart } from "../context/CartContext"; // Importing the CartContext to access cart items

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const { cartItems } = useCart(); // Get cart items from context

//   // Calculate the total number of items in the cart
//   const totalItems = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const closeSidebar = () => {
//     setIsOpen(false);
//     setIsMobileDropdownOpen(false);
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//           {/* Left: Logo & Menu */}
//           <div className="flex items-center space-x-3">
//             <button
//               className="md:hidden text-blue-800"
//               onClick={toggleSidebar}
//             >
//               <Menu size={26} />
//             </button>
//             <Link to="/" className="flex items-center space-x-2">
//               <img
//                 src="https://img.freepik.com/free-photo/colorful-bracelets-dark-background-beads-bracelets-dark-background_1057-32146.jpg?t=st=1746705620~exp=1746709220~hmac=4aad0a957a0970ede8922b4ac3ca35825d00497c423dd869284ea39de2df30ec&w=1380"
//                 alt="logo"
//                 className="w-9 h-9 object-cover rounded-full border-2 border-blue-900"
//               />
//               <span className="text-xl font-bold text-blue-800 tracking-wide">
//                 PakFashion Nanyuki
//               </span>
//             </Link>
//           </div>

//           {/* Center: Nav Links */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <Link
//               to="/"
//               className="flex items-center px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition font-semibold"
//             >
//               <Home size={18} className="mr-1" /> Home
//             </Link>
//             <Link
//               to="/shop"
//               className="flex items-center px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition font-semibold"
//             >
//               <ShoppingBag size={18} className="mr-1" /> Shop
//             </Link>

//             {/* Categories Dropdown */}
//             <div
//               className="relative"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               <button className="flex items-center px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition font-semibold">
//                 Categories <ChevronDown size={18} className="ml-1" />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute top-10 left-0 bg-white border shadow-lg rounded-md w-52">
//                   <Link
//                     to="/category/Home & living"
//                     className="block px-4 py-2 text-blue-700 hover:bg-blue-50"
//                   >
//                     <Home size={14} className="inline mr-2" /> Home & Living
//                   </Link>
//                   <Link
//                     to="/category/Decor"
//                     className="block px-4 py-2 text-blue-700 hover:bg-blue-50"
//                   >
//                     <Palette size={14} className="inline mr-2" /> Decor
//                   </Link>
//                   <Link
//                     to="/category/Fashion"
//                     className="block px-4 py-2 text-blue-700 hover:bg-blue-50"
//                   >
//                     <Shirt size={14} className="inline mr-2" /> Fashion
//                   </Link>
//                   <Link
//                     to="/category/Accessories"
//                     className="block px-4 py-2 text-blue-700 hover:bg-blue-50"
//                   >
//                     <Sparkles size={14} className="inline mr-2" /> Accessories
//                   </Link>
//                   <Link
//                     to="/category/Art & collectibles"
//                     className="block px-4 py-2 text-blue-700 hover:bg-blue-50"
//                   >
//                     <Image size={14} className="inline mr-2" /> Art &
//                     Collectibles
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/about"
//               className="flex items-center px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition font-semibold"
//             >
//               <Info size={18} className="mr-1" /> About
//             </Link>
//             <Link
//               to="/contact"
//               className="flex items-center px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition font-semibold"
//             >
//               <Phone size={18} className="mr-1" /> Contact
//             </Link>
//           </div>

//           {/* Right: Icons - Show even on mobile */}
//           <div className="flex space-x-4 items-center">
//             <button
//               className="text-blue-700 hover:text-blue-900 transition"
//               onClick={() => setIsSearchOpen(true)}
//             >
//               <Search size={20} />
//             </button>
//             <Link
//               to="/cart"
//               className="relative flex items-center text-blue-700 hover:text-blue-900"
//             >
//               <button className="text-blue-700 hover:text-blue-900 transition">
//                 <ShoppingCart size={22} />
//               </button>
//               {totalItems > 0 && (
//                 <span className="absolute top-[-4px] right-[-6px] bg-red-500 text-white rounded-full text-xs font-semibold flex items-center justify-center w-5 h-5 md:w-5 md:h-5 shadow-md animate-pulse">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out rounded-r-2xl ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-5 border-b border-blue-200">
//           <span className="text-2xl font-extrabold text-blue-800 tracking-wide">
//             Menu
//           </span>
//           <button onClick={closeSidebar}>
//             <X size={28} className="text-blue-800 hover:text-blue-900" />
//           </button>
//         </div>

//         {/* Nav Links */}
//         <div className="flex flex-col gap-5 p-6">
//           <Link
//             to="/"
//             onClick={closeSidebar}
//             className="flex items-center text-blue-700 hover:text-blue-900 transition"
//           >
//             <Home size={20} className="mr-3" />{" "}
//             <span className="text-lg font-medium">Home</span>
//           </Link>

//           <Link
//             to="/shop"
//             onClick={closeSidebar}
//             className="flex items-center text-blue-700 hover:text-blue-900 transition"
//           >
//             <ShoppingBag size={20} className="mr-3" />{" "}
//             <span className="text-lg font-medium">Shop</span>
//           </Link>

//           {/* Dropdown */}
//           <button
//             onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
//             className="flex items-center justify-between text-blue-700 hover:text-blue-900 transition"
//           >
//             <div className="flex items-center">
//               <ChevronDown size={18} className="mr-3" />
//               <span className="text-lg font-medium">Categories</span>
//             </div>
//           </button>

//           {isMobileDropdownOpen && (
//             <div className="ml-6 flex flex-col gap-3 mt-1 text-base text-blue-700">
//               <Link
//                 to="/category/Home & living"
//                 onClick={closeSidebar}
//                 className="hover:text-blue-900"
//               >
//                 <Home size={16} className="inline mr-2" /> Home & Living
//               </Link>
//               <Link
//                 to="/category/Decor"
//                 onClick={closeSidebar}
//                 className="hover:text-blue-900"
//               >
//                 <Palette size={16} className="inline mr-2" /> Decor
//               </Link>
//               <Link
//                 to="/category/Fashion"
//                 onClick={closeSidebar}
//                 className="hover:text-blue-900"
//               >
//                 <Shirt size={16} className="inline mr-2" /> Fashion
//               </Link>
//               <Link
//                 to="/category/Accessories"
//                 onClick={closeSidebar}
//                 className="hover:text-blue-900"
//               >
//                 <Sparkles size={16} className="inline mr-2" /> Accessories
//               </Link>
//               <Link
//                 to="/category/Art & collectibles"
//                 onClick={closeSidebar}
//                 className="hover:text-blue-900"
//               >
//                 <Image size={16} className="inline mr-2" /> Art & Collectibles
//               </Link>
//             </div>
//           )}

//           <Link
//             to="/about"
//             onClick={closeSidebar}
//             className="flex items-center text-blue-700 hover:text-blue-900 transition"
//           >
//             <Info size={20} className="mr-3" />{" "}
//             <span className="text-lg font-medium">About</span>
//           </Link>

//           <Link
//             to="/contact"
//             onClick={closeSidebar}
//             className="flex items-center text-blue-700 hover:text-blue-900 transition"
//           >
//             <Phone size={20} className="mr-3" />{" "}
//             <span className="text-lg font-medium">Contact</span>
//           </Link>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* Search Modal */}
//       {/* {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />} */}
//       <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  Phone,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Search,
  Shirt,
  Sparkles,
  Baby,
  Box,
  BriefcaseBusiness,
  Footprints,
} from "lucide-react";
import SearchModal from "./SearchModal";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile sidebar
  const [dropdownOpen, setDropdownOpen] = useState(false); // categories dropdown
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeSidebar = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* ---------- TOP NAV ----------- */}
      <nav
        className={`fixed w-full z-50 top-0 left-0 transition-shadow duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* logo + mobile toggle */}
          <div className="flex items-center gap-5">
            {/* <button
              onClick={toggleSidebar}
              className="md:hidden text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              aria-label="Open menu"
            > */}
            <button
              onClick={toggleSidebar}
              className="md:hidden text-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              <Menu size={26} />
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 md:gap-3 px-2 py-1 select-none focus:outline-none focus:ring-2 focus:ring-black rounded-lg group"
              aria-label="Homepage"
            >
              <img
                src="./PakFashions-logo.jpg"
                alt="PakFashion Logo"
                className="w-10 h-10 rounded-full border-2 border-yellow-500 object-cover shadow-md group-hover:scale-105 transition hidden md:block"
              />
              
              {/* <div className="flex items-center space-x-1 md:space-x-2 text-blue-700 font-semibold text-sm md:text-base">
                <span className="hidden sm:inline">||</span>
                <span className="hidden sm:inline">-&gt;&gt;</span>
              </div> */}
              <span className="text-xl md:text-2xl font-bold text-black tracking-tight bg-yellow-400 px-3 py-1 rounded-full shadow-sm">
                Pak Fashions&nbsp;
                <span className="hidden sm:inline">Nanyuki</span>
              </span>
              {/* <span className="text-xl md:text-2xl font-extrabold text-blue-800 tracking-tight bg-blue-50 rounded-full px-3 py-1 shadow-sm">
                PakFashion&nbsp;
                <span className="hidden sm:inline">Nanyuki</span>
              </span> */}
            </Link>
          </div>

          {/* ----------- DESKTOP NAV ----------- */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-black">
            {/* <div className="hidden md:flex items-center space-x-8 font-semibold text-blue-700"> */}
            <NavLink to="/" label="Home" icon={<Home size={18} />} />
            <NavLink to="/shop" label="Shop" icon={<ShoppingBag size={18} />} />

            {/* categories dropdown */}
            <div
              className="relative"
              // onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                aria-controls="categories-menu"
              >
                Categories
                {dropdownOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              <div
                id="categories-menu"
                role="menu"
                onClick={() => setDropdownOpen(false)}
                className={`absolute bg-white shadow-lg border border-yellow-300 rounded-md w-64 mt-2 z-50 overflow-hidden
                  transition-all duration-300 ease-in-out origin-top
                  ${
                    dropdownOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }
                `}
              >
                <DropdownLink
                  to="/category/Men's Clothing"
                  label="Men's Clothing"
                  icon={<Shirt size={16} />}
                />
                <DropdownLink
                  to="/category/Women's Clothing"
                  label="Women's Clothing"
                  icon={<Sparkles size={16} />}
                />
                <DropdownLink
                  to="/category/Kids' Clothing"
                  label="Kids' Clothing"
                  icon={<Baby size={16} />}
                />
                <DropdownLink
                  to="/category/Shoes"
                  label="Shoes"
                  icon={<Footprints size={16} />}
                />
                <DropdownLink
                  to="/category/Bags & Accessories"
                  label="Bags & Accessories"
                  icon={<BriefcaseBusiness size={16} />}
                />
                <DropdownLink
                  to="/category/Clearance Sale"
                  label="Clearance Sale"
                  icon={<Box size={16} />}
                />
               
              </div>
            </div>

            <NavLink to="/about" label="About" icon={<Info size={18} />} />
            <NavLink to="/contact" label="Contact" icon={<Phone size={18} />} />
          </div>

          {/* search + cart */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
              aria-label="Open search"
            >
              <Search size={22} />
            </button>
            <Link
              to="/cart"
              className="relative text-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span
                  // className="absolute -top-1 -right-2 bg-black text-white rounded-full text-sm font-bold px-2 animate-pulse "
                  className="absolute top-[-4px] right-[-6px] bg-black text-white rounded-full text-xs font-semibold flex items-center justify-center w-5 h-5 md:w-5 md:h-5 shadow-md animate-pulse"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* ------------- MOBILE SIDEBAR ------------- */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile menu"
        role="menu"
      >
        <div className="flex justify-between items-center p-5 border-b border-yellow-300">
          <span className="text-xl font-bold text-black select-none">Menu</span>
          <button
            onClick={closeSidebar}
            className="text-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-5 text-black font-semibold">
          <NavLinkMobile
            to="/"
            label="Home"
            icon={<Home size={20} />}
            onClick={closeSidebar}
          />
          <NavLinkMobile
            to="/shop"
            label="Shop"
            icon={<ShoppingBag size={20} />}
            onClick={closeSidebar}
          />

          {/* mobile categories toggle */}
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-black font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            Categories
          </button>

          {dropdownOpen && (
            <div className="ml-6 mt-2 flex flex-col space-y-3">
              <NavLinkMobile
                to="/category/Men's Clothing"
                label="Men's Clothing"
                icon={<Shirt size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/Women's Clothing"
                label="Women's Clothing"
                icon={<Sparkles size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/Kids' Clothing"
                label="Kids' Clothing"
                icon={<Baby size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/Shoes"
                label="Shoes"
                icon={<Footprints size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/Bags & Accessories"
                label="Bags & Accessories"
                icon={<BriefcaseBusiness size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/Clearance Sale"
                label="Clearance Sale"
                icon={<Box size={18} />}
                onClick={closeSidebar}
              />
            </div>
          )}

          <NavLinkMobile
            to="/about"
            label="About"
            icon={<Info size={20} />}
            onClick={closeSidebar}
          />
          <NavLinkMobile
            to="/contact"
            label="Contact"
            icon={<Phone size={20} />}
            onClick={closeSidebar}
          />
        </nav>
      </aside>

      {/* ------------- SEARCH MODAL ------------- */}
      {/* {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />} */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

function NavLink({ to, label, icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition relative group"
    >
      {icon}
      <span>{label}</span>
      <span
        className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"
        aria-hidden="true"
      />
    </Link>
  );
}

function DropdownLink({ to, label, icon }) {
  return (
    <Link
      to={to}
      role="menuitem"
      className="flex items-center gap-2 px-4 py-2 hover:bg-yellow-100 focus:bg-yellow-100 focus:outline-none transition"
    >
      {icon}
      {label}
    </Link>
  );
}

function NavLinkMobile({ to, label, icon, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 hover:text-black text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default Navbar;
