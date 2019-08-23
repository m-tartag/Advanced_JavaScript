function TimeConvert(num) {
  let data = num;
  let hours = 0;
  let minutes = 0;

  while (data !== 0) {
    if (data >= 60) {
      data -= 60;
      hours += 1;
    } else if (data < 60) {
      minutes += data;
      data -= data;
    }
  }

  // code goes here
  return `${hours}:${minutes}`;
}

// keep this function call here
console.log(TimeConvert(999));
