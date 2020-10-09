class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var first_node = new Node("Mike");
var second_node = new Node("Shannon");
var third_node = new Node("William");


class SLL{
    constructor(){
        this.head = null;
    }

contains(value) {
        var runner = this.head;
        while(runner != null) { //loop thru the list
            if(runner.value == value) { // check if the value exists at that node
                return true;
            }
            //increment
            runner = runner.next;
        }
        return false; // in case no value matches
    }
}
var my_sll = new SLL()
console.log(my_sll.contains("Sue")); //returns true
console.log(my_sll.contains(5)); //returns false
console.log(my_sll.length());


