'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var keyToBeMinus;
  var valueToBeReduce = 1;
  var indexOfKeyToBeMinus;
  var elementInObjectB;
  var elementInCollectionA;
  
  for (elementInObjectB in objectB.value){
	keyToBeMinus = objectB.value[elementInObjectB];
	for (elementInCollectionA in collectionA){
		if (collectionA[elementInCollectionA].key == keyToBeMinus){
			indexOfKeyToBeMinus = collectionA.indexOf(collectionA[elementInCollectionA]);
			collectionA[indexOfKeyToBeMinus].count -= 1;
		}
	}
  }
  return collectionA;
}
