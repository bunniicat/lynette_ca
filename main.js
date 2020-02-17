function myFunction() {
    var button = document.getElementById("nav");
    if (button.menu === "navigation_bar") {
      button.nenu += " responsive";
    } else {
      button.menu = "navigation_bar";
    }
  }