import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CustomizeMenuForm = () => {
  // State variables for the form inputs
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');

  // Hook to handle programmatic navigation
  const navigate = useNavigate();

  // Function to handle the form submission
  const handleCustomOrder = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/custom-order/send",
        { firstName, phone, dishName, description },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      toast.success(response.data.message);
      
      // Reset form fields after a successful submission
      setFirstName('');
      setPhone('');
      setDishName('');
      setDescription('');

      // THIS IS THE CRITICAL CHANGE: Pass state to the Success page
      navigate("/success", { state: { messageType: "customMenu" } });

    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred while submitting the custom order.");
    }
  };

  return (
    <section className='customizeMenu' id='customize-menu-form'>
      <div className="container">
        <div className="banner">
          <div className="customize_menu_form_box">
            <h1>CUSTOMIZE YOUR ORDER</h1>
            <p>Tell us what you'd like to create!</p>
            
            <form onSubmit={handleCustomOrder}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name of Dish"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Describe your customized dish..."
                  rows="6"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <button type='submit'>
                Submit Request {" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="banner">
          <img src='customize-order.png' alt='Customize your menu' />
        </div>
      </div>
    </section>
  );
};

export default CustomizeMenuForm;
