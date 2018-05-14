//Nome : Maikon Alexander de Barros Dias
//RA : 1706330

var Queue = function(max){
	this.queue = []

	this.reset = function(){
		this.front = -1
		this.rear = -1
	}

	this.reset();
	this.max = max || Queue.MAX
	
	this.increment = function(number){
		return (number+1) % this.max
	}
}

Queue.MAX = Math.pow(2, 53) -1;

Queue.prototype.Full = function(){
	return this.increment(this.rear) === this.front;
}

Queue.prototype.Empty = function(){
	return this.rear === -1 && this.front === -1;	
}

Queue.prototype.enQueue = function(insert){
	if(this.Full()){
		throw new Error("Queue is Full")
	}
	if(this.Empty()){
		this.front = this.increment(this.front)
	}
	this.rear =this.increment(this.rear)
	this.queue[this.rear] = insert
}

Queue.prototype.deQueue = function(){
	if(this.Empty()){
		throw new Error("Queue is Empty")
	}
	var RemoveRec = this.queue[this.front]
	this.queue[this.front] = null

	if(this.rear === this.front){
		this.reset()
	}
	else{
		this.front = this.increment(this.front)
	}
	return RemoveRec
}

Queue.prototype.search = function(position){
	var Currentpos = this.front,
	nextpos = this.rear,
	count = 1;

	if(nextpos === 0 || position < 1 || position > nextpos){
		throw new Error ("Undefined Position/Value")
	}

	while(count < position){
		Currentpos++
		count++
	}

	return this.queue[Currentpos]

}

Queue.prototype.print = function(){
	for(var i= this.front; i <= this.rear; i++){
		console.log(this.queue[i])
	}	
}

var q = new Queue(5)

q.enQueue(1)
q.enQueue(2)
q.enQueue(3)
q.enQueue(4)
console.log("Valores Adicionados.:")
console.log(q.queue)
console.log("front.:",q.front)
console.log("rear.:",q.rear)
console.log("buscando o segundo valor da lista.: ",q.search(2))
q.deQueue()
q.deQueue()
q.deQueue()
q.enQueue(5)
q.enQueue(6)
q.enQueue(7)
q.enQueue(8)
q.deQueue()
q.deQueue()
q.deQueue()
console.log("\nValor removido do começo.:")
console.log(q.queue)
console.log("buscando o segundo valor da lista.: ",q.search(2))
console.log("front.:",q.front)
console.log("rear.:",q.rear)
