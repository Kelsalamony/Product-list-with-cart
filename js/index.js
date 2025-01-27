images = [
  "image-baklava-desktop.jpg",
  "image-brownie-desktop.jpg",
  "image-cake-desktop.jpg",
  "image-creme-brulee-desktop.jpg",
  "image-macaron-desktop.jpg",
  "image-meringue-desktop.jpg",
  "image-panna-cotta-desktop.jpg",
  "image-tiramisu-desktop.jpg",
  "image-waffle-desktop.jpg",
];
let container = ``;
let imageIndex = 0;
for (let i = 0; i < 3; i++) {
  container += `<div class="parent">`;
  for (let j = 0; j < 3; j++) {
    container += `<div class="product">`;
    container += `<img src="images/${images[imageIndex]}" alt="Product" class="product-image">`;
    imageIndex++;
    if (imageIndex >= images.length) {
      imageIndex = 0;
    }
    container += `
          <div class="add-to-cart">
        <img class="add-to-cart-icon" src="images/icon-add-to-cart.svg" alt="add to cart icon">
        <label type="text" class="add-to-cart-text" for="">add to cart</label>
      </div>
      <div class="counter">
        <img class="decrement-icon" src="images/icon-decrement-quantity.svg" alt="Decrement">
        <label type="text" class="count-text" for="">1</label>
        <img class="increment-icon" src="images/icon-increment-quantity.svg" alt="Increment">
      </div>`;
    container += `</div>`;
  }
  container += `</div>`;
}
document.getElementById("productContainer").innerHTML = container;
let addToCart = document.getElementsByClassName("add-to-cart");
let popValues = document.getElementsByClassName("decrement-icon");
let labelTypes = document.getElementsByClassName("count-text");
let pushValues = document.getElementsByClassName("increment-icon");
for (let i = 0; i < labelTypes.length; i++) {
  let counter = 1;
  popValues[i].onclick = function () {
    if (counter > 1) {
      counter -= 1;
      labelTypes[i].innerText = counter;
    } else {
      document.getElementsByClassName("counter")[i].style.visibility = "hidden";
      document.getElementsByClassName("counter")[i].style.opacity = "0";
      document.getElementsByClassName("add-to-cart")[i].style.visibility =
        "visible";
      document.getElementsByClassName("add-to-cart")[i].style.opacity = "1";
    }
  };
  pushValues[i].onclick = function () {
    counter += 1;
    labelTypes[i].innerText = counter;
  };
  addToCart[i].onclick = function () {
    document.getElementsByClassName("counter")[i].style.visibility = "visible";
    document.getElementsByClassName("counter")[i].style.opacity = "1";
    document.getElementsByClassName("add-to-cart")[i].style.visibility =
      "hidden";
    document.getElementsByClassName("add-to-cart")[i].style.opacity = "0";
  };
}
