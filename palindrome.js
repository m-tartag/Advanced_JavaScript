function Checker(word) {
  return (
    word ===
    word
      .split('')
      .reverse()
      .join('')
  );
}

console.log(Checker('radar'));
