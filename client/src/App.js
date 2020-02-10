import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { RecipesList, NavBar, FullRecipe, CreateNewRecipe, EditRecipe, FilterPanel } from './modules';


function App() {
  return (
    <div className="App">
      <NavBar />
      {useLocation().pathname === '/recipes/' ? <FilterPanel /> : ''}
      <Switch>
        <Route exact path="/recipes/" component={RecipesList}/>
        <Route exact path="/recipes/add/" component={CreateNewRecipe}/>
        <Route exact path="/recipes/:id/" component={FullRecipe}/>
        <Route exact path='/recipes/update/:id' component={EditRecipe}/>
        <Redirect to="/recipes/"/>
      </Switch>
    </div>
  );
}

export default App;
