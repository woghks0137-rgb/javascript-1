
const products = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 }
];

const btns = document.querySelectorAll(".button-group button");

const productList = document.querySelector(".product-list");

function renderProducts(items) {

    const result = items.map((item) => {
        return `
            <p>${item.name}</p>
            <p>${item.stock}</p>
            <p>${item.price}</p>
        `;
    }).join("");

    // 2. productList에 출력
    productList.innerHTML = result
}
renderProducts(products);


btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.dataset.filter === "all") {
            renderProducts(products);
        } else if (btn.dataset.filter === "stock") {
            const stockResult = products.filter((item) => {
                return item.stock >= 1
            });
            renderProducts(stockResult);
        } else if (btn.dataset.filter === "price") {
            const priceResult = products.filter((item) => {
                return item.stock >= 1 && item.price >= 50000
            });
            renderProducts(priceResult);
        }
    })
})
