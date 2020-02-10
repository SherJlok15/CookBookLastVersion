import { recipesApi } from '../../utils/api';

const RecipesListActions = {
  setRecipes: (data) => ({
    type: 'SET_RECIPES',
    payload: data
  }),
  setRecipe: (data) => ({
    type: 'SET_RECIPE',
    payload: data
  }),
  setRecipe_edit_mode: (data) => ({
    type: 'SET_RECIPE_EDIT_MODE',
    payload: data
  }),
  getUsernameValue: (value) => ({
    type: 'GET_USERNAME_VALUE',
    payload: value
  }),
  getTitleValue: (value) => ({
    type: 'GET_TITLE_VALUE',
    payload: value
  }),
  getTextValue: (value) => ({
    type: 'GET_TEXT_VALUE',
    payload: value
  }),
  submitCreateNewRecipeForm: (id) => ({
    type: 'SUBMIT_CREATE_NEW_RECIPE_FORM',
    payload: id
  }),
  submitEditRecipeForm: () => ({
    type: 'SUBMIT_EDIT_RECIPE_FORM'
  }),
  removeRecipe: (recipeId) => ({
    type: 'REMOVE_RECIPE',
    payload: recipeId
  }),
  resetFieldvalues: () => ({
    type: 'RESET_FIELD_VALUES'
  }),
  setNavBarSearchValue: (value) => ({
    type: 'SET_NAV_BAR_SEARCH_VALUE',
    payload: value
  }),
  setLastVersionValue: () => ({
    type: 'SET_LAST_VERSION_VALUE'
  }),
  setFilterPanelValue: (value) => ({
    type: 'SET_FILTER_PANEL_VALUE',
    payload: value
  }),
  onToggleFavoriteRecipeAll: (id) => ({
    type: 'TOGGLE_FAVORITE_RECIPE:ALL',
    payload: id
  }),
  onToggleFavoriteRecipeOne: (id) => ({
    type: 'TOGGLE_FAVORITE_RECIPE:ONE',
    payload: id
  }),
  resetNavBarSearchValue: () => ({
    type: 'RESET_NAV_BAR_SEARCH_VALUE'
  }),
  toggleFavoriteRecipeAll: (id) => dispatch =>{
    recipesApi.updateFavorite(id).then(() => {
      dispatch(RecipesListActions.onToggleFavoriteRecipeAll(id))
    })
  },
  toggleFavoriteRecipeOne: (id) => dispatch =>{
    recipesApi.updateFavorite(id).then(() => {
      dispatch(RecipesListActions.onToggleFavoriteRecipeOne(id))
    })
  },
  fetchRecipes: () => dispatch => {
    recipesApi.get()
      .then(({ data }) => {
        dispatch(RecipesListActions.setRecipes(data))
      })
  },
  fetchRecipe: (id) => dispatch => {
    recipesApi.get(id)
      .then(({ data }) => {
        dispatch(RecipesListActions.setRecipe(data))
      })
  },
  fetchRecipe_edit_mode: (id) => dispatch => {
    recipesApi.get(id)
      .then(({ data }) => {
        dispatch(RecipesListActions.setRecipe_edit_mode(data))
      })
  },
  onSubmitCreateNewRecipeForm: (e) => (dispatch, setState) => {
    e.preventDefault();
    const newRecipe = {
      username: setState().recipesList.username,
      title: setState().recipesList.title,
      text: setState().recipesList.text,
      update: false,
      lastVersions: [],
      comments: []
    }
    recipesApi.postNewRecipe(newRecipe).then(({ data }) => {
      dispatch(RecipesListActions.submitCreateNewRecipeForm(data));
    })
  },
  deleteRecipe: (recipeId, title) => dispatch => {
    if(global.confirm(`Delete recipe ${title}?` )) {
      recipesApi.deleteRecipe(recipeId).then(() => {
        dispatch(RecipesListActions.removeRecipe(recipeId));
      })
    }
  },
  onSubmitEditRecipeForm: (e, id) => (dispatch, setState) => {
    e.preventDefault();
    const editTime = new Date();
    const editedRecipe = {
      username: setState().recipesList.username,
      title: setState().recipesList.title,
      text: setState().recipesList.text,
      update: false,
      edittime: editTime
    }
    recipesApi.postUpdatedRecipe(id,editedRecipe).then(() => {
      dispatch(RecipesListActions.submitEditRecipeForm());
    })
  },
}

export default RecipesListActions;
