import "./assets/css/bootstrap.min.css"
import "./assets/css/fontawesome.min.css"
import "./assets/css/flaticon.css"
import "./assets/css/animate.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/aos.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/custom.css"
 
export default function Home() {
    return (
        <div>





            {/* <!-- ====================header ========================--> */}
            {/* <!-- Navebar Area start --> */}
            <header className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index-2.html">
                                    <img src="img/our_logo/2a.png" alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="mainmenu">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index-2.html">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Company
                                            </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="about.html"><i className="fas fa-chevron-right"></i> About Us</a>
                                                <a className="dropdown-item" href="client.html"><i className="fas fa-chevron-right"></i>Clients</a>
                                                <a className="dropdown-item" href="feature.html"><i className="fas fa-chevron-right"></i>Features</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="demo_site.html">Demo</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="index.html#pricing_section">Pricing</a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                MLM Plans
                                            </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="plan-binary.html"><i className="fas fa-chevron-right"></i> Binary Plan</a>
                                                <a className="dropdown-item" href="plan-generation.html"><i className="fas fa-chevron-right"></i>Generation Plan</a>
                                                <a className="dropdown-item" href="plan-matrix.html"><i className="fas fa-chevron-right"></i>Matrix Plan</a>
                                                <a className="dropdown-item" href="plan-single-leg.html"><i className="fas fa-chevron-right"></i>Single Leg Plan</a>
                                                <a className="dropdown-item" href="plan-board.html"><i className="fas fa-chevron-right"></i>Board Plan</a>
                                                <a className="dropdown-item" href="plan-autopool.html"><i className="fas fa-chevron-right"></i>Autopool Plan</a>
                                                <a className="dropdown-item" href="plan-crowd-funding.html"><i className="fas fa-chevron-right"></i>Crowd Funding Plan</a>
                                                <a className="dropdown-item" href="plan-cryptocurrency.html"><i className="fas fa-chevron-right"></i>Cryptocurrency Plan</a>
                                                <a className="dropdown-item" href="plan-ad-view.html"><i className="fas fa-chevron-right"></i>Ad View MLM Plan</a>

                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact Us</a>
                                        </li>

                                        <li className="nav-item nav-border">
                                            <a className="nav-link" href="tel:+918822955023" target="_blank"><span><i className="fas fa-phone-volume"></i>&nbsp;+918822955023</span></a>
                                        </li>


                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Navebar Area End --> */}

            {/* <!-- ================Hero Area Start======================== --> */}
            <div id="home" className="hero-area">
                <img className="shape" src="assets/images/shape-pattern.png" alt="background shape image" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex align-self-center">
                            <div className="left-content">
                                <div className="content">

                                    <p className="subtitle1 shape">100% Calculation Accuracy Guaranteed</p>
                                    <br />
                                    <h1 className="title">
                                        World's Most <span className="home-bg-blue txt-red">Reliable</span><br /><span className="home-bg-blue txt-red">MLM Software</span> With 24x7 Support Is One Click Away
                                    </h1>

                                    <br />
                                    <p className="subtitle">
                                        We deliver Best MLM software within 48 hours with dedicated server & android app.
                                    </p>
                                    <div className="links">
                                        <a href="tel:+918822955023" target="_blank" className="mybtn3 mybtn-light"><span style={{fontWeight: "550"}}><i className="fas fa-phone-volume"></i>&nbsp;Call Us</span> </a>
                                        <a href="https://wa.me/918822955023" target="_blank" className="mybtn3 mybtn-light"><span><i className="fab fa-whatsapp"></i>&nbsp;Whatsapp</span> </a>
                                        <a href="demo_site.html" target="_blank" className="mybtn3 mybtn-light"><span><i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;View Demo</span> </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 order-first order-md-last">
                            <div className="right-img">
                                <div className="discount-circle">
                                    <div className="discount-circle-inner">
                                        <div className="price price_edit">
                                            <span>Starting From</span>
                                            17,999
                                        </div>
                                    </div>
                                </div>
                                <img className="img-fluid img" src="img/dashbord/f2.png" alt="mlm softwere dashbord" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- =================Hero Area End #E32C42========================= --> */}

            {/* <!--=========================== req. demo start ===================--> */}
            <section className="about" id="about">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="box1">
                                <div className="inner-box subscribe-section">
                                    <div style={{textAlign: "center"}}>
                                        <h3 style={{lineHeight: "2.3rem"}}>Helpline for MLM Software Demo and support <span style={{color:'#D31027'}}>+918822955023</span><br /> or fill the form</h3>

                                    </div>
                                    <div className="newsletter-form-area">
                                        <form id="form-one">
                                            <div id="msg-1"></div>
                                            <div className="row">
                                                <div className="req-edit col-12 col-sm-12 col-md-6 col-lg-5">
                                                    <input type="text" required name="name" className="form-control border-red" placeholder="Please Enter Your Name" />
                                                </div>
                                                <div className="req-edit col-12 col-sm-12 col-md-6 col-lg-4">
                                                    <input type="number" required name="mobile" className="form-control border-red" placeholder="Enter Your Contact Number" />
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3" style={{marginBottom: "25px"}}>
                                                    <button type="submit"   id="submit-btn-1">
                                                        <span>Request Demo</span> <i className="far fa-paper-plane"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!--=========================== req. demo End ===================--> */}

            {/* <!-- ===========================whaybest Start ====================--> */}
            <section className="whaybest">
                <div className="container">
                    <div className="row row-one">

                        <div className="col-lg-5 d-flex">
                            <div className="about-img">
                                <img src="img/dashbord/1.png" alt="" style={{maxWidth: "20rem"}} />
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="info">
                                <h1 className="info-title">Software For All MLM Plans</h1>
                                <ul className="feature-list">

                                    <li className="text-center plan_boder">
                                        <a href="plan-binary.html">
                                            <span>1</span>
                                            <div className="content">
                                                <h4>Binary Plan</h4>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="text-center plan_boder">
                                        <a href="plan-generation.html">
                                            <span>2</span>
                                            <div className="content">
                                                <h4>Generation Plan</h4>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="text-center plan_boder">
                                        <a href="plan-matrix.html">
                                            <span>3</span>
                                            <div className="content">
                                                <h4>Matrix Plan</h4>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="text-center plan_boder">
                                        <a href="plan-single-leg.html">
                                            <span>5</span>
                                            <div className="content">
                                                <h4>Single Leg Plan</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-center plan_boder">
                                        <a href="plan-board.html">
                                            <span>6</span>
                                            <div className="content">
                                                <h4>Board Plan</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-center plan_boder">
                                        <a href="plan-autopool.html">
                                            <span>7</span>
                                            <div className="content">
                                                <h4>Autopool Plan</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-center plan_boder">
                                        <a href="plan-crowd-funding.html">
                                            <span>8</span>
                                            <div className="content">
                                                <h4>Crowd Funding Plan</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-center plan_boder">
                                        <a href="plan-cryptocurrency.html">
                                            <span>4</span>
                                            <div className="content">
                                                <h4>Cryptocurrency Plan</h4>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-center plan_boder">
                                        <a href="plan-ad-view.html">
                                            <span>9</span>
                                            <div className="content">
                                                <h4>Ad View MLM Plan</h4>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* <!-- responsive wbst start --> */}
                    <div className="row ">
                        <div className="col-lg-7">
                            <div className="info">
                                <div className="round-shape"></div>
                                <h2 className="info-title">
                                    Free Responsive Website Along With Our MLM Software
                                </h2>
                                <ul className="feature-list-edit">
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-alarm"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Fully Responsive</h4>
                                            <p>We build website which is compatible  with all devices. (Mobiles/Tablets/Laptops/Desktops)
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-speech-bubble"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Live Chat</h4>
                                            <p>Provide immediate service through easy-to-use live chat software for your website.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-camera"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Super Fast Loading</h4>
                                            <p>Performance plays a significant role in the success of any online venture, and we provide the best.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-wifi"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Promotional Tools</h4>
                                            <p>Promotional tools to communicate your company’s message across your members easily.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-5 d-flex order-first order-lg-last">
                            <div className="about-img">
                                <img src="img/dashbord/3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--=======================We are best Area end===================== --> */}

            {/* <!-- ===========================feature Start ====================--> */}
            <section className="feature" id="feature">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title">
                                <h2 className="title">Best <span className="red001">Features</span> For Your<span className="red001"> MLM Software</span></h2>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-feature">

                                <div className="feature-box feature-box1">
                                    <div className="details">
                                        <h4>
                                            <a className="title">
                                                100% Calculation<br />Accuracy
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="far fa-check-circle"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-box feature-box1">
                                    <div className="details">
                                        <h4>
                                            <a className="title">
                                                Business Analytics<br />Report
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-chart-line"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-box feature-box1">
                                    <div className="details">
                                        <h4>
                                            <a className="title">
                                                Real Time<br />Calculation
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="far fa-clock"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-box feature-box1">
                                    <div className="details">
                                        <h4>
                                            <a className="title">
                                                Graphical  Tree</a>
                                        </h4>
                                    </div>
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-project-diagram"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-box feature-box1">
                                    <div className="details">
                                        <h4>
                                            <a className="title">
                                                E-mail & SMS<br />Notifications
                                            </a>
                                        </h4>
                                    </div>
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-sms"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-center">
                            <div className="center-feature align-self-center">
                                <img src="img/dashbord/2a.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-feature">
                                <div className="feature-box feature-box4">
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-search-dollar"></i>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4>
                                            <a className="title">Search Engine Optimization (SEO)</a>
                                        </h4>
                                    </div>
                                </div>
                                <div className="feature-box feature-box5">
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-user-lock"></i>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4>
                                            <a className="title">100% Data<br /> Security </a>
                                        </h4>
                                    </div>
                                </div>
                                <div className="feature-box feature-box6">
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-cloud-upload-alt"></i>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4>
                                            <a className="title">Data<br /> Backup </a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="feature-box feature-box6">
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="far fa-paper-plane"></i>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4>
                                            <a className="title">Internal<br />Messaging System </a>
                                        </h4>
                                    </div>
                                </div>

                                <div className="feature-box feature-box6">
                                    <div className="icon-area">
                                        <div className="icon">
                                            <i className="fas fa-wallet"></i>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4>
                                            <a className="title">Multiple<br />Currency </a>
                                        </h4>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Service Area End --> */}
            {/* <!--  ====================Technology we used starts===================--> */}
            <section className="video" id="video">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title">
                                <h1 className="title">Technology We Use</h1>
                                <p>
                                    Technology should be the first priority to build a software.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-wrapper">
                                <img src="img/svg/tech6_white.svg" alt="" />

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">


                                <div className="col-lg-6 col-6 tech-style">
                                    <div className="fun-box">
                                        <div className="inner-content inner-content1 d-flex">
                                            <div className="icon">
                                                <i className="fab fa-python"></i>
                                            </div>
                                            <div className="tech_name">
                                                <h5 className="categori">Python</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 tech-style">
                                    <div className="fun-box">
                                        <div className="inner-content inner-content2 d-flex">
                                            <div className="icon">
                                                <i className="fab fa-react"></i>
                                            </div>
                                            <div className="tech_name">
                                                <h5 className="categori">React</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 tech-style">
                                    <div className="fun-box">
                                        <div className="inner-content inner-content3 d-flex">
                                            <div className="icon">
                                                <i className="fab fa-laravel"></i>
                                            </div>
                                            <div className="tech_name">
                                                <h5 className="categori">laraval</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 tech-style">
                                    <div className="fun-box">
                                        <div className="inner-content inner-content4 d-flex">
                                            <div className="icon">
                                                <img src="img/svg/tech1.svg" alt="codechroma Technology image" />
                                            </div>
                                            <div className="tech_name">
                                                <h5 className="categori">Redis</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 tech-style">
                                    <div className="fun-box">
                                        <div className="inner-content inner-content3 d-flex">
                                            <div className="icon">
                                                <img src="img/svg/tech3.svg" alt="codechroma Technology image" />
                                            </div>
                                            <div className="tech_name">
                                                <h5 className="categori">PostgreSQL</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 tech-style">
                                    <div className="fun-box">
                                        <div className="inner-content inner-content1 d-flex">
                                            <div className="icon">
                                                <img src="img/svg/tech2a.svg" alt="codechroma Technology image" />
                                            </div>
                                            <div className="tech_name">
                                                <h5 className="categori">MySQL</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =====================Technology We Used End ===============--> */}



            {/* <!-- =================Pricing Start ====================--> */}
            <section className="compare-section" id="pricing_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-title extra">
                                <h2 className="title">Our Pricing For <span className="red001">MLM Software</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table-edit compare-table table table-responsive-lg table-bordered table-striped" data-aos="fade-up">
                                <thead>
                                    <tr>

                                        <th className="text-center">
                                            <div className="product-image">
                                                <img src="img/svg/1.svg" alt="" />
                                            </div>
                                            <h2 className="product-title">Basic </h2>
                                            <p className="product-subtitle">Now 10% Off</p>
                                        </th>
                                        <th className="text-center">
                                            <div className="product-image">
                                                <img src="img/svg/3.svg" alt="" />
                                            </div>
                                            <h2 className="product-title">Standard </h2>
                                            <p className="product-subtitle">Now 10% Off</p>
                                        </th>
                                        <th className="text-center">
                                            <div className="product-image">
                                                <img src="img/svg/7.svg" alt="" />
                                            </div>
                                            <h2 className="product-title">Premium </h2>
                                            <p className="product-subtitle">Now 10% Off</p>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">Domain</td>
                                        <td className="text-center">Domain</td>
                                        <td className="text-center">Domain</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Hosting</td>
                                        <td className="text-center">Hosting</td>
                                        <td className="text-center">Hosting</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Responsive Website</td>
                                        <td className="text-center">Responsive Website</td>
                                        <td className="text-center">Responsive Website</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">SSL Certificate</td>
                                        <td className="text-center">SSL Certificate</td>
                                        <td className="text-center">SSL Certificate</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><i className="fas fa-times" style={{color: "#D31027"}}></i></td>
                                        <td className="text-center">Promotional Tools</td>
                                        <td className="text-center">Promotional Tools</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Excel Report(5)</td>
                                        <td className="text-center">Excel Report(10) </td>
                                        <td className="text-center">Excel Report/ PDF(20)</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Admin Panel/Member Panel</td>
                                        <td className="text-center">Admin Panel/Member Panel</td>
                                        <td className="text-center">Admin Panel/Member Panel</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><i className="fas fa-times" style={{color: "#D31027"}}></i></td>
                                        <td className="text-center">Basic SEO (1 Month)</td>
                                        <td className="text-center">Basic SEO (3 Month)</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">Hacking Protection (1 layer)</td>
                                        <td className="text-center">Hacking Protection (2 layer)</td>
                                        <td className="text-center">Hacking Protection (4 layer)</td>
                                    </tr>


                                    <tr>
                                        <td className="text-center">Free Maintenance*</td>
                                        <td className="text-center">Free Maintenance*</td>
                                        <td className="text-center">Free Maintenance*</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center"><i className="fas fa-times" style={{color: "#D31027"}}></i></td>
                                        <td className="text-center"><i className="fas fa-times" style={{color: "#D31027"}}></i></td>
                                        <td className="text-center">Payment Gateway/ IMPS Integration</td>
                                    </tr>

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="text-center">
                                            <div className="d-flex">
                                                <a className="btn btn-primary" style={{backgroundColor: "#25d366"}} href="https://wa.me/918822955023?text=Hi%2C%20I%20would%20like%20to%20know%20about%20the%20Basic%20MLM%20Plan" target="-blank" role="button">
                                                    <i className="fab fa-whatsapp"></i> Whatsapp Us</a>
                                                <a className="btn btn-primary" style={{backgroundColor: "#339AF0"}} href="tel:+918822955023" target="-blank" role="button">
                                                    <i className="fas fa-phone-volume"></i>&nbsp; Call Us</a>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex">
                                                <a className="btn btn-primary" style={{backgroundColor: "#25d366"}} href="https://wa.me/918822955023?text=Hi%2C%20I%20would%20like%20to%20know%20about%20the%20Standard%20MLM%20Plan" target="-blank" role="button">
                                                    <i className="fab fa-whatsapp"></i> Whatsapp Us</a>
                                                <a className="btn btn-primary" style={{backgroundColor: "#339AF0"}} href="tel:+918822955023" target="-blank" role="button">
                                                    <i className="fas fa-phone-volume"></i>&nbsp; Call Us</a>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <div className="d-flex">
                                                <a className="btn btn-primary" style="background-color: #25d366" href="https://wa.me/918822955023?text=Hi%2C%20I%20would%20like%20to%20know%20about%20the%20Premium%20MLM%20Plan" target="-blank" role="button">
                                                    <i className="fab fa-whatsapp"></i> Whatsapp Us</a>
                                                <a className="btn btn-primary" style="background-color: #339AF0" href="tel:+918822955023" target="-blank" role="button">
                                                    <i className="fas fa-phone-volume"></i>&nbsp; Call Us</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>

                            </table>



                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =======================pricing Area End =====================--> */}

            {/* <!--=======================Android App Start===================== --> */}
            <section className="dealofweek">
                <img className="shape" src="assets/images/shape-pattern.png" alt="" />
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="deal-slider-area">
                                <div className="item">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-6 no_padding">
                                                <div className="left-area">
                                                    <img src="img/android.png" alt="Codechroma android App" />
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-lg-6 d-flex">
                                                <div className="right-area">
                                                    <h2 style={{fontSize: "2.5rem"}}>
                                                        Offer Of this Month
                                                    </h2>
                                                    <h4 className="name">
                                                        Get free <span>Android App</span> along with all <br /><span> our Plans</span>
                                                    </h4>

                                                    <p>Only a few days left::: Hurry</p>

                                                    <div className="deal-counter">
                                                        <div data-countdown="2025/8/31"></div>
                                                    </div>
                                                    <div className="links">
                                                        <a href="#pricing_section" className="mybtn3 mybtn-bg"><span>Check Pricing Packages</span> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- =================Android App end ====================--> */}



            {/* <!-- Subscribe Area Start --> */}
            <div className="subscribe-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-10">
                            <div className="section-title extra">
                                <h2 className="title">Get A Call From Our Team To <span className="red001">Discuss About Your Project</span></h2>
                                <p>
                                    Fill The Form Bellow Correctly and Get A call From Us
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="newsletter-form-area" data-aos="fade-up">
                                <form id="form-two">
                                    <div id="msg-2"></div>
                                    <div className="row">
                                        <div className="edit_style col-12 col-sm-12 col-md-12 col-lg-12">
                                            <input type="text" name="name" required className="form-control border-red" placeholder="Please Enter Your Name" />
                                        </div>
                                        <div className="edit_style col-12 col-sm-12 col-md-12 col-lg-12">
                                            <input type="number" name="mobile" required className="form-control border-red" placeholder="Enter Your Contact Number" />
                                        </div>

                                        <div className="edit_style col-12 col-sm-12 col-md-10 col-lg-12">
                                            <button type="submit"  id="submit-btn-2">
                                                <i className="fas fa-phone-volume"></i> &nbsp;<span>Call Me</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Subscribe Area End --> */}
            <br />

            {/* <!-- ========================They Trusted Us start======================= --> */}
            <section id="faq" className="faq design_client">
                <div className="container">
                    <div className="section-title extra">
                        <h2 className="title">They Trusted Us</h2>
                        {/* <!--  <p>
          We deals with all type of mlm software with the best service assurance
        </p> --> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <h3 className="client_font">Our Clients From India -</h3>
                            {/* <!--  row 1 start--> */}
                            <div className="product-slider">
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/1.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/2.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/3.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/4.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/5.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/6.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/7.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/8.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/9.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/10.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/11.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/12.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/13.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/14.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/15.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <br />
                            <h3 className="client_font">Our Clients From Outside India -</h3>

                            <div className="product-slider">
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f1.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f2.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f3.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f4.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f5.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f6.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f7.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="single-product">
                                        <div className="img">
                                            <img src="img/logo/f8.jpg" alt="Client Trust Us" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 d-flex">
                            <div className="faq-img">
                                <img src="img/svg/client3.svg" alt="Our Happy Client" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ========================They Trusted Us End======================= --> */}
            <section className="contact_bottom">
                <br /><br />
                <div className="container text-center contact_bottom1">
                    <h2 style={{color: "#002440 "}} >Feel Free To Discuss about your Start Up <br /> +91 8822955023</h2>
                </div>
                <br /><br />
            </section>
            {/* <!-- ====================Footer Section Start ========================--> */}

            <footer className="footer" id="footer">

                <img className="shape" src="assets/images/shape-pattern.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 info_color">
                            <div className="footer-info-area">
                                <div className="footer-logo">
                                    <a href="#" className="logo-link">
                                        <img src="img/our_logo/2a.png" alt="codechroma Footer Logo" />
                                    </a>
                                </div>
                                <div className="text">
                                    <span><i className="fas fa-map-marker-alt" style={{color: "rgba(234, 223, 18, 0.7)"}}> Find Us : </i>&emsp;Raheja Mindspace, Hi-tech City, Madhapur, Near DELL, Hyderabad - 500081</span>

                                </div>
                                <div className="text">
                                    <span><i className="fas fa-map-marker-alt" style={{color: "rgba(234, 223, 18, 0.7)"}}> Find Us : </i>&emsp;House No 12, Ajanta Path, Basisthpur, Guwahati, Assam -781028</span>

                                </div>
                                <p className="footer_line"><i className="fas fa-phone fa-flip-horizontal"></i>&emsp;+91 8822955023</p>
                                <p className="footer_line"><i className="fab fa-whatsapp"></i>&emsp;+91 8822955023</p>
                                <p className="footer_line"><i className="fas fa-envelope-open-text"></i>&emsp;Info@codechroma.com</p>
                                <p className="footer_line"><i className="fas fa-envelope-open-text"></i>&emsp;codechromamlm@gmail.com</p>

                                <div className="fotter-social-links">
                                    <h3>Connect With Us</h3>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/Codechroma-Software-Solutions-100651115471167/" target="_blank" className="facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/CodechromaS" target="_blank" className="twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/code-chroma-software-solutions/about/" target="_blank" className="linkedin">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://instagram.com/codechromasoftwaresolutions?utm_medium=copy_link" target="_blank" className="dribbble">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.youtube.com/channel/UCLAhMLjyRnkWCihtjT9yEMw" target="_blank" className="dribbble">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://wa.me/918822955023" target="_blank" className="linkedin">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-4 Footer_head info_color1">
                                <h3>MLM Plans<br /><span>we already served</span></h3>

                                <p><a href="plan-binary.html"><i className="fas fa-caret-right"></i>&emsp;Binary Plan</a></p>
                                <p><a href="plan-generation.html"><i className="fas fa-caret-right"></i>&emsp;Generation Plan</a></p>
                                <p><a href="plan-matrix.html"><i className="fas fa-caret-right"></i>&emsp;Matrix Plan</a></p>
                                <p><a href="plan-single-leg.html"><i className="fas fa-caret-right"></i>&emsp;Single Leg Plan</a></p>
                                <p><a href="plan-board.html"><i className="fas fa-caret-right"></i>&emsp;Board Plan</a></p>
                                <p><a href="plan-autopool.html"><i className="fas fa-caret-right"></i>&emsp;Autopool Plan</a></p>
                                <p><a href="plan-crowd-funding.html"><i className="fas fa-caret-right"></i>&emsp;Crowd Funding Plan</a></p>
                                <p><a href="plan-cryptocurrency.html"><i className="fas fa-caret-right"></i>&emsp;Cryptocurrency Plan</a></p>
                                <p><a href="plan-ad-view.html"><i className="fas fa-caret-right"></i>&emsp;Ad View MLM Plan</a></p>
                            </div>
                            <div className="col-md-4 Footer_head_find Footer_head info_color1">
                                <h3>Know More<br /><span>About Us</span></h3>
                                <p><a href="about.html"><i className="fas fa-chevron-circle-right"></i>&emsp;Know Who we Are!</a></p>
                                <p><i className="fas fa-chevron-circle-right"></i>&emsp;Blogs</p>
                                <p><a href="contact.html"><i className="fas fa-chevron-circle-right"></i>&emsp;Contact Us</a></p>
                                <p><a href="privacy.html" target="_blank"><i className="fas fa-chevron-circle-right"></i>&emsp;Privacy Policy</a></p>
                                <p><a href="terms.html" target="_blank"><i className="fas fa-chevron-circle-right"></i>&emsp;Terms and Conditions</a></p>

                                <div className="fotter-social-links">
                                    <h3>They Recognize Us</h3>
                                    <div className="d-flex footer-p-logo">
                                        <div><a href="https://www.hotfrog.in/company/1448352165142528" target="_blank"><img src="img/logo/other/1.jpg" alt="Partner" /></a></div>
                                        <div><a href="https://www.grotal.com/Website-of-Codechroma-Software-Solutions-in-Guwahati-404096/" target="_blank"><img src="img/logo/other/2.jpg" alt="Partner" /></a></div>
                                        <div><a href="https://www.capterra.com/p/230756/Codechroma/" target="_blank"><img src="img/logo/other/3.jpg" alt="Partner" /></a></div>
                                    </div>
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
                        <p>We accept<img src="img/payment/all1.png" alt="payment Option" /></p>
                    </div>
                </div>
            </footer>
            {/* <!-- ====================Footer Section end ========================---> */}

            {/* <!-- Back to Top Start --> */}
            <div className="bottomtotop">
                <i className="fa fa-chevron-right"></i>
            </div>












        </div>
    )
}
