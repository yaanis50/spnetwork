import React from 'react'
import '../css_folder/style.css'
import PartnerForm from '../components/PartnerForm'
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Modal, Button } from 'react-bootstrap';

export default function Role() {

    const [partners, setPartners] = React.useState([]);
    const [partner, setPartner] = React.useState({});
    const [show, setShow] = React.useState(false);
    
	const fetchPartners = async () => {
		try {
			const url ='http://51.38.227.52/api/v1/partners/';
			const res = await axios({
			  	method: 'get',
			  	url,
			});
            
			if (res.status === 200) {
				setPartners(res.data.partners);
				console.log(partners);
			}

			} catch (err) {
				console.log(err.response.data.message);
			}
	}

    
    const deletePartner = async () => {
		try {
			const url =`http://51.38.227.52/api/v1/partners/${partner._id}`;
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
				window.location.replace('/Partners');
			
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
        fetchPartners();
    },[]);


    return (
        <main className="content">
        <div className="container-fluid p-0">
            <ToastContainer />
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3><strong>Partners </strong></h3>
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
											<th style={{"width":"60%"}}>name</th>
											
											<th style={{"width":"10%"}}><span data-toggle="modal" data-target="#defaultModalPrimary" style={{ "cursor": "pointer" }}><FeatherIcon icon="folder-plus"/></span></th>
										</tr>
									</thead>
									<tbody>
									{ partners.map((partn, index) => (
										<tr key={index}>
											<td>{index}</td>
											<td>
                                            	{partn.rang}
                                            </td>
                                            <td>
                                                <img src={`http://51.38.227.52/images/partners/${partn.image}`} className="rounded" style={{"height": "60px"}} />
                                            </td>
                                            <td>
                                            	{partn.name}
                                            </td>
                                          
								
											<td className="table-action">
												<span style={{ "cursor": "pointer" }} onClick={() => setPartner(partn)} data-toggle="modal" data-target="#ModalMod" ><FeatherIcon icon="edit-2" /></span>
												<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" onClick={() => {setPartner(partn); setShow(true);}}/></span>
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
													<h5 className="modal-title">Add Partner</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <PartnerForm />
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
													<h5 className="modal-title">Update Partner</h5>
													<span type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></span>
												</div>
								        <div className="card-body">
									        <PartnerForm partner={partner}/>
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
					<Modal.Body>Are you sure you want delete "{partner.name}!</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={() => deletePartner() }>
						Save Changes
					</Button>
					</Modal.Footer>
				</Modal>
        </div>
    </main>
    )
}
