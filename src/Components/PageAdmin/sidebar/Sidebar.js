import React, { useState } from 'react'
import "./Sidebar.css";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import logo from "../../../images/logoMAE.png";
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import StoreIcon from '@material-ui/icons/Store';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AuthenticationService from '../../../services/AuthenticationService';
import { Link, useHistory, useParams } from 'react-router-dom';


const Sidebar = ({ sidebarOpen, closeSidebar}) => {
const history = useHistory();

      const SignOut = () => {
        AuthenticationService.signOut();
        history.push('/home');
        window.location.reload();
      }
     
  return (
    <div className={sidebarOpen ? "sidebar-responsive": ""} id="sidebar">
        <div className='sidebar__title'>
            <div className='sidebar__img'>
                <img src={logo} alt='imge'/> 
                
            </div>
            <CloseIcon
               className="sidebarIcon"
               id='sidebarIcon'
               onClick={() => closeSidebar()}/>
        </div>
        <div className='sidebar__menu'>
            <div className='sidebar__link active_menu_link'>
                <HomeIcon className="sidebarIcon"/>
                <a href='/Admin'>Dashboard</a>
            </div>
            <h2>Les Gestions</h2>
            <div className='sidebar__link'>
                <GroupIcon className="sidebarIcon"/>
                <a href='/Listusers'>Les Users</a>
            </div>
            <div className='sidebar__link'>
                <StoreIcon className="sidebarIcon"/>
                <a href='/produits'>Les Produits</a>
            </div>
            <div className='sidebar__link'>
                <AssignmentIcon className="sidebarIcon"/>
                <a href='/contrats'>Les Contrats</a>
            </div>
            <div className='sidebar__link'>
                <InfoIcon className="sidebarIcon"/>
                <a href='/sinistres'>Les Sinistres</a>
            </div>
            <div className='sidebar__link'>
                <AssignmentLateIcon className="sidebarIcon"/>
                <a href='/reclamations'>Les Réclamations</a>
            </div>
            <div className='sidebar__logout'>
                <PowerSettingsNewIcon className="sidebarIcon"/>
                <a href=''onClick={() => SignOut()} >Log out</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
