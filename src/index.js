module.exports = function reverse (n) {
  if(n < 0) n = -n;
  let str = '';
  n = n + '';
  for(let i = 0; i < n.length; i++){
      str = n[i] + str;
  };
  n = +str;
  return n;
}
