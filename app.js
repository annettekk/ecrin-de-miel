"use strict";
console.log("You're pawsome!");

const resultsButton = document.getElementById('btn')
const honeyForm = document.getElementById("honeyForm");

let checks = 0;
let allProducts = [];


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
  
honeyForm.addEventListener("submit", function (event) {
        event.preventDefault();

  const wildFlowersSelected = event.target.wildFlowers.checked;
  const springFlowersSelected = event.target.springFlowers.checked;
  const mountainSelected = event.target.mountain.checked;
  const highMountainSelected = event.target.highMountain.checked;
  const lavanderSelected = event.target.lavander.checked;

  const inputSelection = [wildFlowersSelected, springFlowersSelected, mountainSelected, highMountainSelected, lavanderSelected];

  for (let i = 0; i < allProducts.length; i++) {
    if (inputSelection[i]) {
      allProducts[i].isFav++;
    }
  }

        // if (event.target.wildflowers.checked) {
        //   wildFlowers.isFav++;
        // }    
        // if (event.target.springflowers.checked) {
        //     springFlowers.isFav++;
        //   }
        // if (event.target.mountain.checked) {
        //     mountain.isFav++;
        //   }   
        // if (event.target.highmountain.checked) {
        //     highMountain.isFav++;
        //   }    
        // if (event.target.lavander.checked) {
        //     lavander.isFav++;
        // 
        //   }  
  
  
  
  honeyForm.reset();
  
    });

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
            backgroundColor: ["#42032C"],
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