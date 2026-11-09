
const products = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 },
    { id: 5, name: "무선 키보드", price: 85000, stock: 2 }
];

const productList = document.querySelector(".product-list");
const searchInput = document.querySelector(".search-input");
const btns = document.querySelectorAll(".button-group button");

// 여기부터 직접 구현
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
renderProducts(products);

let currentFilter = "all";


function updateProducts() {
    const keyword = searchInput.value;

    let searchResult = products.filter((item) => {
        return item.name.includes(keyword);
    });

    if (currentFilter === "stock") {

        // searchResult에서 재고가 1개 이상인
        // 상품만 다시 필터링

        // 그 결과를 searchResult에 다시 저장
        const stock = searchResult.filter((item) => {
            return item.stock >= 1
        })
        searchResult = stock
    }

    renderProducts(searchResult);
}

searchInput.addEventListener("input", () => {
    updateProducts();
});

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        updateProducts();
    });
});