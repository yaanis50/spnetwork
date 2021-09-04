import React from 'react'
import '../css_folder/style.css'
import Form from '../components/FeatureForm'
import axios from 'axios';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'react-bootstrap';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Modal, Button } from 'react-bootstrap';

export default function Features() {

	const [features, setFeatures] = React.useState([]);
	const [show, setShow] = React.useState(false);
	const [feature, setFeature] = React.useState({});

	const fetchFeatures = async () => {
		try {
			const url ='http://51.38.227.52/api/v1/features/';
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'get',
			  	url,
			});

			if (res.status === 200) {
				setFeatures(res.data.features);
				console.log(features);
			}

			} catch (err) {
				console.log(err.response.data.message);
			}
	}

	const deleteFeature = async () => {
		try {
			const url =`http://51.38.227.52/api/v1/features/${feature._id}`;
			const res = await axios({
				headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'delete',
			  	url,
			});
				console.log(res);
			
				toast.success('Success', {
					position: 'top-right',
					autoClose: 5000,
					draggable: false
				});
				window.location.replace('/Features');
			

			} catch (err) {
				toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				setShow(false);
				console.log(err);
			}
	}

	React.useEffect(() => {
		fetchFeatures();
	},[]);


    return (
        <main className="content">
        <div className="container-fluid p-0">
			<ToastContainer />
            <div className="row mb-2 mb-xl-3">
                <div className="col-auto d-none d-sm-block">
                    <h3><strong>Features </strong></h3>
                </div>

            </div>
            <div className="row">
						<div className="col-12 col-xl-12">
							<div className="card">
								
								<Table responsive>
									<thead>
										<tr>
											<th style={{"width":"10%"}}>#</th>
											<th style={{"width":"80%"}}>Title</th>
											
											<th style={{"width":"10%"}}><span data-toggle="modal" data-target="#defaultModalPrimary" style={{ "cursor": "pointer" }}><FeatherIcon icon="folder-plus"/></span></th>
										</tr>
									</thead>
									<tbody>
									{ features.map((feat, index) =>(
										<tr key={index}>
											<td>{index}</td>
											<td>
                                            	{feat.title}
                                            </td>
								
											<td className="table-action">
												<span style={{ "cursor": "pointer" }} data-toggle="modal" data-target="#ModalMod" onClick={() => setFeature(feat)}><FeatherIcon icon="edit-2" /></span>
												<span style={{ "cursor": "pointer" }} ><FeatherIcon icon="trash" onClick={() => { setFeature(feat); setShow(true); }}/></span>
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
													<h5 className="modal-title">Add Feature</h5>
													<button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
												</div>
								        <div className="card-body">
									        <Form />
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
													<h5 className="modal-title">Update Feature</h5>
													<span type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></span>
												</div>
								        <div className="card-body">
									        <Form feature={feature}/>
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

        </div>

				<Modal show={show} >
					<Modal.Header closeButton>
					<Modal.Title>Confirmation</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure you want delete "{feature.title}"!</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>
						Close
					</Button>
					<Button variant="primary" onClick={() => deleteFeature() }>
						Delete
					</Button>
					</Modal.Footer>
				</Modal>
    </main>
    )
}
