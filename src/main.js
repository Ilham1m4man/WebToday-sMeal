import './component/app-bar.js';
import './component/randomize-section.js';
import './render-swiper.js';
import './component/list-categories.js';

import DataSource from './data/data-source.js';
import Swiper, { Navigation, Pagination, Grid } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Grid],
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
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
        #thumbnail {
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }

        #random-meal-card {
            color: #FFF3CD;
            border-radius: 15px;
            background: #4D3E3E;
            box-shadow:  11px 11px 22px #342a2a;
            border: none;
            padding: 10px;
            max-width: 850px;
        }

        .card-img-top {
            border-radius: 15px;
        }
        </style>

        <div class="card" id="random-meal-card">
            <img class="card-img-top" id="thumbnail" src="${thumb}">
            <div class="card-body">
                <h2 class="card-title" style="color: #FFC38B">${name}</h2>
                <h4 class="card-title">Kategori: ${category}</h4>
                <button type="button" class="btn btn-primary" id="alergi">Alergi</button>
                <button type="button" class="btn btn-secondary"  id="cobaAja">Lihat Resep</button>
                <p class="card-text fs-6 fw-light">*Tekan tombol Alergi jika kamu alergi terhadap makanan/bahan makanan ini dan kamu akan mendapatkan kesempatan untuk randomize meal lagi!</p>
            </div>
        </div>
        `;
    }
    const btnRandom = document.querySelector('#btnRandomize');
    btnRandom.addEventListener('click', function () {
        const dataRandom = DataSource.randomMeal();
        dataRandom.then(meal => {
            renderMeal(meal);
        }).catch(err => {
            showResponseMessage(err);
        });
    })

}

export default main;