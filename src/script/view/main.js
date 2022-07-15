import '../components/food-list.js';
import '../components/food-navbar.js';
import '../components/food-search.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("food-category");
    const foodListElement = document.querySelector("food-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchFood(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        foodListElement.foods = results;
    };

    const fallbackResult = message => {
        foodListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;