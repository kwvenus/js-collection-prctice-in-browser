'use strict';

function countSameElements(collection) {
	var ans = [];
	var tempElement;
	var elementCount;
	var element;
	var elementInloop;
	
	var regExElement = /\w/;
	var regExCount = /\d+/;
	var countedAlphabet = /\w\W\d+/;

	for (element in collection){
		elementInloop = collection[element];
		if (countedAlphabet.test(elementInloop)){
			if (elementCount != 0 && tempElement != elementInloop.match(regExElement)){
				// If it is counting another alphabet, but switch to a new alphabet, push the previous count firstChild
				ans.push({name: tempElement, summary: elementCount});
				tempElement = elementInloop.match(regExElement);
				elementCount = elementInloop.match(regExCount);
				ans.push({name: elementInloop[tempElement.index], summary: Number(elementInloop[elementCount.index])});
				elementCount = 0;
			} else {
				// If it is counting an alphabet, and the next one is the same alphabet, but with number count, need some special handling
				if (tempElement == elementInloop.match(regExElement)){
					elementCount += Number(elementInloop.match(regExCount));
				} else if (elementCount == 0){
					// If it is a new alphabet to be count, assign element to tempElement
					tempElement = elementInloop.match(regExElement);
					elementCount += Number(elementInloop.match(regExCount));
				}
			}
		}
		else {
			if (elementInloop == tempElement){
				elementCount++;
			}
			else {
				if (tempElement != null && elementCount != 0){
					ans.push({name: tempElement, summary: elementCount});
					elementCount = 0;
				}
				tempElement = elementInloop;
				elementCount = 1;
			}
		}
	}
	if (elementCount != 0){
		ans.push({name: tempElement, summary: elementCount});
	}
	return ans;
}
