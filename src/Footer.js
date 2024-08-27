import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return(
        <>
          
            <footer className="site-footer">
                
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                    <img src="logo2.png" alt="logo" width="50%" className='logo'></img>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                        <li><Link to="/fashion" onClick={scrollToTop}>Fashion</Link></li>
                        <li><Link to="/beauty" onClick={scrollToTop}>Beauty</Link></li>
                        <li><Link to="/food" onClick={scrollToTop}>Food</Link></li>
                        <li><Link to="/Travel" onClick={scrollToTop}>Travel</Link></li> 
                                             
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                        <li><Link to="/" onClick={scrollToTop}>Contact Us</Link></li>
                        <li><Link to="/aboutus" onClick={scrollToTop}>About</Link></li>
                        <li><Link to="/" onClick={scrollToTop}></Link></li>
                        <li><Link to="/" onClick={scrollToTop}></Link></li>
                        
                        </ul>
                    </div>
                    </div>
                    <hr className='mb-4'></hr>
                    
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                    Scanfcode.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                        <li><Link to="/" onClick={scrollToTop} className="facebook"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="/" onClick={scrollToTop} className="twitter"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="/" onClick={scrollToTop} className="dribbble"><i className="fa fa-dribbble"></i></Link></li>
                        <li><Link to="/" onClick={scrollToTop} className="linkedin"><i className="fa fa-linkedin"></i></Link></li>
                        
                        {/* <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>    */}
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
            
        </>
    );
}

export default Footer;