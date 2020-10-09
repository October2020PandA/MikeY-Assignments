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
// Write a method that accepts a value and create a new node, 
// assign it to the list head, and return a pointer to the new head node.
    addToFront(value){
        var new_node = new Node(value);

        new_node.next = this.head;
        this.head = new_node;
        return this.head;
    }

 //Write a method to remove the head node and return the new list head node. 
//If the list is empty, return null.
    removeFront() {
        if (this.head == null) {
            return null;
        }
        if (this.head) {
            this.head = this.head.next;
        } 
        return this.head
    }

// Write a method to return the value (not the node) at the head of the list. 
// If the list is empty, return null.
    front() {
        if(this.head) {
            return this.head.value;
        }
        return null;
    }
}

var my_sll = new SLL();
console.log(my_sll);
console.log(my_sll.addToFront("William"))
console.log(my_sll.removeFront("Mike"))