import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FeatureForm({ feature }) {

	const [newFeature, setFeature] = React.useState()

	const addFeature = async () => {
		try {
			const url ='http://51.38.227.52/api/v1/features/';
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'post',
			  	url,
                data: {...newFeature}
			});
        
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
				console.log(err.response.data.message);
			}
	}

    const updateFeature = async () => {
		try {
			const url = `http://51.38.227.52/api/v1/features/${feature._id}`;
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'put',
			  	url,
                data: {...newFeature}
			});
        
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
				console.log(err.response.data.message);
			}
	}
	
    return (
        <React.Fragment>
			<ToastContainer />
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Title</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={feature ? feature.title : ''}  onChange={(e) => setFeature({...newFeature, title: e.target.value})}/>
				</div>
			</div>
			

			
			<div className="mb-3 row">
				<div className="col-sm-9">
					<span className="btn btn-primary" onClick={ () => {feature ? updateFeature() : addFeature() }}>Submit</span>
				</div>
			</div>
	
	</React.Fragment>	
    );
}