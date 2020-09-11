onload = function () {
if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('head').append('<link rel="stylesheet" href="css/dark.css">');
  } else {
    $('head').append('<link rel="stylesheet" href="css/light.css">');
  }
 }
}


$('#themebtn').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
    blueTheme();
  } else {
    pinkTheme();
  }
  $(this).data("clicks", !clicks);
});


function blueTheme () {
  $('.navbar').css({ 'background-color': 'var(--primary-blue)' });
  $('#themebtn').css({ 'background': 'var(--pink-theme)' });
  $('#sidebar').css({ 'background-color': 'var(--primary-blue)' });
  $('head').append('<style>                #dismiss  {background-color:var(--accent-blue);color:#ffffff;} #dismiss:hover {background-color: #ffffff;color:var(--accent-blue) !important} #sidebar ul li a:hover {color: var(--darkprimary-blue); background-color:white !important;</style>');
  $('.sidebar-header').css({ 'background-color': 'var(--darkprimary-blue)' });
  $('ul ul a').css({ 'background-color': 'var(--darkprimary-blue)' });
  $('.skew').css({ 'background-color': 'var(--accent-blue)' });
  $("meta[name='theme-color']").attr('content', '#1976d2');
  $("meta[name='msapplication-navbutton-color']").attr('content', '#1976d2');
  $("meta[name='apple-mobile-web-app-status-bar-style']").attr('content', '#1976d2');
}



function pinkTheme () {
  $('.navbar').css({ 'background-color': 'var(--primary-pink)' });
  $('#themebtn').css({ 'background': 'var(--blue-theme)' });
  $('#sidebar').css({ 'background-color': 'var(--primary-pink)' });
  $('head').append('<style>                #dismiss  {background-color:var(--accent-pink);color:#ffffff;} #dismiss:hover {background-color: #ffffff;color:var(--accent-pink) !important} #sidebar ul li a:hover {color: var(--darkprimary-pink); background-color:white !important;}                       </style>');
  $('.sidebar-header').css({ 'background-color': 'var(--darkprimary-pink)' });
  $('ul ul a').css({ 'background-color': 'var(--darkprimary-pink)' });
  $('.skew').css({ 'background-color': 'var(--accent-pink)' });
  $("meta[name='theme-color']").attr('content', '#c2185b');
  $("meta[name='msapplication-navbutton-color']").attr('content', '#c2185b');
  $("meta[name='apple-mobile-web-app-status-bar-style']").attr('content', '#c2185b');
}


