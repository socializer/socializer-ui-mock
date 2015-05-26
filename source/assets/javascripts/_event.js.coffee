@resetEventForm = ->
  $('#new-event').on 'click', ->
    $('#event-title-input').focus()
    $('#note-form-actions').removeClass('hidden')

jQuery ->
  resetEventForm()
