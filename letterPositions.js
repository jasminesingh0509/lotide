const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    console.log("Assertion Passed: " +actual +" === " +expected );
  } else  {
    console.log( "Assertion Failed: "+actual +"!==" +expected ) ;
  } 
  };

  const assertArraysEqual = function(array1, array2) {
    if (array1 === undefined || array2 === undefined || 
        array1.length !== array2.length) 
          {
            return false;
          }
    for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) 
          {
              return false;
        }
      }
    return true;
  };


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++); 
  if ( ) {
    
  } else {
    
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);