function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  const myArray = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    myArray.splice(n, 0, arr1[i]);
    n++;
  }
  return myArray;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
