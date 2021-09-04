import React from 'react';
import img2 from '../../../images/features/img-2.png';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion';
import BhB1 from '../../../images/clients/1.png';
import BhB2 from '../../../images/clients/2.png';
import  {Carousel}  from 'react-bootstrap';
export default function solutions() {


    
    return (
        <React.Fragment>
                <section className="section bg-custom3" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <motion.div className="title text-center mb-5" initial={{opacity:0,x:200,y:0}} animate={{opacity:1 ,x:0,y:0}} transition={{delay:1.5,duration:1.5 }}>
                                  
                                    <h1 style={{ "color": "white","font-weight":"bold"   }}>Don’t get left behind </h1>
                                    <p className="text-white mt-3" style={{ "color": "White","font": "normal  25px/1 sans-serif"}}>When society is reshaped and technology forwards a few years, all companies are forced to rethink and adapt how they work. With us on your side, you can transform your business and keep up the pace.</p>
                                </motion.div>
                            </div>
                        </div>
                       
                        <div className="row vertical-content center">
                            <div className="col-center">
                           
                               <Button variant="primary" size="lg"> About our services </Button>
                                </div>
                                                    </div>
                    </div>


                </section>
        </React.Fragment >
    )
}


