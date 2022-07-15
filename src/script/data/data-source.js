class DataSource {
    static searchFood(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } else {
                return Promise.reject(`<h3 class="text-center">${keyword} is not found </h3> `);
            }
        })
    }
}

export default DataSource;