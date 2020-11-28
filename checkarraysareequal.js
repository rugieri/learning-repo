//a function that returns true if two arrays contain identical values, and false otherwise.
function checkEquals(arr1, arr2) {
	let arr1str = JSON.stringify(arr1);
	let arr2str = JSON.stringify(arr2);
	
	if (arr1str === arr2str) {
  	return true 
  } else {
  	return false
  }
}
