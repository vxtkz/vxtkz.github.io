function light(query, value) {
	var target = query + '-filter';
	unLight(target);
	var node_list = document.getElementById(target).getElementsByTagName('div');
	node_list[value].style.backgroundColor = "#004400";
	node_list[value].style.color = "#FFFFFF";
	sendQuery(query, value);
}

function unLight(target) {
	var node_list = document.getElementById(target).getElementsByTagName('div');
	for(i = 1; i < node_list.length; i++) {
		node_list[i].style.backgroundColor = "#00EE00";
		node_list[i].style.color = "black";
	}
}

function resetFilter() {
	var query = "reset";
	var value = "1";
	var node_list = document.getElementById('filter').getElementsByTagName('div');
	for(i = 0; i < node_list.length; i++) {
		if(node_list[i].className == "filter-item") {
			node_list[i].style.backgroundColor = "#00EE00";
			node_list[i].style.color = "black";
		}
	}
	sendQuery(query, value);
}

function sendQuery(query, value) {
	;
}
