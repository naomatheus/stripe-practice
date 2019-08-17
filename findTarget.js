console.log('html connected working')


let arr = [4,1,5,5,8,0,1,2]

const findTarget = (arr,target) => {

	for (let i = 0; i < arr.length; i++){
		// loop through arr

		// take initial i, first index
		for (let j = 1; j < arr.length; j++){
			console.log(target);
			if (arr[i] + arr[j] === target){
				return [arr[i], arr[j]]
			}
		}
		// try to add with every other following index to obtain the target

	}
}

console.log(findTarget(arr, 9))