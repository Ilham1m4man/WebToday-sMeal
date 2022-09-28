import './component/app-bar.js';
import './component/randomize-section.js';
import './component/render-swiper.js';
import './component/listed-meals.js';
import './component/list-categories.js';

import DataSource from './data/data-source.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import moment from 'moment';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function main() {
    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    // Random Meal Section
    const renderMeal = (meals) => {
        const infoElement = document.querySelector('#listMeal');
        const name = meals[0].strMeal;
        const thumb = meals[0].strMealThumb;
        const category = meals[0].strCategory;

        infoElement.innerHTML = `
        <style>
        .optiontwo.main-item:hover .avatar-bg:before {
            right: 0;
            transition: 0.5s;
        }
        
        .optiontwo.main-item:hover .avatar,
        .optiontwo.main-item:hover .avatar #random-meal-card {
            transform: translateX(0);
            transition: transform 0.5s 0.5s;
            transition-timing-function: cubic-bezier(.85, 0, .15, 1);
        }

        #thumbnail {
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }

        #random-meal-card {
            color: #FFF3CD;
            border-radius: 15px;
            background: #4D3E3E;
            border: none;
            padding: 10px;
            max-width: 850px;
            transition: all 0.2s ease-out;
        }

        .card-img-top {
            border-radius: 15px;
        }

        .main-item {
            display: inline-block;
            margin: 0 15px;
            overflow: hidden;
            padding: 0 0 30px;
            max-width: 850px;
            border-radius: 15px;
        }
        
        .avatar {
            transform: translateX(-100%);
            transition: transform 0.5s;
            transition-timing-function: cubic-bezier(.85, 0, .15, 1);
            overflow: hidden;
            border-radius: 15px;
        }
        
        .avatar #random-meal-card {
            transform: translateX(100%);
            transition: transform 0.5s;
            transition-timing-function: cubic-bezier(.85, 0, .15, 1);
        }
        
        .optiontwo .avatar-bg:before {
            border-radius: 15px;
            content: '';
            position: absolute;
            left: 0;
            right: 100%;
            bottom: 0;
            top: 0;
            transition: 0.5s 0.5s;
            transition-timing-function: cubic-bezier(.85, 0, .15, 1);
        }
        
        .optiontwo.main-item.green .avatar-bg:before {
            background-color: var(--pr-color);
        }
        </style>

        
        <div class="main-item green optiontwo position-relative" style="padding-bottom: 0">
        <h4 class="position-absolute position-absolute top-50 start-50 translate-middle" style="color: #4D3E3E">Hover Me to Reveal:)</h4>
            <div class="avatar-bg">
                <div class="avatar">
                    <div class="card" id="random-meal-card">
                        <img class="card-img-top" id="thumbnail" src="${thumb}">
                        <div class="card-body">
                            <h2 class="card-title" style="color: #FFC38B">${name}</h2>
                            <h4 class="card-title">Kategori: ${category}</h4>
                            <button type="button" class="btn btn-primary" id="alergi">Alergi</button>
                            <button type="button" class="btn btn-secondary">Lihat Resep</button>
                            <p class="card-text fs-6 fw-light">*Tekan tombol Alergi jika kamu alergi terhadap makanan/bahan makanan ini dan kamu akan mendapatkan kesempatan untuk randomize meal lagi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        `;
    }
    const btnRandom = document.querySelector('#btnRandomize');



    /* const clickManager = () => {} */

    let clickCounter = 0;

    const renderClickCounter = (clickCounter) => {
        const clickCounterElement = document.querySelector('#click-counter');
        clickCounterElement.innerText = clickCounter;
    }

    const getRandomMealData = () => {
        const dataRandom = DataSource.randomMeal();
        dataRandom.then(meal => {
            renderMeal(meal);
        }).catch(err => {
            showResponseMessage(err);
        });
    }

    
   /*  renderClickCounter(clickCounter); */

    const clickManager = (clickCounter) => {
        if (clickCounter == 0) {
            console.log('Sorry you have 0 chance to click, please comeback tomorrow:)');
            btnRandom.setAttribute('style', 'pointer-events: none');
            /* updateTime(); */
            /* clickManager(); */
        } else {
            btnRandom.removeAttribute('style', 'pointer-events: none')
            btnRandom.addEventListener('click', function () {
                clickCounter -= 1;
                renderClickCounter(clickCounter);
                getRandomMealData();
                /* clickManager(); */
            });
        }
    }

    const resetClickChance = () => {
        if (moment().format('LTS') == '00.07.20') {
            clickCounter = 3;
            renderClickCounter(clickCounter);
            clickManager(clickCounter);
        } /* else {
            clickManager(clickCounter);
        } */
    }

    const updateTime = () => {
        resetClickChance();
        /* clickManager(); */
        setTimeout(updateTime, 1000);
    }
    updateTime();


    





}

export default main;