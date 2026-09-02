import { getStockStatus, calculateTotalInventoryValue, 
    countLowStockProducts, countOutOfStockProducts} 
    from "./inventoryUtils.js";

const container = document.querySelector('#productList');
const total = document.querySelector('#totalInventoryValue');
const low = document.querySelector('#lowStockCount');
const out = document.querySelector('#outOfStockCount');
const resultBox = document.querySelector('#resultBox');
const noResult = document.querySelector('#noResultsMessage');

export function displayProducts(products) {
    if (products.length === 0) {
        resultBox.style.display = "none";
        noResult.style.display = "block";
        return;
    }

    noResult.style.display = "none";
    resultBox.style.display = "block";

    let html = '';
    const lowcount = countLowStockProducts(products);
    const outcount = countOutOfStockProducts(products);
    const totalcount = calculateTotalInventoryValue(products);

    products.forEach(product => {
        const { id, name, category, price, stock } = product;
        const status = getStockStatus(stock);

        html += `
        <div class="product-card">
            <p><strong>${name}</strong></p>
            <p>${category}</p>
            <p>₱${price.toLocaleString()}</p>
            <p>Stock: ${stock}</p>
            <p>${status}</p>
        </div>
        `;
    });

    container.innerHTML = html;
    total.textContent = `Total Inventory Value: ₱${totalcount.toLocaleString()}`;
    low.textContent = `Low Stock Products: ${lowcount}`;
    out.textContent = `Out of Stock Products: ${outcount}`;
}
