import React from 'react';
import { Link } from 'react-router-dom';
import iconNorm from '../../images/normal.png';
import iconFavorite from '../../images/favorite.png';
import './FullRecipe.scss';


const FullRecipe = ({ recipe, recipeId, deleteRecipe, showLastVersionValue, setLastVersionValue, toggleFavoriteRecipeOne }) => {
  return (
    <div className="full-recipes__container">
      <div className="container full-recipes">
        {
          recipe === null ?
            <div className="text-center text-success">Loading...</div> :
            recipe.map(item =>
              <div key={item._id} className="container">
                <div className="d-flex justify-content-center">
                  <h3 className="text-success text-center">{item.title}</h3>
                  <div onClick={() => toggleFavoriteRecipeOne(item._id)} className="favorite_icon">
                    <img src={ item.favorite === 0 ? iconNorm : iconFavorite} alt="favorite"/>
                  </div>
                </div>
                <div className="d-flex justify-content-end control_panel">
                  <Link to={'/recipes/update/'+recipeId}
                    className="btn btn-success edit_button">
                    edit
                  </Link>
                  <span
                    className="btn btn-danger"
                    onClick={() => deleteRecipe(recipeId, item.title)}
                  >
                    delete
                  </span>
                </div>
                <div>
                  <div className="text-success">
                    created at:
                  </div>
                  <div className="text-secondary">
                    {new Date(item.updatedAt).toString().split("GMT")[0]}
                  </div>
                </div>
                <div>
                  <div className="text-success">
                    Author:
                  </div>
                  <div className="text-secondary">
                    {item.username}
                  </div>
                </div>
                <div className="pre-wrap d-flex justify-content-center recipeFullText ">
                  {item.text}
                </div>
                <div
                  className="btn btn-secondary last_version_btn"
                  onClick={setLastVersionValue}
                >
                  Last version
                </div>
                <div className={showLastVersionValue ? 'lastVersions--show' : 'lastVersions--hide'}>
                  {item.lastVersions.length === 0 ?
                  <p>Dont have lastVersions</p> :
                  <div>
                    {item.lastVersions.map(elem =>
                      <div key={elem.title+Math.random()} className="last_version_item">
                        <h3>{elem.title}</h3>
                        <div>
                          <span className="text-warning">
                            this version is outdated in: {' '}
                          </span>
                          <span className="text-secondary">
                            {new Date(elem.edittime).toString().split("GMT")[0]}
                          </span>
                        </div>
                        <div>
                          <span className="text-warning">
                            Author: {' '}
                          </span>
                          <span className="text-secondary">
                            {elem.username}
                          </span>
                        </div>
                        <div className="recipeFullText ">
                          {elem.text}
                        </div>
                      </div>
                    )}
                  </div>}
                </div>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default FullRecipe;
