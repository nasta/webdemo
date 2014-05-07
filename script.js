window.onload = function() {

	document.getElementById("forward_link").onclick = function () {
		content = document.getElementById("content");
		while(content.hasChildNodes()) {
			content.removeChild(content.childNodes[0]);
		}
		content.appendChild(document.createTextNode("forward"));
		return true;
	}
	if(window.location.hash == "#forward") {
		document.getElementById("forward_link").click();
		console.log("forward");
	}
	if("onhashchange" in window) {
		window.onhashchange = function() {
			if(window.location.hash == "#forward") {
				document.getElementById("forward_link").click();
				console.log("forward");
			}
		}
	}
}