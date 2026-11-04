const products = [
    { name: "키보드", price: 45000, stock: 3 },
    { name: "마우스", price: 25000, stock: 0 },
    { name: "모니터", price: 180000, stock: 2 },
    { name: "USB", price: 12000, stock: 5 },
    { name: "헤드셋", price: 70000, stock: 0 }
];

function getProductSummary(products) {

    let count = 0;
    let totalPrice = 0;
    let maxPrice = 0;
    let mostExpensive = "";

    for (let i = 0; i < products.length; i++) {

        // 1. 재고가 1개 이상인지 검사
        if (products[i].stock >= 1) {
            count++
            totalPrice = products[i].price + totalPrice

            if (products[i].price > maxPrice) {
                maxPrice = products[i].price
                mostExpensive = products[i].name
            }
        }
        // 2. count 1 증가

        // 3. 상품 가격을 totalPrice에 더하기

        // 4. 가장 비싼 가격인지 검사
        //    맞다면 가격과 이름을 변경

    }

    return {
        count: count,
        totalPrice: totalPrice,
        mostExpensive: mostExpensive
    };
}
const result = getProductSummary(products);
console.log(result)



function getInventorySummary2(products) {
    let outOfStockCount = 0;
    let totalStock = 0;
    let bottomPrice = null;
    let cheapestProduct = "";

    for (let i = 0; i < products.length; i++) {
        if (products[i].stock === 0) {
            outOfStockCount++
        }
        else if (products[i].stock >= 1) {
            totalStock += products[i].stock
            if (bottomPrice === null || products[i].price < bottomPrice) {
                bottomPrice = products[i].price
                cheapestProduct = products[i].name
            }
        }
    }
    return {
        outOfStockCount: outOfStockCount,
        totalStock: totalStock,
        bottomPrice: bottomPrice,
        cheapestProduct: cheapestProduct
    }

}
const result2 = getInventorySummary2(products)
console.log(result2)


const students = [
    { name: "민수", score: 85 },
    { name: "지연", score: 92 },
    { name: "철수", score: 65 },
    { name: "수빈", score: 78 },
    { name: "현우", score: 95 }
];

function getStudentSummary3(students) {
    let passCount = 0;
    let maxScore = 0;
    let topScoreplayer = "";
    let average = 0

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 80) {
            passCount++
        }
        average += students[i].score
        if (maxScore < students[i].score) {
            maxScore = students[i].score;
            topScoreplayer = students[i].name
        }
    }
    average = average / 5
    return {
        passCount: passCount,
        maxScore: maxScore,
        topScoreplayer: topScoreplayer,
        average: average
    }

}
const result3 = getStudentSummary3(students)
console.log(result3)

const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease")
const message = document.querySelector("#message")
let number = 0;
function updateDisplay() {
    count.textContent = number;

    if (number >= 10) {
        message.textContent = "최대 수치입니다.";
    } else {
        message.textContent = "";
    }
}
increase.addEventListener("click", () => {

    if (number < 10) {
        number++
    } updateDisplay();
})
reset.addEventListener("click", () => {
    number = 0
    updateDisplay();
    message.textContent = ""
})
decrease.addEventListener("click", () => {

    if (number >= 1) {
        number--
    } updateDisplay();

})

