import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import {NavDropdown,} from 'react-bootstrap'

import logo_light from '../../images/logo-light.png';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false, modal: false,isOpenMenu :false };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleHeader = this.toggleHeader.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

      toggleHeader = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {

        return (
            <React.Fragment>


       {/*  Contacts */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}  className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}> 
          <h5  id="exampleModalLongTitle">Get in touch</h5>
          </ModalHeader>
          <ModalBody className="p-4">
                            <div className="custom-form">
                                <div id="message"></div>
                                <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mb-4">
                                                <input name="name" id="name" type="text" className="form-control" placeholder="Your Name..." />
                                            </div>
                                            <div className="form-group mb-4">
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your Email..." />
                                            </div>
                                            <div className="form-group mb-4">
                                                <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Subject..." />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-12 text-right">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Send Message" />
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
          </ModalBody>
        </Modal>


                <div id="is-sticky">
                    <nav id="nav-bar" className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                        <div className="container">


                            <Link className="logo text-uppercase " to="/">  
                                <img src={logo_light} alt="" className="logo-dark" height="45" />  {/*  logo spnetwork */}
                            </Link>



                            <button className="navbar-toggler" type="button" onClick={this.toggleHeader}>
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpenMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarCollapse">

                            <div
                                    scrollTargetIds={["home", "about", "services", "portfolio", "testimonial", "pricing"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"
                                    className={this.state.isOpenMenu ? "navbar-nav ml-0 float-left" : "navbar-nav   ml-auto navbar-center"}>




  <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
     <li className="nav-link px-3">
     <NavDropdown onMouseEnter={(e) => document.getElementById("abouts").click()} onMouseLeave={(e) => document.getElementById("abouts").click()} title="Abouts" id="abouts" >
     <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Partners</NavDropdown.Item>
     </NavDropdown>
     </li>

     <li className="nav-link px-3">
     <NavDropdown onMouseEnter={(e) => document.getElementById("solutions").click()} onMouseLeave={(e) => document.getElementById("solutions").click()} title="Solutions" id="solutions" >
     <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Business Communications</NavDropdown.Item>
     <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Cloud Networking</NavDropdown.Item>
     </NavDropdown>
     </li>

    <li className="nav-link px-3">
    <NavDropdown onMouseEnter={(e) => document.getElementById("services").click()} onMouseLeave={(e) => document.getElementById("services").click()} title="Services" id="services">
    <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Hardware Maintenance</NavDropdown.Item>
    <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Self-Healing Monitoring</NavDropdown.Item>
    <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Development as a Service</NavDropdown.Item>
    <NavDropdown.Item href="#partners" style={{color: 'black'}} className="nav-link2">Multi-vendor Reselling</NavDropdown.Item>
    </NavDropdown>
    </li>

    <li className="nav-link px-3">
    <Link onClick={this.toggleModal} to="#" className="nav-link ">Contacts</Link>
    </li>

 </ul>
       
</div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


