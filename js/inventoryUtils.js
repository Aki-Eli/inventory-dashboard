export function searchProducts(products, query){
    if (!query || query.trim() === '') return products;
    const result = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    return result;
}

export function filterProductsByCategory(products, category){
    if (!category || category.trim() === 'All') return products;
    const result = products.filter(product => product.category.toLowerCase().includes(category.toLowerCase()));
    return result;
}

export function getStockStatus(stock){
    if (stock === 0) return "Out of Stock";
    if (stock >= 1 && stock <= 5) return "Low Stock";
    return "In Stock";
}

export function calculateTotalInventoryValue(products){
    const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
    return totalValue;
}

export function countLowStockProducts(products){
    return products.filter(product => product.stock >= 1 && product.stock <= 5).length;
}

export function countOutOfStockProducts(products){
    return products.filter(product => product.stock === 0).length;
}
