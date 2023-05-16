var foodRecommendations = ["Spinach", "Quinoa", "Salmon", "Blueberries", "Almonds"];

function getRecommendation() {
  var recommendation = document.getElementById("recommendation");
  var randomFood = foodRecommendations[Math.floor(Math.random() * foodRecommendations.length)];
  recommendation.textContent = randomFood;
}


var breakfastOptions = ["Oatmeal", "Greek Yogurt", "Avocado Toast"];
var lunchOptions = ["Grilled Chicken Salad", "Quinoa Bowl", "Veggie Wrap"];
var dinnerOptions = ["Salmon with Roasted Vegetables", "Tofu Stir-fry", "Lean Steak with Sweet Potato"];
var snackOptions = ["Fruit Salad", "Mixed Nuts", "Protein Shake"];

// Store the original state
var originalState = {
  breakfastOptions: breakfastOptions.slice(),
  lunchOptions: lunchOptions.slice(),
  dinnerOptions: dinnerOptions.slice(),
  snackOptions: snackOptions.slice()
};

function generateMealPlan() {
  var breakfast = breakfastOptions[Math.floor(Math.random() * breakfastOptions.length)];
  var lunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
  var dinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
  var snack = snackOptions[Math.floor(Math.random() * snackOptions.length)];

  var mealPlanContainer = document.getElementById("recommend-meal");
  var closeBtn = document.getElementById("Close");
 closeBtn.classList.remove("hidden");

  mealPlanContainer.innerHTML = "<div class='meal-plan-content'>" +
                       "<h4>Breakfast:</h4><p>" + breakfast + "</p>" +
                       "<h4>Lunch:</h4><p>" + lunch + "</p>" +
                       "<h4>Dinner:</h4><p>" + dinner + "</p>" +
                       "<h4>Snack:</h4><p>" + snack + "</p>" +
                       "</div>";

    var todayFocus = document.querySelector(".Today-Focus");
    todayFocus.style.height = "400px";
}

function toggleMealPlanner() {
  var mealPlanner = document.getElementById("recommend-meal");
  var closeBtn = document.getElementById("Close");
   var todayFocus = document.querySelector(".Today-Focus");

  mealPlanner.innerHTML = "";
    todayFocus.style.height = "200px";
  closeBtn.classList.add("hidden");
}