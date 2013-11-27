$ ->
  class NBSEngine
    expandMyMenu: () ->
      $("nav.nbs-sidebar").removeClass("nbs-sidebar-menu-collapsed").addClass("nbs-sidebar-menu-expanded")

    collapseMyMenu: () ->
      $("nav.nbs-sidebar").removeClass("nbs-sidebar-menu-expanded").addClass("nbs-sidebar-menu-collapsed")

    showMenuTexts: () ->
      $("nav.nbs-sidebar ul a span.expanded-element").show()

    hideMenuTexts: () ->
      $("nav.nbs-sidebar ul a span.expanded-element").hide()

    ignite: () ->

      ((nbs_instance) ->
        $("#justify-icon").click (e) ->

          if $(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-collapsed")
            nbs_instance.expandMyMenu()
            nbs_instance.showMenuTexts()

            $(this).css({color: "#000"})

          else if $(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-expanded")
            nbs_instance.collapseMyMenu()
            nbs_instance.hideMenuTexts()

            $(this).css({color: "#FFF"})

          false
      )(this)

  (new NBSEngine).ignite()
  
  