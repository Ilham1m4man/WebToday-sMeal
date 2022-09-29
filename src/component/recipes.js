import DataSource from "../data/data-source.js";

class Recipes extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="card" id="selected-meal-recipe-card">
        </div>
        `;
    }
}

customElements.define('meal-recipes', Recipes);
export default Recipes;

window.selectedMealRecipe = function(selectedMealId) {
    const dataListedCtg = DataSource.searchMealById(selectedMealId);
    dataListedCtg.then(meal => {
        renderSelectedMeals(meal);
        renderRecipe(meal);
    }).catch(err => {
        showResponseMessage(err);
    });

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    }

    const renderSelectedMeals = (meals) => {
        const selectedMealRecipeElm = document.querySelector('#selected-meal-recipe-card');
        const recipeThumb = meals[0].strMealThumb;
        const recipeName = meals[0].strMeal;
        const recipeCtg = meals[0].strCategory;
        const recipeInstructions = meals[0].strInstructions;
        
        const recipeTutorial = meals[0].strMeasure;
        const recipeSource = meals[0].strSource;

        selectedMealRecipeElm.innerHTML = `
            <img class="card-img-top" id="thumbnail" src="${recipeThumb}">
            <div class="card-body">
                <h1 class="card-title" style="color: #FFC38B">${recipeName}</h>
                <h3 class="card-title">Kategori: ${recipeCtg}</h3>
            </div>
            <div class="card-body" id="recipe-sec">
                
                <p class="card-text" id="ingredient"></p>
                <p class="card-text" id="measurement"></p>
                <p class="card-text">${recipeInstructions}</p>
            </div>
        `;
    }

    const renderRecipe = (meals) => {
        /* const recipeSecElement = document.querySelector('#recipe-sec');
         */
        /* const recipeMeasure = meals[0].strMeasure1;
        console.log(recipeMeasure); */

        const endPoint = Object.keys(meals[0]);

        for (let i = 0; i < endPoint.length; i++) {
            /* console.log(Object.keys(meals[0])[i]); */
            console.log('==================================================');
            
            if(Object.keys(meals[0])[i].includes('strIngredient')) {
                const coba = Object.keys(meals[0])[i];
                console.log(coba);
            }
        }
    }
}
