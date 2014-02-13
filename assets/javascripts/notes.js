(function() {
  this.resetNoteForm = function() {
    $('#note-content-input').removeAttr('style').val('');
    $('#new-note').on('click', function() {
      $('#note-form-actions, #note-hidden').removeClass('hidden');
      return $('#note-content-input').animate({
        height: 100
      }, 'fast').focus();
    });
    return $('#note-content-input').on('click focus', function() {
      $('#note-form-actions, #note-hidden').removeClass('hidden');
      return $(this).animate({
        height: 100
      }, 'fast');
    });
  };

  jQuery(function() {
    resetNoteForm();
    $('#note-form-cancel').on('click', function() {
      $('#note-form-actions, #note-hidden').addClass('hidden');
      $('#note-content-input').removeAttr('style').val('');
      return $('a[href="#new-note-tab"]').tab('show');
    });
    if ($('#note-share-input, #event-share-input').length > 0) {
      return $('#note-share-input, #event-share-input').select2({
        tags: ['Your Circles', 'Public', 'Extended Circles', 'Friends(0)', 'Family(0)', 'Acquantances(0)', 'Following(3)']
      });
    }
  });

}).call(this);
