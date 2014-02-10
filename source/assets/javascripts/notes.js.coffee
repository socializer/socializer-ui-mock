@resetNoteForm = ->
  $('#note_content').removeAttr('style').val('')

  $('#note_content').on 'click focus', ->
    $('#note_form_actions').removeClass('hidden')
    $(this).animate
      height: 100
    , 'fast'

jQuery ->
  resetNoteForm()

  $('#note_form_cancel').on 'click', ->
    $('#note_form_actions').addClass('hidden')
    $('#note_content').removeAttr('style').val('')
