import React from 'react'
import '../css_folder/style.css'
import LandingForm from '../components/LandingForm'
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Modal, Button } from 'react-bootstrap';

export default function Landing() {

    const [landings, setLandings] = React.useState([]);
    const [show, setShow] = React.useState(false);
    const [landing, setLanding] = React.useState({});
    
	const fetchLandings = async () => {
		try {
			const url ='http://51.38.227.52/api/v1/landings/';
			const res = await axios({
			  	method: 'get',
			  	url,
			});
            
			if (res.status === 200) {
				setLandings(res.data.landings);
				console.log(landings);
			}

			} catch (err) {
				console.log(err.response.data.message);
			}
	}

    const deleteLanding = async () => {
		try {
			console.log(landing);
			const url =`http://51.38.227.52/api/v1/landings/${landing._id}`;
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'delete',
			  	url,
			});

			
				toast.success('Success', {
					position: 'top-right',
					autoClose: 5000,
					draggable: false
				});
				window.location.replace('/Landings');
			

			} catch (err) {
				toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				setShow(false);
			}
	}

    React.useEffect(() => {
        fetchLandings();
    },[]);

    return (
        <main className="content">
        <div className="container-fluid p-0">
            <ToastContainer />
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3><strong>Landings </strong></h3>
                </div>

            </div>
            <div className="row">
						<div className="col-12 col-xl-12">
							<div className="card">
								
								<Table responsive>
									<thead>
										<tr>
											<th style={{"width":"10%"}}>#</th>
                                            <th style={{"width":"10%"}}>rang</th>
                                            <th style={{"width":"10%"}}>Image</th>
											<th style={{"width":"30%"}}>Title</th>
                                            <th style={{"width":"30%"}}>Description</th>
											
											<th style={{"width":"10%"}}><span data-toggle="modal" data-target="#defaultModalPrimary" style={{ "cursor": "pointer" }}><FeatherIcon icon="folder-plus"/></span></th>
										</tr>
									</thead>
									<tbody>
									{ landings.map((land, index) => (
										<tr key={index}>
											<td>{index}</td>
											<td>
                                            	{land.rang}
                                            </td>
                                            <td>
                                            	<img src={`http://51.38.227.52/images/landings/${land.image}`} className="rounded" style={{"height": "60px"}} />
                                            </td>
                                            <td>
                                            	{land.title}
                                            </td>
                                            <td>
                                            	{land.description}
                                            </td>
								
											<td className="table-action">
												<span style={{ "cursor": "pointer" }} onClick={() => { setLanding(land) }} data-toggle="modal" data-target="#ModalMod" ><FeatherIcon icon="edit-2" /></span>
												<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" onClick={() => { setLanding(land); setShow(true); }}/></span>
											</td>
										</tr>
										))
                                    }	
									</tbody>
								</Table>
                <div className="modal fade" id="defaultModalPrimary" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Add Landing</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <LandingForm />
								</div>
							</div>
                           
						</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

				<div className="modal fade" id="ModalMod" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <div className="col-12 col-xl-12">
                                
							         <div className="card">
                                         
									 <div className="modal-header">
													<h5 className="modal-title">Update Landing</h5>
													<span type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></span>
												</div>
								        <div className="card-body">
									        <LandingForm landing= {landing}/>
								</div>
							</div>
                           
						</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
							</div>
						</div>
                        </div>
                <Modal show={show} >
					<Modal.Header closeButton>
					<Modal.Title>Confirmation</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure you want delete "{landing.title}"!</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={() => { deleteLanding() }}>
						Delete
					</Button>
					</Modal.Footer>
				</Modal>
        </div>
    </main>
    )
}
