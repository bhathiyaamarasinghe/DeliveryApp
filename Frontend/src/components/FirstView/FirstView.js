
import React, { Component } from "react";
// import { GoogleApiWrapper} from "google-maps-react";
import './FirstView.css';
import{Card,Button} from 'react-bootstrap';
import history from '../history';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

 class FirstView extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  login = event => {
    //  console.log(this.state.credentials);
    fetch('http://192.168.8.147:8000/Location/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.address)
      })
      .then( data => data.json())
      .then(
        data => {
          this.props.userLogin(data.token);
        }
      )
      .catch( error => console.error(error))
    }
 
  handleChange = address => {
    this.setState({ address });
  };
  
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
 

  render() {
    
    return (
      
      <div>
      
        <card className='fv'>
          <div className="din">
         <h1  class="font-italic font-weight-bold"><center>Get Your Home Essentials in One Place <br/> "Deliver to Your Door" <br/> <font color = "red">UseMe</font> DeliverySERVICE</center></h1> 
         </div>
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Here Your Location....',
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
             
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className="input-suggetions"
                    {...getSuggestionItemProps(suggestion, {
                      
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {/* <input type="submit" onClick={this.login}  className="bt"  value="Location"/> */}

        </card>

        <Card className="picsFview">
         {/* <Card className="Fview"> */}
              <center> <h1 className="fviewheadder">"We make 
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
                 <card className="pro">
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

                <card className='final'>

                     <h1 className ='use'>Use</h1> 
                    <h1 className='me'> Me</h1>
                    <img src="/images/logo.png"  className="logo" alt="logo"/>

                 <h5 className='a'>About Use Me </h5>
                 <h5 className='b'>  Read out blog</h5>
                 <h5 className='c'>   Add your shops</h5>
                 <h5 className='c1'>   Create a business account</h5>
                 <h5 className='d'>  Sign up to delivery</h5>

                 <h5 className='e'> Get Help </h5>
                 <h5 className='f'>  Read FAQs</h5>
                 <h5 className='g'> View all cities</h5>
                 <h5 className='h'> View all countries</h5>
                 <h5 className='i'> Restuarants near me</h5>
                 <h5 className='j'>  English</h5>

                 <img src="/images/ios.jpg"  className="ios" alt="ios"/>
                 <img src="/images/android.png"  className="and" alt="android"/>
                  <hr className='line'></hr>

                  <img src="/images/fb.jpg"  className="fb" alt="fb"/> 
                  <img src="/images/twitter.png"  className="twitter" alt="twitter"/> 
                  <img src="/images/insta.png"  className="insta" alt="insta"/>

                  <h6 className='p'>  Privacy Policy</h6>
                  <h6 className='q'>  Terms</h6>
                  <h6 className='r'>  pricing</h6>
                  <h6 className='s'>  C_Rigths:2020 Team Fix It</h6>

                  </card>
        
                  </div>

      
    );
  }
}

export default FirstView;
  
