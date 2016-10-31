window.onload = function () {
	
	
	loadData();
	
}

function loadData() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 0) {
				var data = JSON.parse(xhr.responseText);
				bindBtnClick(data);
			}
		}
	}
	xhr.open('get', 'jsonNews.json', true);
	xhr.send();
}

function bindBtnClick (data) {
	var pageBtn = document.getElementById('page');
	var pageIndex = 0;
	var countPerPage = 4;
	var listUl = document.getElementById('list');

	pageBtn.onclick = function () {
		var startIndex = 0;
		listUl.innerHTML = '';
		
		startIndex += (pageIndex*countPerPage);

		if (startIndex >= data.length) {
			startIndex = 0;
			pageIndex = 0;
		}

		var endIndex = startIndex + countPerPage;

		if (endIndex > data.length) {
			endIndex = data.length;
		}

		this.value = '第' + (pageIndex+1) + '页'
		for (var i=startIndex; i<endIndex; i++) {
			// alert(data[i].index);
			var li = document.createElement('li');

			var titleSpan = document.createElement('span');
			titleSpan.innerHTML = data[i].title;
			var indexSpan = document.createElement('span');
			indexSpan.innerHTML = data[i].index;

			li.appendChild(titleSpan);
			li.appendChild(indexSpan);

			listUl.appendChild(li);
		}

		pageIndex++;
	}
}