function frankenSplice(arr1, arr2, n) {
  const data = arr1.slice(0);
  const result = arr2.splice(n, 0, '5');
  return result;
  console.log(result);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
