@resetNoteForm = ->
  $('#note_content').removeAttr('style').val('')

  $('#note_content').on 'click', ->
    $('#note_content-collapse').removeClass('hidden')
    $(this).animate
      height: 100
    , 'fast'

jQuery ->
  resetNoteForm()

  $('#note_content-collapse').on 'click', ->
    $('#note_content-collapse').addClass('hidden')
    $('#note_content').removeAttr('style').val('')
