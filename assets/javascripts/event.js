(function() {
  this.resetEventForm = function() {
    return $('#new-event').on('click', function() {
      $('#event-title-input').focus();
      return $('#note-form-actions').removeClass('hidden');
    });
  };

  jQuery(function() {
    return resetEventForm();
  });

}).call(this);
