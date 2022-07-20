import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Load Recipe
    await model.loadRecipe(id);

    // 2) Render Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function (query) {
  try {
    await model.loadSearchResults(query);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResults('pizza');
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
