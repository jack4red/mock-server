var $ = require('jquery');
$.ajax({
	method:'GET',
	url:'test',
	success:function(res) {
		for (var i = 0; i < res.data.data.length; i++) {
			document.write('<p>' + res.data.data[i].name + '</p>')
		}
	}
})