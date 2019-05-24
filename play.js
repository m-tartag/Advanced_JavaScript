function spreadOut() {
  const fragment = ['to', 'code'];
  const sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}

console.log(spreadOut());
