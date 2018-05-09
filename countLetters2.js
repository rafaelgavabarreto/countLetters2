var letterCount = {};

function countLetters2(count) {
  count = count.split(" ").join("");
  for(i = 0; i < count.length;i++) {
    letterCount[count[i]] = [];
  }
  for(i = 0; i < count.length;i++) {
    letterCount[count[i]].push(i+1);
  }
}
countLetters2("lighthouse in the house")
console.log(letterCount);