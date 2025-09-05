import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer">

                <img className="shape" src="/images/shape-pattern.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 info_color">
                            <div className="footer-info-area">
                                <div className="footer-logo">
                                    <Link to="/" className="logo-link">
                                        <img src="https://tracequill.com/assets/img/logoclr.png" alt={import.meta.env.VITE_SITE_NAME} />
                                        {/* <img src="/img/our_logo/logo.png" alt={import.meta.env.VITE_SITE_NAME} /> */}
                                    </Link>
                                </div>
                                <div className="text">
                                    <span><i className="fas fa-map-marker-alt" style={{ color: "rgba(234, 223, 18, 0.7)" }}> Find Us : </i>&emsp;Raheja Mindspace, Hi-tech City, Madhapur, Near DELL, Hyderabad - 500081</span>

                                </div>
                                <div className="text">
                                    <span><i className="fas fa-map-marker-alt" style={{ color: "rgba(234, 223, 18, 0.7)" }}> Find Us : </i>&emsp;House No 12, Ajanta Path, Basisthpur, Guwahati, Assam -781028</span>

                                </div>
                                <p className="footer_line"><i className="fas fa-phone fa-flip-horizontal"></i>&emsp;{import.meta.env.VITE_SITE_CONTACT}</p>
                                <p className="footer_line"><i className="fab fa-whatsapp"></i>&emsp;{import.meta.env.VITE_SITE_CONTACT}</p>
                                {/* <p className="footer_line"><i className="fas fa-envelope-open-text"></i>&emsp;Info@codechroma.com</p> */}
                                <p className="footer_line"><i className="fas fa-envelope-open-text"></i>&emsp;{import.meta.env.VITE_SITE_EMAIL} </p>

                                <div className="fotter-social-links">
                                    <h3>Connect With Us</h3>
                                    <ul>
                                        <li>
                                            <Link to={import.meta.env.VITE_FACEBOOK_URL || "#"} target="_blank" className="facebook" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.VITE_TWITTER_URL || "#"} target="_blank" className="twitter" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.VITE_LINKEDIN_URL || "#"} target="_blank" className="linkedin" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.VITE_INSTAGRAM_URL || "#"} target="_blank" className="dribbble" rel="noopener noreferrer">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.VITE_YOUTUBE_URL || "#"} target="_blank" className="dribbble" rel="noopener noreferrer">
                                                <i className="fab fa-youtube"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={import.meta.env.VITE_WHATSAPP_URL || "#"} target="_blank" className="linkedin" rel="noopener noreferrer">
                                                <i className="fab fa-whatsapp"></i>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 Footer_head info_color1">
                            <h3>MLM Plans<br /><span>we already served</span></h3>

                            <p><Link to="/plan/binary"><i className="fas fa-caret-right"></i>&emsp;Binary Plan</Link></p>
                            <p><Link to="/plan/generation"><i className="fas fa-caret-right"></i>&emsp;Generation Plan</Link></p>
                            <p><Link to="/plan/matrix"><i className="fas fa-caret-right"></i>&emsp;Matrix Plan</Link></p>
                            <p><Link to="/plan/singleleg"><i className="fas fa-caret-right"></i>&emsp;Single Leg Plan</Link></p>
                            <p><Link to="/plan/board"><i className="fas fa-caret-right"></i>&emsp;Board Plan</Link></p>
                            <p><Link to="/plan/autopool"><i className="fas fa-caret-right"></i>&emsp;Autopool Plan</Link></p>
                            <p><Link to="/plan/crowdfunding"><i className="fas fa-caret-right"></i>&emsp;Crowd Funding Plan</Link></p>
                            <p><Link to="/plan/cryptocurrency"><i className="fas fa-caret-right"></i>&emsp;Cryptocurrency Plan</Link></p>
                            <p><Link to="/plan/adview"><i className="fas fa-caret-right"></i>&emsp;Ad View MLM Plan</Link></p>

                        </div>
                        <div className="col-md-4 Footer_head_find Footer_head info_color1">
                            <h3>Know More<br /><span>About Us</span></h3>
                            <p><Link to="/about"><i className="fas fa-chevron-circle-right"></i>&emsp;Know Who we Are!</Link></p>
                            <p><i className="fas fa-chevron-circle-right"></i>&emsp;Blogs</p>
                            <p><Link to="/contact"><i className="fas fa-chevron-circle-right"></i>&emsp;Contact Us</Link></p>
                            <p><Link to="/privacy"  ><i className="fas fa-chevron-circle-right"></i>&emsp;Privacy Policy</Link></p>
                            <p><Link to="/terms"  ><i className="fas fa-chevron-circle-right"></i>&emsp;Terms and Conditions</Link></p>

                            <div className="fotter-social-links">
                                <h3>They Recognize Us</h3>
                                <div className="d-flex footer-p-logo">
                                    <div><Link to="#" target="_blank"><img src="/img/logo/other/1.jpg" alt="Partner" /></Link></div>
                                    <div><Link to="#" target="_blank"><img src="/img/logo/other/2.jpg" alt="Partner" /></Link></div>
                                    <div><Link to="#" target="_blank"><img src="/img/logo/other/3.jpg" alt="Partner" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copy-bg row">
                    <div className="col-md-6 text-center">
                        <p>Copyright © 2025. All rights reserved
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <p>We accept<img src="/img/payment/all1.png" alt="payment Option" /></p>
                    </div>
                </div>
            </footer >
            {/* <!-- ====================Footer Section end ========================---> */}

            {/* <!-- Back to Top Start --> */}
            <div className="bottomtotop">
                <i className="fa fa-chevron-right"></i>
            </div>
        </>
    )
}

export default Footer