var fromPlaces = ["Chicago", "New York", "Shanghai", "Hangzhou"];
var toPlaces = ["Chicago", "New York", "Shanghai", "Hangzhou"];
var dateChoices = ["2016-03", "2016-04", "2016-05", "2016-06"];

function chooseFrom() {
	createPane(fromPlaces, "from");
}

function chooseTo() {
	createPane(toPlaces, "to");
}

function chooseDate() {
	createPane(dateChoices, "date");
}

function createPane(array, tag) {
	var body = document.getElementsByTagName('body')[0];
	body.removeChild(body.firstChild);
	var pane = document.createElement("DIV");
	for(var i = 0; i < array.length; i++) {
		var paneNode = document.createElement("DIV");
		var place_id = tag + "-" + (i+1).toString();
		paneNode.id = place_id;
		var text = document.createTextNode(array[i]);
		paneNode.appendChild(text);
		pane.appendChild(paneNode);
	}
	body.insertBefore(pane, body.childNodes[0]);
	body.getElementsByTagName('div')[0].className = "pane";
}

function mountPane(array) {
	;
}