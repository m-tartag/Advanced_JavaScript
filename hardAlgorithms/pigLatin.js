function translatePigLatin(str) {
  if (
    str[0] === 'a' ||
    str[0] === 'e' ||
    str[0] === 'i' ||
    str[0] === 'o' ||
    str[0] === 'u'
  ) {
    const myArr = str.split('');
    myArr.push('way');
    const newWord = myArr.join('');
    console.log(newWord);
    return newWord;
  }
  const myArr = str.split('');
  myArr.shift();
  myArr.push(`${str[0]}ay`);
  const newWord = myArr.join('');
  console.log(newWord);
  return newWord;
}

translatePigLatin('consonant');
