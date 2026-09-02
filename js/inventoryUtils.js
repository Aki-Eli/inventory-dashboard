/**
 * Searches products by name (case-insensitive).
 * Returns all products if query is empty.
 */
export function searchProducts(products, query) {
    if (!query || query.trim() === '') return products;
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

/**
 * Filters products by category.
 * Returns all products if category is 'All' or empty.
 */
export function filterProductsByCategory(products, category) {
    if (!category || category.trim() === 'All') return products;
    return products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
}

/**
 * Returns a stock status label based on the stock quantity.
 * 0        → "Out of Stock"
 * 1–5      → "Low Stock"
 * 6+       → "In Stock"
 */
export function getStockStatus(stock) {
    if (stock === 0) return 'Out of Stock';
    if (stock >= 1 && stock <= 5) return 'Low Stock';
    return 'In Stock';
}

/**
 * Calculates the total inventory value (price × stock) for all products.
 * Returns a raw numeric value.
 */
export function calculateTotalInventoryValue(products) {
    return products.reduce((sum, product) => sum + (product.price * product.stock), 0);
}

/**
 * Returns the number of products with stock between 1 and 5 (inclusive).
 */
export function countLowStockProducts(products) {
    return products.filter(product => product.stock >= 1 && product.stock <= 5).length;
}

/**
 * Returns the number of products with stock equal to 0.
 */
export function countOutOfStockProducts(products) {
    return products.filter(product => product.stock === 0).length;
}
