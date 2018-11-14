'use strict';

function collectSameElements(collectionA, collectionB) {
	var ans = [];
	var valA;
	var valB;
	for (valA in collectionA){
		for (valB in collectionB){
			if (collectionA[valA] == collectionB[valB]){
				ans.push(collectionA[valA]);
				break;
			}
		}
	}
	return ans;
}
