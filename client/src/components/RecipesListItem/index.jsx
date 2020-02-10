import React from 'react';
import { Link } from 'react-router-dom';
import iconNorm from '../../images/normal.png';
import iconFavorite from '../../images/favorite.png';
import './RecipesListItem.scss';

const RecipesListItem = ({ item, toggleFavoriteRecipeAll }) => {
  return (
    <div
      className="d-flex flex-column container recipe-item">
      <div className="d-flex flex-column">
        <h4 className="text-success text-center align-self-center">
          {item.title}
        </h4>
        <div className="align-self-end favorite-icon" onClick={() => toggleFavoriteRecipeAll(item._id)}>
          <img src={ item.favorite === 0 ? iconNorm : iconFavorite} alt="favorite"/>
        </div>
      </div>
      <div>
        <div>
          <div className="text-success">
            created at:
          </div>
          <div className="text-muted">
            {new Date(item.updatedAt).toString().split("GMT")[0]}
          </div>
        </div>
        <div>
          <div className="text-success">
            Author:
          </div>
          <div className="text-muted">
            {item.username}
          </div>
        </div>
        <div className="pre-wrap margin-top-20 recipe-text">
          {item.text.length > 180 ? item.text.substring(0, 300 - 3) + "..." : item.text}
        </div>
      </div>
      <Link to={"/recipes/"+item._id}
        className="btn btn-success align-self-end mt-auto p-2 bd-highlight margin-10">
        Read more
      </Link>
    </div>
  );
}

export default RecipesListItem;
