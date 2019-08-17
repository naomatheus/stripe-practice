console.log('working');

// 		8 
// 	6		 9
// 4		7  		10
// 	   5 11    	   17


class Node {
	constructor(data, left = null, right = null){

		this.left = left;
		this.right = right;
		this.data = data;
	}
}

class Btree {
	constructor(){
		this.root = null;

	}
	addNode (data){
		// if the root is null then the new node is the root
		console.log('calling add node');
		console.log(data);
			const node = this.root;
			if (this.root === null){
				
				this.root = new Node(data)
				
				const node = this.root
				return;

			}  	else {

				const searchTree = (node) => {
					console.log(node, '<-- node');
					if (data < node.data){
						if (node.left === null){
							let newLeftNode = new Node(data);

							node.left = newLeftNode;
							console.log(node.left,"<--- new left post assignment");
						} else if (node.left !== null){
							return searchTree(node.left);
						}
					} else if (data > node.data){
						if(node.right === null){
							let newRightNode = new Node(data);

							node.right = newRightNode;
							console.log(node.right, '<--- new right post assignment');

						} else if (node.right !== null){
							return searchTree(node.right);
						}
					} else {
							return null;
						}
				}
				return searchTree(node);
				
			} 


	}
	removeNode (){

	}
	findValue(){

	}
	findHeight(){

	}
	findDiameter(){

	}
}

const firstTree = new Btree();

firstTree.addNode(8);
firstTree.addNode(6);
firstTree.addNode(9);
firstTree.addNode(4);
firstTree.addNode(11);
firstTree.addNode(11);
firstTree.addNode(30);
firstTree.addNode(40);

console.log(firstTree)
// console.log(firstTree.root, '<-- root of firstTree');