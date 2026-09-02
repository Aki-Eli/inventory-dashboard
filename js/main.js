import { products } from './products.js';
import { displayProducts } from './display.js';
import { searchProducts, filterProductsByCategory } from './inventoryUtils.js';

// DOM element references
const searchInput    = document.querySelector('#searchInput');
const categoryFilter = document.querySelector('#categoryFilter');
const searchBtn      = document.querySelector('#searchBtn');
const resetBtn       = document.querySelector('#resetBtn');

// Display all products on initial page load
displayProducts(products);

/**
 * Searches and filters products based on the current input values,
 * then updates the display.
 */
function handleSearch() {
    const query    = searchInput.value;
    const category = categoryFilter.value;

    let results = searchProducts(products, query);
    results = filterProductsByCategory(results, category);

    displayProducts(results);
}

/**
 * Resets the search input and category filter,
 * then restores the full product list.
 */
function handleReset() {
    searchInput.value    = '';
    categoryFilter.value = 'All';
    displayProducts(products);
}

// Event listeners
searchBtn.addEventListener('click', handleSearch);
resetBtn.addEventListener('click', handleReset);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch();
});
