class FoodItem extends HTMLElement {

    constructor() {
        super();
    }

    set food(food) {
        this._food = food;
        this.render();
    }

    render() {
        this.innerHTML = `        
        <div class="card">
            <img class="food-image card-img-top" src="${this._food.strMealThumb}" alt="food Image">
            <div class="food-info card-body">
                <h2>${this._food.strMeal}</h2>
                <p class="card-text" style="font-style: italic;">Category: &nbsp ${this._food.strCategory}</p>
                <p class="card-text" style="font-style: italic;">Area: &nbsp &nbsp &nbsp &nbsp &nbsp ${this._food.strArea}</p>
            </div>
        </div>`;
    }
}

customElements.define("food-item", FoodItem);

