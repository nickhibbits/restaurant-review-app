import { Link } from "react-router-dom";
import React from "react";

import "../styles/RecipeScrollContainer.scss";

function RecipeScrollContainer({ recipes, categoryTitle }) {
  return (
    <main className="recipe-scroll-container-component ">
      <h2 className="category-title">{categoryTitle}</h2>
      <ul className="recipes-list">
        {Object.values(recipes).map((recipe, i) => {
          return (
            <li className="recipe-card-wrapper" key={recipe.id}>
              <Link to={`/recipeProfile/:${recipe.id}`}>
                <div
                  className="recipe-card flex-column"
                  style={{
                    background: `url(${recipe.image}) no-repeat`,
                    backgroundSize: "contain",
                    height: "100%",
                  }}
                >
                  <h3 className="recipe-title">{recipe.title}</h3>
                  <p className="recipe-short-description">
                    {recipe.description}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default RecipeScrollContainer;
