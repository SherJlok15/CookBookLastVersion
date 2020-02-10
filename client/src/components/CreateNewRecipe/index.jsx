import React from 'react';
import './CreateNewRecipe.scss';

const CreateNewRecipe = ({
  username, getUsernameValue,
  title, getTitleValue,
  text, getTextValue,
  onSubmitCreateNewRecipeForm
}) => {
  return (
    <div className="create_recipe_container">
      <div className="bg-light container create_recipe">
          <h3 className="text-center text-info">Create new recipe</h3>
          <form onSubmit={(e) => onSubmitCreateNewRecipeForm(e)}
            className="container d-flex flex-column justify-content-center">
            <div className="form-group container">
              <label className="text-primary">Author name: </label>
              <input
                name="username"
                type='text'
                required
                placeholder="author name"
                title="minlength 3 characters"
                className="form-control"
                value={username}
                onChange={(e) => getUsernameValue(e.target.value)}
              />
            <small className="form-text text-muted">minlength 3 characters</small>
            </div>
            <div className="form-group container">
              <label className="text-primary">Recipe title: </label>
              <input
                name="title"
                type='text'
                required
                placeholder="recipe title"
                title="minlength 3 characters"
                className="form-control"
                value={title}
                onChange={(e) => getTitleValue(e.target.value)}
              />
            <small className="form-text text-muted">minlength 3 characters</small>
            </div>
            <div className="form-group container">
              <label className="text-primary">Recipe text: </label>
              <textarea
                name="text"
                required
                placeholder="recipe text"
                title="minlength 3 characters"
                className="form-control"
                minLength="3"
                wrap="soft"
                col="10"
                rows="10"
                value={text}
                onChange={(e) => getTextValue(e.target.value)}
              />
            <small className="form-text text-muted">minlength 3 characters</small>
            </div>
            <div className="form-group d-flex justify-content-center container">
              <input type="submit" value="Create new Recipe" className="btn btn-primary block"/>
            </div>
          </form>
        </div>
    </div>
  );
}

export default CreateNewRecipe;
