(function() {
  this.resetNoteForm = function() {
    $('#note_content').removeAttr('style').val('');
    $('#new_note').on('click', function() {
      $('#note_form_actions').removeClass('hidden');
      return $("#note_content").animate({
        height: 100
      }, "fast").focus();
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
    $('#note_form_cancel').on('click', function() {
      $('#note_form_actions').addClass('hidden');
      return $('#note_content').removeAttr('style').val('');
    });
    if ($("#circles").length > 0) {
      return $("#circles").select2({
        tags: ["Your Circles", "Public", "Extended Circles", "Friends(0)", "Family(0)", "Acquantances(0)", "Following(3)"]
      });
    }
  });

}).call(this);
