import React from 'react';
import { connect } from 'react-redux';
import { FilterPanel } from '../../../components';
import RecipesListActions from '../../RecipesList/actions';

class FilterPanelContainer extends React.Component {
  render () {
    return (
      <FilterPanel {...this.props}/>
    );
  }
}

export default connect(
  ({ recipesList }) => recipesList,
  RecipesListActions
)(FilterPanelContainer);
