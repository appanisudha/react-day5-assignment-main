import React, {Component} from 'react';
import { Route, Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import NotFoundComponent from '../components/NotFound/NotFound';
import Loader from '../components/Loader/Loader';
import FoodItemsList from '../components/FoodItems/FoodItemsList';
import Recipe from '../components/Recipe/Recipe';

export default class App extends Component {
  render(){
    return(
      <section>
         <Loader/>
         <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/foodItems" />
                </Route> 
                <Route path="/foodItems" component={FoodItemsList} />
                <Route path="/recipe" component={Recipe} />
                <Route component={NotFoundComponent}/>
             
            </Switch>
        </Router>
        </section>
    )
  }
}