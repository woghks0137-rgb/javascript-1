const productList = document.querySelector(".product-list");

const products = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 }
];

// 여기부터 직접 작성
const result = products.filter((item) => {
    return item.stock >= 1

}).map((item) => {

    return `
<p>${item.name}</p>
<p>${item.stock}</p>
<p>${item.price}</p>
`

}).join("")
productList.innerHTML = result;


const result2 = products.filter((item) => {
    return item.stock >= 1 && item.price >= 50000
}).map((item) => {
    return item.name
})

console.log(result2)


const btns = document.querySelectorAll(".filter-buttons button");
const list = document.querySelector(".product-list2");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.dataset.filter);
        if (btn.dataset.filter === "all") {
            // 전체 상품
            list.innerHTML = productList2
        } else if (btn.dataset.filter === "available") {
            // 재고 있는 상품
            const available = products.filter((item) => {
                return item.stock >= 1
            }).map((item) => {
                return `
                  <p> ${item.name}</p>
                 <p>${item.stock}</p>
                 <p> ${item.price}</p>
                `
            }).join("")
            list.innerHTML = available
        } else if (btn.dataset.filter === "expensive") {
            // 5만원 이상 상품
            const expensive = products.filter((item) => {
                return item.price >= 50000
            }).map((item) => {
                return `
                  <p> ${item.name}</p>
                 <p>${item.stock}</p>
                 <p> ${item.price}</p>
                `
            }).join("")
            list.innerHTML = expensive

        }
    })
})

const productList2 = products.map((item) => {
    return `
   <p> ${item.name}</p>
    <p>${item.stock}</p>
   <p> ${item.price}</p>
    
    `
}).join("")

list.innerHTML = productList2

