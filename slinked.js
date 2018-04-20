function Node(data){
	this.data = data;
	this.next = null;
}

function LinkedList(){
	this._length = 0;
	this.head = null;
}

LinkedList.prototype.add = function(value){
	var node = new Node(value),
	currentNode = this.head;

	if(!currentNode){
		this.head = node;
		this._length++;

		return node;
	}
	while(currentNode.next){
		currentNode = currentNode.next;
	}
	currentNode.next = node;

	this._length++;
	return node;
};

LinkedList.prototype.searchNode = function(position){
	var currentNode = this.head,
	length = this._length,
	count = 1,
	message = {failure: 'failure : nó inexistente'};

	if(length === 0|| position < 1 || position > length){
		throw new Error(message.failure);
	}

	while (count < position){
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
}

LinkedList.prototype.sort = function(){
	var i,j,aux;
	n = this.data;
	this._length;

	for(i=0;i<this._length;i++){
		for(j=0;j<this._length-1;j++){
			if(n.data > n.next.data){
				aux = n.data;
				n.data = n.next.data;
				n.next.data = aux;
			}
			n = n.next.data;
		}
	}
}


var list = new LinkedList();
list.add(22)
list.add(32)
list.add(25)
list.searchNode(2)
console.log(list)
console.log("search.:",list.searchNode(3))
list.sort()
console.log(list)