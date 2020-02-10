const initialState = {
  recipes: null,
  recipe: null,
  username: '',
  title: '',
  text: '',
  recipeDeleted: false,
  recipeCreated: false,
  recipeEdited: false,
  navBarSearchValue: '',
  showLastVersionValue: false,
  filterPanelValue: 'date',
  createdRecipeId: '',
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case'SET_RECIPES':
      return {
        ...state,
        recipes: payload,
        recipeCreated: false,
        recipeDeleted: false,
        recipeEdited: false,
        recipe: null,
      }
    case'SET_RECIPE':
      return {
        ...state,
        recipe: [payload],
        recipeCreated: false,
        recipeDeleted: false,
        recipeEdited: false,
        showLastVersionValue: false
      }
    case 'GET_USERNAME_VALUE':
      return {
        ...state,
        username: payload,
      }
    case 'GET_TITLE_VALUE':
      return {
        ...state,
        title: payload,
      }
    case 'GET_TEXT_VALUE':
      return {
        ...state,
        text: payload,
      }
    case 'SUBMIT_CREATE_NEW_RECIPE_FORM':
      return {
        ...state,
        createdRecipeId: payload,
        username: '',
        title: '',
        text: '',
        recipeCreated: true,
      }
    case 'REMOVE_RECIPE':
      return {
        ...state,
        recipeDeleted: true,
        recipe: null
      }
    case'SET_RECIPE_EDIT_MODE':
      return {
        ...state,
        recipe: [payload],
        username: payload.username,
        title: payload.title,
        text: payload.text,
      }
    case 'SUBMIT_EDIT_RECIPE_FORM':
      return {
        ...state,
        username: '',
        title: '',
        text: '',
        recipeEdited: true,
      }
    case 'RESET_FIELD_VALUES':
      return {
        ...state,
        username: '',
        title: '',
        text: '',
        recipeCreated: false,
        createdRecipeId: ''
      }
    case 'SET_NAV_BAR_SEARCH_VALUE':
      return {
        ...state,
        navBarSearchValue: payload
      }
    case 'RESET_NAV_BAR_SEARCH_VALUE':
      return {
        ...state,
        navBarSearchValue: ''
      }
    case 'SET_LAST_VERSION_VALUE':
      return {
        ...state,
        showLastVersionValue: !state.showLastVersionValue
      }
    case 'SET_FILTER_PANEL_VALUE':
      return {
        ...state,
        filterPanelValue: payload
      }
    case 'TOGGLE_FAVORITE_RECIPE:ALL':
      return {
        ...state,
        recipes: state.recipes.map(item => {
          if (item._id === payload) {
            item.favorite === 0 ? item.favorite = 1 : item.favorite = 0;
            return item
          } else {
            return item
          }
        })
      }
    case 'TOGGLE_FAVORITE_RECIPE:ONE':
      return {
        ...state,
        recipe: state.recipe.map(item => {
          if (item._id === payload) {
            item.favorite === 0 ? item.favorite = 1 : item.favorite = 0;
            return item
          } else {
            return item
          }
        })
      }
    default:
      return state;
  }
}
