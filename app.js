"use strict";
console.log("You're pawsome!");

const resultsButton = document.getElementById('btn')
const honeyForm = document.getElementById("honeyForm");

let checks = 0;
let allProducts = [];
// let newProducts = [];

 function Product(name) {
     this.name = name;
     
     this.isFav = 0;
     allProducts.push(this);
   }

   const wildFlowers = new Product('wildflowers')
   const springFlowers = new Product('springflowers')
   const mountain = new Product('mountain')
   const highMountain = new Product('highmountain')
   const lavander = new Product('lavander')
   const chestnut = new Product('chestnut')
   const acacia = new Product('acacia')
   const pineTree = new Product('pinetree')

// Product.prototype.render = function () {
//   let newProducts = allProducts;
//   const containerElement = document.getElementById("honeyForm");
//   const input = document.createElement('input');
//   input.setAttribute('type', checkbox)
//   //input.textContent = `${this.name}`
//   containerElement.appendChild(input);

//   newProducts.push(this)
// }
// console.log(newProducts)

honeyForm.addEventListener("submit", function (event) {
        event.preventDefault();

  const wildFlowersSelected = event.target.wildFlowers.checked;
  const springFlowersSelected = event.target.springFlowers.checked;
  const mountainSelected = event.target.mountain.checked;
  const highMountainSelected = event.target.highMountain.checked;
  const lavanderSelected = event.target.lavander.checked;
  const chestnutSelected = event.target.chestnut.checked;
  const acaciaSelected = event.target.acacia.checked;
  const pineTreeSelected = event.target.pinetree.checked;

  const inputSelection = [wildFlowersSelected, springFlowersSelected, mountainSelected, highMountainSelected, lavanderSelected, chestnutSelected, acaciaSelected, pineTreeSelected];

  for (let i = 0; i < allProducts.length; i++) {
    if (inputSelection[i]) {
      allProducts[i].isFav++;
    }
  }

  // renderNewProducts();
    
  honeyForm.reset();
  
    });

    // function renderNewProducts() {
    //   for (let i = 0; i < newProducts.length; i++) {
    //     newProducts[i].render();
    //   }}

    resultsButton.addEventListener("click", renderChart);

    function renderChart() {
      const productNames = [];
      const productClicks = [];
    
      for (let i = 0; i < allProducts.length; i++) {
        productNames.push(allProducts[i].name);
        productClicks.push(allProducts[i].isFav);
      }
    
      
      const data = {
        labels: productNames,
        datasets: [
          {
            label: "checks",
            data: productClicks,
            backgroundColor: ["#A1C2F1"],
            borderColor: ["#D36B00"],
            borderWidth: 1,
          },
          ],
      };
    
      const config = {
        type: "bar",
        data: data,
      };
    
      const productChart = document.getElementById("chart");
      const myChart = new Chart(productChart, config);
    
      setLocalStorage();
    }

 function setLocalStorage() {
   localStorage.setItem("products", JSON.stringify(allProducts));
 }


 function checkLocalStorage() {
   const localProducts = JSON.parse(localStorage.getItem("products"));
    console.log(localProducts);
   if (localProducts) {
     allProducts = localProducts;
   
   }}

 checkLocalStorage();