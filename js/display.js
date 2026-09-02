import {
    getStockStatus,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
} from './inventoryUtils.js';

// DOM element references
const container  = document.querySelector('#productList');
const total      = document.querySelector('#totalInventoryValue');
const low        = document.querySelector('#lowStockCount');
const out        = document.querySelector('#outOfStockCount');
const noResult   = document.querySelector('#noResultsMessage');

/**
 * Renders the product list and updates the summary statistics.
 * Displays "No products found" when the list is empty.
 */
export function displayProducts(products) {
    // Show no-results message if the list is empty
    if (products.length === 0) {
        container.innerHTML = '';
        noResult.style.display = 'block';
        total.textContent = 'Total Inventory Value: ₱0';
        low.textContent   = 'Low Stock Products: 0';
        out.textContent   = 'Out of Stock Products: 0';
        return;
    }

    noResult.style.display = 'none';

    // Calculate summary values
    const lowCount   = countLowStockProducts(products);
    const outCount   = countOutOfStockProducts(products);
    const totalValue = calculateTotalInventoryValue(products);

    // Build product cards using object destructuring
    let html = '';
    products.forEach(product => {
        const { id, name, category, price, stock } = product;
        const status = getStockStatus(stock);

        html += `
        <div class="product-card" data-id="${id}">
            <p class="card-name">${name}</p>
            <p class="card-category">${category}</p>
            <p class="card-price">₱${price.toLocaleString()}</p>
            <p class="card-stock">Stock: ${stock}</p>
            <p class="card-status">${status}</p>
        </div>`;
    });

    // Update the DOM
    container.innerHTML = html;
    total.textContent = `Total Inventory Value: ₱${totalValue.toLocaleString('en-US')}`;
    low.textContent   = `Low Stock Products: ${lowCount}`;
    out.textContent   = `Out of Stock Products: ${outCount}`;
}
