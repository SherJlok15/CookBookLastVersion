import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { CreateNewRecipe } from '../../../components';
import RecipesListActions from '../../RecipesList/actions';


class CreateNewRecipeContainer extends React.Component {

  componentDidMount () {
    const { resetFieldvalues } = this.props;
    resetFieldvalues()
    window.scrollTo(0, 0);
  }

  render () {
    const { recipeCreated, createdRecipeId } = this.props;
    return (
      <>
        {
          recipeCreated ?
            <Redirect to={`/recipes/${createdRecipeId}`}/> :
            <CreateNewRecipe {...this.props} />
        }
      </>
    );
  }
}

export default withRouter(connect(
  ({ recipesList }) => recipesList,
  RecipesListActions
)(CreateNewRecipeContainer));
