function todayExercise(workout) {
    let exerciseOfTheDay = workout;
    return function() {
        console.log(`Today's exercise: ${exerciseOfTheDay}`);
    }
}

// Change the exercise to 'fencing'
let exercise = todayExercise('fencing');
exercise();  // Output: Today's exercise: fencing
