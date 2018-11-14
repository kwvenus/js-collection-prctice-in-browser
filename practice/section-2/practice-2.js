'use strict';

function countSameElements(collection) {
	var ans = [];
	var tempElement;
	var elementCount;
	var element;
	var elementInloop;
	
	var regExElement = /\w/;
	var regExCount = /\d/;
	var countedAlphabet = /\w-\d/;

	for (element in collection){
		elementInloop = collection[element];
		if (countedAlphabet.test(elementInloop)){
			ans.push({key: tempElement, count: elementCount});
			tempElement = elementInloop.match(regExElement);
			elementCount = elementInloop.match(regExCount);
			ans.push({key: elementInloop[tempElement.index], count: Number(elementInloop[elementCount.index])});
		}
		else {
			if (elementInloop == tempElement){
				elementCount++;
			}
			else {
				if (tempElement != null){
					ans.push({key: tempElement, count: elementCount});
				}
				tempElement = elementInloop;
				elementCount = 1;
			}
		}
	}
	return ans;
}
