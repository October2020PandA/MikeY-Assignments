//strings_ToDo1



//Remove Blanks
//Create a function that, given a string, returns all of that string’s contents, 
//but without blanks. If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

//var string = "Pl ayTha tf u nkyM usi c "

function removeSpaces(string){
    // return string.split(" ").join("");
    var newArr = [];
    for(var i = 0; i < string.length; i++){
        if(string[i] != " "){
            newArr.push(string[i])
        }
    }
    newStr = ""
    for(var i = 0; i < newArr.length; i++){
        newStr=newStr+newArr[i]
    }
    return newStr
}
console.log(removeSpaces(" Pl ayTha tF u nkyM usi c "));


//Get Digits
//Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", 
//the function should return the number 1357924680.

function getDigits(string){
    string = string.split("");
    var int = 0;
    for(var i = 0; i < string.length; i++) {
        if (isNaN(string[i]) == false) {
            int += string[i];
        }
    }
    return parseInt(int);
}
console.log(getDigits('aN1ew2St3rin4g'));

//Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronym(string) {
    var strArr = string.split(" ");
    var retStr = "";
    for (var i= 0; i < strArr.length; i++) {
        retStr += strArr[i][0].toUpperCase();
    }
    return retStr;
}
console.log(acronym("this is a new string"));

//Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpace(string) {
    var strArr = string.split("");
    var count = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == false) {
            continue;
        } else { 
            count++;
        }   
    }
    return count;
}
console.log(countNonSpace("Honey pie, you are driving me crazy"));


//Remove Shorter Strings
//Given a string array and value (length), remove any strings shorter than the length from the array.
function removeShort(strArr, val) {
    for (var ind = strArr.length-1; ind >= 0; ind--) {
        if (strArr[ind].length < val) {
            for (var i = ind; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}