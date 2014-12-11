Polymer 'tagger-input',
  selectedTags: []
  tags: []

  observe:
    selectedTags: 'resizeInput'

  ready: ->
    @$.input.addEventListener 'focus', (e,d,s) =>
      @$.box.classList.add('focused')

    @$.input.addEventListener 'blur', (e,d,s) =>
      @$.box.classList.remove('focused')

    @listenEvent = if bowser.ios then 'touchstart' else 'click'

    @handleClick = =>
      @async ->
        clickedPopup = @$.dropdown.clickedLocally
        clickedInput = @$.input.clickedLocally

        if clickedPopup or clickedInput
          @$.dropdown.open()
        else
          @$.dropdown.close()

    document.addEventListener @listenEvent, @handleClick

    @resizeInput()

  detached: ->
    document.removeEventListener @listenEvent, @handleClick

  keydownage: (e,d,s) ->
    @async ->
      @$.dropdown.keydownAction(e.which, @$.input.value)

  resizeInput: ->
    console.log 'resizeInput'
    @async ->
      wid = @$.box.clientWidth - @$.btns.clientWidth - 20
      console.log wid
      @$.input.style.width = wid + 'px'

  onEnterPressed: (e,d,s) ->
    if @selectedTags.indexOf(d) == -1
      @selectedTags.push d

  onNewVal: (e,d,s) ->
    @$.input.value = d
    @$.input.focus()

  onRemoveTag: (e,d,s) ->
    index = @selectedTags.indexOf(d)
    if index > -1
      @selectedTags.splice(index, 1)

  tapInput: ->
    @async ->
      @$.dropdown.checkTags()
