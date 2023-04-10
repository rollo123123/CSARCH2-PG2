// HEX CONVERSION
function hextoDecimal() {
  var hexInput = document.getElementById("Hex-input").value;

  if (validateInput_hex(hexInput)){
    var bin = hextoBinary(hexInput)
    var sign = bin.charAt(0);
    var combiField = bin.substring(1,6);
    var expoField = bin.substring(6,14);
    const coefficients = [bin.substring(14,24), bin.substring(24,34), bin.substring(34,44), bin.substring(44, 54), bin.substring(54)];

    //Checks the first two binary digit of Combifield to determine MSD
    if (checkMSD(combiField.substring(0,2))) {
      //If this is true, then MSD is 8 or 9

      //Finding out the exponent
      var exponentString = combiField.substring(2,4);
      exponentString = exponentString.concat(expoField);
      var exponent = parseInt(exponentString, 2);
      var exponent = exponent - 398;

      //Finding out what the actual MSD is
      if (combiField.charAt(4) === '0')
        var MSD = 8
      else
        var MSD = 9;
    }
    else {

      //Finding out the exponent
      var exponentString = combiField.substring(0,2);
      exponentString = exponentString.concat(expoField);
      var exponent = parseInt(exponentString, 2);
      var exponent = exponent - 398;

      //Finding out what the actual MSD is
      var msdString = combiField.substring(2);
      var MSD = parseInt(msdString, 2);
    }

    //Preparing the sign
    if (sign === "1")
      var output = "-";
    else
      var output = "";

    //Getting the decimal
    var decimal = MSD.toString();

    for (let i = 0; i < 5; i++) {
      decimal = decimal.concat(checkBCD(coefficients[i]));
    }



    if (document.getElementById("fixed").checked) {

      if (exponent < 0) {
        let overflow = decimal.length + exponent;
        if (overflow < 0)
          output = output.concat("0." + genZeroString(Math.abs(overflow)) + decimal);
        else if (overflow > 0)
          output = output.concat(decimal.substring(0,overflow) + "." + decimal.substring(overflow));
        else
          output = output.concat(decimal);
      }
      else {
        output = output.concat(decimal);
        output = output.concat(genZeroString(exponent));
      }
      
    }
    else if (document.getElementById("floating").checked) {
      //Output with floating point
      let numJumps = decimal.length-1;
      exponent = exponent + numJumps;

      output = output.concat(decimal.charAt(0) + "." + decimal.substring(1));
      output = output.concat(" x 10^");

      output = output.concat(exponent.toString());
  
      console.log(output);
    }

    document.getElementById("output").innerHTML = output;
  }
}

function hexDigitToBinary(digit) {
  return (parseInt(digit, 16).toString(2).padStart(4, "0"));
}

function hextoBinary(hex) {
  var binary = "";

  for (let i = 0; i < hex.length; i++) {
    binary = binary.concat(hexDigitToBinary(hex.charAt(i)));
  }

  return binary;
}

function checkMSD(givenBin) {
  if (givenBin === "11")
    return true;
  else
    return false;

}

function checkBCD(coefficient) {
  var toConvert;
  var aei;

  if (coefficient.substring(6,9) === "111") {


    //aei is 011
    if (coefficient.substring(3,5) === "10") {
      aei = "011";

      let  temp = replaceAt(3, "0", coefficient);
      temp = replaceAt(7, "0", temp);
      temp = replaceAt(8, "0", temp);
      toConvert = temp.substring(0,6);
      toConvert = toConvert.concat(temp.substring(7));
    }
    //aei is 101
    else if (coefficient.substring(3,5) === "01") {
      aei = "101";

      let temp = "00";
      let fg = coefficient.substring(0,2);
      temp = temp.concat(coefficient.charAt(2));
      temp = temp.concat(fg);
      temp = temp.concat(coefficient.substring(5));
      temp = replaceAt(7, "0", temp);
      temp = replaceAt(8, "0", temp);
      toConvert = temp.substring(0,6);
      toConvert = toConvert.concat(temp.substring(7));
    }
    //aei is 110
    else if (coefficient.substring(3,5) === "00") {
      aei = "110";

      let temp = "00";
      let jk = coefficient.substring(0,2);
      temp = temp.concat(coefficient.substring(2,7));
      temp = temp.concat(jk);
      temp = temp.concat(coefficient.charAt(9));
      toConvert = temp.substring(0,6);
      toConvert = toConvert.concat(temp.substring(7));
    }
    //aei is 111
    else if (coefficient.substring(3,5) === "01") {
      aei = "111";

      let temp = replaceAt(3, "0", coefficient);
      temp = replaceAt(4, "0", temp);
      temp = replaceAt(7, "0", temp);
      temp = replaceAt(8, "0", temp);

      toConvert = temp.substring(0,6);
      toConvert = toConvert.concat(temp.substring(7));
    }
  }

  //aei is 001
  else if (coefficient.substring(6,9) === "100") {
    aei = "001";

    toConvert = coefficient.substring(0,6);
    toConvert = toConvert.concat(coefficient.substring(7));
  }

  //aei is 010
  else if (coefficient.substring(6,9) === "101") {
    aei = "010";

    let jk = coefficient.substring(3,5);
    let temp = replaceAt(3, "0", coefficient);
    temp = replaceAt(4, "0", temp);
    temp = temp.substring(0,7);
    temp = temp.concat(jk);
    temp = temp.concat(coefficient.charAt(9));

    toConvert = temp.substring(0,6);
    toConvert = toConvert.concat(temp.substring(7));
  }

  //aei is 100
  else if (coefficient.substring(6,9) === "110") {
    aei = "100";

    let jk = coefficient.substring(0,2);
    let temp = "00" + coefficient.substring(2,7);
    temp = temp.concat(jk);
    temp = temp.concat(coefficient.charAt(9));
    
    toConvert = temp.substring(0,6);
    toConvert = toConvert.concat(temp.substring(7));
  }

  //aei is 000
  else {
    aei = "000";

    toConvert = coefficient.substring(0,6);
    toConvert = toConvert.concat(coefficient.substring(7));
  }


  first = aei.charAt(0);
  second = aei.charAt(1);
  third = aei.charAt(2);

  first = first.concat(toConvert.substring(0,3));
  second = second.concat(toConvert.substring(3,6));
  third = third.concat(toConvert.substring(6));

  var binary = first.concat(second);
  binary = binary.concat(third);

  var decimal = parseInt(binary, 2).toString(16);

  return decimal;
}

function genZeroString(num) {
  var zero = "";

  for (let i = 0; i < num; i++) {
    zero = zero.concat("0");
  }

  return zero;
}




//BIN CONVERSION

  function bintoDecimal() {
    // Get values from input fields
  
  
    const signBit = document.getElementById("sign").value;
    const combiField = document.getElementById("combination").value;
    const expoField = document.getElementById("exponent").value;
    const coefficient1 = document.getElementById("coefficient1").value;
    const coefficient2 = document.getElementById("coefficient2").value;
    const coefficient3 = document.getElementById("coefficient3").value;
    const coefficient4 = document.getElementById("coefficient4").value;
    const coefficient5 = document.getElementById("coefficient5").value;

    if(validateInput(signBit, combiField, expoField, coefficient1, coefficient2, coefficient3 , coefficient4, coefficient5)){
    }
  
    // // Translate binary to decimal
    // const decimalOutput = translateBinaryToDecimal(
    //   signBit,
    //   combiField,
    //   expoField,
    //   `${coefficient1}${coefficient2}${coefficient3}${coefficient4}${coefficient5}`
    // );
  
    // Add fixed-point precision if selected
    //     if (document.getElementById("fixed_point_bin").checked) {
    //       const decimalPlaces = parseInt(document.getElementById("dropdown_bin").value);
    //       const fixedDecimalOutput = Number.parseFloat(decimalOutput).toFixed(decimalPlaces);
    //       displayOutput(fixedDecimalOutput);
    //     } else {
    //       displayOutput(decimalOutput);
    //     }
    //   }
  
}

function replaceAt(index, char, string) {
  var newString = string.substring(0,index);
  newString = newString.concat(char);
  newString = newString.concat(string.substring(index+1));

  return newString;
}








  
 