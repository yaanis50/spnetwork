
import Bh1 from '../../../images/start.jpg';
import Bh2 from '../../../images/register.png';

import React from 'react';
import Button from 'react-bootstrap/Button'
export default function ContactUs() {

        return (
            <React.Fragment>
                <section className="section bg-image" id="features" style={{backgroundImage: `url(${Bh2}`, backgroundPosition:'center' , backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',height:"650px" }  }  >
                    <div className="container">
                        <div className="row justify-content-left">
                            <div className="col-lg-7">
                                <div className="title text-left mb-9">
                                    <h1 style={{  "color":"white", "padding-top":"60px","padding-bottom":"30px","font-weight":"bold"  ,  "text-align": "left"
}}>Ready to start?</h1>
                                    <p className="text-white mt-3" style={{ "font": "normal  29px/1 sans-serif","padding-bottom":"30px"}}>Get in touch so we can start planning how we’ll drive your business to greater outcomes.</p>
                                  
                              
                              
                                </div>
                                <div >
                               <Button variant="primary" size="lg"> More about us </Button>
                                                    </div>
                                                            </div>
                        
                                                            <div className="col-lg-2">
                                <img src={Bh1} alt="Logo1" width="480px" height="360"/>
                               
                               
                                </div>        
                              
                    
                    </div>
                        
                        </div>
                     
                </section>
            </React.Fragment >
        );
}


