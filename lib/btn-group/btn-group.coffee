Polymer 'btn-group',
  tapIcon: (e,d,s) ->
    @fire 'remove-tag', @textContent.trim()
