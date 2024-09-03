//length of the last word

function lengthOfLastWord(s) {
  let newInput = s.trim();
  let sArr = newInput.split("");
  let counter = 0;

if (newInput.length === 0) return counter;

if (!sArr.includes(" ")) return newInput.length;

for (let i = newInput.length - 1; i > 0; i--) {
    if (newInput[i] != " ") {
      counter++;
    } else {
      return counter;
    }
  }
}