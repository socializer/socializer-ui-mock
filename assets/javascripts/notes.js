(function() {
  this.resetNoteForm = function() {
    $('#note_content').removeAttr('style').val('');
    $('#new_note').on('click', function() {
      $('#note_form_actions').removeClass('hidden');
      return $('#note_content').animate({
        height: 100
      }, 'fast');
    });
    return $('#note_content').on('click focus', function() {
      $('#note_form_actions').removeClass('hidden');
      return $(this).animate({
        height: 100
      }, 'fast');
    });
  };

  jQuery(function() {
    resetNoteForm();
    return $('#note_form_cancel').on('click', function() {
      $('#note_form_actions').addClass('hidden');
      return $('#note_content').removeAttr('style').val('');
    });
  });

}).call(this);
