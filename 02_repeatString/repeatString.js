const repeatString = function(word, num) {
    finalWord = "";
    let i = 0;

    if(num >= 0){
    while(i < num){
        
        finalWord += word
        i++
    }} else {
        finalWord = "ERROR"
    }
    return finalWord
};

// Do not edit below this line
module.exports = repeatString;
