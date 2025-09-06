import React from 'react'
import Breadcrumb from '../compo/Breadcrumb'
import { Header } from '../compo/Header'
import Footer from '../compo/Footer'

const Privacy = () => {
    return (
        <>
            <Header />
            <Breadcrumb title={" Privacy Policy"} img={'/img/svg/terms1.svg'} link={'/privacy'} />

            <section className="blog-page1 single-blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-blog-details">
                                <div className="content">
                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>1. Data Collection:</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    Codechroma software solutions is committed to protect your personal information. We don’t collect any personal information without your permission.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <a>
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>2. Web Analytics:</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    We use Web analytics for collection, reporting, and analysis of website data. Through web analytics we try to focus on understanding our user goals and improve the user's experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>3. THIRD-PARTY SERVICES</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    We do not include or offer third-party products or serviceson our website. Any collection of data or inconvenience caused by any third-party services is solelyfrom their end and we are not responsible for it.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>4. TRADEMARK PROTECTION POLICY</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    {import.meta.env.VITE_SITE_NAME}   doesn’t allow any illegal use of our trademark rights andif found legal actions can be taken. It comprises our brand logo, slogan, etc.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>5. ANTI-SPAM POLICY</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    {import.meta.env.VITE_SITE_NAME}    does not encourage email spams orpromotions without user consent.We hate spams as much as you do.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>6. Privacy Policy Changes</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    Changes to our Privacy Policy may occur in regular intervals. We highlyrecommend our visitors to check for any changes in our Policy regularly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>7. Contact information</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <p>
                                                    For any questions and suggestions about our Privacy Policy or Services,feel free to contact us at http://www.comechroma.com/contact
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Privacy