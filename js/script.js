import { cardComponent } from "../components/cardComponents.js";
import { products } from "../data/products.js";


let renderArea = document.querySelector('#card-area');
products.map(products => {
  renderArea.innerHTML += cardComponent(products);
})