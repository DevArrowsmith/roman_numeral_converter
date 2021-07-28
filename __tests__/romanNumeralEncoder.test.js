const { romanNumeralEncoder } = require('../romanNumeralEncoder')

describe.only('romanNumeralEncoder()', () => {
  it('returns a string', () => {
    expect(typeof romanNumeralEncoder()).toBe("string");
  })
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
  })

  it('converts the number 1 into the string I', () => {
    const number = 1;
    const numeral = "I";

    expect(romanNumeralEncoder(number)).toBe(numeral);
  })

  it('converts the number 5 into the string V', () => {
    const number = 5;
    const numeral = "V";

    expect(romanNumeralEncoder(number)).toBe(numeral);
  })

  it('converts the number 10 into the string X', () => {
    const number = 10;
    const numeral = "X";

    expect(romanNumeralEncoder(number)).toBe(numeral);
  })

  it('converts the number 50 into the string L', () => {
    const number = 50;
    const numeral = "L";

    expect(romanNumeralEncoder(number)).toBe(numeral);
  })

  it('converts the number 100 into the string C', () => {
    const number = 100;
    const numeral = "C";

    expect(romanNumeralEncoder(number)).toBe(numeral);
  })

  it('converts the number 2 into the string II', () => {
    const number = 2;
    const numeral = "II";

    expect(romanNumeralEncoder(number)).toBe(numeral);
  })

})
