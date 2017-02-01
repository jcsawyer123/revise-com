// Data Transmission
// The Code is highly inefficient. It is not DRY because I didnt have time.
//

// On Button Press Toggles panel
// Also Changes Button State (Changes Colour)
$('button').on('click', function() {
  var id = $(this).attr('data-buttonId');
  $('#b-'+ id).toggleClass('active');
  $('#' + id).fadeToggle(200);
});

// On Click Of Panel Close panel
// Also Changes Button State (Changes Colour)

$('.panel-heading').on('click', function() {
  var panelId = $(this).parents('.cpanels').attr('id');
  $('#b-'+  panelId).toggleClass('active');
  $('#'+panelId).fadeToggle(200);
});


// $('#b-'+  panelId).toggleClass('active');
// $('#'+panelId).fadeToggle(200);
