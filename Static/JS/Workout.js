      const recommendedTrainings = [
           "High-Intensity Interval Training (HIIT)",
           "Resistance Training",
           "Yoga",
           "Pilates",
           "Cycling",
           "Swimming",
           "CrossFit",
           "Boxing",
           "Zumba"
       ];

       let workoutCount = 0;
       let trainingCount = 0;

       window.onload = generateRecommendedTraining;

       function generateRecommendedTraining() {
           const recommendedWorkout = recommendedTrainings[Math.floor(Math.random() * recommendedTrainings.length)];
           document.getElementById("Recommended-workouts").textContent = recommendedWorkout;
       }

       function incrementWorkout() {
           workoutCount++;
           document.getElementById("workout-count").textContent = workoutCount;
       }

       function decrementWorkout() {
           if (workoutCount > 0) {
               workoutCount--;
               document.getElementById("workout-count").textContent = workoutCount;
           }
       }

       function incrementTraining() {
           trainingCount++;
           document.getElementById("training-type-count").textContent = trainingCount;
       }
        function decrementTraining() {
           if (trainingCount > 0) {
               trainingCount--;
               document.getElementById("training-type-count").textContent = trainingCount;
           }
       }
