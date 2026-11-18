const products = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 },
    { id: 5, name: "USB", price: 15000, stock: 0 }
];

const result = products.filter((item) => {
    return item.stock > 0 && item.price >= 50000
}).map((item) => {
    return item.name
})
console.log(result)

const productList = document.querySelector(".product-list");
const result2 = products.filter((item) => {
    return item.stock > 0
}).map((item) => {
    return `${item.name}-${item.price}원`
})
console.log(result2)
productList.innerHTML = result2

const searchBox = document.querySelector(".search-input");
const productList2 = document.querySelector(".product-list2");

searchBox.addEventListener("input", () => {
    const keyword = searchBox.value;

    const searchResult = products.filter((item) => {
        return item.name.includes(keyword)
    }).map((item) => {
        return `${item}`
    })

    productList2.innerHTML = searchResult


})

