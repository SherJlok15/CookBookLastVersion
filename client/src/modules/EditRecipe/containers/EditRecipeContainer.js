import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { EditRecipe } from '../../../components';
import RecipesListActions from '../../RecipesList/actions';

class EditRecipeContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { fetchRecipe_edit_mode, recipeId } = this.props;
    fetchRecipe_edit_mode(recipeId);
  }

  render () {
    return (
      <>
        {this.props.recipeEdited ? <Redirect to={'/recipes/'+this.props.recipeId}/> : <EditRecipe {...this.props}/>}
      </>
    )
  }
}

const mapStateToProps = ({ recipesList }, { match }) => ({
  recipe: recipesList.recipe,
  recipeId: match.params.id,
  ...recipesList
})

export default withRouter(connect(
  mapStateToProps,
  RecipesListActions
)(EditRecipeContainer));
