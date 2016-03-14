var project_TOC = "project";
var article_TOC = "article";
var about_TOC = "about";

function showTOC(query) {
	var target = query + "-toc";
	var object = document.getElementById(target);
	if (object.innerHTML == "") {
		object.innerHTML = project_TOC;
		object.parentNode.previousElementSibling.scrollIntoView();
		object.parentNode.previousElementSibling.childNodes[0].style.backgroundColor = "#EEE";
	} else {
		object.innerHTML = "";
		object.parentNode.previousElementSibling.scrollIntoView();
		object.parentNode.previousElementSibling.childNodes[0].style = "";
	}
}
