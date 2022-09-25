/* import ListCategories from "./component/list-categories.js";

const {categoriesContainer} = require('./component/list-categories.js');

function mealsFilteredByCtg() {

     const cobaLagi = DataSource.mealCategories();
     cobaLagi.then(meal => {
        ListCategories.renderCategories(meal);
     }).catch(err => {
        alert(err);
     })

    const cobaAja = ListCategories.renderCategories();
    console.log(cobaAja);
    const categoriesContainer = document.querySelector('.ctgBtn');
    console.log(categoriesContainer);
    console.log(ListCategories);
    const containerListedCtg = document.querySelector('#listed-ctg');
    console.log(containerListedCtg);
    let clickedNameCtg = '';
    console.log(clickedNameCtg);

    const coba = DataSource.searchMealByCategories(clickedNameCtg);
    coba.then(meal => {
        console.log(meal);
    }).catch(err => {
        alert(err);
    })
}

export default mealsFilteredByCtg(); */

/* const renderListedMeal = (meals) => {
    console.log(meals);
} */

/* const mealsFilteredByCtg = (meals) => {
    const listedMealElement = document.querySelector('#listed-ctg');
    console.log(listedMealElement);
    console.log(meals);
    const nameMeal = meals.strMeal;
    const thumbMeal = meals.strMealThumb;
    console.log(thumbMeal[0]);
    
    for (const [index, ctg] of meals.entries()) {
        listedMealElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div class="card">
                <img src="${thumbMeal}" alt="">
                <div class="card-body text-center fw-light">
                    <h5 class="ctgName">${ctg.strCategory.toUpperCase()}</h5>
                </div>
            </div>
        </div>
      `;
    }
}

export default mealsFilteredByCtg(); */