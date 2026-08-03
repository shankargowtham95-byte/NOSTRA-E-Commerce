// 1. TOP OFFER BAR CLOSE BUTTON

var offerBar = document.getElementById("offerBar");
var closeOfferBtn = document.getElementById("closeOfferBtn");

if (closeOfferBtn && offerBar) {
  closeOfferBtn.onclick = function () {
    offerBar.style.display = "none";
  };
}

// 2. MOBILE SIDE NAVBAR

var menuToggle = document.getElementById("menuToggle");
var sideNav = document.getElementById("sideNav");
var closeSideNav = document.getElementById("closeSideNav");

if (menuToggle && sideNav) {
  menuToggle.onclick = function () {
    sideNav.style.right = "0";
  };
}

if (closeSideNav && sideNav) {
  closeSideNav.onclick = function () {
    sideNav.style.right = "-300px";
  };
}

// 3. SIMPLE ADD TO CART COUNTER

var addCartButtons = document.querySelectorAll(".add-cart-btn");
var cartCounter = document.querySelector(".cart-count");
var totalCartItems = 0;

for (var i = 0; i < addCartButtons.length; i++) {
  addCartButtons[i].onclick = function () {
    totalCartItems = totalCartItems + 1;
    if (cartCounter) {
      cartCounter.textContent = totalCartItems;}
    alert("Product added to your cart!");
  };
}

// 4. SEARCH AND FILTER

var searchInput = document.getElementById("searchInput");
var filterCheckboxes = document.querySelectorAll(".filter-checkbox");
var productCards = document.querySelectorAll("#productsContainer .product-card");
var productCountEl = document.getElementById("productCount");

function filterProducts() {

  if (productCards.length === 0) {
    return;
  }

  var searchValue = "";
  if (searchInput) {
    searchValue = searchInput.value.toLowerCase().trim();
  }

  var checkedValues = [];
  for (var i = 0; i < filterCheckboxes.length; i++) {
    if (filterCheckboxes[i].checked) {
      checkedValues.push(filterCheckboxes[i].value.toLowerCase());
    }
  }

  var totalVisible = 0;

  for (var j = 0; j < productCards.length; j++) {
    var card = productCards[j];
    var tags = card.getAttribute("data-tags").toLowerCase();
    var cardTitle = card.querySelector("h3").textContent.toLowerCase();

    var matchesSearch = false;
    if (tags.indexOf(searchValue) !== -1 || cardTitle.indexOf(searchValue) !== -1) {
      matchesSearch = true;
    }

    var matchesFilter = false;
    if (checkedValues.length === 0) {
      matchesFilter = true; 
    } else {

      for (var k = 0; k < checkedValues.length; k++) {
        if (tags.indexOf(checkedValues[k]) !== -1) {
          matchesFilter = true;
          break;
        }
      }
    }

    if (matchesSearch && matchesFilter) {
      card.style.display = "flex";
      totalVisible = totalVisible + 1;
    } else {
      card.style.display = "none";
    }
  }

  if (productCountEl) {
    productCountEl.textContent = "Showing " + totalVisible + " items";
  }
}

if (searchInput) {
  searchInput.onkeyup = function () {
    filterProducts();
  };
}

for (var m = 0; m < filterCheckboxes.length; m++) {
  filterCheckboxes[m].onchange = function () {
    filterProducts();
  };
}

// 5. CONTACT FORM SUBMISSION
var contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.onsubmit = function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
    contactForm.reset();
  };
}