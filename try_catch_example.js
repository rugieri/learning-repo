const getMonthName = (mo) =>{
    mo = mo - 1; //Adjust month number for array index(1 = JAN, 12 - DEC)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                    'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    if (months[mo]) {
        return months[mo];
    } else {
        throw 'InvalidMonthNo'; //throw keyword is used here
    }                 
}

try {// statements to try
    getMonthName = getMonthName(myMonth);//function could throw exception
}

catch (e) {
    getMonthName = 'unknown';
    logMyErrors(e); //pass exception object to erro handler(i.e your function)
}
