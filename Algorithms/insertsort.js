class InsertSort{
    static sort=(arrays=>{
        for(let i =0; i < arrays.length; i++){
            var insertElement = arrays[i];//Take unsorted new elements
            var insertPosition = i;//Inserted position
            for(let j = insertPosition - 1; j >=0; j--){
                //If the new elemnt is smaller than the sorted element, shifted to the right
                if(insertElement < arrays[j]){
                    arrays[j + 1] = arrays[j];
                    insertPosition--;
                }
            }
            arrays[insertPosition] = insertElement;//Insert the new element
        }
    })
}

var scores = [340, 189, 39, 53, 20, 13, 9, 59];
InsertSort.sort(scores);
for(let i = 0; i < scores.length; i ++){
    console.log(scores[i] + ' ' );
}
        
    
        
    
    
    