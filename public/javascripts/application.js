(function() {
  $(function() {
    var changeTextOf, rounds;
    rounds = 0;
    changeTextOf = function(e, index) {
      var prefix;
      prefix = (rounds + index + 1).toString().match(/.*1$/) ? "st" : (rounds + index + 1).toString().match(/.*2$/) ? "nd" : "th";
      e.html("Have a good time for the " + (rounds + index + 1) + prefix + " time !");
      if (index % 2 === 1) {
        return rounds += 1;
      }
    };
    return $("#lnk").click(function(e) {
      var elem, index, _i, _len, _ref, _results;
      _ref = $("h1");
      _results = [];
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        elem = _ref[index];
        _results.push(changeTextOf($(elem), index));
      }
      return _results;
    });
  });

}).call(this);
