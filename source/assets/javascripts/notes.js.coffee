@resetNoteForm = ->
  $('#note_content').on 'click', ->
    $(this).animate
      height: 100
    , 'fast'

jQuery ->
  resetNoteForm()

  $('#note_content-collapse').on 'click', ->
    $('#note_content').removeAttr('style').val('')
