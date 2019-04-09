function greaterNumber(num1, num2) {
  if (num1 > num2) {
    return num1 + " is greater!";
  } else {
    return num2 + " is greater!";
  }
}

greaterNumber(3, 1);

function countToHundred() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
countToHundred();

const phonebook = ["dog", "cat", "horse", "bird"];

function entryMatch(item) {
  let isFound = false;
  phonebook.map(function(entry) {
    console.log(entry);
    if (item === entry) {
      isFound = true;
    }
  });
  return isFound;
}

console.log(entryMatch("cat"));
