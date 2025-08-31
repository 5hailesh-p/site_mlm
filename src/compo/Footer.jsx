

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
                                    <a href="/" className="logo-link">
                                        <img src="/img/our_logo/logo.png" alt={import.meta.env.VITE_SITE_NAME} />
                                    </a>
                                </div>
                                <div className="text">
                                    <span><i className="fas fa-map-marker-alt" style={{ color: "rgba(234, 223, 18, 0.7)" }}> Find Us : </i>&emsp;Raheja Mindspace, Hi-tech City, Madhapur, Near DELL, Hyderabad - 500081</span>

                                </div>
                                <div className="text">
                                    <span><i className="fas fa-map-marker-alt" style={{ color: "rgba(234, 223, 18, 0.7)" }}> Find Us : </i>&emsp;House No 12, Ajanta Path, Basisthpur, Guwahati, Assam -781028</span>

                                </div>
                                <p className="footer_line"><i className="fas fa-phone fa-flip-horizontal"></i>&emsp;{import.meta.env.VITE_SITE_CONTACT}</p>
                                <p className="footer_line"><i className="fab fa-whatsapp"></i>&emsp;{import.meta.env.VITE_SITE_CONTACT}</p>
                                <p className="footer_line"><i className="fas fa-envelope-open-text"></i>&emsp;Info@codechroma.com</p>
                                <p className="footer_line"><i className="fas fa-envelope-open-text"></i>&emsp;codechromamlm@gmail.com</p>

                                <div className="fotter-social-links">
                                    <h3>Connect With Us</h3>
                                    <ul>
                                        <li>
                                            <a href={import.meta.env.VITE_FACEBOOK_URL || "#"} target="_blank" className="facebook" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={import.meta.env.VITE_TWITTER_URL || "#"} target="_blank" className="twitter" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={import.meta.env.VITE_LINKEDIN_URL || "#"} target="_blank" className="linkedin" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={import.meta.env.VITE_INSTAGRAM_URL || "#"} target="_blank" className="dribbble" rel="noopener noreferrer">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={import.meta.env.VITE_YOUTUBE_URL || "#"} target="_blank" className="dribbble" rel="noopener noreferrer">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={import.meta.env.VITE_WHATSAPP_URL || "#"} target="_blank" className="linkedin" rel="noopener noreferrer">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 Footer_head info_color1">
                            <h3>MLM Plans<br /><span>we already served</span></h3>

                            <p><a href="plan/binary"><i className="fas fa-caret-right"></i>&emsp;Binary Plan</a></p>
                            <p><a href="plan/generation"><i className="fas fa-caret-right"></i>&emsp;Generation Plan</a></p>
                            <p><a href="plan/matrix"><i className="fas fa-caret-right"></i>&emsp;Matrix Plan</a></p>
                            <p><a href="plan/single-leg"><i className="fas fa-caret-right"></i>&emsp;Single Leg Plan</a></p>
                            <p><a href="plan/board"><i className="fas fa-caret-right"></i>&emsp;Board Plan</a></p>
                            <p><a href="plan/autopool"><i className="fas fa-caret-right"></i>&emsp;Autopool Plan</a></p>
                            <p><a href="plan/crowd-funding"><i className="fas fa-caret-right"></i>&emsp;Crowd Funding Plan</a></p>
                            <p><a href="plan/cryptocurrency"><i className="fas fa-caret-right"></i>&emsp;Cryptocurrency Plan</a></p>
                            <p><a href="plan/ad-view"><i className="fas fa-caret-right"></i>&emsp;Ad View MLM Plan</a></p>
                        </div>
                        <div className="col-md-4 Footer_head_find Footer_head info_color1">
                            <h3>Know More<br /><span>About Us</span></h3>
                            <p><a href="/about"><i className="fas fa-chevron-circle-right"></i>&emsp;Know Who we Are!</a></p>
                            <p><i className="fas fa-chevron-circle-right"></i>&emsp;Blogs</p>
                            <p><a href="/contact"><i className="fas fa-chevron-circle-right"></i>&emsp;Contact Us</a></p>
                            <p><a href="/privacy" target="_blank"><i className="fas fa-chevron-circle-right"></i>&emsp;Privacy Policy</a></p>
                            <p><a href="/terms" target="_blank"><i className="fas fa-chevron-circle-right"></i>&emsp;Terms and Conditions</a></p>

                            <div className="fotter-social-links">
                                <h3>They Recognize Us</h3>
                                <div className="d-flex footer-p-logo">
                                    <div><a href="#" target="_blank"><img src="/img/logo/other/1.jpg" alt="Partner" /></a></div>
                                    <div><a href="#" target="_blank"><img src="/img/logo/other/2.jpg" alt="Partner" /></a></div>
                                    <div><a href="#" target="_blank"><img src="/img/logo/other/3.jpg" alt="Partner" /></a></div>
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