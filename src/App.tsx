import React, {Component} from 'react';
import './App.css';
import 'daemonite-material/css/material.min.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import {Page2} from "./pages/Page2";
import {Home} from "./pages/Home";

class App extends Component<{}> {
    routerRef=React.createRef<BrowserRouter>();

    render() {
        return (
            <BrowserRouter  ref={this.routerRef}>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/page2" component={Page2} />
                    {/*<Route path="/BookingSiteOverview" exact render={(props) => (<Page2 page2Prop={'ola'} {...props} />)} />                    */}
                {/*<Route path='*' component={ComponenteDePagina404} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
