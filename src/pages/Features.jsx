
import { Header } from '../compo/Header'
import Footer from '../compo/Footer'
import { Link } from 'react-router-dom'
import Breadcrumb from '../compo/Breadcrumb'

const Features = () => {
  return (
    <>

      <Header />
      <Breadcrumb title={" MLM Software Features"} img={'/img/svg/f3.svg'} link={'/feature'} />



      <section className="blog-page single-blog-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-red">
                <div className="content">
                  <div className="text-center icon_color"><i className="far fa-check-circle"></i></div>
                  <Link>
                    <h4 className="title">
                      1. 100% Calculation Accuracy
                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-blue">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-chart-line"></i></div>
                  <Link>
                    <h4 className="title">
                      2. Business Analytics Report
                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-red">
                <div className="content">
                  <div className="text-center icon_color"><i className="far fa-clock"></i></div>
                  <Link>
                    <h4 className="title">
                      3. Real Time Calculation

                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-blue">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-project-diagram"></i></div>
                  <Link>
                    <h4 className="title">
                      4. Graphical Tree To Reflact Plan

                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-red">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-sms"></i></div>
                  <Link>
                    <h4 className="title">
                      5. E-mail & SMS Notifications

                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-blue">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-search-dollar"></i></div>
                  <Link>
                    <h4 className="title">
                      6. Search Engine Optimization (SEO)
                    </h4>
                  </Link>

                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-red">
                <div className="content">
                  <div className="text-center icon_color"> <i className="fas fa-user-lock"></i></div>
                  <Link>
                    <h4 className="title">
                      7. 100% Data Security
                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-blue">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-cloud-upload-alt"></i></div>
                  <Link>
                    <h4 className="title">
                      8. Data Backup
                    </h4>
                  </Link>

                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-red">
                <div className="content">
                  <div className="text-center icon_color"><i className="far fa-check-circle"></i></div>
                  <Link>
                    <h4 className="title">
                      9.  Compatible With Any Plan
                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-blue">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-wallet"></i></div>
                  <Link>
                    <h4 className="title">
                      10. Multiple Currency
                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-red">
                <div className="content">
                  <div className="text-center icon_color"><i style={{ color: "#000" }} className="fas fa-adjust"></i></div>
                  <Link>
                    <h4 className="title">
                      11. Dark Mode
                    </h4>
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog color-blue">
                <div className="content">
                  <div className="text-center icon_color"><i className="fas fa-award"></i></div>
                  <Link>
                    <h4 className="title">
                      12. International Standard Website
                    </h4>
                  </Link>

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

export default Features