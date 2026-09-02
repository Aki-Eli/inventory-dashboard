import { searchProducts, filterProductsByCategory, getStockStatus, 
    calculateTotalInventoryValue, countLowStockProducts, countOutOfStockProducts} 
    from "./inventoryUtils.js";
const container = document.querySelector('#productList');
const total = document.querySelector('#totalInventoryValue');
const low = document.querySelector('#lowStockCount');
const out = document.querySelector('#outOfStockCount');
const resultBox = document.querySelector('#resultBox');
const noResult = document.querySelector('#NoResultsMessage');

export function displayProducts(products) {
    if (products.length === 0) {
        resultBox.style.display = "none";
        noResult.style.display = "block";
        return "No Products Found";
    }
    noResult.style.display = "none";
    resultBox.style.display = "block";
    let html = '';
    let lowcount = getStockStatus(countLowStockProducts(products));
    let outcount = getStockStatus(countOutOfStockProducts(products));
    let totalcount = calculateTotalInventoryValue(products);
   products.forEach(product => {
    const {name, category, price, stock} = product;
    
    html += `
    <div class="productCard">
    <p>${name}</p>
    <p>${category}</p> 
    <p>₱${price}</p>
    <p>Stock: ${stock}</p>
    </div>
    `
   });
   container.innerHTML = html;
   total.textContent = `Total Inventory Value: ₱${totalcount.toFixed(2)}`;
   low.textContent = `Low Stock Products: ${lowcount}`;
   out.textContent = `Out of Stock Products: ${outcount}`;

}
