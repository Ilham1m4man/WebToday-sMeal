import DataSource from "../data/data-source.js";

class Recipes extends HTMLElement {
    constructor() {
        super();
        this.showResponseMessage = (message = 'Check your internet connection') => {
            alert(message);
        }
    }

    connectedCallback() {
        this.render();
    }

    getDataFromServer(selectedMealId) {
        const dataListedCtg = DataSource.searchMealById(selectedMealId);
        dataListedCtg.then(meal => {
            this.renderSelectedMeals(meal);
            this.renderRecipe(meal);
        }).catch(err => {
            this.showResponseMessage(err);
        });
    }

    render() {
        this.innerHTML = `
        <div class="container is-hidden" id="recipe-cont">
        <h2 class="fw-bold" id="the-recipe">Recipe</h2>
            <div class="row justify-content-center">
                <div class="row justify-content-center" id="selected-meal-recipe">
                </div>
            </div>
        </div>
        `;
    }

    renderSelectedMeals(meals) {
        const selectedMealRecipeElm = document.querySelector('#selected-meal-recipe');
        const recipeContElm = document.querySelector('#recipe-cont');
        recipeContElm.classList.remove('is-hidden');
        const recipeThumb = meals[0].strMealThumb;
        const recipeName = meals[0].strMeal;
        const recipeCtg = meals[0].strCategory;
        const recipeInstructions = meals[0].strInstructions;
        const recipeTutorial = meals[0].strYoutube;


        selectedMealRecipeElm.innerHTML = `
        <style>
            #thumbnail-recipe {
                max-height: 500px;
                object-fit: cover;
                object-position: center;
                border-radius: 15px;
            }
        
            #selected-meal-recipe-card {
                color: #FFF3CD;
                border-radius: 15px;
                background: #4D3E3E;
                border: none;
                padding: 10px;
                max-width: 1000px;
            }

            .table {
                color: #FFF3CD;
            }

            .link-gan {
                text-decoration: none;
                color: #FF926B;
            }

            .link-gan:hover {
                color: #FFC38B;
            }
        </style>
            <div class="card" id="selected-meal-recipe-card">
                <img class="card-img-top" id="thumbnail-recipe" src="${recipeThumb}">
                <div class="card-body">
                    <h1 class="card-title" style="color: #FFC38B">${recipeName}</h>
                    <h3 class="card-title">Kategori: ${recipeCtg}</h3>
                </div>
                <div class="card-body" id="recipe-sec">
                    <table class=table>
                        <thead>
                            <tr>
                                <th scope="col" class="keterangan">#</th>
                                <th scope="col" class="keterangan">Ingredient</th>
                                <th scope="col" class="keterangan">Measure</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <h4 class="card-title fw-bold">Instructions</h4>
                    <p class="card-text">${recipeInstructions}</p>
                    <h4 class="card-title fw-bold">Tutorial & Source</h4>
                    <p class="card-text">Youtube: <a href="${recipeTutorial}" class="link-gan">${recipeTutorial}</a></p>
                </div>
            </div>
        `;

        const recipeSource = meals[0].strSource;
        const recipeSecElement = document.querySelector('#recipe-sec');
        const createRecipeSource = document.createElement('p');
        createRecipeSource.setAttribute('class', "card-text");
        createRecipeSource.innerHTML = `Source: <a href="${recipeSource}" class="link-gan">${recipeSource}</a>`;
        if(recipeSource == null) {
            createRecipeSource.innerText = `Source: -`;
            recipeSecElement.appendChild(createRecipeSource);
        } else {
            recipeSecElement.appendChild(createRecipeSource);
        }
    }

    renderRecipe(meals) {
        const endPoint = Object.keys(meals[0]);

        let rowCounter = 1;
        for (let i = 0; i < endPoint.length; i++) {
            if (Object.keys(meals[0])[i].includes('strIngredient')) {
                const ingredientPicker = Object.values(meals[0])[i];
                const measurePicker = Object.values(meals[0])[i+20];

                if (ingredientPicker == "" || ingredientPicker == null) {
                    //Gk tau mau diisi apa kak, soalnya kalo kondisinya diganti != nanti bakal ngerender semua data termasuk yang ""/null
                } else {
                    renderTr(rowCounter);
                    renderThIngredient(rowCounter, ingredientPicker);
                    renderThMeasure(rowCounter, measurePicker);
                    rowCounter++;
                }

            }

        }
    }
}

customElements.define('meal-recipes', Recipes);
export default Recipes;