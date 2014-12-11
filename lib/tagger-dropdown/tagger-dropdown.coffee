Polymer "tagger-dropdown",
  shownTags: []

  observe:
    sel: 'selChanged'

  selChanged: (e,d,s) ->
    if typeof @sel == 'number'
      @shownValue = @shownTags[@sel]
    else
      @shownValue = @val

    @fireValueChange()

  tapItem: (e,d,s) ->
    tag = s.textContent.trim()
    @fire('enter-pressed', tag)
    @reset()

  fireValueChange: -> 
    @fire('new-value', @shownValue)

  keydownAction: (keycode,val) ->
    switch keycode
      when 40 then @downArrow()
      when 38 then @upArrow()
      when 13 then @enterPressed()
      else
        @sel = undefined
        @val = @shownValue = val
        if val and val.length
          @shownTags = @tags.filter (t) -> t.match(///#{val}///)
        else
          @shownTags = []

        @checkTags()

  enterPressed: ->
    @fire('enter-pressed', @shownValue)
    @reset()

  reset: ->
    @shownTags = []
    @val = ''
    @shownValue = ''
    @sel = undefined
    @fireValueChange()
    @close()

  downArrow: ->
    if @opened
      if @sel != undefined
        if @sel == @shownTags.length - 1
          @sel = undefined
        else
          @sel += 1
      else
        @sel = 0

  upArrow: ->
    if @opened
      if @sel != undefined
        if @sel == 0
          @sel = undefined
        else
          @sel -= 1
      else
        @sel = @shownTags.length - 1

  checkTags: ->
    if @shownTags.length
      @open()
    else
      @close()

  open: ->
    if !@opened
      @opened = true
      @style.display = 'block'

  close: ->
    if @opened
      @opened = false
      @style.display = 'none'
