import React, { useState } from 'react';
import axios from 'axios';
import './Appointment.css';
import SectionTitle from '../SectionTitle/SectionTitle'; 
import Swal from 'sweetalert2';
import URL from '../../../../api/api';

const Appointment = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const resetForm = () => {
        setName('');
        setAddress('');
        setPhone('');
    };

    const confirmAppointment = async (e) => {
        e.preventDefault();
        if (!name || !address || !phone) { 
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: 'All fields are required',
            });
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('phone_number', phone);
        formData.append('status', 1); 

        try {
            await axios.post(`${URL}/appointment`, formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Appointment added successfully',
            });
            resetForm();
        } catch (error) {
            let errorMessage = 'Something went wrong!';
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
            });
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
            <form  onSubmit={confirmAppointment}>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter your name..." 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter address..." 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter phone number..." 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn items-center">Book an appointment</button>
                </div>
            </form>
        </div>
    );
};

export default Appointment;
