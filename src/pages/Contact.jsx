import React from 'react'
import { Header } from '../compo/Header'
import Footer from '../compo/Footer'

const Contact = () => {
    return (
        <>
            <Header />
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 txtcntr-small">
                            <h4 className="title">
                                Contact Us
                            </h4>
                            <ul className="breadcrumb-list">
                                <li>
                                    <a href="index-2.html">
                                        <i className="fas fa-home"></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <span><i className="fas fa-chevron-right"></i> </span>
                                </li>
                                <li>
                                    <a href="contact.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-5 img-small-sm">
                            <img src="img/svg/f1.svg" alt="about us image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <div className="row">


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

                        <div className="col-lg-4 col-md-6">
                            <div className="info-box box1 red_bg">
                                <div className="left">
                                    <div className="icon">
                                        <i className="fas fa-info"></i>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="content">
                                        <p>info@codechroma.com</p>
                                        <p>codechromaindia@gmail.com</p>
                                        <p>+91 8822955023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-form-wrapper1">
                                <h3>Have any issue? Feel free to contact with our team (24x7)</h3>
                                <form id="form-one">
                                    <div id="msg-1"></div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" name="name" className="input-field borderd" id="name" placeholder="Your Name" required="" />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="number" name="mobile" className="input-field borderd" id="email" placeholder="Enter Your Mobile Number" required="" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" className="input-field borderd textarea" rows="3" id="message" placeholder="Write your message here" required=""></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" id="submit-btn-1" className="mybtn3 mybtn-bg"> <span>Send Message</span></button>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="google_map_wrapper">
                                <iframe src="https://maps.google.com/maps?q=Raheja%20Mindspace,%20Hi-tech%20City,%20Madhapur,%20Near%20DELL,%20Hyderabad%20-%20500081&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact