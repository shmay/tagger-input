Polymer 'tagger-input',
  selectedTags: []

  ready: ->
    @$.dropdown.sendWidth @.offsetWidth

  keydownage: (e,d,s) ->
    @async ->
      @$.dropdown.keydownAction(e.which, @$.input.value)

  onEnterPressed: (e,d,s) ->
    if @selectedTags.indexOf(d) == -1
      @selectedTags.push d

  onNewVal: (e,d,s) ->
    @$.input.value = d

  onRemoveTag: (e,d,s) ->
    index = @selectedTags.indexOf(d)
    if index > -1
      @selectedTags.splice(index, 1)

  tapInput: ->
    @async ->
      @$.dropdown.checkTags()
