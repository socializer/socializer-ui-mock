@resetNoteForm = ->
  $('#note-content-input').removeAttr('style').val('')

  $('#new-note').on 'click', ->
    # Use data attributes and each
    $('#note-form-actions, #note-hidden').removeClass('hidden')

    $('#note-content-input').animate(
      height: 100
    , 'fast').focus()

  $('#note-content-input').on 'click focus', ->
    $('#note-form-actions, #note-hidden').removeClass('hidden')
    $(this).animate
      height: 100
    , 'fast'

jQuery ->
  resetNoteForm()

  $('#note-form-cancel').on 'click', ->
    # Use data attributes and each
    $('#note-form-actions, #note-hidden').addClass('hidden')
    $('#note-content-input').removeAttr('style').val('')
    $('a[href="#new-note-tab"]').tab('show')

  # Use data attributes and each
  if $('#note-share-input, #event-share-input').length > 0
    $('#note-share-input, #event-share-input').select2 tags: [
      'Your Circles'
      'Public'
      'Extended Circles'
      'Friends(0)'
      'Family(0)'
      'Acquantances(0)'
      'Following(3)'
    ]
