function LongestWord(sen) {
  // split sentence
  const array = sen.split(' ');
  // init holder
  let holder = [];
  // loop through array
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i].length > holder.length) {
      holder = array[i];
    }
  }
  return holder;
}

// keep this function call here
console.log(LongestWord('Four Score and Seventeen Years Ago'));
