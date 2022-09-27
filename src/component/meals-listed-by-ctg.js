import DataSource from "../data/data-source.js";

class ContFilteredMeal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container">
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
                        
                        <!-- If we need scrollbar -->
                        <div class="swiper-scrollbar"></div>
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

    const renderFilteredMeals = (meals) => {
        const titleListedCtg = document.querySelector('#title-listed-ctg');
        const colFoodElement = document.querySelector('.col-food');
        const swiperWrapperElement = document.querySelector('.swiper-wrapper');
        console.log(meals.length);


        titleListedCtg.innerText = `Here's The Meal Listed by ${selectedBtn}`;

        let pageCounter = 0;
        let tempArray = [];
        let loopCounter = 1;
        const remainder = meals.length % 9;
        if (colFoodElement == null) {
            for (const [index, mealByCtg] of meals.entries()) {
                const nameMeal = meals[index].strMeal;
                const thumbMeal = meals[index].strMealThumb;
                tempArray[index] = {
                    mealName: nameMeal,
                    mealThumb: thumbMeal
                };

                /* if (meals.length < 9) {
                    swiperWrapperElement.innerHTML += `
                    <div class="swiper-slide">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 col-food" style="margin: 1em auto;">
                                <div class="card card-food text-center ratio ratio-21x9">
                                    <img src="${thumbMeal}" alt="${nameMeal}" class="card-img-top card-thumb">            
                                    <div class="card-body text-center fw-light ctgName">
                                        <a class="btn stretched-link">
                                            <h5 class=" fw-light fs-6 position-absolute top-50 start-50 translate-middle">${nameMeal}</h5>
                                        </a>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                } else  */if (loopCounter % 9 == 0) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                    tempArray = [];
                    pageCounter++;
                } else if (loopCounter == meals.length) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                }
                /* if (((loopCounter - 1) + remainder == meals.length) < (loopCounter <= meals.length)) {
                    console.log('jalan cuk');
                    console.log(loopCounter);
                    console.log(index);
                    
                } */
                loopCounter++;
            }
        } else {
            
            swiperWrapperElement.textContent = ``;
            for (const [index, mealByCtg] of meals.entries()) {
                const nameMeal = meals[index].strMeal;
                const thumbMeal = meals[index].strMealThumb;
                tempArray[index] = {
                    mealName: nameMeal,
                    mealThumb: thumbMeal
                };

                /* if (meals.length < 9) {
                    swiperWrapperElement.innerHTML += `
                    <div class="swiper-slide">
                        <div class="row">
                    
                        
                            <div class="col-lg-4 col-md-6 col-sm-12 col-food" style="margin: 1em auto;">
                                <div class="card card-food text-center ratio ratio-21x9">
                                    <img src="${thumbMeal}" alt="${nameMeal}" class="card-img-top card-thumb">            
                                    <div class="card-body text-center fw-light ctgName">
                                        <a class="btn stretched-link">
                                            <h5 class=" fw-light fs-6 position-absolute top-50 start-50 translate-middle">${nameMeal}</h5>
                                        </a>
                                    </div>        
                                </div>
                           </div>
                        </div>
                    </div>
                `;
                } else  */if (loopCounter % 9 == 0) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                    tempArray = [];
                    pageCounter++;
                } else if (loopCounter == meals.length) {
                    renderSwiper(pageCounter);
                    renderListedMealByCtg(tempArray, pageCounter);
                }
                /* if (((loopCounter - 1) + remainder == meals.length) < (loopCounter <= meals.length)) {
                    console.log('jalan cuk');
                    console.log(loopCounter);
                    
                } */
                loopCounter++;
            }
        }
    }
}
