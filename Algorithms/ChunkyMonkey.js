function chunkArrayInGroups(arr, size) {
  const result = [];
  while (arr.length) {
    result.push(arr.splice(0, size));
  }
  console.log('result', result);
  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
