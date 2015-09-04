$(document).ready(function() {

  // DataTables init
  var dataTableSettings = {
    "dom": "ftip"
  }

  $(".dataTable").DataTable( dataTableSettings );

  // Navmenu toggle
  var openedMenu;

  function bodyClass(id) {
    return id.replace("#", "") + "_is_open";
  }

  function openMenu(target) {
    $(target)
      .addClass("is_open")
      .on("click", function(e) {
        e.stopPropagation();
      });

    $("[data-toggle='" + target + "']").addClass("is_toggled");
    $("body").addClass(bodyClass(target));
    openedMenu = target;
  }

  function closeMenu(target) {
    if (!target && openedMenu) {
      target = openedMenu;
    }
    if (target) {
      $(target).removeClass("is_open");
      $("[data-toggle='" + target + "']").removeClass("is_toggled");
      $("body").removeClass(bodyClass(target));
    }
  }
  
  $("[data-toggle]").on("click", function(e) {
    e.stopPropagation();
    target = $(this).data("toggle");

    if ($(target).hasClass("is_open")) {
      closeMenu(target);
    } else {
      closeMenu();
      openMenu(target);
    }
    
  });

  $("body").on("click", function() { 
    closeMenu();
  });

});