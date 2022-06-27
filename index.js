$(function () {
  $("#all").click(function () {
      all = $(this).prop("checked")
      $(".Each").each(function () {
          $(this).prop("checked", all);
      })
  })
  $(".del").each(function () {
      $(this).click(function () {
          $(this).parent().remove();
          if ($(".imfor").length == 0) {
              $("#susum").text(0);
          }
      })
  })
  $(".foot_del").click(function () {
      $(".Each").each(function () {
          if ($(this).prop('checked')) {
              $(this).parents(".imfor").remove();
              if ($(".imfor").length == 0) {
                  $("#susum").text(0);
              }
          }
      })

  })

})