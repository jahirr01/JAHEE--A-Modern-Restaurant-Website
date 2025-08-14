import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault(); // Prevents the default form submission (page refresh)
        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/v1/reservation/send",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    date,
                    time
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            );
            toast.success(data.message);
            
            // Reset form fields
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");

            // Navigate to the success page after a successful reservation
            navigate("/success"); 

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src='reservation.png' alt='res' />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>

                        {/* The onSubmit handler is moved here to the <form> tag */}
                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type="text" // Corrected from 'action="text"'
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='email_tag'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <button type='submit'>
                                Reserve Now {" "}
                                <span>
                                    <HiOutlineArrowNarrowRight />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;