import { products } from "./product.js";
import { displayProducts } from "./display.js";
import { searchProducts, filterProductsByCategory, getStockStatus, 
    calculateTotalInventoryValue, countLowStockProducts, countOutOfStockProducts} 
    from "./inventoryUtils.js";


const container = document.querySelector('#productList');
const total = document.querySelector('#totalInventoryValue');
const low = document.querySelector('#lowStockCount');
const out = document.querySelector('#outOfStockCount');
const search = document.querySelector('#searchInput');
const filter = document.querySelector('#categoryFilter');
const searchBtn = document.querySelector('#searchBtn');
const resetBtn = document.querySelector('#resetBtn');
const noResult = document.querySelector('#NoResultsMessage');

displayProducts(products);

function searchButton() {
    let query = search.value;
    let category = filter.value;
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