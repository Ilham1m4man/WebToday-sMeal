import DataSource from "../data/data-source.js";
import Recipes from "./recipes.js";

class ContFilteredMeal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container is-hidden" id="listed-meal-cont">
                <h2 id="title-listed-ctg" class="fw-bold"></h2>
                <div class="row" id="listed-ctg">
                    <div class="swiper">
                        <div class="swiper-wrapper"></div>

                        <div class="swiper-pagination"></div>

                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('listed-meals', ContFilteredMeal);

window.mealsFilteredByCtg = (selectedBtn) => {
    const dataListedCtg = DataSource.searchMealByCategories(selectedBtn);
    dataListedCtg.then(meal => {
        renderFilteredMeals(meal);
    }).catch(err => {
        showResponseMessage(err);
    });

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    }

    const contElement = document.querySelector('#listed-meal-cont');
    contElement.classList.remove('is-hidden');

    const renderFilteredMeals = (meals) => {
        const titleListedCtg = document.querySelector('#title-listed-ctg');
        const colFoodElement = document.querySelector('.col-food');
        const swiperWrapperElement = document.querySelector('.swiper-wrapper');

        titleListedCtg.innerText = `Here's The Meal Listed by ${selectedBtn}`;

        let pageCounter = 0;
        let tempArray = [];
        let loopCounter = 1;
        if (colFoodElement == null) {
            for (const [index, mealByCtg] of meals.entries()) {
                const idMealCuk = meals[index].idMeal;
                const nameMeal = meals[index].strMeal;
                const thumbMeal = meals[index].strMealThumb;
                tempArray[index] = {
                    mealId: idMealCuk,
                    mealName: nameMeal,
                    mealThumb: thumbMeal
                };

                if (loopCounter % 9 == 0) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                    tempArray = [];
                    pageCounter++;
                } else if (loopCounter == meals.length) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                }
                loopCounter++;
            }
        } else {
            swiperWrapperElement.textContent = ``;
            for (const [index, mealByCtg] of meals.entries()) {
                const idMealCuk = meals[index].idMeal;
                const nameMeal = meals[index].strMeal;
                const thumbMeal = meals[index].strMealThumb;
                tempArray[index] = {
                    mealId: idMealCuk,
                    mealName: nameMeal,
                    mealThumb: thumbMeal
                };

                if (loopCounter % 9 == 0) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                    tempArray = [];
                    pageCounter++;
                } else if (loopCounter == meals.length) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                }
                loopCounter++;
            }
        }
    }

    
}

window.sendId = (mealId) => {
    const instanceRecipe = new Recipes(mealId);
    instanceRecipe.getDataFromServer(mealId);
}
