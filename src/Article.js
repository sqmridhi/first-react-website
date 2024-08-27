
import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css'

function Article(props){
    return(
        <>
        <div className='pagesmaindiv'>
            <br/>
            <div className="pagesheaddiv rounded col-11 m-auto p-3 pb-1 pt-4 text-center">
                <h1 className='toptitle'>{props.name}</h1>
            </div>
            <br/>

            <div className=' d-flex col-12 col-md-11 m-auto justify-content-between text-center flex-wrap'>
                {/* col-1 */}
                <div className='col-12 col-md-8 bg-light'>
                    <br/>
                    <div className='col-11 m-auto'>
                <Link to={`/${props.name}`} className="text-decoration-none fs-4 fw-lighter text-dark linkpink">{props.name}</Link>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <div className='col-1'><hr class="border border-dark border-1 opacity-75"></hr></div>
                                    <div className='m-1 fs-5'>❤</div>
                                    <div className='col-1'><hr class="border border-dark border-1 opacity-75"></hr></div>
                                </div>
                                <i className='fs-1 fw-medium'>{props.title}</i><br></br>   
                                <p className='fs-4 fw-lighter'>July 17</p>
                                <img src={props.img} className='img-fluid' alt='gridimg'></img>
                                <br/>   
                                <br/>
                                <p className='fs-3 fw-medium opacity-50'>SHARE</p>
                                <hr/>
                                <br/>
                                <br/>
                                <p className='para text-start'>As I’m always hunting for cool little gems, I thought I’d do a monthly round up of a few of my favorite things that month. This month I’ve been decorating my home and busy getting back into a slightly more post Covid life. Going to aim to share 4-6 gems every months – Enjoy x</p>
                                <p className='para text-start'><b>Home Decor: Jonathan Adler at Tanagra</b><br/>
                                    I grew up knowing Tanagra because we’d have to stop there every time my mom was at the mall, so I always assumed it was a store that catered to older Arab moms. During quarantine, while I was home shopping, I stumbled across Tanagra’s e-commerce and was impressed with their collections and the brands they had on board. Bought a few pieces from Jonathan Adler like a peace book end, coasters and a salt and pepper set.</p>
                                <p className='para text-start'><b>-Furniture: Casa Lusso</b><br/>
                                    When looking at furniture for my new home, I really wanted to find different gems – and really giving it character instead of shopping most of my pieces from one store. I got my beautiful marble side table that you have probably have seen on social, and my plush dining chairs (sharing soon) from there.</p>
                                <p className='para text-start'><b>Home service : OïA</b><br/>
                                    I’m so picky when it comes to nails. I look for hygiene, a great mani (Dubai has spoilt me), great shaping, application – and a plus when they’re creative to do some cool nail art. I only have a handful of nail therapists I can recommend in the city and I never found one for an at home service. I recently tried out Oia, a new home service that started earlier this year, and one of Dubai’s OG nail artists, Cheryl from TNS is training all the staff there. Highly recommend Che and Joyce.</p>
                                <p className='para text-start'><b>Home Decor: Jonathan Adler at Tanagra</b><br/>
                                    I grew up knowing Tanagra because we’d have to stop there every time my mom was at the mall, so I always assumed it was a store that catered to older Arab moms. During quarantine, while I was home shopping, I stumbled across Tanagra’s e-commerce and was impressed with their collections and the brands they had on board. Bought a few pieces from Jonathan Adler like a peace book end, coasters and a salt and pepper set.</p>
                    </div>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>                                                          
                </div>
               
                
                
                {/* col-2 */}
                <div className='col-12 col-md-4 mt-5 mt-md-0'>
                    <div className='bg-light col-12 col-md-11 ms-md-auto'>
                    <div className='bg-light'>
                        <p className='mb-0 fs-5 fw-lighter pt-5'>SIGN UP FOR THE</p>
                        <p className='mb-0  fw-light emailtext' style={{transform: "rotate(-10deg)"}}><i>soft and sophisticated</i></p>
                        <p className='mt-0 fw-lighter pb-5'>NEWSLETTER</p>
                        <div className='emaildiv'>
                        <input type='text' className='emailinput' placeholder='Email'></input>
                        <button type="submit" className='emailbutton'>➤</button>
                        </div>
                    <br/>
                    <br/>
                        
                    </div>
                    <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/>
                        <hr/> 
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );

    }

export default Article;