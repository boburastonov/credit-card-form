<<<<<<< HEAD
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const cardNumberBox = document.querySelector(".card-number-box");
const cardNumberInput = document.querySelector(".card-number-input");
const cardHolderName = document.querySelector(".card-holder-name");
const cardHolderInput = document.querySelector(".card-holder-input");
const expMonth = document.querySelector(".exp-month");
const monthInput = document.querySelector(".month-input");
const expYear = document.querySelector(".exp-year");
const yearInput = document.querySelector(".year-input");
const cvvBox = document.querySelector(".cvv-box");
const cvvInput = document.querySelector(".cvv-input");

cardNumberInput.addEventListener("input", () => {
  cardNumberBox.innerText = cardNumberInput.value;
});
cardHolderInput.addEventListener("input", () => {
  cardHolderName.innerText = cardHolderInput.value;
});
monthInput.addEventListener("input", () => {
  expMonth.innerText = monthInput.value;
});
yearInput.addEventListener("input", () => {
      const sl = yearInput.value.slice(yearInput.value.length - 2);
      expYear.innerText = sl;
});
cvvInput.addEventListener("input", () => {
  cvvBox.innerText = cvvInput.value;
});
cvvInput.addEventListener("mouseenter", () => {
  front.style.transform = "perspective(1000px) rotateY(-180deg)";
  back.style.transform = "perspective(1000px) rotateY(0deg)";
});
cvvInput.addEventListener("mouseleave", () => {
  front.style.transform = "perspective(1000px) rotateY(0deg)";
  back.style.transform = "perspective(1000px) rotateY(180deg)";
});
=======

>>>>>>> 59274dc94f38c2e9fb1586c5840fa39810d7c621
