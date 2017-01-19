SPECS:

  App will only accept numbers
    input: ^^#@ output: "that is not a number"
    input: hello output: "that is not a number"
    input: 346 output: "that is a number"

  App will not accept numbers greater than 3999
    input: 4000 output: "that number is too great"
    input: 3999 output: "that number is within range"

  App will match base roman numerals to digits
    input: 1 output: I
    input: 5 output: V
    input: 10 output: X
    input: 50 output: L
    input: 100 output: L
    input: 500 output: D
    input: 1000 output: M

  App will iterate through userInput and subtract digit values in accordance to roman numeral whole number values so long as userInput (num) remains greater than or equal to those values
    input: 2000 behavior: 2000 >= 1000, 2000 - 1000 = 1000 >= 1000, 1000-1000 = 0.  End.

  App will add the roman numeral in accordance to the digit value being used in the previous step to a variable array called roman, in accordance to how many times the digit value was used.
    input: 2000, roman = ['M', 'M'].  End.

  App will match special case roman whole number numerals to digit values:
    input: 900 output: CM
    input: 400 output: CD
    input: 90 output: XC
    input: 40 output: XL
    input: 9 output: IX
    input: 4 output: IV

  App will add these roman numeral values in the same way we added base roman numeral values previously.
    input: 90, roman = ["XC"]

  App will output Roman Numeral as joined string visually on page
    roman = ['M', "X","I"], on page: MXI
