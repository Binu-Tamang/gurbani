

//ACCORDION

$(document).on('show','.accordion', function (e) {
    //$('.accordion-heading i').toggleClass(' ');
    $(e.target).prev('.accordion-heading').addClass('accordion-opened');
});

$(document).on('hide','.accordion', function (e) {
   $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
   //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
});


//NAVBAR

function openNav() {
    document.getElementById("mySidebar").style.width = "412px";
    document.getElementById("main").style.marginLeft = "0px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementByClass("sidebar").style.paddingLeft= "0";
    document.getElementByClass("sidebar").style.paddingRight= "0";
  }

//DEFAULT ON CLICK 

function myFunctionDef() {
  var x = document.getElementById("myDIV01");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunctionLang() {
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

