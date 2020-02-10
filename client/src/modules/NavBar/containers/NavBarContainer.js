import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../../../components';
import RecipesListActions from '../../RecipesList/actions';

class NavBarContainer extends React.Component {
  render() {
    return (
      <NavBar {...this.props}/>
    );
  }
}

export default connect(
  ({ recipesList }) => recipesList,
  RecipesListActions
  )
  (NavBarContainer);
