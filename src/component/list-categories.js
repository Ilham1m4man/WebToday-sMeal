import DataSource from "../data/data-source.js";
/* const mealsFilteredByCtg = () => require('../mealsFilteredByCtg.js'); */

class ListCategories extends HTMLElement {
    constructor() {
        super();
        this.dataKategori = DataSource.mealCategories();
        this.dataKategori.then(meals => {
            this.render(meals);
        }).catch(err => {
            this.showResponseMessage(err);
        });
        this.showResponseMessage = (message = 'Check your internet connection') => {
            alert(message);
        }
    }

    getData(selectedBtn) {
        this.dataListedCtg = DataSource.searchMealByCategories(selectedBtn);
        this.dataListedCtg.then(meal => {
            mealsFilteredByCtg(meal, selectedBtn);
        }).catch(err => {
            this.showResponseMessage(err);
        });
    }
    
    render(meals) {
        this.innerHTML = `
        <style>
        .ctgBtn {
            background-color: var(--pr-color);
            color: var(--sc-color);
            border-radius: 8px;
            transition: all 0.2s ease-out;
        }
        
        .ctgBtn:hover {
            background-color: var(--rd-color);
            color: var(--pr-color);
            box-shadow: 0px 8px 15px 0px rgba(77,62,62,1);
            border: none;
        }
        </style>

        <div class="container fw-bold" id="container-ctg" style="color: #4D3E3E;">
            <h1>Categories</h1>
            <div class="row justify-content-center">
                <div class="row w-75 justify-content-center" id="kategori"></div>
            </div>
        </div>
        `;

        const categoriesElement = document.querySelector('#kategori');
        categoriesElement.innerHTML = '';
    
        for (const [index, ctg] of meals.entries()) {
            categoriesElement.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
              <div class="card">
                <button type="button" class="ctgBtn" id="categoryBtn${index}">
                    <div class="card-body text-center fw-light">
                        <h5 class="ctgName">${ctg.strCategory.toUpperCase()}</h5>
                    </div>
                </button>
              </div>
            </div>
          `;
        }
        
        for (const [index, selectedBtn] of meals.entries()) {
            const selectedCtg = document.querySelector(`#categoryBtn${index}`);
            
            selectedCtg.addEventListener('click', function () {
                sendSelectedBtn(selectedBtn.strCategory);
                
                /* const semuaNamaSCtg = document.querySelectorAll('.ctgBtn');
                    
                for (let i = 0; i < semuaNamaSCtg.length; i++) {
                    if (semuaNamaSCtg[i].innerText.toUpperCase().includes(selectedBtn.strCategory.toUpperCase())) {
                        semuaNamaSCtg[i].parentElement.classList.remove('is-hidden');
                    } else {
                        semuaNamaSCtg[i].parentElement.classList.add('is-hidden');
                    }
                } */
            })
        }

        const sendSelectedBtn = (selectedBtn) => {
            this.getData(selectedBtn);
        }
    }
}

const mealsFilteredByCtg = (meals, selectedBtn) => {
    const titleListedCtg = document.querySelector('#title-listed-ctg');
    const listedMealElement = document.querySelector('#listed-ctg');
    
    titleListedCtg.innerText = `Here's The Meal Listed by ${selectedBtn}`;

    /* const thumbMeal = meals.strMealThumb; */
    for (const [index, nameMealByCtg] of meals.entries()) {
        const nameMeal = meals[index].strMeal;

        listedMealElement.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
              <div class="card">
                    <div class="card-body text-center fw-light">
                        <h5 class="ctgName fw-light fs-6">${nameMeal}</h5>
                    </div>
              </div>
            </div>
          `;
    }
    /* renderListedMeal(meals); */


}



customElements.define('list-categories', ListCategories);
export default ListCategories;
