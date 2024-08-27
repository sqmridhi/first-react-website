import './Navbar.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import { useEffect } from 'react';


function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

    return (
      <div style={{zIndex:"0"}}>
        
      <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-6">
      <img src="Home2.jpg" className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <h1 className="card-title ffont"><br></br><br></br>Hey there!<br></br><nav className='ms-2'>Good human</nav></h1>
        <p className="card-text fs-3">Embrace Every Moment: Your Journey to a Life Well-Lived Starts Here!</p>
        <p className="card-text">Crafting Your Best Life</p>
        {/* <Link to="/fashion">fff</Link> */}
      </div>
    </div>
  </div>
</div>
<br></br>
<br></br>
<h3 className='text-center'>Lifestyle Odyssey: A Fusion of Fashion, Beauty, Travel, and Food</h3>
<br></br>

{/* row-1 */}
<div className='row text-center'>
<div data-aos="fade-right" className='col-md-5 col-10 border border-secondary-subtle m-auto mb-5'>
{/* row-1 column-1*/}
<div>
                                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">Fashion</Link>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                <div className='m-1 fs-5'>❤</div>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                            </div>
                                            </div>
                                            <div className='d-flex col-10 m-auto border border-dark border-1'> 
                                            <div className='col-6'>
                                            <Link onClick={scrollToTop} to="/article"><img src="fashion.jpg" alt="img" className='img-fluid'></img></Link>

                                            </div>
                                            <p className='col-6 fs-6 align-self-center'>My Fashion Guide</p>
                                            </div><br></br> 
</div>

<div data-aos="fade-left" className='col-md-5 col-10 border border-secondary-subtle m-auto mb-5'>
{/* row-1 column-2 */}
<div>
                                            <Link onClick={scrollToTop} to="/beauty" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">Beauty</Link>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                <div className='m-1 fs-5'>❤</div>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                            </div>
                                            </div>
                                            <div className='d-flex col-10 m-auto border border-dark border-1 align-middle'> 
                                            <div className='col-6'>
                                            <Link onClick={scrollToTop} to="/article8"><img src="beauty2.jpg" alt="img" className='img-fluid'></img></Link>
                                            </div>
                                            <p className='col-6 fs-6 align-self-center'>Skin Care</p>
                                            </div><br></br> 
</div>
</div>

{/* row-2 */}
<div className='row text-center'>
<div data-aos="fade-right" className='col-md-5 col-10 border border-secondary-subtle m-auto mb-5'>
{/* row-2 column-1*/}
<div>
                                            <Link onClick={scrollToTop} to="/travel" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">Travel</Link>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                <div className='m-1 fs-5'>❤</div>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                            </div>
                                            </div>
                                            <div className='d-flex col-10 m-auto border border-dark border-1'> 
                                            <div className='col-6'>
                                            <Link onClick={scrollToTop} to="/article17"><img src="travel2.jpg" alt="img" className='img-fluid'></img></Link>

                                            </div>
                                            <p className='col-6 fs-6 align-self-center'>Travel Guide: What to pack</p>
                                            </div><br></br> 
</div>

<div data-aos="fade-left" className='col-md-5 col-10 border border-secondary-subtle m-auto mb-5'>
{/* row-2 column-2 */}
<div>
                                            <Link onClick={scrollToTop} to="/food" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">Food</Link>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                <div className='m-1 fs-5'>❤</div>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                            </div>
                                            </div>
                                            <div className='d-flex col-10 m-auto border border-dark border-1'> 
                                            <div className='col-6'>
                                            <Link onClick={scrollToTop} to="/article15"><img src="food6.jpg" alt="img" className='img-fluid'></img></Link>

                                            </div>
                                            <p className='col-6 fs-6 align-self-center'>Work day drinks</p>
                                            </div><br></br> 
</div>
</div>


<br></br><br></br><br></br><br></br>
</div>
    );
  }
  
  export default Home;