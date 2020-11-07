import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import CustomerReg from './CutomerReg/CustomerReg';
import DeliveryPerson from "./DeliveryPerson/DeliveryPerson";
import FirstView from './FirstView/FirstView';
import history from './history';
import LogIn from "./LogIn/LogIn";
import Registration from "./Registration/Registration";
import shopReg from "./shopReg/shopReg";
import Food from "./Food/Food";
import Cosmetics from "./Cosmetics/Cosmetics";
import Grocery from "./Grocery/Grocery";
import Fashion from "./Fashion/Fashion";
import Devices from "./Devices/Devices";
import Stationary from "./Stationary/Stationary";
import Products from "./Products/Products";
import About from "./About/About";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={FirstView} />
                    <Route path="/LogIn" component={LogIn} />
                    <Route path="/Reg" component={Registration} />
                    <Route path="/Cust" component={CustomerReg} />
                    <Route path="/Delper" component={DeliveryPerson} />
                    <Route path="/Shop" component={shopReg} />
                    <Route path="/Grocery" component={Grocery}/>
                    <Route path="/Food" component={Food}/>
                    <Route path="/Cosmetics" component={Cosmetics}/>
                    <Route path="/Fashion" component={Fashion}/>
                    <Route path="/Devices" component={Devices}/>
                    <Route path="/Stationary" component={Stationary}/>
                    <Route path="/Products" component={Products}/>
                    <Route path="/About" component={About}/>
                </Switch>
            </Router>
        );
    }
}
