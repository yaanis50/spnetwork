import React from 'react';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserForm({ user }) {
	
    const [newUser, setNewUser] = React.useState({});

    const addUser = async () => {
		try {
			const url ='http://51.38.227.52/api/v1/users/';
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'post',
			  	url,
                data: {...newUser}
			});
        
            toast.success('Success', {
                position: 'top-right',
                autoClose: 5000,
                draggable: false
            });
            window.location.replace('/Users');

			} catch (err) {
                toast.error(err.response.data.message, {
					position: 'top-right',
					autoClose: 5000,
					draggable: true
				});
				console.log(err.response.data.message);
			}
	}

    const updateUser = async () => {
		try {
			const url = `http://51.38.227.52/api/v1/users/${user._id}`;
			const res = await axios({
                headers: {'Authorization': `Bearer ${localStorage.getItem('SPNetwork')}`},
			  	method: 'put',
			  	url,
                data: {...newUser}
			});
        
            toast.success('Success', {
                position: 'top-right',
                autoClose: 5000,
                draggable: false
            });
            window.location.replace('/Users');

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
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Name</label>
                <div className="col-sm-9">
					<input type="text" className="form-control" defaultValue={user ? user.name : ''} onChange={(e) => setNewUser({...newUser, name: e.target.value})} onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>
				</div>
			</div>
			<div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Email</label>
                <div className="col-sm-9">
					<input type="email" className="form-control" defaultValue={user ? user.email : ''} onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Password</label>
                <div className="col-sm-9">
					<input type="password" className="form-control" onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
				</div>
			</div>
            <div className="mb-3 row">
                <label className="col-form-label col-sm-3 text-sm-left">Confirm Pasword</label>
                <div className="col-sm-9">
					<input type="password" className="form-control" onChange={(e) => setNewUser({...newUser, passwordConfirm: e.target.value})}/>
				</div>
			</div>

			
			<div className="mb-3 row">
				<div className="col-sm-9">
					<span className="btn btn-primary" onClick={() => { user ? updateUser() : addUser()}}>Submit</span>
				</div>
			</div>
	
	</React.Fragment>	
    );
}