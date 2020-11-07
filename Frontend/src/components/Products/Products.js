
import React, { Component } from "react";
import './Products.css';
import history from '../history';
 class Products extends Component {
    render(){
        return(
        <div>
            <card className="it">
            
                 <img src="/images/one.jpg" onClick={() => history.push('/Food')}className="one"/>
                 <h2 className="fod">Food</h2>
                 <img src="/images/two.jpg" onClick={() => history.push('/Cosmetics')} className="two" />
                 <h2 className="fah">Fashion</h2>
                 <img src="/images/three.jpg" onClick={() => history.push('/Fashion')} className="three" />
                 <h2 className="co">Cosmetics</h2>
                 <img src="/images/four.jpg" onClick={() => history.push('/Grocery')} className="four" />
                 <h2 className="sta">Stationary</h2>
                 <img src="/images/five.jpg"  onClick={() => history.push('/Devices')}className="five" />
                 <h2 className="gro">Grocery</h2>
                 <img src="/images/six.jpg"  onClick={() => history.push('/Stationary')}className="six" />
                 <h2 className="ec">Electronic Devices</h2>
                 </card>
                 </div>
        );
    }
}
export default Products;