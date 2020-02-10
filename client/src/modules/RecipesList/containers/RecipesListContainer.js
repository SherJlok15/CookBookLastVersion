import React from 'react';
import { connect } from 'react-redux';
import { RecipesList } from '../../../components';
import RecipesListActions from '../actions';

class RecipesListContainer extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0);
    const { fetchRecipes } = this.props;
    fetchRecipes()
  }

  render () {
    return (
      <>
      <RecipesList
        recipes={this.props.recipes}
        navBarSearchValue={this.props.navBarSearchValue}
        filterPanelValue={this.props.filterPanelValue}
        toggleFavoriteRecipeAll={this.props.toggleFavoriteRecipeAll}
      />
    </>
    )
  }
}

export default connect(
  ({recipesList}) => recipesList,
  RecipesListActions
)(RecipesListContainer)
