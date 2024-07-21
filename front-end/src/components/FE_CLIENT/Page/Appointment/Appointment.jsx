import React from 'react';
import './Appointment.css';
import SectionTitle from '../SectionTitle/SectionTitle'; 



const Appointment = () => {
    return (
       <div className='container py-5'>
         <section className='section-bg section-common contact-section text-center'>
                <SectionTitle
                    title="Contact Us"
                    description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                />
            </section>
         <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
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
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Messages</label>
                        <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn items-center">Book an appointment</button>
                </div>
            </div>
        </form>
        </div>
    );
};

export default Appointment;