$(document).ready(function() {

  // DataTables init
  var dataTableSettings = {
    "dom": "ftip"
  }

  $(".dataTable").DataTable( dataTableSettings );

  // Navmenu toggle

  var $target = $("#navmenu");

  function openNavmenu() {
    $target
      .addClass("is_open")
      .on("click", function(e) {
        e.stopPropagation();
      });
    $("body").addClass("navmenu_is_open");
  }

  function closeNavmenu() {
    $target.removeClass("is_open");
    $("body").removeClass("navmenu_is_open");
  }
  
  $("#navmenu-toggle").on("click", function(e) {
    e.stopPropagation();

    if ($target.hasClass("is_open")) {
      closeNavmenu();
    } else {
      openNavmenu();
    }
    
  });

  $("body").on("click", closeNavmenu);

});