import React from 'react';
import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion';
export default function second() {


    
    return (
        <React.Fragment>
                <section className="section bg-custom3" id="features">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <motion.div className="title text-center mb-5" initial={{opacity:0,x:200,y:0}} animate={{opacity:1 ,x:0,y:0}} transition={{delay:1.5,duration:1.5 }}>
                                  
                                    <h1 style={{ "color": "white" }}>Simple management or <br/>deep transformation </h1>
                                    <p className="text-white mt-3">Whether you’re urging for digital transformation or wanting to easily manage your business IT, you will see your problems fade with our knowledge on your side.</p>
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


