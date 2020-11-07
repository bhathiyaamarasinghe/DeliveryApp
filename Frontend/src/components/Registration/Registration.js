import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
 import {Card} from 'react-bootstrap';
import history from '../history';
 import './Registration.css';
class Registration extends Component{

  render(){
    return(
      <div>
       <card className="regni"> 
       <card className="donn">
         <center> <h2 className="sele">Select who you are:</h2>
    
   
       
                
                          <h5 className="cut">I am a Customer</h5><Button variant="danger" onClick={() => history.push('/Cust')}>Want to buy</Button>
                           <h5 className="delt">I am a Delivery Person</h5> <Button variant="danger" onClick={() => history.push('/Delper')}>want to deliver</Button>
                          <h5 className="sho">I am a Shop</h5>  <Button variant="danger" onClick={() => history.push('/Shop')}>want to sell</Button> 
          </center>
            </card> </card>
      </div>
      
    );
  }

}
export default Registration;