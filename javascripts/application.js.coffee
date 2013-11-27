$ ->
  expandMyMenu = () ->
    $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded")

  collapseMyMenu = () ->
    $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed")

  showMenuTexts = () ->
    $("nav.sidebar ul a span.expanded-element").show()

  hideMenuTexts = () ->
    $("nav.sidebar ul a span.expanded-element").hide()


  $("#justify-icon").click (e) ->

    if $(this).parent("nav.sidebar").hasClass("sidebar-menu-collapsed")
      expandMyMenu()
      showMenuTexts()

      $(this).css({color: "#000"})

    else if $(this).parent("nav.sidebar").hasClass("sidebar-menu-expanded")
      collapseMyMenu()
      hideMenuTexts()

      $(this).css({color: "#FFF"})

    false

  
  