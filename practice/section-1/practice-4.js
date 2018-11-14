'use strict';

function collectSameElements(collectionA, objectB) {
	var ans = [];
	var valA;
	var valB;
	var subValB;
	for (valA in collectionA){
		for (valB in objectB.value){
			if (collectionA[valA].key == objectB.value[valB]){
				ans.push(collectionA[valA].key);
				break;
			}
		}
	}
	return ans;
}
