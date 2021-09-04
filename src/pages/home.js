import React, { Component } from 'react';
import axios from 'axios'
// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';

// Shared
import AboutUs from './SubPages/Multipurpose/about-us';

import Team from './SubPages/Multipurpose/team';

import Client from './SubPages/Multipurpose/client';
import Partners from './SubPages/Multipurpose/partners';
import '../css/pe-icon-7.css';


import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import First from './SubPages/Multipurpose/first';
import Second from './SubPages/Multipurpose/second';
import Youtube from './SubPages/Multipurpose/youtube';
import Solutions from './SubPages/Multipurpose/solutions';

class homeBusiness extends Component {

    state = {
        activeIndex: 0,
    }

    state = {
        landings: []
    }

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };

    fetchLandings = async () => {
        try{
             const url ='http://51.38.227.52/api/v1/landings/';
             const res = await axios({
                   method: 'get',
                   url,
             });
             
             this.setState({ landings: res.data.landings });
             
         } catch(err){
             console.log(err);
         }       
    };
   

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
        this.fetchLandings();
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('nav-bar').classList.add('nav-sticky');
        }
        else {
            document.getElementById('nav-bar').classList.remove('nav-sticky');
        }
    }

    render() {
        

        console.log(this.state.landings)
        return (
            <React.Fragment>

                {/*  Header.js */}
                <Header /> 

                {/* Home Section */}

                <First/>  {/*  first.js */}
                
                <Second/> {/*  second.js */}
               
                <Youtube/> {/*  youtube.js */}

                <Client/>{/*  client.js */}
            
                <AboutUs/>   {/*  about-us.js */}
                
                <Partners/> {/*  partners.js */}

                <Solutions/>  {/*solutions.js */}

                <Team/> {/*  team.js */}


                {/* Footer */}
                <Footer />

            </React.Fragment >
        );
    }
}

export default homeBusiness;


