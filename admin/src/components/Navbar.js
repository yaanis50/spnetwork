import React from 'react'
import { useAuthState } from '../context/auth';
import { useAuthDispatch } from '../context/auth';
import FeatherIcon from 'feather-icons-react';

export default function Navbar(props) {
    const { user } = useAuthState();

    console.log(user);
    
    const dispatch = useAuthDispatch();

    const logout = () => {
        dispatch({ type:'LOGOUT' });
        window.location.href = '/login';
    }

    if(user){
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle d-flex">
                <i className="hamburger align-self-center"></i>
            </a>


            <div className="navbar-collapse collapse">
                <ul className="navbar-nav navbar-align">
                   
                   
                    <li className="nav-item dropdown">

                        <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-toggle="dropdown">
                            <FeatherIcon className="align-middle" icon="settings" />
                        </a>

                        <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-toggle="dropdown">
                            <img src="img/photos/user-01.png" className="avatar img-fluid rounded mr-1" alt="user" /> <span className="text-dark">{ user.payload.name }</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                            
                          
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item" style={{ "cursor": "pointer" }} onClick={logout}><FeatherIcon className="align-middle mr-1" icon="log-out" /> Log out</span>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
    ) } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}
