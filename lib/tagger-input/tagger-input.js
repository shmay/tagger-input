(function() {
  Polymer('tagger-input', {
    selectedTags: [],
    tags: [],
    observe: {
      selectedTags: 'resizeInput'
    },
    ready: function() {
      this.$.input.addEventListener('focus', (function(_this) {
        return function(e, d, s) {
          return _this.$.box.classList.add('focused');
        };
      })(this));
      this.$.input.addEventListener('blur', (function(_this) {
        return function(e, d, s) {
          return _this.$.box.classList.remove('focused');
        };
      })(this));
      this.listenEvent = bowser.ios ? 'touchstart' : 'click';
      this.handleClick = (function(_this) {
        return function() {
          return _this.async(function() {
            var clickedInput, clickedPopup;
            clickedPopup = this.$.dropdown.clickedLocally;
            clickedInput = this.$.input.clickedLocally;
            if (clickedPopup || clickedInput) {
              return this.$.dropdown.open();
            } else {
              return this.$.dropdown.close();
            }
          });
        };
      })(this);
      document.addEventListener(this.listenEvent, this.handleClick);
      return this.resizeInput();
    },
    detached: function() {
      return document.removeEventListener(this.listenEvent, this.handleClick);
    },
    keydownage: function(e, d, s) {
      return this.async(function() {
        return this.$.dropdown.keydownAction(e.which, this.$.input.value);
      });
    },
    resizeInput: function() {
      console.log('resizeInput');
      return this.async(function() {
        var wid;
        wid = this.$.box.clientWidth - this.$.btns.clientWidth - 20;
        console.log(wid);
        return this.$.input.style.width = wid + 'px';
      });
    },
    onEnterPressed: function(e, d, s) {
      if (this.selectedTags.indexOf(d) === -1) {
        return this.selectedTags.push(d);
      }
    },
    onNewVal: function(e, d, s) {
      this.$.input.value = d;
      return this.$.input.focus();
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
