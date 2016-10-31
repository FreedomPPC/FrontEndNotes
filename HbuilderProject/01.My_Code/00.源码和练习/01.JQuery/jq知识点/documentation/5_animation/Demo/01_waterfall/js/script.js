window.onload = window.onresize = function () {
	warterfall();
}

function warterfall() {
	var boxes = document.getElementsByClassName('box');

	var hArray = [];
	var clientW = document.documentElement.clientWidth || document.body.clientWidth;
	var boxW = boxes[0].offsetWidth;
	var colCount = Math.floor(clientW/boxW);
	var positionArray = [];
	for (var i=0; i<boxes.length; i++) {
		if (i<colCount) {
			hArray.push(boxes[i].offsetHeight);
			positionArray.push({
				top: 0,
				left: (boxes[i].offsetWidth*i)
			})
		} else {
			var minH = hArray[0], minIndex = 0;
			for (var j=0; j<hArray.length; j++) {
				if (hArray[j] < minH) {
					minH = hArray[j];
					minIndex = j;
				}
			}

			positionArray.push({
				top: minH,
				left: positionArray[minIndex].left
			})
			//boxes[i].style.position = 'absolute';
			//boxes[i].style.top = minH + 'px';
			//boxes[i].style.left = boxes[minIndex].offsetLeft + 'px';
			//$(boxes[i]).animate({
			//	top: minH,
			//	left: boxes[minIndex].offsetLeft
			//})

			hArray[minIndex] += boxes[i].offsetHeight;
		}
	}

	for (var i=0; i<boxes.length; i++) {
		$(boxes[i]).animate({
			top: positionArray[i].top,
			left: positionArray[i].left
		},1000)
	}

}
