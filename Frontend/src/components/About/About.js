import React, { Component } from "react";
import './About.css';
import history from '../history';
import{Card,Button} from 'react-bootstrap';
 class About extends Component {
  render(){
      return(
        <div>
             <Card className="pics">
         {/* <Card className="Fview"> */}
              <center> <h1 className="fview">"We make 
                 you 
                 proffisional"</h1>
                 <h4 className="h1">Use Me Delivery</h4>
                 
                <center>< h3 className="Fviewheadder2-1"> 
                    Facilitate efficient delivery of goods. </h3>
                    < h3 className="Fviewheadder2-2"> 
                     Effective registration method for the shops. </h3>
                     < h3 className="Fviewheadder2-3"> 
                     Ability to select products from a store the customers prefers </h3>
                     < h3 className="Fviewheadder2-4">  Efficient access for the system. </h3>
                     < h3 className="Fviewheadder2-5">  The accuracy of which customers receive the goods they have ordered </h3>
                     </center>
                   <h5 className ="Fviewheadder3">
                        We provide services to whole world through digital era

                   </h5> 
                   
                   </center>
                   <Button variant="light"onClick={() => history.push('/LogIn')} className="btun">GET STARTED!</Button> 
                   {/* </Card>    */}
                   
                  
                  <img src="/images/img1.jpg" className="IMAGES1" alt="delivery1"/>
                  <img src="/images/img2.jpg" className="IMAGES2" alt="delivery2"/>
                  <img src="/images/img3.jpg" className="IMAGES3" alt="delivery3"/>
                  <img src="/images/img4.jpg"  className="IMAGES4" alt="delivery4"/>
                  <img src="/images/img5.jpg"  className="IMAGES5" alt="delivery5"/>
                  <img src="/images/img6.jpg"  className="IMAGES6" alt="delivery6"/>
                
                     
                   
                  
                </Card>  
        </div>
      );
  }
}
export default About;