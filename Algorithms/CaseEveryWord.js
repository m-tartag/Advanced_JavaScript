function titleCase(str) {
  const dataBuffer = str.toLowerCase().split(' ');
  const result = dataBuffer.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  // console.log(dataBuffer);
  // console.log(result);

  return result.join(' ');
}

titleCase("I'm a little tea pot");
