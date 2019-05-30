function bouncer(arr) {
  console.log(arr.filter(Boolean));
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]);
