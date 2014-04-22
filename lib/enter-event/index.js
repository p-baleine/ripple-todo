module.exports = function(View) {
  View.directive('on-enter', {
    update: function(fn, el, view) {
      var _this = this;
      el.addEventListener('keypress', function(e) {
        if (e.which === 13) { fn.call(view, e); }
      }, true);
    }
  });
};
