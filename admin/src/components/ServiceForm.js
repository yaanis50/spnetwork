import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ServiceForm({ service }) {
	
	const [newService, setService] = React.useState()

	const addService = async () => {
		try {
			const url ='http://51.38.227.52/api/v1/services/';
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'post',
			  	url,
                data: {...newService}
			});
        
            toast.success('Success', {
                position: 'top-right',
                autoClose: 5000,
                draggable: false
            });
            window.location.replace('/services');

			} catch (err) {
                toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				console.log(err.response.data.message);
			}
	}

    const updateService = async () => {
		try {
			const url = `http://51.38.227.52/api/v1/services/${service._id}`;
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'put',
			  	url,
                data: {...newService}
			});
        
            toast.success('Success', {
                position: 'top-right',
                autoClose: 5000,
                draggable: false
            });
            window.location.replace('/Services');

			} catch (err) {
                toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				console.log(err.response.data.message);
			}
	}
    return (
        <React.Fragment>
			<ToastContainer />
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Title</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={service ? service.title : ''} onChange={(e) => setService({...newService, title: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Description</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={service ? service.description : ''} onChange={(e) => setService({...newService, description: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">rang</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" defaultValue={service ? service.rang : ''} onChange={(e) => setService({...newService, rang: e.target.value})}/>
				</div>
			</div>
			
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">icon</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={service ? service.icon : ''} onChange={(e) => setService({...newService, icon: e.target.value})}/>
				</div>
			</div>
			
			<div className="mb-3 row">
				<div className="col-sm-9">
					<span className="btn btn-primary" onClick={() => service ? updateService() : addService()}>Submit</span>
				</div>
			</div>
	
	</React.Fragment>	
    );
}