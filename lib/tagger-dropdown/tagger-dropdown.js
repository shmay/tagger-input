(function() {
  Polymer("tagger-dropdown", {
    shownTags: [],
    observe: {
      sel: 'selChanged'
    },
    selChanged: function(e, d, s) {
      if (typeof this.sel === 'number') {
        this.shownValue = this.shownTags[this.sel];
      } else {
        this.shownValue = this.val;
      }
      return this.fireValueChange();
    },
    fireValueChange: function() {
      return this.fire('new-value', this.shownValue);
    },
    keydownAction: function(keycode, val) {
      switch (keycode) {
        case 40:
          return this.downArrow();
        case 38:
          return this.upArrow();
        case 13:
          return this.enterPressed();
        default:
          this.sel = void 0;
          this.val = this.shownValue = val;
          if (val && val.length) {
            this.shownTags = this.tags.filter(function(t) {
              return t.match(RegExp("" + val));
            });
          } else {
            this.shownTags = [];
          }
          return this.checkTags();
      }
    },
    enterPressed: function() {
      this.fire('enter-pressed', this.shownValue);
      return this.reset();
    },
    reset: function() {
      this.shownTags = [];
      this.val = '';
      this.shownValue = '';
      this.sel = void 0;
      this.fireValueChange();
      return this.close();
    },
    downArrow: function() {
      if (this.opened) {
        if (this.sel !== void 0) {
          if (this.sel === this.shownTags.length - 1) {
            return this.sel = void 0;
          } else {
            return this.sel += 1;
          }
        } else {
          return this.sel = 0;
        }
      }
    },
    upArrow: function() {
      if (this.opened) {
        if (this.sel !== void 0) {
          if (this.sel === 0) {
            return this.sel = void 0;
          } else {
            return this.sel -= 1;
          }
        } else {
          return this.sel = this.shownTags.length - 1;
        }
      }
    },
    checkTags: function() {
      if (this.shownTags.length) {
        return this.open();
      } else {
        return this.close();
      }
    },
    open: function() {
      console.log('open');
      this.opened = true;
      return this.$.pdrop.open();
    },
    close: function() {
      console.log('close');
      if (this.opened) {
        this.opened = false;
        return this.$.pdrop.close();
      }
    },
    sendWidth: function(width) {
      return this.style.width = "" + width + "px";
    }
  });

}).call(this);
