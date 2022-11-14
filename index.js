const mainContainer = document.querySelector(".main-container")

const thanksContainer = document.querySelector(".thank-you")

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rates")

const submitButton = document.getElementById("submit-btn")

const rateAgain = document.getElementById("rate-again")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
} )

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

