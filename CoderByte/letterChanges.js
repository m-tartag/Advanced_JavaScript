function letterChanges(string) {
  const buffer = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < string.length; i++) {
    console.log(string.charCodeAt(i) + 1);
    buffer.push(string.charCodeAt(i) + 1);
  }
  const scrubbed = String.fromCharCode(...buffer).toLowerCase();
  console.log(scrubbed);
}

letterChanges('Hello');
