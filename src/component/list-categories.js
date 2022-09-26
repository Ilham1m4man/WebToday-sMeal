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

        .card-food {
            border-radius: 0;
        }
        
        .card-food:hover {
            background: #FFF3CD;
            box-shadow:  6px 6px 10px #a15c43;
        }
        .card-thumb {
            object-fit: cover;
            object-position: center;
            border-radius: 0;
            max-height: 100%;
            transition: all 0.2s ease-out;
        }
        
        .ctgName {
            color: var(--sc-color);
            background-color: rgba(77, 62, 62, 0.85);
            opacity: 0;
            transition: all 0.2s ease-out;
        }
        
        .ctgName:hover {
            filter: brightness(100%);
            opacity: 100%;
        }
        </style>

        <div class="container" id="container-ctg" style="color: #4D3E3E;">
            <h2 class="fw-bold">Categories</h2>
            <div class="row justify-content-center">
                <div class="row w-75 justify-content-center" id="kategori"></div>
            </div>
        </div>
        <div class="container" style="color: #4D3E3E;">
            <h1 id="title-listed-ctg" class="fw-bold"></h1>
            <div class="row" id="listed-ctg">
                <!-- Slider main container -->
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper"></div>

                    <!-- Pagination -->
                    <div class="swiper-pagination"></div>

                    <!-- Navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    
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
                        <a href="#title-listed-ctg" class="stretched-link"></a>
                        <h5 class="ctgNameOri">${ctg.strCategory.toUpperCase()}</h5>
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
    const colFoodElement = document.querySelector('.col-food');
    /* console.log(meals); */

    let pageCounter = 0;
    let tempArray = [];
    titleListedCtg.innerText = `Here's The Meal Listed by ${selectedBtn}`;
    if(colFoodElement == null) {
        
        for (const [index, mealByCtg] of meals.entries()) {
        const nameMeal = meals[index].strMeal;
        const thumbMeal = meals[index].strMealThumb;
        tempArray[index] = {
            objIndex: index,
            mealName: nameMeal,
            mealThumb: thumbMeal
        };

        /* if(index % 9 == 0) {
            pageCounter++;
            renderSwiper(pageCounter);
            renderListedMealByCtg(tempArray, pageCounter);
            tempArray = [];
        } */
        /* listedMealElement.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 col-food gy-4">
              <div class="card card-food text-center ratio ratio-21x9">
              
                <img src="${thumbMeal}" alt="${nameMeal}" class="card-img-top card-thumb">
                
                <div class="card-body text-center fw-light ctgName">
                    <a class="btn stretched-link">
                        <h5 class=" fw-light fs-6 position-absolute top-50 start-50 translate-middle">${nameMeal}</h5>
                    </a>
                </div>        
              </div>
            </div>
          `; */
        }
    } else {
        listedMealElement.textContent = '';
        for (const [index, mealByCtg] of meals.entries()) {
            const nameMeal = meals[index].strMeal;
            const thumbMeal = meals[index].strMealThumb;
            
            /* if(index % 9 == 0) {
                apaIya++;
                console.log(apaIya);
            } */

            listedMealElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 col-food gy-4">
                  <div class="card card-food text-center ratio ratio-21x9">
                  
                        <img src="${thumbMeal}" alt="${nameMeal}" class="card-img-top card-thumb">
                        
                        <div class="card-body text-center fw-light ctgName">
                        <a class="btn stretched-link">
                        <h5 class=" fw-light fs-6 position-absolute top-50 start-50 translate-middle">${nameMeal}</h5>
                        </a>
                        </div>
                  </div>
                </div>
              `;
            }
    }


}



customElements.define('list-categories', ListCategories);
export default ListCategories;
