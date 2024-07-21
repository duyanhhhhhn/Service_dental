import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment.css';
import icon from '../../Layouts/img/Calling.png';
import SectionTitle from '../SectionTitle/SectionTitle'; // Sửa lại đường dẫn

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: ''
    });

    useEffect(() => {
        const getCsrfToken = async () => {
            try {
                // Fetch CSRF token
                await axios.get('/sanctum/csrf-cookie');
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        getCsrfToken();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/appointments', formData); // Sử dụng '/api/appointments'
            alert(response.data.success);
        } catch (error) {
            console.error('There was an error booking the appointment!', error);
        }
    };

    return (
        <div className='container'>
            <section className='section-bg section-common contact-section text-center'>
                <SectionTitle
                    title="Contact Us"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />
            </section>
            <form onSubmit={handleSubmit}>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            placeholder="Enter your name..." 
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            placeholder="Enter email address..." 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="phone_number" 
                            placeholder="Enter phone number..." 
                            value={formData.phone_number} 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="col-lg-6 mb-4">
                    <button type="submit" className="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6 mb-4">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Dental 24H Emergency</p>
                            <h6>01 234 567 89</h6>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Appointment;
