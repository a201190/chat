import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Containers/home'
class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        )
    }
}
export default Routes;