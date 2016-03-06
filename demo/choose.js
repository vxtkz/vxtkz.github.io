var body = document.getElementsByTagName('body')[0];
var fromPlaces = ["Chicago", "New York", "Shanghai", "Hangzhou"];
var toPlaces = ["New York", "Chicago", "Shanghai", "Hangzhou"];
var dateChoices = ["2016-03", "2016-04", "2016-05", "2016-06"];

function chooseFrom() {
	createPane(fromPlaces, "from");
	mountPane(fromPlaces, "from");
}

function chooseTo() {
	createPane(toPlaces, "to");
	mountPane(toPlaces, "to");
}

function chooseDate() {
	createPane(dateChoices, "date");
	mountPane(dateChoices, "date");
}

function createPane(array, tag) {
	var pane = document.createElement("DIV");
	var pane_content = document.createElement("DIV");
	for(var i = 0; i < array.length; i++) {
		var paneNode = document.createElement("DIV");
		var place_id = tag + "-" + (i+1).toString();
		paneNode.id = place_id;
		var text = document.createTextNode(array[i]);
		paneNode.appendChild(text);
		pane_content.appendChild(paneNode);
	}
	pane.appendChild(pane_content);
	body.insertBefore(pane, body.childNodes[0]);
	body.getElementsByTagName('div')[0].id = "pane";
	body.getElementsByTagName('div')[0].getElementsByTagName('div')[0].id = "pane-content";
	var br = document.createElement("BR");
	var cancel_part = document.createElement("DIV");
	cancel_part.onclick = function() {
		body.removeChild(body.firstChild);
	};
	var clear_part = document.createElement("DIV");
	clear_part.onclick = function() {
		var target = tag + "-result";
		document.getElementById(target).innerHTML = "&nbsp";
		body.removeChild(body.firstChild);
	};
	cancel_part.id = "pane-cancel";
	cancel_part.appendChild(document.createTextNode("Cancel"));
	clear_part.id = "pane-clear";
	clear_part.appendChild(document.createTextNode("Clear"));
	document.getElementById('pane-content').appendChild(br);
	document.getElementById('pane-content').appendChild(clear_part);
	document.getElementById('pane-content').appendChild(cancel_part);
}

function mountPane(array, tag) {
	var target_id = tag + "-result";
	document.getElementById('pane-content').getElementsByTagName('div')[0].onclick = function() {
		updateText(array[0], document.getElementById(target_id));
		body.removeChild(body.firstChild);
	};
	document.getElementById('pane-content').getElementsByTagName('div')[1].onclick = function() {
		updateText(array[1], document.getElementById(target_id));
		body.removeChild(body.firstChild);
	};
	document.getElementById('pane-content').getElementsByTagName('div')[2].onclick = function() {
		updateText(array[2], document.getElementById(target_id));
		body.removeChild(body.firstChild);
	};
	document.getElementById('pane-content').getElementsByTagName('div')[3].onclick = function() {
		updateText(array[3], document.getElementById(target_id));
		body.removeChild(body.firstChild);
	};
}
