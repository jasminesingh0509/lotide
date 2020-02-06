const words = ["ground", "control", "to", "major", "tom"];
const map =function(array, callback) {

  console.log("array:", array);
  console.log("callback:", callback);
  const results =[];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


