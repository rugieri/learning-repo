class SelectSort{
    static sort(arrays){
        var len = arrays.length - 1;
        var minIndex;// Save the index of the selected minimum
        for(let i = 0; i < len; i++){
            minIndex = i;
            //Save the minimum vaue of each loop as the first element
            var minValue = arrays[minIndex];
            for( let j = i; j < len; j++){
                //Comapre with each element if it less than he minum value, exchange the minIndex
                if (minValue > arrays[j + 1]){
                    minValue = arrays[j + 1];
                    minIndex = j + 1;
                }
            }
            //if the minum index changes, the current minimum is exchanged with minIndex
            if(i != minIndex){
                var temp = arrays[i];
                arrays[i] = arrays[minIndex];
                arrays[minIndex] = temp;
            }
        }
    }
}

var scores = [ 90, 70, 50, 33, 21, 99, 140];
SelectSort.sort(scores);

for(var i = 0; i < scores.length; i++) {
    console.log(scores[i] + ",");
}