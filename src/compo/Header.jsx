 

export const Header = () => {
    return (
        <>
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
        </>
    )
}
