function callMeWhenYoureDone() {
  console.log('Got Your Call!');
}

const timeInMiliseconds = 1000;

// Params - Function,Time
setTimeout(callMeWhenYoureDone, timeInMiliseconds);
