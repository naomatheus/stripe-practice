console.log('begin')

/// notes /// 


/// notes /// 


/// pseudo ///


/// pseudo ///

// module.exports = ;



// give a database table with columns and rows
// find the minimum value and return the row that contains the minimum value

// if the row contains no values, you should return that the minimum value found was 0 

/// SOLUTION FROM INTERVIEW 08.20.19 ALBEIT FROM MEMORY /// 

const oneRowTable = [
	{"a":2},
	{"a":3},
	{"a":1},
	{"a":4}
];

const findMin = (table) => {
	let row;
	let min = 0;
	for (let i = 0; i < table.length; i++){
		console.log(table[i], '<-- inner');
		for (let j = 0; j < table.length; j++){
			console.log(table[j], '<-- outer');

			if (table[i].a < table[j].a){

				min = table[i].a

				row = table[i]
			}	
		}
	}

	return row
}

// console.log(findMin(oneRowTable));

const tableMultiRow = [
	{"a":2, "b":4},
	{"a":4, "b":20},
	{"a":5, "b":24},
	{"a":6, "b":10},
	{"a":8, "b":0 },
	{"a":9, "b":8}
]

const findMinRow = (table) => {
	let row;
	let min = 0;
	table.map((ele, indx) => {
		// for a multi-row/multi-column table, I use map to perform an operation on all key:value pairs, regardless of # of rows/columns
		
		// min will hold a new minimum when found
		let value = 0;
		let newMin = 0;
		console.log(ele, '<-- ele');
		console.log(indx, '<-- indx');

		for (indx in ele){
			const key = ele;
			const val = indx;
			const value = key[val]
			// obtain values from all objects in array table

			// // console.log(value, '<-- value');

			// while (key[val] < value){

			// 	newMin = key[val]
			// 	console.log(newMin, '<-- newMin');
			// }
			// create and assign newMin within the condition or within the for in loop

			// while (i !== 0){
			// 	// compare ele[i], assign it to max each time
			// 	let currentMin = 0;
			// 	currentMin = ele[i]
			// 	// if max is lower/higher than currently is
			// 	newMin = currentMin;
			// 	if (newMin < currentMin){
			// 		newMin = currentMin;	
			// 	}
				
			// 	i--
			// }
			// return newMin
		} 	
	})
	
	
}

console.log(findMinRow(tableMultiRow));


// columns a b c d 
// 		1 3 4 7
// 		2 5 9 1
// 		6 7 2 5
// 		2 5 3 8 
// 		etc...
