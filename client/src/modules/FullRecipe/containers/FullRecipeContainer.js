import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { FullRecipe } from '../../../components';
import RecipesListActions from '../../RecipesList/actions';


class FullRecipeContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { fetchRecipe, recipeId } = this.props;
    fetchRecipe(recipeId);
  }

  render () {
    const { recipeDeleted } = this.props;
    return (
      <>
        {
          recipeDeleted ?
          <Redirect to="/recipes/"/> :
          <FullRecipe {...this.props}/>
        }
      </>

    );
  }
}

const mapStateToProps = ({ recipesList }, { match }) => ({
  recipe: recipesList.recipe,
  recipeId: match.params.id,
  recipeDeleted: recipesList.recipeDeleted,
  navBarSearchValue: recipesList.navBarSearchValue,
  showLastVersionValue: recipesList.showLastVersionValue
})

export default withRouter(
  connect(
    mapStateToProps,
    RecipesListActions
  )(FullRecipeContainer)
);
