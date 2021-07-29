// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (typeof(num) !== "number" || Number.isNaN(num)) {
    return "Please input a valid number."
  } else if (num > 9999) {
    return "Please input a valid four digit number."
  };

  const onesNumerals = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    0: ""
  }

  const tensNumerals = {
    1: "X",
    2: "XX",
    3: "XXX",
    4: "XL",
    5: "L",
    6: "LX",
    7: "LXX",
    8: "LXXX",
    9: "XC",
    0: "",
    undefined: ""
  };

  const hundredsNumerals = {
    1: "C",
    2: "CC",
    3: "CCC",
    4: "CD",
    5: "D",
    6: "DC",
    7: "DCC",
    8: "DCCC",
    9: "CM",
    0: "",
    undefined: ""
  };

  const thousandsNumerals = {
    1: "M",
    2: "MM",
    3: "MMM",
    4: "M∇",
    5: "∇",
    6: "∇M",
    7: "∇MM",
    8: "∇MMM",
    9: "MX̄",
    0: "",
    undefined: ""
  };

  let digitArray = num.toString().split("");

  const onesInput = digitArray.pop();
  const tensInput = digitArray.pop();
  const hundredsInput = digitArray.pop();
  const thousandsInput = digitArray.pop();

  return thousandsNumerals[thousandsInput] + hundredsNumerals[hundredsInput] + tensNumerals[tensInput] + onesNumerals[onesInput];
};

module.exports = { romanNumeralEncoder };