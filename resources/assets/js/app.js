(function () {
	function showListings() {
		const button = this;
		const element = document.getElementById("jsAllResults");

		element.classList.toggle("collapsed");
		button.classList.toggle("showing");
	}

	document.getElementById("jsSeeAllResults").addEventListener("click", showListings);

}());
