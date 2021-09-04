import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LandingForm({ landing }) {
	
    const [newLanding, setLanding] = React.useState();
    const [image, setImage] = React.useState(null);

    const addLanding = async (e) => {

        e.preventDefault();
        let form = new FormData();
        if(newLanding && newLanding.title){form.append('title', newLanding.title);}
        if(newLanding && newLanding.rang){form.append('rang', newLanding.rang * 1);}
        if(newLanding && newLanding.description){form.append('description', newLanding.description);}
        if(image){form.append('photo', image);}

        
		try {
			const url ='http://51.38.227.52/api/v1/landings/';
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'post',
			  	url,
                data: form
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
				console.log(err.response.data.message);
			}
	}

    const updateLanding = async (e) => {

        e.preventDefault();
        let formUpdate = new FormData();
        if(newLanding && newLanding.title){formUpdate.append('title', newLanding.title);}
        if(newLanding && newLanding.rang){formUpdate.append('rang', newLanding.rang * 1);}
        if(newLanding && newLanding.description){formUpdate.append('description', newLanding.description);}
        if(image){formUpdate.append('photo', image);}
        
		try {
			const url = `http://51.38.227.52/api/v1/landings/${landing._id}`;
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'put',
			  	url,
                data: formUpdate
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
				console.log(err.response.data.message);
			}
	}


    return (
        <React.Fragment>
            <ToastContainer />
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Title</label>
                <div className="col-sm-9">
					<input type="text" id="title" className="form-control" defaultValue={landing ? landing.title : ''}  onChange={(e) =>  setLanding({...newLanding, title: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Description</label>
                <div className="col-sm-9">
					<input type="text" id="description" className="form-control" defaultValue={landing ? landing.description : ''} onChange={(e) =>  setLanding({...newLanding, description: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">rang</label>
                <div className="col-sm-9">
					<input type="number" id="rang" className="form-control" defaultValue={landing ? landing.rang : ''} onChange={(e) =>  setLanding({...newLanding, rang: e.target.value})}/>
				</div>
			</div>
			
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Image</label>
                <div className="col-sm-9">
					<input type="file" id="image" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
				</div>
			</div>
			
			<div className="mb-3 row">
				<div className="col-sm-9">
					<span className="btn btn-primary" onClick={(e) => {landing ? updateLanding(e) : addLanding(e)}}>Submit</span>
				</div>
			</div>
	
	</React.Fragment>	
    );
}