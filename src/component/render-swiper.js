window.renderSwiper = function(pageCounter) {
    const containerListedMeal = document.querySelector('.swiper-wrapper');

    containerListedMeal.innerHTML += `
        <div class="swiper-slide">
            <div class="row" id="swiper-mengeslide${pageCounter}">
        
            </div>
        </div>
    `;
}

window.renderListedMealByCtg = function(tempArray, pageCounter) {
    const listedMealElement = document.querySelector(`#swiper-mengeslide${pageCounter}`);
    tempArray.forEach(element => {
        listedMealElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 col-food" style="margin: 1em auto;">
            <div class="card card-food text-center ratio ratio-21x9">
                <img src="${element.mealThumb}" alt="${element.mealName}" class="card-img-top card-thumb">
                <div class="card-body text-center fw-light ctgName">
                    <a class="btn stretched-link" onclick="cobaFunction('${element.mealId}')">
                        <h5 class=" fw-light fs-6 position-absolute top-50 start-50 translate-middle" id="meal-name">${element.mealName}</h5>
                    </a>
                </div>        
            </div>
        </div>
        `;
    });
}