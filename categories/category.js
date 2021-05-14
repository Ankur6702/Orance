$(document).ready(function () {
  var zindex = 10;

  $("div.category").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.categories").hasClass("showing")) {
      // a category is already in view
      $("div.category.show")
        .removeClass("show");

      if (isShowing) {
        // this category was showing - reset the grid
        $("div.categories")
          .removeClass("showing");
      } else {
        // this category isn't showing - get in with it
        $(this)
          .css({ zIndex: zindex })
          .addClass("show");

      }

      zindex++;

    } else {
      // no categorys in view
      $("div.categories")
        .addClass("showing");
      $(this)
        .css({ zIndex: zindex })
        .addClass("show");

      zindex++;
    }

  });
});