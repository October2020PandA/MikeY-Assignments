//length
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

    addToFront(value){
        var new_node = new Node(value);
        // scenario 1 - the list is empty
        if(this.head == null){
            this.head = new_node; // this.head = new Node(value);
            return this;
        }
        // scenario 2 - the list is not empty
        new_node.next = this.head; //store the current head so that it isn't lost
        this.head = new_node //change which node is the "head" of the list
        return this;
    }

    length() {
        var count = 0;
        var runner = this.head;
        while(runner != null) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    average(){
        //check if the list is empty...
        if (length ==  0) { //if empty, return 0
            return 0;
        }
        var length = this.length;
        var sum = 0;
        var runner = this.head;
        while(runner != null) {
            // console.log(typeof(runner.value)) check types of values
            //check if value is a number, if not then exclude it
            if(typeof(runner.value) != 'number'){
                length--;
            } else {
                sum += runner.value;
            }
            runner =  runner.next;
        }
        return sum/length;
    }
}
var my_sll = new SLL();
console.log(my_sll)
console.log(my_sll.addToFront("Amanda").addToFront("Bob").addToFront("Sue").addToFront("Victor").addToFront("Shannon"))

console.log(my_sll.length());

var new_sll = new SLL();
console.log(new_sll.addToFront(17).addToFront(28).addToFront(20).addToFront(-1));
console.log(new_sll.average());