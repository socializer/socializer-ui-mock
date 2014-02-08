jQuery ->
  $('#note_content').one 'click', ->
    $(this).animate
      height: 100
    , 'fast'
