'use strict';

function collectSameElements(collectionA, collectionB) {
  var ans = [];
	var valA;
	var valB;
	var subValB;
	for (valA in collectionA){
		for (valB in collectionB){
			for (subValB in collectionB[valB])
			if (collectionA[valA] == (collectionB[valB])[subValB]){
				ans.push(collectionA[valA]);
				break;
			}
		}
	}
	return ans;
}
