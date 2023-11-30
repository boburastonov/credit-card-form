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
  if (cardNumberInput.value.length > 16) {
    cardNumberInput.value = cardNumberInput.value.slice(0, 16);
  }
  cardNumberBox.innerText = cardNumberInput.value;
});
cardHolderInput.addEventListener("input", () => {
  cardHolderName.innerText = cardHolderInput.value;
  if (cardHolderInput.value.length === 21) {
    cardHolderName.innerText = cardHolderInput.value.slice(0, 12) + '...';
  }
});
monthInput.addEventListener("input", () => {
  expMonth.innerText = monthInput.value;
});
yearInput.addEventListener("input", () => {
  const sl = yearInput.value.slice(yearInput.value.length - 2);
  expYear.innerText = sl;
});
cvvInput.addEventListener("input", () => {
  if (cvvInput.value.length > 4) {
    cvvInput.value = cvvInput.value.slice(0, 4);
  }
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
