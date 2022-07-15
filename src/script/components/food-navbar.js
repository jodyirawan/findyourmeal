class NavBar extends HTMLElement{
    connectedCallback() {
        this.render();
	}
	

    render() {
        this.innerHTML= `
		<nav id="foodNavbar" class="food-navbar navbar justify-content-between">
			<a class="navbar-brand" href="/">Find Your Meal</a>			
		</nav>`;
    }
}

customElements.define("food-navbar", NavBar);

