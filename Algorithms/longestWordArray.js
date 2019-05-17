function bigFind(str) {
  let longestWord = '';
  const data = str.split(' ');

  data.forEach(function(element) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });
  console.log(longestWord);
}
bigFind('calamity outrageous zipper');
