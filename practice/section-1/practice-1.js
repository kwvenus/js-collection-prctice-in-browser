'use strict';

function collectSameElements(collectionA, collectionB) {
  const ifElementExists = element => collectionB.includes(element);
	return collectionA.filter(ifElementExists);
}
