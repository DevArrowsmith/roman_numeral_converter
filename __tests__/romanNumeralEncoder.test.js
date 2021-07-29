const { romanNumeralEncoder } = require('../romanNumeralEncoder')

describe.only('romanNumeralEncoder()', () => {
  it('returns a string', () => {
    expect(typeof romanNumeralEncoder()).toBe("string");
  });

  it('only accepts a number as an argument', () => {
    const expected = "Please input a valid number.";
    
    const stringResult = romanNumeralEncoder("");
    const boolResult = romanNumeralEncoder(true);
    const arrayResult = romanNumeralEncoder([]);
    const objectResult = romanNumeralEncoder({});
    const undefinedResult = romanNumeralEncoder(undefined);
    const nanResult = romanNumeralEncoder(NaN);

    expect(stringResult).toBe(expected);
    expect(boolResult).toBe(expected);
    expect(arrayResult).toBe(expected);
    expect(objectResult).toBe(expected);
    expect(undefinedResult).toBe(expected);
    expect(nanResult).toBe(expected);
  });

  it('only accepts numbers up to 9999 inclusive', () => {
    const maxAcceptedNumber = 9999;
    const tooManyDigits = 10000;

    const withinRange = romanNumeralEncoder(maxAcceptedNumber);
    const outsideRange = romanNumeralEncoder(tooManyDigits);
    
    expect(withinRange).toBe("MX̄CMXCIX");
    expect(outsideRange).toBe("Please input a valid four digit number.");
  });

  it('converts the number 1 into the string I', () => {
    const number = 1;
    const numeral = "I";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 2 into the string II', () => {
    const number = 2;
    const numeral = "II";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 4 into the string IV', () => {
    const number = 4;
    const numeral = "IV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 6 into the string VI', () => {
    const number = 6;
    const numeral = "VI";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 12 into the string XII', () => {
    const number = 12;
    const numeral = "XII";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 25 into the string XXV', () => {
    const number = 25;
    const numeral = "XXV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 36 into the string XXXVI', () => {
    const number = 25;
    const numeral = "XXV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 47 into the string XLVII', () => {
    const number = 25;
    const numeral = "XXV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 58 into the string LVIII', () => {
    const number = 25;
    const numeral = "XXV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });


  it('converts the number 69 into the string LXIX', () => {
    const number = 5;
    const numeral = "V";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 80 into the string LXXX', () => {
    const number = 10;
    const numeral = "X";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 92 into the string XCII', () => {
    const number = 50;
    const numeral = "L";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 100 into the string C', () => {
    const number = 100;
    const numeral = "C";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 101 into the string CI', () => {
    const number = 101;
    const numeral = "CI";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 126 into the string CXXVI', () => {
    const number = 126;
    const numeral = "CXXVI";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 259 into the string CLIX', () => {
    const number = 259;
    const numeral = "CCLIX";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 736 into the string DCCXXXVI', () => {
    const number = 736;
    const numeral = "DCCXXXVI";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 999 into the string CMXCIX', () => {
    const number = 999;
    const numeral = "CMXCIX";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 1000 into the string M', () => {
    const number = 1000;
    const numeral = "M";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 1234 into the string MCCXXXIV', () => {
    const number = 1234;
    const numeral = "MCCXXXIV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 3690 into the string M', () => {
    const number = 3690;
    const numeral = "MMMDCXC";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 5555 into the string ∇DLV', () => {
    const number = 5555;
    const numeral = "∇DLV";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 7899 into the string ∇MMDCCCXCIX', () => {
    const number = 7899;
    const numeral = "∇MMDCCCXCIX";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });

  it('converts the number 9999 into the string MX̄CMXCIX', () => {
    const number = 9999;
    const numeral = "MX̄CMXCIX";
    expect(romanNumeralEncoder(number)).toBe(numeral);
  });
});
