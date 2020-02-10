import React from 'react';
import './EditRecipe.scss';

const EditRecipe = ({
  recipe, recipeId,
  username, getUsernameValue,
  title, getTitleValue,
  text, getTextValue,
  onSubmitEditRecipeForm
}) => {
  return (
    <div className="edit_recipe_container">
      <div className="bg-light container edit_recipe">
        { recipe === null ?
         <div className="text-center text-success">Loading...</div> :
         recipe.map(item =>
           <div key={item._id}>
             <h3 className="text-center text-primary">Edit recipe</h3>
             <form onSubmit={(e) => onSubmitEditRecipeForm(e, recipeId)}
               className="container d-flex flex-column justify-content-center">
               <div className="form-group container">
                 <label className="text-primary">Username: </label>
                 <input
                   type="text"
                   required
                   className="form-control"
                   value={username}
                   onChange={(e) => getUsernameValue(e.target.value)}
                  />
                  <small className="form-text text-muted">minlength 3 characters</small>
               </div>
               <div className="form-group container">
                 <label className="text-primary">Title: </label>
                 <input
                   type="text"
                   required
                   className="form-control"
                   value={title}
                   onChange={(e) => getTitleValue(e.target.value)}
                  />
                  <small className="form-text text-muted">minlength 3 characters</small>
               </div>
               <div className="form-group container">
                 <label className="text-primary">Text: </label>
                 <textarea
                   className="form-control"
                   minLength="3"
                   wrap="soft"
                   col="10"
                   rows="10"
                   type="text"
                   required
                   value={text}
                   onChange={(e) => getTextValue(e.target.value)}
                  />
                  <small className="form-text text-muted">minlength 3 characters</small>
               </div>
               <div className="form-group d-flex justify-content-center container">
                 <input type="submit" value="Edit Recipe" className="btn btn-primary block"/>
               </div>
             </form>
           </div>
         )
        }
        </div>
    </div>
  )
}

export default EditRecipe;
