window.renderSwiper = function(pageCounter) {
    const containerListedMeal = document.querySelector('.swiper-wrapper');
    /* const createElmSwiperSlide = document.createElement("div");
    createElmSwiperSlide.classList.add('row', `swiper-slide${pageCounter}`);
    containerListedMeal.appendChild(createElmSwiperSlide); */

    containerListedMeal.innerHTML += `
        <div class="row swiper-slide">
            <div class="row" id="swiper-mengeslide${pageCounter}">
        
            </div>
        </div>
    `;
    console.log(containerListedMeal);
}

window.renderListedMealByCtg = function(tempArray, pageCounter) {
    const listedMealElement = document.querySelector(`#swiper-mengeslide${pageCounter}`);
    tempArray.forEach(element => {
        listedMealElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 col-food gy-4">
            <div class="card card-food text-center ratio ratio-21x9">
                <img src="${element.mealThumb}" alt="${element.mealName}" class="card-img-top card-thumb">
                <div class="card-body text-center fw-light ctgName">
                    <a class="btn stretched-link">
                        <h5 class=" fw-light fs-6 position-absolute top-50 start-50 translate-middle">${element.mealName}</h5>
                    </a>
                </div>        
            </div>
        </div>
        `;
        /* console.log(element.objIndex);
        console.log(element.mealName);
        console.log(element.mealThumb); */
    });
    /* console.log(listedMealElement);
    console.log(index);
    console.log(nameMeal);
    console.log(thumbMeal);
    console.log(pageCounter); */

    /* listedMealElement.innerHTML = `
            
    `; */
}
/* <!-- Slides -->
    <div class="swiper-slide"></div>
    <div class="swiper-slide"></div>
    <div class="swiper-slide"></div> */