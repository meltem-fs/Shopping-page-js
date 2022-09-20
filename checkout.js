let btnkutu = document.getElementsByClassName("quantity-controller");
// console.log(btnkutu)

let par = document.getElementById("product-quantity");
// console.log(par)

let products = document.querySelector(".products");

products.addEventListener("click", (e) => {
  // console.log(aaaaaaaaa)
  if (
    e.target.classList.contains("minus") &&
    e.target.nextElementSibling.innerText > 0
  ) {
    console.log("eksi");
    console.log(e.target.nextElementSibling.innerText);
    e.target.nextElementSibling.innerText--;
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    //  console.log("arti")
  } else if (e.target.nextElementSibling.innerText <= 0) {
    // remove(sakşls)
    e.target.parentElement.parentElement.parentElement.remove();
  }
});
