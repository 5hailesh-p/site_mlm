import React from 'react'
import { Header } from '../compo/Header'
import Footer from '../compo/Footer'

const About = () => {
  return (
    <>
    <Header/>
    <section className="breadcrumb-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-7 txtcntr-small">
                <h4 className="title">
                    About Us
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
                        <a href="about.html">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-5 img-small-sm">
              <img src="/img/svg/about1.svg" alt="about us image"/>
            </div>
        </div>
    </div>
</section>

<section className="blog-page1 single-blog-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single-blog-details">
              <div className="content">
                  <a>
                      <h4 className="title">
                         About <span style={{color: "#970810"}}>Codechroma Software solutions</span>
                      </h4>
                  </a>
                  <div className="row">
                    <div className="col-lg-7">
                        <div className="text-area">
                            <p style={{fontSize: "1rem", fontWeight: "400;"}}>
                               Codechroma software solutions is a leading MLM software provider available in the market at present. Codechroma was formed with an aim to deliver full-featured, customizable solutions with timely upgraded technologies in a reasonable price and to provide round the clock client support (24x7). We have a team of highly experienced MLM developers who has the potential to make a breakthrough in developing multi-level marketing software. With the support of our diligent and professional team, our company aims to cater to our clients' need with brilliance. We fabricate, develop and design the software. Our team has comprehensive system knowledge which assures you of top-notch services from Codechrorna. 
                            </p>
                            <p>
                               
                            </p>
                            <blockquote>
                              <h3>
                                Every thing under one roof -
                              </h3>
                              <ul>
                                <li>
                                    <p><i className="far fa-hand-point-right"></i>Website Designing.</p>
                                </li>
                                <li>
                                    <p><i className="far fa-hand-point-right"></i>MLM Consultancy & guideline.</p>
                                </li>
                                <li>
                                    <p><i className="far fa-hand-point-right"></i>Fastest technical support (24*7).</p>
                                </li>
                                <li>
                                    <p><i className="far fa-hand-point-right"></i>India's First Python & Laravel technology based software.</p>
                                </li>

                                <li>
                                    <p><i className="far fa-hand-point-right"></i>Basic SEO</p>
                                </li>
                            </ul>
                            </blockquote>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center about_border">
                      <img src="/img/plan/about.webp" alt="mlm business codechroma"/>
                      <p style={{color: "#CA75CE"}}>Control 1lakh members with our software</p>
                    </div>
                  </div>
              </div>
          </div>
         
          
        </div>
      </div>
    </div>
  </section>
    <Footer/>
    </>
  )
}

export default About