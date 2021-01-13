var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
      document.head.innerHTML += '<link rel="stylesheet" href="media_query_360w.css">';
    } else {
     document.body.style.backgroundColor = "pink";
     document.head.innerHTML += '<link rel="stylesheet" href="style.css">';
    }
  }

  var x = window.matchMedia("(max-width: 700px)");
  console.log(x);
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes