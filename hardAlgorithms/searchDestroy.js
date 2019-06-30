function destroyer(arr) {
  // Push args after 0 into new array
  const payload = [];
  const newPayload = payload.concat(payload);
  for (let i = 1; i <= arguments.length - 1; i++) {
    payload.push(arguments[i]);
  }

  const x = payload.forEach(e => {
    for (let i = 0; i < arr.length; i++) {
      if (e === arr[i]) {
        arr.splice(i, 1);
      }
    }
  });
  console.log(arr);
}



destroyer([3, 5, 1, 2, 2], 2, 3, 5);
