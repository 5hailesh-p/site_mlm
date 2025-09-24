import React, { useEffect, useState } from 'react';
import { Header } from '../compo/Header';
import Footer from '../compo/Footer';
import { Link } from 'react-router-dom';
import Breadcrumb from '../compo/Breadcrumb';

import axios from 'axios'


const Contact = () => {
    const [form, setForm] = useState({ name: '', phone: '', msg: '' });
    const [alert, setAlert] = useState({ show: false, mmessege: '', type: 'success' });

    useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => setAlert({ ...alert, show: false }), 3000);
            return () => clearTimeout(timer);
        }
    }, [alert]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://tracequill.com/MlmContact', form);
            setAlert({ show: true, message: 'Message sent successfully!', type: 'success' });
            setForm({ name: '', phone: '', msg: '' });
        } catch (error) {
            setAlert({ show: true, message: 'Failed to send message.', type: 'danger' });
        }
    }


    return (
        <>
            <Header />
            <Breadcrumb title={" Contact Us"} img={'/img/svg/f1.svg'} link={'/contact'} />




            <section className="contact" id="contact">
                <div className="container">
                    <div className="row">

                        {/* Address 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="info-box box2">
                                <div className="left">
                                    <div className="icon">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content">
                                        <p>Raheja Mindspace, Hi-tech City, Madhapur, Near DELL, Hyderabad - 500081</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Address 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="info-box box2">
                                <div className="left">
                                    <div className="icon">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content">
                                        <p>House No 12, Ajanta Path, Basisthpur, Guwahati, Assam -781028</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-4 col-md-6">
                            <div className="info-box box1 red_bg">
                                <div className="left">
                                    <div className="icon">
                                        <i className="fas fa-info"></i>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content">
                                        <p>{import.meta.env.VITE_SITE_EMAIL}</p>
                                        <p>{import.meta.env.VITE_SITE_CONTACT}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-lg-6">
                            {alert.show && (
                                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                                    {alert.message}
                                </div>
                            )}
                            <div className="contact-form-wrapper1">
                                <h3>Have any issue? Feel free to contact with our team (24x7)</h3>
                                <form onSubmit={handleSubmit} id="form-one1" method='post'>
                                    <div id="msg-1"></div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" name="name" value={form.name} onChange={handleChange} className="input-field bg-light borderd" placeholder="Your Name" pattern="^[a-zA-Z\s\-]{2,50}$" title="Name should contain only letters, spaces, or hyphens" required />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-field bg-light borderd" placeholder="Enter Your Mobile Number" required pattern="^\+?[0-9]{10,15}$" title="Phone number must be 10-15 digits, optionally starting with +" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="msg" value={form.msg} onChange={handleChange} className="input-field bg-light borderd textarea" rows="3" placeholder="Write your message here" required></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="mybtn3 mybtn-bg">
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="col-lg-6">
                            <div className="google_map_wrapper">
                                <iframe
                                    title="Company Location"
                                    src="https://maps.google.com/maps?q=Raheja%20Mindspace,%20Hi-tech%20City,%20Madhapur,%20Near%20DELL,%20Hyderabad%20-%20500081&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
