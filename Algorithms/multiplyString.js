function repeatStringNumTimes(str, num) {
  let s = '';
  while (num > 0) {
    s += str;
    num--;
  }
  return s;
}

repeatStringNumTimes('abc', 3);
