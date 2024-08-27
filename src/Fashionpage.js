import './Pages.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Fashion(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };

    return(
    <div className='pagesmaindiv'><br></br>
    <div className="pagesheaddiv rounded col-10 m-auto p-3 pb-1 pt-4 text-center">
        <h1 className='toptitle'>FASHION</h1>
    </div>
        <br></br>
        {/* main column */}
        <div className='m-auto col-10 d-flex text-center'> 
             
            <div className='d-flex flex-wrap col-12 justify-content-between '> 
                {/* first column  */}
                <div className='col-12 col-md-8'>
                    {/* 2 sub column  */}
                    <div className='d-flex col-12 flex-wrap'>
                        <div className='d-flex col-12 flex-wrap flex-lg-nowrap'>
                            {/* row-1 col-1 */}
                            <div className='griditem col-lg-6 me-lg-5 col-12 mb-5 rounded'>
                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <Link onClick={scrollToTop} to="/article">
                                <div class="cardofoutercss d-flex flex-wrap">                                  
                                    <i className='fs-3 fw-light'>My Discount Guide</i><br></br>                                    
                                    <img src='fashion.jpg' className='img-fluid' alt='gridimg'></img>                          
                                    <p className='fs-4 m-3 fw-lighter'>July 17</p>                    
                                </div>
                                </Link>
                            </div>
                            {/* row-1 col-2 */}
                            <div className='griditem col-lg-6 me-lg-5 col-12 mb-5 rounded'>
                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <Link onClick={scrollToTop} to="/article2">
                                <div class="cardofoutercss d-flex flex-wrap">  
                                    <i className='fs-3 fw-light'>My Revolve Summer Picks</i><br></br>
                                    <img src='summerr.jpg' className='img-fluid' alt='gridimg'></img>
                                    
                                    <p className='fs-4 m-3 fw-lighter'>July 17</p>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className='d-flex col-12 flex-wrap flex-lg-nowrap'>
                            {/* row-2 col-1 */}
                            <div className='griditem col-lg-6 me-lg-5 col-12 mb-5 rounded'>
                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <Link onClick={scrollToTop} to="/article3">
                                <div class="cardofoutercss d-flex flex-wrap">  
                                    <i className='fs-3 fw-light'>Fash Favorite: The Luxury Closet</i><br></br>
                                    <img src='bags.jpg' className='img-fluid' alt='gridimg'></img>
                                    <p className='fs-4 m-3 fw-lighter'>July 17</p>
                                </div>
                                </Link>
                            </div>
                            {/* row-2 col-2 */}
                            <div className='griditem col-lg-6 me-lg-5 col-12 mb-5 rounded'>
                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <Link onClick={scrollToTop} to="/article4">
                                <div class="cardofoutercss d-flex flex-wrap">  
                                    <i className='fs-3 fw-light'>Style discovery: Sunglasses<br></br></i><br></br>
                                    <img src='sung.jpg' className='img-fluid' alt='gridimg'></img>
                                    <p className='fs-4 m-3 fw-lighter'>July 17</p>
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className='d-flex col-12 flex-wrap flex-lg-nowrap'>
                            {/* row-3 col-1 */}
                            <div className='griditem col-lg-6 me-lg-5 col-12 mb-5 rounded'>
                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <Link onClick={scrollToTop} to="/article5">
                                <div class="cardofoutercss d-flex flex-wrap">  
                                    <i className='fs-3 fw-light'>Brand to Know: Dior</i><br></br>
                                    <img src='dior.jpg' className='img-fluid' alt='gridimg'></img>
                                    <p className='fs-4 m-3 fw-lighter'>July 17</p>
                                </div>
                                </Link>
                            </div>
                            {/* row-3 col-2 */}
                            {/* <div className='griditem col-lg-6 me-lg-5 col-12 mb-5 rounded'>
                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <div class="cardofoutercss d-flex flex-wrap">  
                                    <i className='fs-3 fw-light'>My Discount Guide</i><br></br>
                                    <img src='fashion.jpg' className='img-fluid' alt='gridimg'></img>
                                    <p className='fs-4 m-3 fw-lighter'>July 17</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
        
                {/* second column  */}
                <div className='col-12 col-md-3'>
                    <div className='bg-light'>
                    <samll>FASHION    .</samll> <small className='ffont fw-light'>favourites</small>
                    </div>
                    <div className='d-flex col-12 border border-dark border-1 m-auto bg-light'>
                            <div className='me-lg-5 col-12 mb-5 rounded'><br/>
                                
                                            {/* row1 */}     
                                                <div>         
                                                <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                                <div className='d-flex justify-content-center align-items-center'>
                                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                    <div className='m-1 fs-5'>❤</div>
                                                    <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                </div>
                                                </div>
                                                <div>
                                                
                                                <div className='d-flex col-10 m-auto border border-dark border-1'> 
                                                <div className='col-6'>
                                                    <Link onClick={scrollToTop} to="/article6"><img src="sidecol.jpg" alt="img" className='img-fluid'></img></Link>
                                                </div>
                                                <p className='col-6 fs-6 align-self-center'>The Closet of your Dreams</p>
                                                </div>
                                            {/* row-2 */}
                                            <br></br>
                                            <div>
                                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                <div className='m-1 fs-5'>❤</div>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                            </div>
                                            </div>
                                            <div className='d-flex col-10 m-auto border border-dark border-1'> 
                                            <div className='col-6'>
                                            <Link onClick={scrollToTop} to="/article3"><img src="bags.jpg" alt="img" className='img-fluid'></img></Link>

                                            </div>
                                            <p className='col-6 fs-6 align-self-center'>Fash Favorite: The Luxury Closet</p>
                                            </div>  
                                            {/* row-3 */}
                                            
                                            <br></br>
                                            <Link onClick={scrollToTop} to="/fashion" className="text-decoration-none fs-5 fw-lighter text-dark linkpink">FASHION</Link>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                                <div className='m-1 fs-5'>❤</div>
                                                <div className='col-4'><hr class="center-ball border border-dark border-1 opacity-75"></hr></div>
                                            </div>
                                            </div>
                                            <div>
                                            <div className='d-flex col-10 m-auto border border-dark border-1'> 
                                            <div className='col-6'>
                                            <Link onClick={scrollToTop} to="/article5"><img src="dior.jpg" alt="img" className='img-fluid'></img></Link>
                                            </div>
                                            <p className='col-6 fs-6 align-self-center'>Brand to Know: Dior</p>
                                            </div>  
                                        </div>           
                            </div>
                    </div>
                    <br></br>
                    {/* email input  */}
                    <div className='bg-light'>
                        <p className='mb-0 fs-5 fw-lighter pt-5'>SIGN UP FOR THE</p>
                        <p className='mb-0  fw-light emailtext' style={{transform: "rotate(-10deg)"}}><i>soft and sophisticated</i></p>
                        <p className='mt-0 fw-lighter pb-5'>NEWSLETTER</p>
                        <div className='emaildiv '>
                        <input type='text' className='emailinput' placeholder='Email'></input>
                        <button type="submit" className='emailbutton'>➤</button>
                        </div>
                    <br/>
                    <br/>
                        
                    </div>
                    <br/>
                </div>
                
        
        </div>
    </div>       
    </div>
    );
}

export default Fashion;