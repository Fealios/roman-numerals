var userInput;
var regex = /[0-9]/gi;
var output;

function numCheck(num){
  if(isNaN(userInput)){
    console.log('not a number')
  } else if (!isNaN(userInput)){
    // console.log('is a number');
    if(num <= 3999){
      toRoman(num);
    }
    else {
      console.log('number is too large');
    }
  }
}

function toRoman(num){
  console.log('in the function');
  console.log(num.length);
  var roman = [];
  while(num > 0){
    switch (num > 0){
      case (num >= 1000):
        roman.push('M');
        num -= 1000;
        break;
      case (num >= 900):
        roman.push('CM');
        num -= 900;
        break;
      case (num >= 500):
        roman.push("D");
        num -= 500;
        break;
      case (num >= 400):
        roman.push("CD");
        num -= 400;
        break;
      case (num >= 100):
        roman.push('C');
        num -= 100;
        break;
      case (num >= 90):
        roman.push('XC');
        num -= 90;
        break;
      case (num >= 50):
        roman.push('L');
        num -= 50;
        break;
      case (num >= 40):
        roman.push('XL');
        num -= 40;
        break;
      case (num >= 10):
        roman.push('X');
        num -= 10;
        break;
      case (num >= 9):
        roman.push('IX');
        num -= 9;
        break;
      case (num >= 5):
        roman.push("V");
        num -= 5;
        break;
      case (num >= 4):
        roman.push('IV');
        num -= 4;
        break;
      case (num >= 1):
        roman.push('I');
        num -= 1;
        break;
    }
  }
  output = roman.join('');

}

// user logic ====================================
$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    userInput = $('#userInput').val();
    // console.log(userInput);
    numCheck(userInput);
    $('#output').text(output);
  })
})
