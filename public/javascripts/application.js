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

      NBSEngine.prototype.showActiveSubMenu = function() {
        $("li.active ul.nbs-level2").show();
        return $("li.active a.expandable").css({
          width: "100%"
        });
      };

      NBSEngine.prototype.hideActiveSubMenu = function() {
        return $("li.active ul.nbs-level2").hide();
      };

      NBSEngine.prototype.adjustPaddingOnExpand = function() {
        $("ul.nbs-level1 li a.expandable").css({
          padding: "1px 4px 4px 0px"
        });
        return $("ul.nbs-level1 li.active a.expandable").css({
          padding: "1px 4px 4px 4px"
        });
      };

      NBSEngine.prototype.resetOriginalPaddingOnCollapse = function() {
        $("ul.nbs-level1 li a.expandable").css({
          padding: "4px 4px 4px 0px"
        });
        return $("ul.nbs-level1 li.active a.expandable").css({
          padding: "4px"
        });
      };

      NBSEngine.prototype.ignite = function() {
        return (function(nbs_instance) {
          return $("#justify-icon").click(function(e) {
            if ($(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-collapsed")) {
              nbs_instance.adjustPaddingOnExpand();
              nbs_instance.expandMyMenu();
              nbs_instance.showMenuTexts();
              nbs_instance.showActiveSubMenu();
              $(this).css({
                color: "#000"
              });
            } else if ($(this).parent("nav.nbs-sidebar").hasClass("nbs-sidebar-menu-expanded")) {
              nbs_instance.resetOriginalPaddingOnCollapse();
              nbs_instance.collapseMyMenu();
              nbs_instance.hideMenuTexts();
              nbs_instance.hideActiveSubMenu();
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
