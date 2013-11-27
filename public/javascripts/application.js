(function() {
  $(function() {
    var NBSEngine;
    NBSEngine = (function() {
      function NBSEngine() {}

      NBSEngine.prototype.expandMyMenu = function() {
        return $("nav.nbs-sidebar").removeClass("nbs-sidebar-menu-collapsed").addClass("nbs-sidebar-menu-expanded");
      };

      NBSEngine.prototype.collapseMyMenu = function() {
        return $("nav.nbs-sidebar").removeClass("nbs-sidebar-menu-expanded").addClass("nbs-sidebar-menu-collapsed");
      };

      NBSEngine.prototype.showMenuTexts = function() {
        return $("nav.nbs-sidebar ul a span.expanded-element").show();
      };

      NBSEngine.prototype.hideMenuTexts = function() {
        return $("nav.nbs-sidebar ul a span.expanded-element").hide();
      };

      NBSEngine.prototype.ignite = function() {
        return (function(nbs_instance) {
          return $("#justify-icon").click(function(e) {
            if ($(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-collapsed")) {
              nbs_instance.expandMyMenu();
              nbs_instance.showMenuTexts();
              $(this).css({
                color: "#000"
              });
            } else if ($(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-expanded")) {
              nbs_instance.collapseMyMenu();
              nbs_instance.hideMenuTexts();
              $(this).css({
                color: "#FFF"
              });
            }
            return false;
          });
        })(this);
      };

      return NBSEngine;

    })();
    return (new NBSEngine).ignite();
  });

}).call(this);
