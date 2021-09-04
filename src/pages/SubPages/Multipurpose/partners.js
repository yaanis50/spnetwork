



import React from 'react'
import BhB1 from '../../../images/clients/1.png';
import BhB2 from '../../../images/clients/2.png';
import BhB3 from '../../../images/clients/3.png';
import BhB4 from '../../../images/clients/4.png';
import BhB5 from '../../../images/clients/5.png';
import BhB6 from '../../../images/clients/6.png';
import BhB7 from '../../../images/clients/7.png';
import BhB8 from '../../../images/clients/8.png';
import BhB9 from '../../../images/clients/9.png';
import BhB10 from '../../../images/clients/10.png';
import Bh11 from '../../../images/clients/11.png';
import BhB12 from '../../../images/clients/12.png';
import Button from 'react-bootstrap/Button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1700, min: 464 },
    items: 4
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function partners() {
    
    
    
    return (



        <React.Fragment>
        <section className="section" id="youtube" >


        <div className="container"     >     

        <center>
  <h6>SOME OF OUR PARTNERS</h6>
<br></br><br></br>
<Carousel responsive={responsive}  swipeable={false}
  draggable={false}
 
  responsive={responsive}
  
  infinite={true}
  
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  autoPlay="true"
  autoPlaySpeed="2000">
 
   <img src={BhB1} alt="Logo1" width="100px"/>
   <img src={BhB2} alt="Logo2" width="100px"/>
 <img src={BhB3} alt="Logo3"width="100px" />
 <img src={BhB4} alt="Logo4"width="100px" />
 <img src={BhB5} alt="Logo5"width="100px" />
   <img src={BhB6} alt="Logo6"width="100px" />
 <img src={BhB7} alt="Logo7"width="100px" />
 <img src={BhB8} alt="Logo8"width="100px" />
 <img src={BhB9} alt="Logo9"width="100px" />
   <img src={BhB10} alt="Logo10"width="100px" />
 <img src={Bh11} alt="Logo11"width="100px" />
 <img src={BhB12} alt="Logo12"width="100px" />

</Carousel> <br></br><br></br> </center>
</div>

<div className="row vertical-content center">
                            <div className="col-center">
                           
                               <Button variant="primary" size="lg"> See all our Partners </Button>
                                </div>
                                                    </div>
                    
</section>
</React.Fragment >
    )

}
