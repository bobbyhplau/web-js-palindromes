function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("");

  var strA = s.split(" ").join("");
  var strB = stringReverse.split(" ").join("");

  return strA == strB;
}

module.exports = isPalindrome;