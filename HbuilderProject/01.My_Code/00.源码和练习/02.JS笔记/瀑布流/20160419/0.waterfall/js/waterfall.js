window.onload = function () {
	var boxes = document.getElementsByClassName('box');
	var len = boxes.length
	var index;
	var heightArr = [];
	for (var i=0; i<len; i++) {
		//TODO:assume there are 4 columns.
		if (i < 4) {
			//the first row.
			heightArr.push(boxes[i].offsetHeight);
		} else {
			//other rows
			index = getMinHeightIndex(heightArr);

			boxes[i].style.position = 'absolute';
			boxes[i].style.top = heightArr[index] + 'px';
			boxes[i].style.left = boxes[index].offsetLeft + 'px';

			heightArr[index] += boxes[i].offsetHeight;
		}
	}
}

function getMinHeightIndex(arr) {
	var minValue = arr[0];
	var minIndex = 0;
	var len = arr.length;
	
	for (var i=0; i<len; i++) {
		if (arr[i] < minValue) {
			minValue = arr[i];
			minIndex = i;
		}
	}

	return minIndex;

}