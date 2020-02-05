const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    console.log("Assertion Passed: " +actual +" === " +expected );
  } else  {
    console.log( "Assertion Failed: "+actual +"!==" +expected ) ;
  } 
  };

const countLetters = function (str) {
    let result = { };
    for (const letter of str) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    console.log(str);
    console.log(result);
  };

  countLetters ("jasmine")


