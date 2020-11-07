import React,{Component} from 'react';
import './LogIn.css';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input , color} from 'reactstrap';
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Button } from 'reactstrap';
import { Form } from 'react-bootstrap';
import { Card} from 'react-bootstrap';

 class LogIn extends Component{
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };
  
 

  login = event => {
  //  console.log(this.state.credentials);
  fetch('http://127.0.0.1:8000/user/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.fields)
    })
    .then( data => data.json())
    .then(
      data => {
        this.props.userLogin(data.token);
      }
    )
    .catch( error => console.error(error))
  }
     
 
  
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["email"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Login passed");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

  

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    

    this.setState({
      errors: errors
    });
    return formIsValid;


  }


    render(){
    
        return(
          <div>
           <Card className="ful">
              <Card className="cardo">
         
                <div className="Login">
            <Form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}className="LoginForm">
        
            <h1>         
              <span className="header"><center> Log In </center></span>
            </h1>
             
             
    
           <FormGroup>
           <Label for="exampleEmail" > Email</Label>
           <Input type="email" name="email" value={this.state.fields.email}
           onChange={this.handleChange} size="15" placeholder="Enter Email" />
           <div className="mg">{this.state.errors.email}</div>
           </FormGroup>

           <FormGroup>
           <Label for="examplePassword" > Password</Label>
           <Input type="Password" name="password" value={this.state.fields.password}
             onChange={this.handleChange} size="15" placeholder="Enter Password" />
             <div className="mg">{this.state.errors.password}</div>
           </FormGroup>
    
           <center>
           <input type="submit" onClick={this.login}  className="but"  value="login"/></center>
    
            <div className="text-center">
              or continue with your social account
            </div>
             
            <FacebookLoginButton className="text-center" size="3"/>
            <GoogleLoginButton className="text-center" size="3"/>
    
            <div className="text-center">
               <a href="/sign-up">Sign up</a>
               <span> | </span>
               <a href="/Forgot-Password">Forgot Password</a>
               
            </div>
    
          </Form>
          </div>
          </Card>
          </Card>
         </div>
        );
    }
}
export default LogIn;