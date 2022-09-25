class RandomizeSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
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
                <div class="text-center fw-bold" style="color: #4D3E3E;">
                    <h1>What's your meal today?</h1>
                    <p>Click here to find out</p>
                </div>
                <button type="button" class="btn btn-primary" id="btnRandomize">RANDOMIZE</button>
            </div>
        </div>
        <div class="container">
        <h2>Your Today's Meal is...</h2>
            <div class="row justify-content-center">
                <div id="listMeal" class="row justify-content-center w-75"></div>
            </div>
        </div>`;
    }
}

customElements.define('randomize-sec', RandomizeSection);