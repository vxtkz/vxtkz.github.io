function about() {
	focus('about');
	var aboutMessage = '<p>Thank you for using \'kana\', a project by <a href="http://vxtkz.github.io/">vxtkz</a>.</p>';
	document.getElementById('content').innerHTML = aboutMessage;
}

function intro() {
	focus('intro');
}

function begin() {
	focus('begin');
}

function option() {
	focus('option');
}

function feedback() {
	focus('feedback');
	var feedbackMessage = '<p>Since this project is currently running on a GitHub Page, I\'m not able to set up a direct feedback page.</p><p>If you\'d like to offer some advices, please <a href="mailto:vxtkz.vxtkz@gmail.com?subject=something about \'kana\'">send me an email</a>.</p>';
	document.getElementById('content').innerHTML = feedbackMessage;
}

function focus(button) {
	document.getElementById('content').innerHTML = '';
	document.getElementById('about').style.background = 'white';
	document.getElementById('intro').style.background = 'white';
	document.getElementById('begin').style.background = 'white';
	document.getElementById('option').style.background = 'white';
	document.getElementById('feedback').style.background = 'white';	
	document.getElementById(button).style.background = '#EEE';
}
