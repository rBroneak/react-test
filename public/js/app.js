(function () {
'use strict';

(function () {
	function showListings() {
		var element = document.getElementById("jsAllResults");
		element.classList.toggle("collapsed");
	}

	document.getElementById("jsSeeAllResults").addEventListener("click", showListings);
})();

}());
