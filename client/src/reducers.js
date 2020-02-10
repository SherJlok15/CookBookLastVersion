import { combineReducers } from 'redux';
import ReciresListReducer from './modules/RecipesList/reducer';

export default combineReducers({
  recipesList: ReciresListReducer
});
