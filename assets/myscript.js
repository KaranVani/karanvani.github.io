
/* ---------This is for hiding/showing sidebar ------*/
function openNav() {
  document.getElementById("mySidebar").style.width = "80px";
  document.getElementById("main").style.marginLeft = "80px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*---------------this is for the scrolly hidey thing---------*/
el = document.getElementById("scrolldown");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y <= 150) {
    el.className = "scrolldown show"
  } else if (y<= 300) {
	  el.className ="scrolldown mid"
  } else {
    el.className = "scrolldown hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
