'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	var keyToBeMinus;
	var valueToBeReduce = 1;
	var indexOfKeyToBeMinus;
	var elementInObjectB;
	var elementInCollectionA;
	var elementInCollectionC;
	var collectionC = [];
	var tempElement;
	var elementCount;
	var elementInloop;
  
	var regExElement = /\w/;
	var regExCount = /\d/;
	var countedAlphabet = /\w-\d/;

	for (elementInCollectionA in collectionA){
		elementInloop = collectionA[elementInCollectionA];
		if (countedAlphabet.test(elementInloop)){
			collectionC.push({key: tempElement, count: elementCount});
			tempElement = elementInloop.match(regExElement);
			elementCount = elementInloop.match(regExCount);
			collectionC.push({key: elementInloop[tempElement.index], count: Number(elementInloop[elementCount.index])});
		}
		else {
			if (elementInloop == tempElement){
				elementCount++;
			}
			else {
				if (tempElement != null){
					collectionC.push({key: tempElement, count: elementCount});
				}
				tempElement = elementInloop;
				elementCount = 1;
			}
		}
	}
	
	for (elementInObjectB in objectB.value){
		keyToBeMinus = objectB.value[elementInObjectB];
		for (elementInCollectionC in collectionC){
			if (collectionC[elementInCollectionC].key == keyToBeMinus){
				indexOfKeyToBeMinus = collectionC.indexOf(collectionC[elementInCollectionC]);
				collectionC[indexOfKeyToBeMinus].count -= parseInt(collectionC[indexOfKeyToBeMinus].count/3, 10) ;
			}
		}
	} 
	
	
	return collectionC;
}
