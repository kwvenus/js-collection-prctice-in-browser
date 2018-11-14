'use strict';

function countSameElements(collection) {
	var ans = [];
	var tempElement;
	var elementCount;
	var element;

	for (element in collection){
		if (collection[element] == tempElement){
			elementCount++;
		}
		else {
			if (tempElement != null){
				ans.push({key: tempElement, count: elementCount});
			}
			tempElement = collection[element];
			elementCount = 1;
		}
	}
	ans.push({key: tempElement, count: elementCount});
	return ans;
}
