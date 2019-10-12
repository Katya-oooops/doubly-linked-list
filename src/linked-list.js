const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head=null;
        this._tail=null;    
    }

    append(data) {
    var node = new Node(data);

    if (!this.length) {
        this._head = node;
        this._tail = node;
    } else {
        this._tail.next = node;
        node.previous = this._tail;
        this._tail = node;
    }
    
    this.length+=1;
    
    return node;
    }

    head() {
        
        if (!this._head){
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        
        if (!this._tail){
            return null;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        var currentNode = this._head;
        let num=0;
        while (num < index) {
            currentNode = currentNode.next;
            num++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var node = new Node(data);

        if (!this._head){
            this._head = node;
        } else if (index == this.length) {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        } else if(index == 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
        } else {
            var currentNode = this._head;
            let num=0;
            while (num < index) {
                currentNode = currentNode.next;
                num+=1;
            }

            var p=currentNode.prev;
       
            p.next=node;
            node.prev=p;
            currentNode.prev=node;
            node.next=currentNode;

            
        }

        this.length+=1;
        return this;
    }

    isEmpty() {
        if (this.length){
            return false;
        } else {
            return true;
        }
    }

    clear() {
        this._head=null;
        this._tail=null;
        this.length=0;
        return this;
    }

    deleteAt(index) {var currentNode = this._head;
        let num=0;
        while (num < index) {
            currentNode = currentNode.next;
            num++;
        }
        currentNode=null;
        this.length-=1;
        return this;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
