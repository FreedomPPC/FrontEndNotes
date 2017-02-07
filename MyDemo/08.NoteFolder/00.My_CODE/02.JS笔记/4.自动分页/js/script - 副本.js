window.onload = function () {
	var start = 0;
	var end = 5;

	var btn = document.getElementById('page');
	var list = document.getElementById('list');
	btn.onclick = function () {

		utility.Ajax.send('get', 'jsonNews.json', true, successFn);
		list.innerHTML = '';
		function successFn(resp) {
			var data = JSON.parse(resp);
			var len = data.length;
			if (start > ((len-1) -5)) {
				start = (len-1) -5
			}
			if (end > len) {
				end = len;
			}

			for (var i=start; i<end; i++) {
				var li = document.createElement('li');
				var span1 = document.createElement('span');
				var span2 = document.createElement('span');

				span1.innerHTML = data[i].title;
				span2.innerHTML = data[i].b;

				li.appendChild(span1);
				li.appendChild(span2);

				list.appendChild(li);
			}

			start += 5;
			end += 5
		}
	}
}