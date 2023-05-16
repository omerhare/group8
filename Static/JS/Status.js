       let waterCount = 0;

 function incrementWater() {
           waterCount++;
           document.getElementById("water-count").textContent = waterCount;
       }

       function decrementWater() {
           if (waterCount > 0) {
               waterCount--;
               document.getElementById("water-count").textContent = waterCount;
           }
       }