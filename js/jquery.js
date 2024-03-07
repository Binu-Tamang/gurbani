//modal login

$('#myModal').on('shown.bs.modal', function () {
    $('#onload').trigger('focus')
  })

  //modal resources

$('#myModal').on('shown.bs.modal', function () {
  $('#onload').trigger('focus')
})

//RIGHT SIDEBAR

$(function(){
  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $(window).resize(function(e) {
    if($(window).width()<=768){
      $("#wrapper").removeClass("toggled");
    }else{
      $("#wrapper").addClass("toggled");
    }
  });
});



