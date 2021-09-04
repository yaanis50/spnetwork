
import Bh1 from '../../../images/tech.jpg';
import React from 'react';
import Button from 'react-bootstrap/Button'
export default function AboutUs() {

        return (
            <React.Fragment>
                <section className="section" id="about"  style={{backgroundColor: 'Gainsboro' }}>
                    <div className="container">
                        <div className="row justify-content-left">
                            <div className="col-lg-7">
                                <div className="title text-left mb-9">
                                    <h1 style={{  "padding-top":"30px","font-weight":"bold"  ,  "text-align": "left"
                                     }}>Tech moves fast <br/> and so do we</h1>
                                    <p className="text-dark mt-3" style={{ "color": "black","font": "normal  29px/1 sans-serif"}}>It’s not just about being quick. It’s about understanding the ever-changing character of technology and to swiftly deliver what suits every situation.</p>

                                </div>
                                <div >
                               
                               {/*  Boutton */}
                               <Button variant="primary" size="lg"> More about us </Button>
                                                    </div>
                                                            </div>
                        
                               
                               
                               
                               {/*  Image à droite */}
                               
                                  <div className="col-lg-2">
                                   <img src={Bh1} alt="Logo1" width="480px" height="360"/>
                               
                                   </div>        
                              
                    
                    </div>
                        
                        </div>
                     
                </section>
            </React.Fragment >
        );
}


