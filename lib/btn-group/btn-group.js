(function() {
  Polymer('btn-group', {
    tapIcon: function(e, d, s) {
      return this.fire('remove-tag', this.textContent.trim());
    }
  });

}).call(this);
