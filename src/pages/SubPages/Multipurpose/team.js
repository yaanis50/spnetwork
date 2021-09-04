import React from 'react';
import { Link } from 'react-router-dom';
import BhB1 from '../../../images/news/EMEA.png';
import BhB2 from '../../../images/news/PMEjpg.jpg';
import BhB3 from '../../../images/news/Sikur.png';

import Button from 'react-bootstrap/Button'

export default function Team() {


        return (
            <React.Fragment>
                
                
                
                <section className="section bg-light" id="equipe">
                    <div className="container">
                       
                      <div class="row">
        
        
                
                   
                       <div class="col-16 col-xl-9">     <h1  style={{  "font": "small-caps  50px/1 sans-serif" ,"font-weight":"bold" }}>
                       Latest News <br/><br/></h1> </div>
                   
                   
                       <div class="col-4 col-sm-3">                              
                        <Button variant="primary" size="lg"> See all News </Button></div>
                       </div>

                   
                   
                   
                        <div className="row" >
                                    
                                    {/*  Gauche */}
                                   <div key={0} className="col-xl-4 ">
                                        <div className="team-box bg-white mt-3">
                                            <div className="team-img">
                                                <img src={BhB1} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                            <div className="team-content text-center p-3">
                                                <h5 className="team-name f-17"><Link to="#" className="text-custom">{"New partner: Sikur"}</Link></h5>
                                                <p className="mb-0 text-dark f-14">September 1st, 2020</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  centre */}
                                    <div key={1} className="col-xl-4 ">
                                        <div className="team-box bg-white mt-3">
                                            <div className="team-img">
                                                <img src={BhB2} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                            <div className="team-content text-center p-3">
                                                <h5 className="team-name f-17"><Link to="#" className="text-custom">Leading SME 2020</Link></h5>
                                                <p className="mb-0 text-dark f-14">August 7th, 2020</p>
                                            </div>
                                        </div>
                            
                                    </div>
                       
                       
                       
                       {/*  droite */}
                       
                                    <div key={0} className="col-xl-4  ">
                                        <div className="team-box bg-white mt-3">
                                            <div className="team-img">
                                                <img src={BhB3} alt="" className="img-fluid mx-auto d-block" />
                                            </div>
                                            <div className="team-content text-center p-3">
                                                <h5 className="team-name f-17"><Link to="#" className="text-custom">{"EMEA Technology Fast 500, 2019"}</Link></h5>
                                                <p className="mb-0 text-dark f-14">August 6th, 2020</p>
                                            </div>
                                        </div>
                                    </div>
                       
                       
                    
                        </div>

                    </div>
                </section>
            </React.Fragment >
        );
}


