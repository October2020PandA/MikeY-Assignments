//To_Do_2

//Reverse
//Given a numerical array, reverse the order of values, in-place. 
//The reversed array should have the same length, with existing elements moved to other indices so that 
//order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – 
//move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr) {
    var arr = [1,2,3,4,5];
    // loop through half of the array
    for(var i = 0; i<arr.length/2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverse());



//Rotate
function rotate(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {

		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			
			for(let i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
    }
}

//filter range
function filterRange(arr, min, max) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > min && arr[i] < max) {
			for(var x = i; x < arr.length - 1; x++) {
                arr[x] = arr[x + 1];
            }
            arr.length = arr.length - 1;
			i--;
		}
    }
}
console.log(filterRange([1,2,3,4,5,6], 1, 6));


//concat
function arrConcat(arr1, arr2) {
    var arr3 = [...arr1, ...arr2];
    return arr3;
}
console.log(arrConcat([1,2,3],[4,5,6]));


