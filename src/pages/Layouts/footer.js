
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";

import '../../css/pe-icon-7.css';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="bg-footer">
                    <div className="container">
                        <Row>
                            <Col lg="3">
                                <div className="text-white">
                                    <h3 className="mb-4 footer-list-title f-17">SPNetwork</h3>
                                    <ul className="footer-icons list-inline mb-4">
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-facebook"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-instagram"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-google"></i></Link></li>
                                    </ul>
                                    <p className="copyright mt-3">{new Date().getFullYear()} © SPNetwork.</p>
                                </div>
                            </Col>
                            <Col lg="9">
                                <Row>
                                    <Col lg="4">
                                        <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Téléphones</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="">Tél TUN: (+216) 20 03 52 00 </Link></li>
                                                <li><Link to="">Tél FRA : (+33) 6 15 82 43 36</Link></li>
                                                
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col lg="3">
                                        <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Email</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="">mohamed.drira@spnetwork.fr</Link></li>
                                                
                                            </ul>
                                        </div>
                                    </Col>
                                  
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </footer>
                <ScrollUpButton  style={{ width: "30px",height: "30px",position: "fixed",bottom : "10px", right : "20px", padding : "5px",  textAlign : "center", zIndex : "10000", borderRadius : "3px", backgroundColor : "rgba(19, 206, 103, 0.7)" }} />

            </React.Fragment >
        );
    }
}

export default Footer;


