window.onload = function () {
	
	var btn = document.getElementById('page');
	var ul = document.getElementById('list');
	var start = 0;
	var end = 3;
	btn.onclick = function () {
		
		utility.Ajax.send('get', 'jsonNews.json', true, function (resp) {
			ul.innerHTML = '';
			var data = JSON.parse(resp);

			for (var i=start; i<=end; i++) {
				var li = document.createElement('li');

				var spanTitle = document.createElement('span');
				var spanIndex = document.createElement('span');

				spanTitle.innerHTML = data[i].title;
				spanIndex.innerHTML = data[i].index;
				li.appendChild(spanTitle);
				li.appendChild(spanIndex);

				ul.appendChild(li);
			}

			start += 4;
			end += 4;

			if (start >= data.length) {
				start = 0;
				end = 3;
			} else if (end >= data.length) {
				end = data.length-1;
			}
			
		});


	}
}