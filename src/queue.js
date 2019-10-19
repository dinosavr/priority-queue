const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(!maxSize) maxSize = 30;
		this.maxSize = maxSize;	
		this.heap = new MaxHeap();

		
	}

	push(data, priority) {
		// console.log(data, priority, )
		if(data >= this.maxSize)  throw new Error("Queue has max size");
		this.heap.push(data, priority);
		//console.log(data, priority, this.heap);
	}

	shift() {			
        let lastValue = this.heap.pop();
		return lastValue;
	}

	size() {
	
	}

	isEmpty() {
	
	}
}

module.exports = PriorityQueue;
