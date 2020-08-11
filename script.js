/**
 * @param {string} s
 * @return {number}
 */
let stringo = 'this';
console.log(stringo[0]);
// MMMD
// so the idea here is to work backwards
// evaluate the ones digits, then the tens digits, then the hundreds, and so on. 
var romanToInt = function (s) {
    let answer = 0;
    for (i = s.length - 1; i >= 0; i--) {
      switch (s[i]) {
        case "I":
          answer += 1;
          break;
        case "V":
          if (s[i - 1] === "I") {
            answer += 4;
            i -= 1;
          } else {
            answer += 5;
          }
          break;
        case "X":
          if (s[i - 1] === "I") {
            answer += 9;
            i -= 1;
          } else {
            answer += 10;
          }
          break;
        case "L":
          if (s[i - 1] === "X") {
            answer += 40;
            i -= 1;
          } else {
            answer += 50;
          }
          break;
        case "C":
          if (s[i - 1] === "X") {
            answer += 90;
            i -= 1;
          } else {
            answer += 100;
          }
          break;
        case "D":
          if (s[i - 1] === "C") {
            answer += 400;
            i -= 1;
          } else {
            answer += 500;
          }
          break;
        case "M":
          if (s[i - 1] === "C") {
            answer += 900;
            i -= 1;
          } else {
            answer += 1000;
          }
          break;
      }
    }
    console.log("answer is", answer);
  };

  // console.log("correct answer 3724");
  // romanToInt("MMMDCCXXIV");
  // 3724
  // romanToInt("XXIII");
  // 23
  // romanToInt("XLVII");
  // 47
  // romanToInt("MMDCCXXXI");
  // 99

  // M = 1000
  // CM = 900
  // DCCC = 800
  // DCC = 700
  // DC = 600
  // D = 500
  // CD = 400
  // CCC = 300
  // CC = 200
  // C = 100