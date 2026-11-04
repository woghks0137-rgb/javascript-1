const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const count = document.querySelector(".count");
const totalPrice = document.querySelector(".totalprice");

const price = 45000;
let number = 1;
updateCount();
updateTotalPrice();
function updateTotalPrice() {
    totalPrice.textContent = number * price;
}
function updateCount() {
    count.textContent = number
}
plusBtn.addEventListener("click", () => {
    if (number < 5) {
        number++
    }
    updateCount()
    updateTotalPrice()

})
minusBtn.addEventListener("click", () => {
    if (number > 1) {
        number--
    }
    updateCount()
    updateTotalPrice()
})