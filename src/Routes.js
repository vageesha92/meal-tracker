import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './Home';
import {AddIngredient} from "./Ingredients";
import {RecipeSearchPage} from "./Recipes";
import {ShoppingListPage} from "./ShoppingList";

const routes = [{
    path : "/" ,
    Component: HomePage,
    exact:true,
},{
    path:"/AddIngredient",
    Component: AddIngredient,
},{
    path:"/Recipe",
    Component: RecipeSearchPage,
},{
    path: "/Shopping",
    Component: ShoppingListPage,
}];

export const Routes = () => (
    <Router>
        <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
            >
                <route.Component />
            </Route>
        ))}
        </Switch>
    </Router>
)