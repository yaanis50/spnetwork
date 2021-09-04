import React, { Fragment } from 'react'
import BhB1 from '../../../images/first/Home-bg.jpg';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { motion } from 'framer-motion';


 
 
       
 
 export default function first() {
    return (
      
        
    
         <section className="section bg-image" id="features" style={{backgroundImage: `url(${BhB1}`, backgroundPosition:'center' , backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:"650px" }  }  >
            <motion.div data-aos="fade-up" className="container " initial={{opacity:0,x:-50,y:0}} animate={{opacity:1 ,x:1,y:0}} transition={{delay:1.5,duration:1.5 }}>   {/*  animation */}                       
            
             {/*Text*/}
            
                <h1  style={{  "color": "white" ,"font": "small-caps  50px/1 sans-serif" ,"padding-top":"100px","font-weight":"bold"  ,  "text-align": "left"}}>
                Where IT <br/>comes together <br/><br/></h1>   
            
            
                 <p style={{ "color": "white","font": "small-caps  20px/1 sans-serif"}}> Whatever challenge your business IT is facing, we <br/> <br/>are here to take the journey with you.      </p>
   
            </motion.div>   
 
</section>            

    )
}

