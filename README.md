# Roman Numeral Converter 🏛️

This cata involves the creation of a function that converts a number into a roman numeral string.

There are lots of approaches to this problem.

I'll use this project as an opportunity to try out <span style="color:goldenrod">**lookout objects**</span> in javascript.

[Here's a lovely guide](https://www.codereadability.com/replacing-if-statements-with-object-lookups/) on using objects for lookups.

---

### Next steps:
1. Add method for the number 0. 'nulla'.
2. Try devising a solution that uses one lookup table and a loop.

---

### Thoughts 

The numeral lookup objects at each decimal place (ones, tens, hundreds, thousands) follow the same pattern, but with different numerals.

|Numeral|Ones|Tens|Hundreds|Thousands|<span style="color:goldenrod">Pattern</span>|
|-|-|-|-|-|-|
|1|I|X|C|M|<span style="color:goldenrod">A</span>|
|2|II|XX|CC|MM|<span style="color:goldenrod">AA</span>|
|3|III|XXX|CCC|MMM|<span style="color:goldenrod">AAA</span>|
|4|IV|XL|CD|M∇|<span style="color:goldenrod">AB</span>|
|5|V|L|D|∇|<span style="color:goldenrod">B</span>|
|6|VI|LX|DC|∇M|<span style="color:goldenrod">BA</span>|
|7|VII|LXX|DCC|∇MM|<span style="color:goldenrod">BAA</span>|
|8|VIII|LXXX|DCCC|∇MMM|<span style="color:goldenrod">BAAA</span>|
|9|IX|XC|CM|MX̅|<span style="color:goldenrod">AC</span>|

This pattern may allow for a procedural solution that uses fewer lookup tables.  
My first thought is that a lookup object could be used to choose patterns, and a second lookup object could be used to select appropriate characters baced on the decimal position.
I'll think on this more. There may be a simpler approach.
