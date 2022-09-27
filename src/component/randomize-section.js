import moment from 'moment';

class RandomizeSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.renderTime();
    }
     
    render() {
      this.innerHTML = `
        <style>
            #btnRandomize {
                width: 150px;
                background-color: var(--rd-color);
                color: var(--pr-color);
            }
        </style>

        <div class="container">
            <div class="row justify-content-center">
                <div class="text-center row justify-content-center" style="color: #4D3E3E;">
                    <h1 class="fs-1 fw-bold">What's your meal today?</h1>
                    <div class="time row">
                        <span id="clock"></span>
                        <span id="date"></span>
                    </div>
                    <h4 class="fw-bold">You have <span id="click-counter"></span> chances to click this button</h4>
                    <p>Click here to find out</p>
                </div>
                <button type="button" class="btn btn-primary" id="btnRandomize">RANDOMIZE</button>
            </div>
        </div>
        <div class="container">
        <h2 class="fw-bold">Your Today's Meal is...</h2>
            <div class="row justify-content-center">
                <div id="listMeal" class="row justify-content-center w-75"></div>
            </div>
        </div>`;
    }

    renderTime() {
        const displayTime = () => {
            const clockElement = document.querySelector('#clock')
            const dateElement = document.querySelector('#date')
            moment.locale('id');
            clockElement.innerText = moment().format('LT');
            dateElement.innerText = moment().format('LL');
        }
    
        const updateTime = () => {
            displayTime();
            setTimeout(updateTime, 1000);
        }
    
        updateTime();
    }
}

customElements.define('randomize-sec', RandomizeSection);