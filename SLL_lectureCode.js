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

    //given a value, create a new node instance and set it to the head of the SLL
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

    displayList(){
        //is the list empty
        if(this.head == null){
            console.log(this);
            return this;
        }
        var runner = this.head; //this is a node object at the start of the list
        var list = "";
        while(runner != null){
            list = list+`Node: ${runner.value} -> `; //console.log something helpful to show what is in the node
            runner = runner.next //update the runner to the next node in the list
        }
        console.log(list);
        return this;
    }

    contains(value){
        var runner = this.head;
        while(runner != null){ //loop through list
            if(runner.value == value){ //check if the value exists at that node
                return true;
            }
            runner = runner.next; //increment the loop
        }
        return false; //return false if no value matches
    }

    length(){
        var counter = 0;
        var runner = this.head;
        while(runner != null){
            counter++;
            runner = runner.next;
        }
        return counter;
    }

    average(){
        // if list is empty
        var length = this.length()
        if(length == 0){
            return "Empty list"
        }
        var sum = 0;
        var runner = this.head;
        while(runner != null){
            // check if the value is a number - if not then exclude it
            if(typeof(runner.value) != 'number'){
                length--;
            }
            else{
                sum += runner.value;
            }
            runner = runner.next;
        }
        return sum/length
    }

}

var my_sll = new SLL();
console.log(my_sll)
console.log(my_sll.addToFront("Amanda").addToFront("Bob").addToFront("Sue").addToFront("Victor").addToFront("Shannon"))
my_sll.displayList()

console.log(my_sll.contains("Sue"));
console.log(my_sll.contains(5));
console.log(my_sll.length());

var new_sll = new SLL()
new_sll.addToFront(17).addToFront(28).addToFront(20).addToFront("Amanda").addToFront(13).addToFront(23).addToFront(16).addToFront("Victor").addToFront(2716057).addToFront(-1);
console.log(new_sll.average());