@resetNoteForm = ->
  $('#note_content').removeAttr('style').val('')

  $('#new_note').on 'click', ->
    $('#note_form_actions').removeClass('hidden')
    $('#note_content').animate
      height: 100
    , 'fast'

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

  if $("#circles").length > 0
    $("#circles").select2 tags: [
      "Your Circles"
      "Public"
      "Extended Circles"
      "Friends(0)"
      "Family(0)"
      "Acquantances(0)"
      "Following(3)"
    ]
