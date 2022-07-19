(function () {
	function showListings() {
		const button = this;
		const element = document.getElementById("jsAllResults");

		element.classList.toggle("collapsed");
		button.classList.toggle("showing");
	}

	function toggleProductSearch() {
		const button = this;
		const element = document.getElementById("locator-content");
		console.log(element)
		element.classList.toggle("hidden");
	}

	document.getElementById("jsSeeAllResults").addEventListener("click", showListings);
	document.getElementById("toggleProductSearch").addEventListener("click", toggleProductSearch);

}());
