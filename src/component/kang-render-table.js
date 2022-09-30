
window.renderTr = function(order) {
    const recipeTableSecElement = document.querySelector('tbody');
    recipeTableSecElement.innerHTML += `
                <tr id="tRow${order}">
                    <th scope="row">${order}</th>
                </tr>
            `;
}

window.renderThIngredient = function(order, ingredient) {
    const selectElmTr = document.querySelector(`#tRow${order}`);
    const createIngredientElm = document.createElement('td');
    createIngredientElm.innerText = ingredient;
    selectElmTr.appendChild(createIngredientElm);
}

window.renderThMeasure = function(order, measure) {
    const selectElmTr = document.querySelector(`#tRow${order}`);
    const createMeasureElm = document.createElement('td');
    createMeasureElm.innerText = measure;
    selectElmTr.appendChild(createMeasureElm);
}