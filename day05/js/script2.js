
const products = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 }
];

const productList = document.querySelector(".product-list");
const searchInput = document.querySelector(".search-input");

function renderProducts(items) {
    if (items.length < 1) {
        productList.innerHTML = "검색 결과가 없습니다."
        return
    }

    const result = items.map((item) => {
        return `
        <p>${item.name}</p>
        <p>${item.price}</p>
        <p>${item.stock}</p>
        `
    }).join("")
    productList.innerHTML = result

}
renderProducts(products)

searchInput.addEventListener("input", () => {
    // 1. 검색창에 입력한 값 가져오기
    const keyword = searchInput.value;
    const searchResult = products.filter((item) => {
        return item.name.includes(keyword)
    });
    renderProducts(searchResult);
});
