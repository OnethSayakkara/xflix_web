import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaTrash, FaUser, FaEnvelope, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/white.svg';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import axios from 'axios';


const stripePromise = loadStripe('pk_test_51Q5pfgJCw3RRYEaog5gUHbffGaHtT38ORPHEZBxKc1QSzHjezuqt2YsVaZ0EZnZiVo5oyA9y2QxBqHipxPmU3b9e00cAtT2GVz');

const Cart = () => {
  const { cart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    time: ''
});

const handleFormChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  });
};

const handleConfirmOrder = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  const orderData = {
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    totalPrice: calculateTotal(),
    details: cart.map(item => ({
      productName: item.productName,
      quantity: item.qoh
    }))   
  };

  try {
    const response = await axios.post('http://localhost:8080/auth/booking', orderData);
    console.log(response);
    toast.success('Invoice created successfully!');
    handleCheckout();
  } catch (error) {
    toast.error('Error creating invoice');
    console.error('Error creating invoice:', error);
  }
};

const handleCheckout = async () => {
  const stripe = await stripePromise;

  // Call the backend to create a new Checkout session
  try {
      const response = await fetch('http://localhost:8080/auth/create-checkout-session', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              totalPrice: calculateTotal(),
          }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
          sessionId: session.id,
      });

      if (result.error) {
          console.error(result.error.message);
          toast.error(result.error.message); // Display Stripe error
      }
  } catch (error) {
      console.error('Error creating checkout session:', error);
      toast.error('Error during checkout process!');
  }
};




  const incrementQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decrementQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const handleDeleteItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-[#d9a7c7] to-[#fffcdc] min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <img src={Logo} alt="logo" className='w-[200px] h-auto' />
        <div className="space-x-4">
          <button className="bg-light_brown text-white shadow-2xl font-poppins font-semibold px-4 py-2 rounded" onClick={() => navigate('/shop')}>Keep Shoping</button>
          <button onClick={clearCart} className="bg-light_brown font-poppins font-semibold shadow-2xl text-white px-4 py-2 rounded">Clear Cart</button>
        </div>
      </div>
      <h2 className="text-2xl font-poppins text-white uppercase font-semibold mb-4">Your Cart ..</h2>
      <div className="flex">
       
        <div className="w-2/3 space-y-4 h-[600px] overflow-y-scroll pr-4">
          
          {cart.map(item => (
            <div key={item.id} className="flex w-[800px] h-auto items-center bg-white font-poppins p-4 rounded-xl space-x-4 shadow-xl">
              <img src={item.productImageUrls[0]} alt={item.productName} className="w-[200px] h-[150px] rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-poppins text-blue font-semibold">{item.productName}</h2>
                <p className="text-black opacity-45 font-semibold font-poppins">LKR {item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decrementQuantity(item.id, item.quantity)} className="p-2 bg-blue text-white rounded"><FaMinus /></button>
                <span className="p-2 font-semibold font-poppins">{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id, item.quantity)} className="p-2 bg-blue text-white rounded"><FaPlus /></button>
              </div>
              <button onClick={() => handleDeleteItem(item.id)} className="p-2 bg-red text-white rounded-full"><FaTrash /></button>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-[850px] h-[500px] font-poppins  p-5  bg-white  rounded-xl ml-16">
          <div className="mb-6 flex justify-between">
            <h2 className="text-xl font-semibold leading-snug">Total</h2>
            <p className="text-lg font-semibold text-red">LKR {calculateTotal()}.00</p>
          </div>
          <form  onSubmit={handleConfirmOrder} className="space-y-4">
            {/* Name Field */}
            <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    className="w-full px-4 py-2 border rounded-md"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                    name="mobile"
                                    className="w-full px-4 py-2 border rounded-md"
                                    value={formData.mobile}
                                    onChange={handleFormChange}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    className="w-full px-4 py-2 border rounded-md"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    required
                                />

            <button type="submit" className="w-full bg-brown text-white py-3 mt-5 rounded">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;

