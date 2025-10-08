import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { Header } from "../compo/Header"
import Footer from "../compo/Footer"
import axios from 'axios';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://tracequill.com/MlmContact/submit_demo', formData);
            if (response) {
                setMessage('Request submitted successfully!');
            }
            // Clear form if needed
            setFormData({ name: '', phone: '' });
        } catch (error) {
            console.error(error);
            setMessage('There was an error submitting your request.');
        }
    };
    useEffect(() => {

    }, [])

    return (
        <>
            <Header />
            <div>

                <div id="home" className="hero-area">
                    <img className="shape" src="/images/shape-pattern.png" alt="background shape image" />
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
                                        <div className="d-flex flex-column flex-md-row gap-3 links">
                                            <Link to={"tel:" + import.meta.env.VITE_SITE_CONTACT} target="_blank" className="mybtn3 mybtn-light"><span  ><i className="fas fa-phone-volume"></i>&nbsp;Call Us</span> </Link>
                                            <Link to={import.meta.env.VITE_WHATSAPP_URL || "#"} target="_blank" className="mybtn3 mybtn-light"><span><i className="fab fa-whatsapp"></i>&nbsp;Whatsapp</span> </Link>
                                            <Link to="#" target="_blank" className="mybtn3 mybtn-light"><span><i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;View Demo</span> </Link>
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
                                    <img className="img-fluid img" src="/img/dashbord/f2.png" alt="mlm softwere dashbord" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="about" id="about">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="box1">
                                    <div className="inner-box subscribe-section">
                                        <div style={{ textAlign: "center" }}>
                                            <h3 style={{ lineHeight: "2.3rem" }}>Helpline for MLM Software Demo and support <span style={{ color: '#D31027' }}>{import.meta.env.VITE_SITE_CONTACT}</span><br /> or fill the form</h3>

                                        </div>
                                        <div className="newsletter-form-area">
                                            <form id="form-one" onSubmit={handleSubmit}>
                                                <div id="msg-1">{message}</div>
                                                <div className="row">
                                                    <div className="req-edit col-12 col-sm-12 col-md-6 col-lg-5">
                                                        <input
                                                            type="text"
                                                            required
                                                            name="name"
                                                            className="form-control border-red"
                                                            placeholder="Please Enter Your Name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="req-edit col-12 col-sm-12 col-md-6 col-lg-4">
                                                        <input
                                                            type="number"
                                                            required
                                                            name="phone"
                                                            className="form-control border-red"
                                                            placeholder="Enter Your Contact Number"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-6 col-lg-3" style={{ marginBottom: '25px' }}>
                                                        <button type="submit" id="submit-btn-1">
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

                <section className="whaybest">
                    <div className="container">
                        <div className="row row-one">

                            <div className="col-lg-5 d-flex">
                                <div className="about-img">
                                    <img src="/img/dashbord/1.png" alt="" style={{ maxWidth: "20rem" }} />
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="info">
                                    <h1 className="info-title">Software For All MLM Plans</h1>
                                    <ul className="feature-list">

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/binary">
                                                <span>1</span>
                                                <div className="content">
                                                    <h4>Binary Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/generation">
                                                <span>2</span>
                                                <div className="content">
                                                    <h4>Generation Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/matrix">
                                                <span>3</span>
                                                <div className="content">
                                                    <h4>Matrix Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/singleleg">
                                                <span>5</span>
                                                <div className="content">
                                                    <h4>Single Leg Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/board">
                                                <span>6</span>
                                                <div className="content">
                                                    <h4>Board Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/autopool">
                                                <span>7</span>
                                                <div className="content">
                                                    <h4>Autopool Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/crowdfunding">
                                                <span>8</span>
                                                <div className="content">
                                                    <h4>Crowd Funding Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/cryptocurrency">
                                                <span>4</span>
                                                <div className="content">
                                                    <h4>Cryptocurrency Plan</h4>
                                                </div>
                                            </Link>
                                        </li>

                                        <li className="text-center plan_boder">
                                            <Link to="/plan/adview">
                                                <span>9</span>
                                                <div className="content">
                                                    <h4>Ad View MLM Plan</h4>
                                                </div>
                                            </Link>
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
                                    <img src="/img/dashbord/3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                                <Link className="title">
                                                    100% Calculation<br />Accuracy
                                                </Link>
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
                                                <Link className="title">
                                                    Business Analytics<br />Report
                                                </Link>
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
                                                <Link className="title">
                                                    Real Time<br />Calculation
                                                </Link>
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
                                                <Link className="title">
                                                    Graphical  Tree</Link>
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
                                                <Link className="title">
                                                    E-mail & SMS<br />Notifications
                                                </Link>
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
                                    <img src="/img/dashbord/2a.png" alt="" />
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
                                                <Link className="title">Search Engine Optimization (SEO)</Link>
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
                                                <Link className="title">100% Data<br /> Security </Link>
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
                                                <Link className="title">Data<br /> Backup </Link>
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
                                                <Link className="title">Internal<br />Messaging System </Link>
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
                                                <Link className="title">Multiple<br />Currency </Link>
                                            </h4>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                    <img src="/img/svg/tech6_white.svg" alt="" />

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
                                                    <img src="/img/svg/tech1.svg" alt="codechroma Technology image" />
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
                                                    <img src="/img/svg/tech3.svg" alt="codechroma Technology image" />
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
                                                    <img src="/img/svg/tech2a.svg" alt="codechroma Technology image" />
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
                                                    <img src="/img/svg/1.svg" alt="" />
                                                </div>
                                                <h2 className="product-title">Basic </h2>
                                                <p className="product-subtitle">Now 10% Off</p>
                                            </th>
                                            <th className="text-center">
                                                <div className="product-image">
                                                    <img src="/img/svg/3.svg" alt="" />
                                                </div>
                                                <h2 className="product-title">Standard </h2>
                                                <p className="product-subtitle">Now 10% Off</p>
                                            </th>
                                            <th className="text-center">
                                                <div className="product-image">
                                                    <img src="/img/svg/7.svg" alt="" />
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
                                            <td className="text-center"><i className="fas fa-times" style={{ color: "#D31027" }}></i></td>
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
                                            <td className="text-center"><i className="fas fa-times" style={{ color: "#D31027" }}></i></td>
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
                                            <td className="text-center"><i className="fas fa-times" style={{ color: "#D31027" }}></i></td>
                                            <td className="text-center"><i className="fas fa-times" style={{ color: "#D31027" }}></i></td>
                                            <td className="text-center">Payment Gateway/ IMPS Integration</td>
                                        </tr>

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="text-center">
                                                <div className="d-flex">
                                                    <Link className="btn btn-primary" style={{ backgroundColor: "#25d366" }} to={import.meta.env.VITE_WHATSAPP_URL || "#"} target="-blank" role="button">
                                                        <i className="fab fa-whatsapp"></i> Whatsapp Us</Link>
                                                    <Link className="btn btn-primary" style={{ backgroundColor: "#339AF0" }} to={"tel:" + import.meta.env.VITE_SITE_CONTACT} target="-blank" role="button">
                                                        <i className="fas fa-phone-volume"></i>&nbsp; Call Us</Link>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <div className="d-flex">
                                                    <Link className="btn btn-primary" style={{ backgroundColor: "#25d366" }} to={import.meta.env.VITE_WHATSAPP_URL || "#"} target="-blank" role="button">
                                                        <i className="fab fa-whatsapp"></i> Whatsapp Us</Link>
                                                    <Link className="btn btn-primary" style={{ backgroundColor: "#339AF0" }} to={"tel:" + import.meta.env.VITE_SITE_CONTACT} target="-blank" role="button">
                                                        <i className="fas fa-phone-volume"></i>&nbsp; Call Us</Link>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                <div className="d-flex">
                                                    <Link className="btn btn-primary" style={{ backgroundColor: "#25d366" }} to={import.meta.env.VITE_WHATSAPP_URL || "#"} target="-blank" role="button">
                                                        <i className="fab fa-whatsapp"></i> Whatsapp Us</Link>
                                                    <Link className="btn btn-primary" style={{ backgroundColor: "#339AF0" }} to={"tel:" + import.meta.env.VITE_SITE_CONTACT} target="-blank" role="button">
                                                        <i className="fas fa-phone-volume"></i>&nbsp; Call Us</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>

                                </table>



                            </div>
                        </div>
                    </div>
                </section>

                <section className="dealofweek">
                    <img className="shape" src="/images/shape-pattern.png" alt="" />
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="deal-slider-area">
                                    <div className="item">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-6 no_padding">
                                                    <div className="left-area">
                                                        <img src="/img/android.png" alt="Codechroma android App" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8 col-lg-6 d-flex">
                                                    <div className="right-area">
                                                        <h2 style={{ fontSize: "2.5rem" }}>
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
                                                            <Link to="#pricing_section" className="mybtn3 mybtn-bg"><span>Check Pricing Packages</span> </Link>
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



                {/* <!-- Subscribe Area Start --> */}
                {/* <div className="subscribe-section">
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
                                    <form id="form-two" onSubmit={handleSubmit}>
                                        <div id="msg-2"></div>
                                        <div className="row">
                                            <div className="edit_style col-12 col-sm-12 col-md-12 col-lg-12">
                                                <input type="text" name="name" required className="form-control border-red" placeholder="Please Enter Your Name" value={formData.name} onChange={handleChange} />
                                            </div>
                                            <div className="edit_style col-12 col-sm-12 col-md-12 col-lg-12">
                                                <input type="number" name="mobile" required className="form-control border-red" placeholder="Enter Your Contact Number" value={formData.mobile} onChange={handleChange} />
                                            </div>

                                            <div className="edit_style col-12 col-sm-12 col-md-10 col-lg-12">
                                                <button type="submit" id="submit-btn-2">
                                                    <i className="fas fa-phone-volume"></i> &nbsp;<span>Call Me</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>

                    </div>
                </div> */}
                {/* <!-- Subscribe Area End --> */}
                <br />


                <section className="contact_bottom">
                    <br /><br />
                    <div className="container text-center contact_bottom1">
                        <h2 style={{ color: "#002440 " }} >Feel Free To Discuss about your Start Up <br /> {import.meta.env.VITE_SITE_CONTACT}</h2>
                    </div>
                    <br /><br />
                </section>


            </div>
            <Footer />
        </>
    )
}
