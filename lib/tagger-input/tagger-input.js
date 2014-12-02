(function() {
  Polymer('tagger-input', {
    selectedTags: [],
    ready: function() {
      return this.$.dropdown.sendWidth(this.offsetWidth);
    },
    keydownage: function(e, d, s) {
      return this.async(function() {
        return this.$.dropdown.keydownAction(e.which, this.$.input.value);
      });
    },
    onEnterPressed: function(e, d, s) {
      if (this.selectedTags.indexOf(d) === -1) {
        return this.selectedTags.push(d);
      }
    },
    onNewVal: function(e, d, s) {
      return this.$.input.value = d;
    },
    onRemoveTag: function(e, d, s) {
      var index;
      index = this.selectedTags.indexOf(d);
      if (index > -1) {
        return this.selectedTags.splice(index, 1);
      }
    },
    tapInput: function() {
      return this.async(function() {
        return this.$.dropdown.checkTags();
      });
    }
  });

}).call(this);
