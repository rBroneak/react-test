(function() {
  // Online Retailers Toggle
  function showListings() {
    const button = this;
    const element = document.getElementById("jsAllResults");

    element.classList.toggle("collapsed");
    button.classList.toggle("showing");
  }

  // Product Search Form Toggle
  function toggleProductSearch() {
    const contentToToggle = $(this).data("target");
    const element = document.getElementById(contentToToggle);
    element.classList.toggle("hidden");
  }

  const seeAllResults = document.getElementById("jsSeeAllResults");
  const productSearch = document.getElementById("jsToggleProductSearch");

  if (seeAllResults) {
    seeAllResults.addEventListener("click", showListings);
  }
  if (productSearch) {
    productSearch.addEventListener("click", toggleProductSearch);
  }

  // Distributor and Retail Location Results
  const $resultToggle = $(".jsShowMoreCollection");
  const $showMoreResults = $(".jsShowMore");
  const $loadMoreDistributors = $(".jsShowMoreDistributors");

  function toggleNested(btn) {
    const $button = $(btn);
    const $collection = $(btn).closest(".collection");
    const $hidden = $collection.children(".nested:not(:visible)").length;
    const $footer = $collection.find("footer");

    if ($collection.hasClass("showing")) {
      $collection.removeClass("showing");
      $button.removeClass("showing");
      $footer.removeClass("hidden");
      $collection.find(".nested").removeClass("d-block");
    } else {
      $collection.addClass("showing");
      $button.addClass("showing");
      if ($hidden <= 5) {
        $footer.addClass("hidden");
      }
    }
  }

  $resultToggle.click(function(event) {
    event.preventDefault();
    toggleNested(this);
  });

  function showMore(btn) {
    const $button = $(btn);
    const $collection = $(btn).closest(".collection");
    const $hidden = $collection.children(".nested:not(:visible)").length;

    if (!$hidden || $hidden <= 5) {
      $button.parent().addClass("hidden");
    }

    $collection.children(".nested:not(:visible:lt(5))").addClass("d-block");
  }

  $showMoreResults.click(function(event) {
    event.preventDefault();
    showMore(this);
  });

  function showMoreDistributors(btn) {
    const $button = $(btn);
    const $showLess = $button.next('a');
    const $collection = $(btn).parents(".result");
    const $hidden = $collection.children(".collection:not(:visible)");
    const $hiddenLength = $hidden.length;

    if (!$hiddenLength || $hiddenLength <= 5) {
      $button.addClass("hidden");
      $showLess.removeClass("hidden");
    }

    $collection.children(".collection.hidden:lt(5)").removeClass("hidden");

    $showLess.click(function(event) {
      event.preventDefault();
      $collection.children(".collection:gt(4)").addClass("hidden");
      $button.removeClass("hidden");
      $showLess.addClass("hidden");
    });
  }

  $loadMoreDistributors.click(function(event) {
    event.preventDefault();
    showMoreDistributors(this);
  });

  // Popover for distributor partner tiers
  $('[data-toggle="popover"]').popover();

  $('.popover-dismiss').popover({
    trigger: 'focus'
  });

}());
