import { cardComponent } from "../components/cardComponents.js";


let renderArea = document.querySelector("#card-area");
const BASE_URL =  "http://192.168.1.39:5500/data/products.json"
// products.map(products => {
//   renderArea.innerHTML += cardComponent(products);
// })

fetch(BASE_URL).then((res)=> res.json()).then((data)=> {
  data.map(products => {
     renderArea.innerHTML += cardComponent(products);
   })
});