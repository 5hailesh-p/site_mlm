

export const Header = () => {
    return (
        <>
            <header className="navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="/">
                                    <img src="https://tracequill.com/assets/img/logoclr.png" alt={import.meta.env.VITE_SITE_NAME} />
                                    {/* <img src="img/our_logo/logo.png" alt={import.meta.env.VITE_SITE_NAME} /> */}
                                </a>
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
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Company
                                            </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/about"><i className="fas fa-chevron-right"></i> About Us</a>
                                                <a className="dropdown-item" href="/clients"><i className="fas fa-chevron-right"></i>Clients</a>
                                                <a className="dropdown-item" href="/feature"><i className="fas fa-chevron-right"></i>Features</a>
                                            </div>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link" href="demo_site.html">Demo</a>
                                        </li> */}

                                        <li className="nav-item">
                                            <a className="nav-link" href="/#pricing_section">Pricing</a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                MLM Plans
                                            </a>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/plan/binary"><i className="fas fa-chevron-right"></i> Binary Plan</a>
                                                <a className="dropdown-item" href="/plan/generation"><i className="fas fa-chevron-right"></i>Generation Plan</a>
                                                <a className="dropdown-item" href="/plan/matrix"><i className="fas fa-chevron-right"></i>Matrix Plan</a>
                                                <a className="dropdown-item" href="/plan/singleleg"><i className="fas fa-chevron-right"></i>Single Leg Plan</a>
                                                <a className="dropdown-item" href="/plan/board"><i className="fas fa-chevron-right"></i>Board Plan</a>
                                                <a className="dropdown-item" href="/plan/autopool"><i className="fas fa-chevron-right"></i>Autopool Plan</a>
                                                <a className="dropdown-item" href="/plan/crowdfunding"><i className="fas fa-chevron-right"></i>Crowd Funding Plan</a>
                                                <a className="dropdown-item" href="/plan/cryptocurrency"><i className="fas fa-chevron-right"></i>Cryptocurrency Plan</a>
                                                <a className="dropdown-item" href="/plan/adview"><i className="fas fa-chevron-right"></i>Ad View MLM Plan</a>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">Contact Us</a>
                                        </li>

                                        <li className="nav-item nav-border">
                                            <a className="nav-link" href={"tel:" + import.meta.env.VITE_SITE_CONTACT} target="_blank"><span><i className="fas fa-phone-volume"></i>&nbsp;{ import.meta.env.VITE_SITE_CONTACT}</span></a>
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
