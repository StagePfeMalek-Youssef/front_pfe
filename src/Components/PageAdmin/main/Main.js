import React, { Component } from 'react'
import "./Main.css";
import hello from "../../../images/homep3.jpg";
import Chart from "../charts/Chart";
import AuthenticationService from '../../../services/AuthenticationService';
export default class Main extends Component {
    constructor(props) {
        super(props);
  
        this.state = { 
          username: undefined,
        };
      }
     
  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

      this.setState({
        
        username: user.username
      });

    }
  
  render() {
    return (
        <main>
        <div className='main__container'>
            <div className='main__title'>
                <img src={hello} alt='hello' />
                <div className='main__greeting'>
                    <h1>Hello {this.state.username}</h1>
                    <p>Binvenue chez Admin Dashboard</p>
                </div>
               </div>
               <div className='main__cards'>
                   <div className='cards'>
                   <i className='fa fa-user-o fa-2x test-lightblue'></i>
                   <div className='card_inner'>
                       <p className='text-primary-p'>Numbers of Users</p>
                       <span className='font-bold text-title'>578</span>
                   </div>
                   </div>
                   <div className='card'>
                       <i className='fa fa-calendar fa-2x text-red'></i>
                       <div className='card_inner'>
                       <p className='text-primary-p'>Times of Watching</p>
                       <span className='font-bold text-title'>578</span>
                       </div>
                   </div>
               </div>
               <div className='charts'>
                   <div className='charts__left'>
                       <div className='charts__left__title'>
                           <div>
                               <h1>Daily Reports</h1>
                               <p>.......</p>
                           </div>
                           <i className='fa fa-usd'></i>
                       </div>
                       <Chart />
                   </div>
                   <div className="charts__right">
                       <div className='charts__right__title'>
                           <div>
                               <h1> Stats Reports</h1>
                               <p>...........</p>
                           </div>
                           <i className='fa fa-use'></i>
                       </div>
                       <div className='charts__right__cards'>
                           <div className='card1'>
                               <h1>Incone</h1>
                               <p>$75,300</p>
                           </div>
                           <div className='card2'>
                               <h1>Incone</h1>
                               <p>$75,300</p>
                           </div>
                           <div className='card3'>
                               <h1>Incone</h1>
                               <p>$75,300</p>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
      </main>
    )
  }
}

