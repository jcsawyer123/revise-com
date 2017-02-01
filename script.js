// Data Transmission
// The Code is highly inefficient. It is not DRY because I didnt have time.

$('#b-con').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#con').fadeToggle(200);
});

$('#b-hardware').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#hardware').fadeToggle(200);
});

$('#b-topology').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#topology').fadeToggle(200);
});

$('#b-protocols').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#protocols').fadeToggle(200);
});

$('#b-extent').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#extent').fadeToggle(200);
});

$('#b-networks').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#networks').fadeToggle(200);
});

// The Internet
$('#b-uses').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#uses').fadeToggle(200);
});

$('#b-history').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#history').fadeToggle(200);
});

$('#b-web').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#web').fadeToggle(200);
});

$('#b-websites').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#websites').fadeToggle(200);
});

$('#b-lmc').on('click', function() {
  var id = $(this).attr('id');
  $('#'+ id).toggleClass('active');
  $('#lmc').fadeToggle(200);
});

// Click To Close

$('.cpanels').on('click', function() {
  var panelId = $(this).attr('id');
  $('#b-'+panelId).toggleClass('active');
  $('#'+panelId).fadeToggle(200);
});
