function capitalizze(str) {
  const strs = str.split(' ');
  return strs.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ');
}
console.log(capitalizze('the quick brown fox'));
