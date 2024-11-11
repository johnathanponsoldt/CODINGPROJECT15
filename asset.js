// Named exports
export const productList = [
    { id: 1, name: 'Football', price: 40 },
    { id: 2, name: 'Basketball', price: 50 }
];

export function getAssetByID(id) {
    return productList.find(product => product.id === id);
}
