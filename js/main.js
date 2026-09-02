import { products } from "./products.js";
import { displayProducts } from "./display.js";
import { searchProducts, filterProductsByCategory } from "./inventoryUtils.js";

const search = document.querySelector('#searchInput');
const filter = document.querySelector('#categoryFilter');
const searchBtn = document.querySelector('#searchBtn');
const resetBtn = document.querySelector('#resetBtn');

displayProducts(products);

function searchButton() {
    const query = search.value;
    const category = filter.value;
    let results = searchProducts(products, query);
    results = filterProductsByCategory(results, category);
    displayProducts(results);
}

function resetButton() {
    search.value = "";
    filter.value = "All";
    displayProducts(products);
}

searchBtn.addEventListener("click", searchButton);
resetBtn.addEventListener("click", resetButton);
