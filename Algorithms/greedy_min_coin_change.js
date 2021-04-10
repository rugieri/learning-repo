 function MinimumCoinChange(cointypes) {
    //save the coin types in coins
    this.coins = cointypes;
    this.numCoinTypes = this.coins.length;
}

MinimumCoinChange.prototype = {
    //pass cent amount to this function

    generateCoins: function (amount) {
        let finalresult = [],
            totalAmount = amount;
        //loop through the coin types. for each type find how many
        //of the amount you can get
        for (i = 0; i <this.numCoinTypes; i++) {
            //first get hte value of the coin type
            currentTypeValue = this.coins[i],
            /*count the numer of that type of coin. if there are
            two 25 cents
            then the count is two*/
            typeCount = Math.floor(totalAmount / currentTypeValue);
            //push the coin into result
            finalresult.push(typeCount);
            /*update the total amount so on the next iteration we can
            find the right type count*/
            totalAmount -=(currentTypeValue * typeCount);

        }   
         //return the final results
         return finalresult;
        
    },   
    /*
    display the types of coins generated
    */
    displayResults: function (amount) {
        results = this.generateCoins(amount);
        console.log(results);
        for(i = 0; i < results.length; i++) {
        console.log('There are(is)', results[i], ' ', coinnames[i]);
        }
    }

};
let coinTypes = [25, 10, 5, 1],
    coinnames = ["quarter(s)", "dime(s)", "nickles(s)", "penny(ies)"],
    coinChanger = new MinimumCoinChange(coinTypes);
    coinChanger.displayResults(69);

