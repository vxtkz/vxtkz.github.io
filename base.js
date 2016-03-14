var content_node = document.getElementById('content');

var about_info = '<a href="mailto:vxtkz.vxtkz@gmail.com">vxtkz.vxtkz@gmail.com</a>';
var porject_list = '<ul><li><a href="#">kana</a></li></ul>';
var article_list = '<ul><li><a href="#"></a></li></ul>';

function showAbout() {
	insertHTML(about_info, content_node);
}

function showPorjectList() {
	insertHTML(porject_list, content_node);
}

function showArticleList() {
	insertHTML(article_list, content_node);
}
