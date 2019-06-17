function sumAll(arr) {
  const ordered = arr.sort((a, b) => a - b);
  let storage = 0;

  for (let i = ordered[0]; i <= ordered[ordered.length - 1]; i++) {
    storage += i;
  }
  console.log(storage);
}

sumAll([1, 10]);
