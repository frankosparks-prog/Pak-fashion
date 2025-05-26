import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Cart Items */}
      <section className="lg:col-span-2 space-y-6">
        <h2 className="text-3xl font-bold text-blue-900 border-b pb-4">Your Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is currently empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg border"
              />
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">{item.name}</h3>
                  <p className="text-blue-800 font-semibold mt-1">ksh {item.price.toFixed(2)}</p>
                  <p className="text-gray-500 mt-2 text-sm line-clamp-2">{item.description}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-medium text-blue-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 text-blue-600 hover:bg-blue-100 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Order Summary */}
      <aside className="bg-white shadow-sm rounded-xl p-6 h-fit sticky top-24">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-3">Order Summary</h3>

        <div className="flex justify-between text-lg font-semibold text-blue-800 mb-6">
          <span>Subtotal</span>
          <span>ksh {subtotal.toFixed(2)}</span>
        </div>

        <button
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
          className={`w-full py-3 rounded-full text-white text-lg font-semibold transition ${
            cartItems.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-700 hover:bg-blue-800'
          }`}
        >
          Proceed to Checkout
        </button>
      </aside>
    </div>
  );
}

export default Cart;


// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Trash2, Plus, Minus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate

// function Cart() {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();  // Initialize useNavigate
  
//   // Calculate subtotal
//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   // Checkout function
//   const handleCheckout = () => {
//     if (cartItems.length === 0) {
//       alert('Your cart is empty!');
//     } else {
//       // Navigate to checkout page (adjust path if needed)
//       navigate('/checkout');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-16 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-blue-800">Your Cart 🛒</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border p-4 rounded-md shadow-sm bg-white"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-blue-900">{item.name}</h3>
//                   <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
//                   {/* Product Description */}
//                   <p className="text-sm text-gray-500 mt-1">{item.description}</p>

//                   <div className="flex items-center mt-2 space-x-2">
//                     <button
//                       onClick={() => updateQuantity(item.id, -1)}
//                       className="p-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       <Minus size={16} />
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, 1)}
//                       className="p-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       <Plus size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-600 hover:text-red-800"
//               >
//                 <Trash2 size={20} />
//               </button>
//             </div>
//           ))}

//           {/* Cart Summary and Checkout */}
//           <div className="flex justify-between items-center pt-6 border-t">
//             <p className="text-lg font-bold text-blue-800">
//               Subtotal: ksh {subtotal.toFixed(2)}
//             </p>
//             <button
//               onClick={handleCheckout}  // Trigger checkout
//               className={`px-6 py-2 rounded ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-800'}`}
//               disabled={cartItems.length === 0}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;


