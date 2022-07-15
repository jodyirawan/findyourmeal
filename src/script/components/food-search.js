class Category extends HTMLElement{
    connectedCallback() {
        this.render();
	}
	
	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector("#searchElement").value;
	}

    render() {
        this.innerHTML = `
		<div><br>
        <h2 class="text-center">Discover a Meal</h2>
			<form id="myForm" class="form-inline d-flex justify-content-center">
			<input id="searchElement" class="my-form form-control mr-sm-2" type="search" placeholder="search meal" aria-label="Search">
			<button id="searchButton" class="food-search-btn btn .btn-outline-* my-2 my-sm-0" type="submit">Search</button>
			</form>
			<p class="text-center ">Example Search : Chicken , Beef  , Pasta , Arrabiata</p>
		</dic>`;

		this.querySelector("#searchButton").addEventListener("click", e => {
			e.preventDefault()
			this._clickEvent()
		});
    }
}

customElements.define("food-category", Category);

