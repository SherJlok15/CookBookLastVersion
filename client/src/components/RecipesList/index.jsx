import React from 'react';
import { RecipesListItem } from '../';
import './RecipesList.scss';

const RecipesList = ({ recipes, navBarSearchValue, filterPanelValue, toggleFavoriteRecipeAll }) => {
  return (
    <div className="recipes-list">
      {recipes === null ?
        <div className="text-center text-success loading">Loading...</div> :
          recipes.length === 0 ?
            <div className="text-center text-uppercase font-weight-bold">
              You dont have Recipe
            </div> :
            navBarSearchValue === '' ?
              <div className="d-flex flex-wrap container justify-content-center">
                {
                  recipes.sort((a,b) =>
                    {
                      if (filterPanelValue === 'date') {
                      return (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? 1 : 0)
                      }
                      if (filterPanelValue === 'author') {
                      return (a.username.localeCompare(b.username))
                      }
                      if (filterPanelValue === 'title') {
                      return (a.title.localeCompare(b.title))
                      }
                    }
                  ).sort((a,b) => a.favorite > b.favorite ? -1 : a.favorite < b.favorite ? 1 : 0).map(item =>
                    <RecipesListItem item={item} key={item._id} toggleFavoriteRecipeAll={toggleFavoriteRecipeAll}/>
                  )
                }
              </div> :
              recipes.filter(item =>
                item.title.toLowerCase().includes(navBarSearchValue.toLowerCase()) ||
                item.username.toLowerCase().includes(navBarSearchValue.toLowerCase())
              ).length === 0 ?
                <div className="container text-center text-success massage"><h3>RECIPE NOT FOUND</h3></div> :
                <div className="d-flex flex-wrap container justify-content-center">
                  {
                    recipes.filter(item =>
                      item.title.toLowerCase().includes(navBarSearchValue.toLowerCase()) ||
                      item.username.toLowerCase().includes(navBarSearchValue.toLowerCase())
                    ).sort((a,b) =>
                      {
                        if (filterPanelValue === 'date') {
                        return (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime() ? -1 : new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime() ? 1 : 0)
                        }
                        if (filterPanelValue === 'author') {
                        return (a.username.localeCompare(b.username))
                        }
                        if (filterPanelValue === 'title') {
                        return (a.title.localeCompare(b.title))
                        }
                      }
                    ).sort((a,b) => a.favorite > b.favorite ? -1 : a.favorite < b.favorite ? 1 : 0).map(item =>
                      <RecipesListItem item={item} key={item._id} toggleFavoriteRecipeAll={toggleFavoriteRecipeAll}/>
                    )
                  }
                </div>
      }
    </div>
  );
}

export default RecipesList;
