const products = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "헤드셋", price: 70000, stock: 5 },
    { name: "무선 키보드", price: 85000, stock: 0 }
];

// 여기부터 직접 작성
const result = products.filter((item) => {
    return item.stock >= 1 && item.price >= 50000
}).map((item) => {
    return item.name
})

console.log(result)


const products2 = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "헤드셋", price: 70000, stock: 5 }
];

const result2 = products2.filter((item) => {
    return item.stock >= 1
}).map((item) => {

    const newProduct = {
        name: item.name,
        totalPrice: item.price * item.stock
    };

    return newProduct
})
console.log(result2)

const products3 = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "헤드셋", price: 70000, stock: 5 },
    { name: "무선 키보드", price: 85000, stock: 2 }
];

const result3 = products3.filter((item) => {
    return item.stock >= 1
}).sort((a, b) => {
    return a.price - b.price
}).map((item) => {
    return item.name
});
console.log(result3)

const products4 = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "헤드셋", price: 70000, stock: 5 },
    { name: "무선 키보드", price: 85000, stock: 2 }
];

function getAvailableProducts(items) {
    const product = items.filter((item) => {
        return item.stock >= 1
    }).sort((a, b) => {
        return b.price - a.price
    }).map((item) => {
        const newitem = {
            name: item.name,
            price: item.price
        }
        return newitem
    })
    return product

};
const newResult = getAvailableProducts(products4);
console.log(newResult);

const products5 = [
    { id: 1, name: "키보드", price: 45000, stock: 3 },
    { id: 2, name: "마우스", price: 25000, stock: 0 },
    { id: 3, name: "모니터", price: 180000, stock: 2 },
    { id: 4, name: "헤드셋", price: 70000, stock: 5 },
    { id: 5, name: "무선 키보드", price: 85000, stock: 2 }
];

let keyword = "";
let currentFilter = "all";
let currentSort = "default";

function updateProducts() {
    let searchResult = products5.filter((item) => {
        return item.name.includes(keyword)
    })

    if (currentFilter === "stock") {
        // 재고 필터링 결과를 searchResult에 다시 저장
        searchResult = searchResult.filter((item) => {
            return item.stock >= 1
        })

    }

    if (currentSort === "low") {
        // 가격 낮은 순 정렬
        searchResult.sort((a, b) => {
            return a.price - b.price
        })
    }

    if (currentSort === "high") {
        // 가격 높은 순 정렬
        searchResult.sort((a, b) => {
            return b.price - a.price
        })
    }
    return searchResult
}