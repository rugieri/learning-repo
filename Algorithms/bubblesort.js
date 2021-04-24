class BubbleSort{
    static sort(arrays) {
        for(let i = 0; i < arrays.length - 1; i++){
            for(let j = 0;j< arrays.length - 1; j++){
            //swap
            if(arrays[j] > arrays[j + 1]){
                var flag = arrays[j];
                arrays[j] = arrays[j + 1];
                arrays[j + 1] = flag;
            }        
            }
        }
    }
}

var scores = [90,70, 60, 50, 101, 35, 2];
BubbleSort.sort(scores);
for(let i = 0; i < scores.length; i++) {
    console.log(scores[i] + ",");
}