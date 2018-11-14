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
  
	for (elementInCollectionA in collectionA){
		if (collectionA[elementInCollectionA] == tempElement){
			elementCount++;
		}
		else {
			if (tempElement != null){
				collectionC.push({key: tempElement, count: elementCount});
			}
			tempElement = collectionA[elementInCollectionA];
			elementCount = 1;
		}
	}
	collectionC.push({key: tempElement, count: elementCount});
	
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
	
  
 

