

//ACCORDION

$(document).on('show','.accordion', function (e) {
    //$('.accordion-heading i').toggleClass(' ');
    $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide','.accordion', function (e) {
   $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
   //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});


// NAVBAR

function openNav() {
    document.getElementById("mySidebar main-sidebar").style.width = "412px";
    document.getElementById("main main-header").style.marginLeft = "0px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar main-sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementByClass("sidebar").style.paddingLeft= "0";
    document.getElementByClass("sidebar").style.paddingRight= "0";
  }

  //CLOSE PLAYLIST


  // function closeNav() {
  //   document.getElementById("mySidebar myplaylist").style.width = "0";
  //   document.getElementById("main").style.marginLeft= "0";
  //   document.getElementByClass("sidebar").style.paddingLeft= "0";
  //   document.getElementByClass("sidebar").style.paddingRight= "0";
  // }

  // MULTIMEDIA

function openPlaylist() {
  document.getElementById("mySidebar").style.width = "490px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("mySidebar").style.marginTop = "169px";
}

function closePlaylist() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementByClass("sidebar").style.paddingLeft= "0";
  document.getElementByClass("sidebar").style.paddingRight= "0";
}


// DEFAULT ON CLICK 

function myFunction01() {
  var x = document.getElementById("myDIV01");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction02() {
  var x = document.getElementById("myDIV02");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// SEARCH BAR ON CLICK HOME PAGE

function myFunctionSel() {
  var x = document.getElementById("myDIVSel");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ADD A NEW NOTE LAST SEARCH BAR 

function myFunctionNote() {
  var x = document.getElementById("myNoteList");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// MULTIMEDIA PAGE

function myFunctionMultimedia() {
  var x = document.getElementById("myDIVMultimedia");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//ADD DELETE TRACK

function myFunctionDelete() {
  var x = document.getElementById("delete-track");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// SEARCH BAR ON CLICK HOME PAGE

function myFunctionKeyboard() {
  var x = document.getElementById("myKeyboard");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// SEARCH TYPE ON SLIDER

function myFunctionSearch() {
  var x = document.getElementById("myDIVSearch");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ADVANCED TYPE ON SLIDER

function myFunctionAdvanced() {
  var x = document.getElementById("myDIVAdvanced");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

// MULTIMEDIA SIDEBAR

function closeMultimedia() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// SETTINGS SIDEBAR

function closeRight() {
  document.getElementById("wrapper").style.width = "0";
  document.getElementById("toggled").style.marginLeft= "0";
}

// GURBANI VIEWER TABS


function myFunctionGear() {
  var x = document.getElementById("StickyPlayer");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}