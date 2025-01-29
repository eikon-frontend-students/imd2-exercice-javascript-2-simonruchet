var paniers = document.querySelectorAll(".product-addtocart");
var confirmation = document.querySelector(".confirmation");

paniers.forEach(function (panier) {
  console.log(panier.innerText);
  panier.addEventListener("click", appearConfirmation);
});

function appearConfirmation() {
  confirmation.classList.add("is-active");
  setTimeout(() => {
    confirmation.classList.remove("is-active");
  }, 2000);
}
