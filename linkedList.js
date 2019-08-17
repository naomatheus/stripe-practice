// Linked list work


class Node {
	constructor(){
		this.element = element;
		this.next = null;
	}

}


class LinkedList {
	constructor(){
		this.head = null;
		this.size = 0;

	}

	addNode (element){
		/// creates a new node
		const node = new Node();

		let current;

		// if this is the initial node, make it the head
		if (this.head === null){
			this.head = node
			// If the list is empty then add an element and it will be head
		else {
			current = this.head;
			while (current.next){
				current = current.next;
			}
		}
		// If the list is not empty then iterate to the end of the list and add an element at the end of the list
		this.size++;
		}

	}
	// methods to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
}