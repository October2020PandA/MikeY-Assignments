//To Do 1

//Push Front
// Given an array and an additional value, 
// insert this value at the beginning of the array. Do this without using any built-in array methods.

var arr = [4,5,6,7];
var item = 9;
function front(arr, item) { 
    for (var i = arr.length - 1; i >=0; i--) {
       arr[i + 1] = arr[i];
    }
    arr[0] = item;
}

// Pop Front
// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().


function popFront(arr) {
	const val = arr[0];
	for(var i = 0; i < arr.length; i++)
		arr[i] = arr[i + 1];
	arr.length = arr.length - 1;
	return val;
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. 
// Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function frontAdd(arr, item) { 
//     for (var i = arr.length - 1; i >=0; i--) {
//        arr[i + 1] = arr[i];
//     }
//     arr[0] = item;
// }

function frontAddIndex(arr, index, value) {
for(var i = arr.length; i > index; i--)
		arr[i] = arr[i-1]
	
	arr[index] = value;
}

//Remove At
//Given an array and an index into array, remove and return the array value at that index. 
//Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).


// function popFront(arr) {
// 	const val = arr[0];
// 	for(var i = 0; i < arr.length; i++)
// 		arr[i] = arr[i + 1];
// 	arr.length = arr.length - 1;
// 	return val;
// }

function remove(arr, index) {
    toRemove = arr[index]
    for(var i = arr.length; i < index; i++) {
            arr[i] = arr[i+1]
    }
    arr.length = arr.length-1;
    return toRemove;
}


//Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, 
// do this without using any built-in array methods.

var arr = [1,2,3,4];
function swap() {
    for (var i = 0; i < arr.length - 1; i = i + 2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
console.log(swap());


//Remove Duplicates
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
//As with all these array challenges, do this without using any built-in array methods.
// Second: Solve this without using any nested loops.

function removeDups(arr) {
	var newArr = [arr[0]];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] != newArr[newArr.length-1]) {
            newArr.push(arr[i])
        } 
	}
	return newArr;
}
console.log(removeDups([1,2,2,3,5,5,6,7,7,7,8]));



