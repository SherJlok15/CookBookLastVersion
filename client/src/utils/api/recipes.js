import { axios } from '../../core';

export default {
  get: id => axios.get(`/recipes${id ? '/' + id : '/'}`),
  postNewRecipe: newRecipe => axios.post('/recipes/add', newRecipe),
  deleteRecipe: id => axios.delete('/recipes/'+id),
  postUpdatedRecipe: (id, editedRecipe) => axios.post('/recipes/update/'+id, editedRecipe),
  updateFavorite: id => axios.post('/recipes/update/favorite/'+id)
}
