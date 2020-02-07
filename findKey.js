const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    console.log("Assertion Passed: " +actual +" === " +expected );
  } else  {
    console.log( "Assertion Failed: "+actual +"!==" +expected ) ;
  } 
  };


  const findKey = function(object, callback) {
    let result = [];
    for (const key in object) {
      if (callback(object[key])) {
        results= [key]
        return results; 
      }
      }
      return undefined;
  }; 


  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) 