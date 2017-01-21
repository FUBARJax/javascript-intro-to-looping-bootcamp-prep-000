var array = [];
function forLoop(array) {
  for (var i = 0; i < 26; i++) {
    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`;
  }
}
