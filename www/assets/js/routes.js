document.addEventListener('DOMContentLoaded', () => {
	/* Create a variable to store cache of every page open */
	let partialsCache = {};

	/* Create a function httpRequest of File */
	function fetchFile(path, callback) {
		let request = new XMLHttpRequest();
		request.onload =  () => {
			return callback(request.responseText);
		};
		request.open("GET", path);
		request.send(null);
	}

	/*  Create a function that pass a request page of  fetchFile */
	function getContent(fragmentId, callback) {

		/* if page already open getContent check if page is already cache */
		if(partialsCache[fragmentId]) {
			callback(partialsCache[fragmentId]);
			switchPage(fragmentId);
		} 

		/* else  the page will request on fetchFile Function */
		else {
			fetchFile(fragmentId + ".html",  (content) => {
				partialsCache[fragmentId] = content;
				callback(content);
				switchPage(fragmentId);
			});
		}
	}

	/* Create a function of switching Pages */
	function switchPage(fragmentId) {
		M.AutoInit();
		switch (fragmentId) {
			/* Call  the function  every pages that need a function */
			case "Home":
			fetchallHome();
			break;

			case "Transaction":
			fetchallTransaction();
			break;

			case "Notification":
			fetchallNotification();
			break;

			case "Aboutus":
			viewAboutus();
			break;

			case "Profile":
			fetchallProfile();
			break;

			case "Date":
			fetchallDate();
			break;

			case "Time":
			fetchallTime();
			break;

			case "Self":
			fetchallSelf();
			break;

			case "Full":
			fetchallFull();
			break;

			case "Updateinfo":
			fetchallUpdateInfo();
			break;

			case "Additional":
			fetchallAdditional();
			break;

			case "EditProfile":
			fetchallEditProfile();
			break;

			case "Register":
			fetchallRegister();
			break;

			default:
			fetchResume();
		}
	}

	/*  Create a function of navigation of hash  */
	function navigate() {
		let contentDiv = document.querySelector("main"),
		fragmentId = location.hash.substr(1);
		getContent(fragmentId,  (content) => {
			contentDiv.innerHTML = content;
		});
	}

	/*  If no hash found in URL redirect in #home  */
	if (!location.hash) {
		location.hash = "#home";
	}

	/* Initialize navigate function */
	navigate();

	/* if hash change in url  */
	window.addEventListener("hashchange", navigate);
});

/* Create a return function */ 
// let $ = (value) => document.querySelector(value);