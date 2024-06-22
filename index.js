// Errors Handling     
//                  Errors when uncaught disrupts the flow of the program
//                  usually by exiting prematurely

/*
    try(){}     :   The code that might cause the problem 
    catch(){}   :   Catch and handel any errors thrown by try()
    finally(){} :   Always runs weather the error is caught or not
                    usually used for clean up, closing connection

    throw       :   To manually throw an error
                    throw new Error(msg);
*/


// try {
//     console.log(x);
//     // here the error is that x is not defined
// } catch (error) {
//     console.log(error);
//     console.error(error);
// } finally {
//     console.log('The end of file');
// }


try {
    let dividend = Number(window.prompt("Enter a dividend"));
    let divisor = Number(window.prompt("Enter a divisor"));

    if (divisor === 0) {
        throw new Error('The divisor should be > 0');
    }

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error('The dividend & divisor should be a number!');
    }
    const res = dividend / divisor;
    console.log(res);
} catch (error) {
    console.log(error);
}
finally {
    console.log('End of file');
}
