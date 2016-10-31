window.onload = function () {

	waterfall();

	lazyLoad();
	
}

function getByClass(parentEl, clasName) {
	var els = parentEl.getElementsByTagName('*');
	var len = els.length;
	var ret = [];
	for (var i=0; i<len; i++) {
		if (els[i].className.indexOf(clasName) !== -1) {
			ret.push(els[i]);
		}
	}

	return ret;
}

function lazyLoad () {
	function needLoad () {
		// var boxes = document.getElementsByClassName('box');
		var boxes = getByClass(document, 'box');

		var lastBox = boxes[boxes.length-1];
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

		return (lastBox.offsetTop < scrollTop + clientHeight) ? true : false;
	}

	function appendImg (data) {
		var len = data.length;
		var containerDiv = document.getElementById('container');

		for (var i=0; i<len; i++) {
			var box = document.createElement('div');
			box.className = 'box';
			var pic = document.createElement('div');
			pic.className = 'pic';
			var img = document.createElement('img');
			img.src = data[i].src;

			pic.appendChild(img);
			box.appendChild(pic);
			containerDiv.appendChild(box);
		}
	}

	function loadData () {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 0) {
					var data = JSON.parse(xhr.responseText);
					appendImg(data);
					waterfall();
				}
			}
		}

		xhr.open('get', 'imgs.json', true);
		xhr.send();
	}

	window.onscroll = function () {
		if (needLoad()) {
			//TODO:load data.
			console.log('needLoad!!!!');
			loadData();
		}
	}
}

function waterfall () {
	// var boxes = document.getElementsByClassName('box');
	var boxes = getByClass(document, 'box');
	var len = boxes.length
	var index;
	var heightArr = [];

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
	var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var boxWidth = boxes[0].offsetWidth;

	var colCount = Math.floor(clientWidth/boxWidth);
	for (var i=0; i<len; i++) {
		//TODO:assume there are 4 columns.
		if (i < colCount) {
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