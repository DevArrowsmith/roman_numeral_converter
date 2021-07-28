// Please do not change the name of this function
const romanNumeralEncoder = (num) => {
  if (typeof(num) !== "number" || Number.isNaN(num)) {
    return "Please input a valid number."
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
    10: "C",
    NaN: ""
  };

  const stringifiedNumber = num.toString();

  const onesInput = parseInt(stringifiedNumber.substring(stringifiedNumber.length - 1));
  const tensInput = parseInt(stringifiedNumber.substring(0, stringifiedNumber.length - 1));

  return tensNumerals[tensInput] + onesNumerals[onesInput];
};

module.exports = { romanNumeralEncoder };