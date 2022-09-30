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
        <style id="randSec-id">
            .button {
                position: relative;
                display: inline-block;
                margin: 20px;
                margin-top: 0;
            }
            
            .button a {
                color: var(--sc-color);
                font-family: Helvetica, sans-serif;
                font-weight: bold;
                font-size: 36px;
                text-align: center;
                text-decoration: none;
                background-color: var(--rd-color);
                display: block;
                position: relative;
                padding: 20px 40px;
                transition: all 0.2s ease-out;
            
                -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
                text-shadow: 0px 1px 0px #000;
                filter: dropshadow(color=#000, offx=0px, offy=1px);
            
                -webkit-box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
                -moz-box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
                box-shadow: inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
            
                -webkit-border-radius: 100px;
                -moz-border-radius: 100px;
                border-radius: 100px;
            }
            
            .button a:active {
                top: 10px;
                background-color: var(--fr-color);
            
                -webkit-box-shadow: inset 0 1px 0 var(--sc-color), inset 0 -3px 0 #915100;
                -moz-box-shadow: inset 0 1px 0 var(--sc-color), inset 0 -3pxpx 0 #915100;
                box-shadow: inset 0 1px 0 var(--sc-color), inset 0 -3px 0 #915100;
            }
            
            .button:after {
                content: "";
                height: 109.25%;
                width: 102.75%;
                padding: 4px;
                position: absolute;
                bottom: -14.75px;
                left: -4px;
                z-index: -1;
                background-color: var(--pr-color);
                -webkit-border-radius: 100px;
                -moz-border-radius: 100px;
                border-radius: 100px;
            }
        </style>

        <div class="container">
            <div class="row justify-content-center">
                <div class="text-center row justify-content-center" style="color: #4D3E3E;">
                    <h1 class="fw-bold" style="font-size: 4em">What's your meal today?</h1>
                    <div class="time row">
                        <span id="clock"></span>
                        <span id="date"></span>
                    </div>
                    
                    <h4>Click here to find out</h4>
                    <div ontouchstart="">
                        <div class="button">
                            <a href="#your-todays" id="btnRandomize">RANDOMIZE</a>
                        </div>
                    </div>
                    <h5 class="fw-bold">You have <span id="click-counter"></span> chances to click this button</h5>
                    <p style="font-size: 0.95em">*Your chance will reset every midnight (00.00)</p>
                </div>
            </div>
        </div>
        <div class="container is-hidden" id="your-todays-cont">
        <h2 class="fw-bold" id="your-todays">Your Today's Meal is...</h2>
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