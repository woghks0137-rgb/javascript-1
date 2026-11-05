const products = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "USB", price: 12000, stock: 0 },
    { name: "헤드셋", price: 70000, stock: 5 }
];


function getProductSummary(products) {
    let count = 0;
    let totalPrice = 0;
    let maxPrice = 0;
    let mostExpensive = ""
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock >= 1) {
            count++
            totalPrice += products[i].price
            if (maxPrice < products[i].price) {
                maxPrice = products[i].price
                mostExpensive = products[i].name
            }
        }
    }
    return {
        count: count,
        totalPrice: totalPrice,
        maxPrice: maxPrice,
        mostExpensive: mostExpensive
    }
}
const result = getProductSummary(products)
console.log(result)

function getAffordableProducts(products, maxPrice) {
    let box = []
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock >= 1 && maxPrice >= products[i].price) {
            box.push({ name: products[i].name, price: products[i].price })
        }
    }
    return box
}
const result2 = getAffordableProducts(products, 70000)
console.log(result2)


const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const quantity = document.querySelector(".quantity");
const total = document.querySelector(".total");
const message = document.querySelector(".message");
let number = 1
const price2 = 45000
function getMessage() {
    quantity.textContent = number
    total.textContent = `${(number * price2).toLocaleString()}`


}
plusBtn.addEventListener("click", () => {
    if (number === 5) {
        message.textContent = "최대치입니다"
    } else if (number < 5) {
        number++
        message.textContent = ""
    }
    getMessage()


})
minusBtn.addEventListener("click", () => {
    if (number === 1) {
        message.textContent = "최소값입니다"
    }
    else if (number > 1) {
        number--
        message.textContent = ""
    }
    getMessage()
})

const result3 = products.filter((item) => {
    return item.stock >= 1
})
console.log(result3)

const products2 = [
    { name: "키보드", price: 45000 },
    { name: "마우스", price: 25000 },
    { name: "모니터", price: 180000 }
];

const result4 = products2.map((item) => {
    return {
        name: item.name,
        price: item.price * 0.9
    }
})
console.log(result4)

const users = [
    { name: "철수", age: 20 },
    { name: "영희", age: 25 }
];
const result5 = users.map((user) => {
    return {
        userName: user.name,
        nextAge: user.age + 1
    }
})
console.log(result5)


const users2 = [
    { id: 1, name: "철수", age: 20 },
    { id: 2, name: "영희", age: 25 },
    { id: 3, name: "민수", age: 30 },
    { id: 4, name: "지수", age: 25 }
];

const result6 = users2.find((user) => {
    return user.age >= 25
})
console.log(result6)

const products3 = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "USB", price: 12000, stock: 0 },
    { name: "헤드셋", price: 70000, stock: 5 }
];

const result7 = products3.filter((product) => {
    return product.stock >= 1
}).map((item) => {
    return {
        name: item.name,
        price: item.price * 0.9
    }
})
console.log(result7)