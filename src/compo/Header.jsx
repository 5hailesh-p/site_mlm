import { Link } from "react-router-dom"


export const Header = () => {
    return (
        <>
            <header className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link  className="navbar-brand" to="/">
                                    <img src="https://tracequill.com/assets/img/logoclr.png" alt={import.meta.env.VITE_SITE_NAME} />
                                    {/* <img src="img/our_logo/logo.png" alt={import.meta.env.VITE_SITE_NAME} /> */}
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#mainmenu"
                                    aria-controls="mainmenu"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="mainmenu">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Company
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/about"><i className="fas fa-chevron-right"></i> About Us</Link>
                                                <Link className="dropdown-item" to="/clients"><i className="fas fa-chevron-right"></i>Clients</Link>
                                                <Link className="dropdown-item" to="/feature"><i className="fas fa-chevron-right"></i>Features</Link>
                                            </div>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link className="nav-link" to="demo_site.html">Demo</Link>
                                        </li> */}

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/#pricing_section">Pricing</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                MLM Plans
                                            </Link>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/plan/binary"><i className="fas fa-chevron-right"></i> Binary Plan</Link>
                                                <Link className="dropdown-item" to="/plan/generation"><i className="fas fa-chevron-right"></i>Generation Plan</Link>
                                                <Link className="dropdown-item" to="/plan/matrix"><i className="fas fa-chevron-right"></i>Matrix Plan</Link>
                                                <Link className="dropdown-item" to="/plan/singleleg"><i className="fas fa-chevron-right"></i>Single Leg Plan</Link>
                                                <Link className="dropdown-item" to="/plan/board"><i className="fas fa-chevron-right"></i>Board Plan</Link>
                                                <Link className="dropdown-item" to="/plan/autopool"><i className="fas fa-chevron-right"></i>Autopool Plan</Link>
                                                <Link className="dropdown-item" to="/plan/crowdfunding"><i className="fas fa-chevron-right"></i>Crowd Funding Plan</Link>
                                                <Link className="dropdown-item" to="/plan/cryptocurrency"><i className="fas fa-chevron-right"></i>Cryptocurrency Plan</Link>
                                                <Link className="dropdown-item" to="/plan/adview"><i className="fas fa-chevron-right"></i>Ad View MLM Plan</Link>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact Us</Link>
                                        </li>

                                        <li className="nav-item nav-border">
                                            <Link className="nav-link" to={"tel:" + import.meta.env.VITE_SITE_CONTACT} target="_blank"><span><i className="fas fa-phone-volume"></i>&nbsp;{ import.meta.env.VITE_SITE_CONTACT}</span></Link>
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
