const productsList = document.querySelector(".product-list");
const products = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 }
];
const result = products.map((item) => {
    return `
    <p class = "name">${item.name}</p>
    <p class = "price">${item.price}</p>

    `
}).join('')
productsList.innerHTML = result