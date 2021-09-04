import React from 'react';

import YouTube from 'react-youtube';

import Button from 'react-bootstrap/Button'
import { motion } from 'framer-motion';
export default function youtube() {
 
 
    {/*  paramètres youtube */} 
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      

        return (
            <React.Fragment>
                <section className="section" id="youtube" style={{
        backgroundColor: 'Gainsboro' 
      }}>
                    <div className="container"     >
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="title text-center mb-5">
                                {/*  Animation */}
                                <motion.div  initial={{opacity:0,x:-20,y:0}} animate={{opacity:1 ,x:0,y:0}} transition={{delay:1.5,duration:1.5 }}> 
    

                                    <p style={{ "color": "DarkSlateBlue","font": "small-caps  40px/1 sans-serif" ,"font-weight":"bold"  }}>Your data center guardians</p>
                                    </motion.div>
                                    <p style={{ "color": "LightSlateGray","font": "small-caps  20px/1 sans-serif"}}>Shield your business from hardware failures and erase your worries at a cost-effective price.</p>

                                    <YouTube videoId="CXAoPvlvN0Q" opts={opts}  />;   {/*  Lien youtube */}
                        
                                    <div className="col-center">
                           
                           <Button variant="primary" size="lg"> About Hardware Maintenance </Button> {/*  Boutton */}
                            </div>
                        

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </React.Fragment >
        );
}


