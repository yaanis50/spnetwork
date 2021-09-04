import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MemberForm({ member }) {
	
	const [newMember, setMember] = React.useState();
	const [image, setImage] = React.useState(null);

    const addMember = async (e) => {

        e.preventDefault();
        let form = new FormData();
        if(newMember && newMember.first_name){form.append('first_name', newMember.first_name);}
		if(newMember && newMember.last_name){form.append('last_name', newMember.first_name);}
        if(newMember && newMember.rang){form.append('rang', newMember.rang * 1);}
        if(newMember && newMember.title){form.append('title', newMember.title);}
        if(image){form.append('photo', image);}

		try {
			const url ='http://51.38.227.52/api/v1/team/';
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
            window.location.replace('/Members');

			} catch (err) {
                toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				console.log(err.response.data.message);
			}
	}

    const updateMember = async (e) => {

        e.preventDefault();
        let formUpdate = new FormData();
        if(newMember && newMember.first_name){formUpdate.append('first_name', newMember.first_name);}
		if(newMember && newMember.last_name){formUpdate.append('last_name', newMember.last_name);}
        if(newMember && newMember.rang){formUpdate.append('rang', newMember.rang * 1);}
        if(newMember && newMember.title){formUpdate.append('title', newMember.title);}
        if(image){formUpdate.append('photo', image);}
        
		try {
			const url = `http://51.38.227.52/api/v1/team/${member._id}`;
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
            window.location.replace('/Members');

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
                <label className="col-form-label col-sm-3 text-sm-left">First Name</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={member ? member.first_name : ''} onChange={(e) => setMember({...newMember, first_name: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Last Name</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={member ? member.last_name : ''} onChange={(e) => setMember({...newMember, last_name: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Title</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={member ? member.title : ''} onChange={(e) => setMember({...newMember, title: e.target.value})}/>
				</div>
			</div>

            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">rang</label>
                <div className="col-sm-9">
					<input type="number" className="form-control" defaultValue={member ? member.rang : ''} onChange={(e) => setMember({...newMember, rang: e.target.value})}/>
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
					<span className="btn btn-primary" onClick={(e) => { member ? updateMember(e) : addMember(e) }}>Submit</span>
				</div>
			</div>
	
	</React.Fragment>	
    );
}