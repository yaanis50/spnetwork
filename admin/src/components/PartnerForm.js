import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PartnerForm({ partner }) {
	
	const [newPartner, setPartner] = React.useState({ name: partner ? partner.name : '' });
	const [image, setImage] = React.useState(null);

    const addPartner = async (e) => {

        e.preventDefault();
        let form = new FormData();
        if(newPartner && newPartner.name){form.append('name', newPartner.name);}
        if(newPartner && newPartner.name){form.append('rang', newPartner.rang * 1);}
        if(image){form.append('photo', image);}


		try {
			const url ='http://51.38.227.52/api/v1/partners/';
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
            window.location.replace('/Partners');

			} catch (err) {
                toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				console.log(err.response.data.message);
			}
	}

    const updatePartner = async (e) => {

        e.preventDefault();
        let formUpdate = new FormData();
        if(newPartner && newPartner.name){formUpdate.append('name', newPartner.name);}
        if(newPartner && newPartner.rang){formUpdate.append('rang', newPartner.rang * 1);}
        if(image){formUpdate.append('photo', image);}
        
		try {
			const url = `http://51.38.227.52/api/v1/partners/${partner._id}`;
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
            window.location.replace('/Partners');

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
                <label className="col-form-label col-sm-3 text-sm-left">Name</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={partner ? partner.name : ''} onChange={(e) => setPartner({...newPartner, name: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Rang</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" defaultValue={partner ? partner.rang : ''} onChange={(e) => setPartner({...newPartner, rang: e.target.value})}/>
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
					<span className="btn btn-primary" onClick={(e) => partner ? updatePartner(e) : addPartner(e)}>Submit</span>
				</div>
			</div>
	
	</React.Fragment>	
    );
}