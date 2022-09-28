import DataSource from "../data/data-source.js";

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
        mealsFilteredByCtg(selectedBtn);
    }
    
    render(meals) {
        this.innerHTML = `
        <style>
        .ctgBtn {
            background-color: var(--pr-color);
            color: var(--sc-color);
            border-radius: 8px;
            transition: all 0.2s ease-out;
            border: none;
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


customElements.define('list-categories', ListCategories);
export default ListCategories;
