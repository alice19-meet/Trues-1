chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
     pathname = tabs[0].url;
});

function test() {
	console.log("hello");
	var claim = document.getElementById('claim').value;

	var a = new XMLHttpRequest();
	a.open('GET', "https://idir.uta.edu/factchecker/update_fm?claim=" + claim, true);
	a.onreadystatechange = function(response) {
		console.log("this worked");
		if(a.readyState == 4) {
			//console.log(a);
			console.log(a.responseText);
			var parser = new DOMParser();
			var htmlDoc = parser.parseFromString(a.responseText, 'text/html');
			console.log(htmlDoc);
			document.getElementsByClassName("hi")[0].innerHTML=a.responseText;
			// alert(htmlDoc.getElementsByClassName('component-title')[0].innerText);
			
		}
	};
	a.send();
}
	
console.log("extension loaded");

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', test);
});
// function extractContent(s) {
//   var span = document.createElement('span');
//   span.innerHTML = s;
//   return span.textContent || span.innerText;
// };
    
// alert(extractContent(responseText));
