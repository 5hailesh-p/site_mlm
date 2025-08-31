import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
    return (
        <>
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 txtcntr-small">
                            <h4 className="title">
                                {props.title}
                            </h4>
                            <ul className="breadcrumb-list">
                                <li>
                                    <Link href="index-2.html">
                                        <i className="fas fa-home"></i>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <span><i className="fas fa-chevron-right"></i> </span>
                                </li>
                                <li>
                                    <Link to="#">{props.title}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-5 img-small-sm pt-5">
                            <img src="/img/svg/undraw_Business_analytics_re_tfh3.svg" alt="codechroma plan image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Breadcrumb