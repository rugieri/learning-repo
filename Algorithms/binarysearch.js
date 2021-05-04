class BinarySearch{
    static search=(arrays, searchValue)=>{
        let low = 0;
        let high = arrays.length - 1;
        let mid = 0;
        while (low <= high){
            mid = (low + high)/2;
            if (arrays[mid]==searchValue){
                return mid;
            }else if (arrays[mid]< searchValue){
                low = mid + 1;
            }else if(arrays[mid]> searchValue){
                high = mid -1;
            }
        }
        return -1;
    }
}

let scores = [30, 40, 50, 70, 85, 90, 100, 200];
searchValue = 50;
position = BinarySearch.search(scores, searchValue);
console.log("The value " + searchValue + " position is: " + position);



searchValue = 90;
position = BinarySearch.search(scores, searchValue);
console.log("The value " + searchValue + " position is: " + position);