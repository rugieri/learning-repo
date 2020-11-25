// A simple program that counts words from a text
//just inserting a text on the prompt
function countWords(word) {
	for (let i = 0; i < word.split(); i++)
		word [i]++
	return word.split(" ").length
}
var words = prompt("insert a text here to count the words. ");
console.log(countWords(words));
