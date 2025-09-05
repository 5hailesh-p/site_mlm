import React from 'react'
import { Header } from '../../compo/Header'
import Breadcrumb from '../../compo/Breadcrumb'
import Footer from '../../compo/Footer'

const PlanAutoPool = () => {
    return (
        <>
            <Header />
 
            <Breadcrumb title={"Autopool Plan"} img={'/img/svg/undraw_Business_analytics_re_tfh3.svg'} link={'/plan/autopool'} />

            <section className="blog-page1 single-blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="single-blog-details">
                                <div className="content">
                                    <a href="#">
                                        <h4 className="title">
                                            <span style={{ color: "#970810" }}>Autopool MLM Plan</span>
                                        </h4>
                                    </a>
                                    <div className="text-area">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7 col-sm-12">
                                                <p>
                                                    Autopool MLM plan is a combination of working and non-working structures. In this plan after completion of one pool structure the member is automatically upgraded to the next pool.
                                                </p>

                                                <h3>
                                                    Awesome Features For Autopool MLM Software
                                                </h3>
                                                <br />
                                                <ul>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>Package creation - (name, amount, ROI, fixed/percentage, capping-amount).</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i> Integrate other features with the existing plan like mobile recharge, DTH recharge, E-commerce, Repurchase module etc.</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>SMS Integration.</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>Control payout dates (daily/monthly/weekly).</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i> Instant calculation.</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>Customizable profile picture.</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>Graphical Tree View.</p>
                                                    </li>
                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>Multiple Compensations.</p>
                                                    </li>



                                                    <li>
                                                        <p><i className="far fa-hand-point-right"></i>Fastest technical support (24*7)</p>
                                                    </li>

                                                </ul>

                                            </div>
                                            <div className="col-lg-1"></div>
                                            <div className="col-lg-4 col-md-5 col-sm-12">
                                                <img src="/img/plan/p6.png" alt="tree codechroma" />
                                            </div>
                                        </div>

                                        <blockquote>
                                            <p>
                                                India's Fast Fully Costomize and python ,laraval and react js MLM software. Dark Mode also available.
                                                <br />Free android app available*.
                                            </p>
                                        </blockquote>


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

export default PlanAutoPool