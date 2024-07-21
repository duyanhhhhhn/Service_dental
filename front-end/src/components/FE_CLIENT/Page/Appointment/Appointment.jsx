import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment.css';
import SectionTitle from '../SectionTitle/SectionTitle'; 

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
       <div className='container py-5'>
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
                        <input type="email" class="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>E-mail</label>
                        <input type="email" class="form-control" placeholder="Enter email address..." />
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

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn items-center">Book an appointment</button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;
