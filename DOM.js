// Select the element and store it in a variable.
var el = document.getElementById('one');

// Change the value of the class attribute.
el.className = 'cool';


//item() method
var elements = document.getElementsByClassName('hot');
  if (elements.length >= 1) {
      var firstItem = elements.item(0);
  }

//array syntax
var elements = document.getElementsByClassName('hot');
  if (elements.length >= 1) {
      var firstItem = elements[0];
  }

  // checking for attributes
  var firstItem = document.getElementById('one');  //get first li

  if (firstItem.hasAttribute('class')) {  //if it has class atttribute
      var attr = firstItem.getAttribute('class'); //get the attribute
     //add the value of the attribute after the list
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';

    // using event listeners with the event object

    function checkLength(e, minLength) {         // Declare function
  var el, elMsg;                             // Declare variables
  if (!e) {                                  // If event object doesn't exist
    e = window.event;                        // Use IE fallback
  }
  el = e.target || e.srcElement;             // Get target of event
  elMsg = el.nextSibling;                    // Get its next sibling

  if (el.value.length < minLength) {         // If length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                   // Otherwise
    elMsg.innerHTML = '';                    // Clear message
  }
}

var elUsername = document.getElementById('username');// Get username input
if (elUsername.addEventListener) {           // If event listener supported
  elUsername.addEventListener('blur', function(e) {  // On blur event
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  }, false);                                       // Capture in bubble phase
} else {                                           // Otherwise
  elUsername.attachEvent('onblur', function(e) {   // IE fallback onblur
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  });
}

// event propogation from Eloquent Javascript


<p>A paragraph with a <button>button</button>.</p>
<script>
  var para = document.querySelector("p");
  var button = document.querySelector("button");
  para.addEventListener("mousedown", function() {
    console.log("Handler for paragraph.");
  });
  button.addEventListener("mousedown", function(event) {
    console.log("Handler for button.");
    if (event.which == 3)
      event.stopPropagation();
  });
</script>

//event object
<button>Click me any way you want</button>
<script>
  var button = document.querySelector("button");
  button.addEventListener("mousedown", function(event) {
    if (event.which == 1)
      console.log("Left button");
    else if (event.which == 2)
      console.log("Middle button");
    else if (event.which == 3)
      console.log("Right button");
  });
</script>

//stop propogation event bubbling up

<p>A paragraph with a <button>button</button>.</p>
<script>
  var para = document.querySelector("p");
  var button = document.querySelector("button");
  para.addEventListener("mousedown", function() {
    console.log("Handler for paragraph.");
  });
  button.addEventListener("mousedown", function(event) {
    console.log("Handler for button.");
    if (event.which == 3)
      event.stopPropagation();
  });
</script>

//creating nodes

<p>The <img src="img/cat.png" alt="Cat"> in the
  <img src="img/hat.png" alt="Hat">.</p>

<p><button onclick="replaceImages()">Replace</button></p>

<script>
  function replaceImages() {
    var images = document.body.getElementsByTagName("img");
    for (var i = images.length - 1; i >= 0; i--) {
      var image = images[i];
      if (image.alt) {
        var text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }
</script>

//String() method, 0 pad method

function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);

// passing an "action" as a function value

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

//Higher order functions

function greaterThan(n) {
  return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));



//click event

// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note


//html 5 events  Need to do more research on these

function setup() {
  var textInput;
  textInput = document.getElementById('message');
  textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup, false);

window.addEventListener('beforeunload', function(event) {
  // This example has been updated to improve cross-browser compatibility (as recommended by MDN)
  var message = 'You have changes that have not been saved';
  (event || window.event).returnValue = message;
  return message;
});


//changing content Jquery

$(function() {
  $('li:contains("pine")').text('almonds');
  $('li.hot').html(function() {
    return '<em>' + $(this).text() + '</em>';
  });
  $('li#one').remove();
});

//working with attributes
$(function() {
  $('li#three').removeClass('hot');
  $('li.hot').addClass('favorite');
  $('ul').attr('id', 'group');
});

//changing css rules

$(function() {

  // Get the background color of the first list item.
  var backgroundColor = $('li').css('background-color');

  // Write what the background color was after the list.
  $('ul').append('<p>Color was: ' + backgroundColor + '</p>');

  // Set several properties on all list items.
  $('li').css({
    'background-color': '#c5a996',
    'border': '1px solid #fff',
    'color': '#000',
    'text-shadow': 'none',
    'font-family': 'Georgia',
    'padding-left': '+=75'
  });
});


//jquery event object

$(function() {

  $('li').on('click', function(e) {
    $('li span').remove();
    var date = new Date();
    date.setTime(e.timeStamp);
    var clicked = date.toDateString();
    $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
  });

});

//basic effects

$(function() {

  $('h2').hide().slideDown();
  var $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });

  $li.on('click', function() {
    $(this).fadeOut(700);
  });

});


//traversing
$(function() {
  var $h2 = $('h2');
  $('ul').hide();
  $h2.append('<a class="show">show</a>');

  $h2.on('click', function() {
    $h2.next('ul')
      .fadeIn(500)
      .children('.hot')
      .addClass('complete');
    $h2.find('a').fadeOut();
  });

});
//using index numbers

$(function() {
  $('li:lt(2)').removeClass('hot');
  $('li').eq(0).addClass('complete');
  $('li:gt(2)').addClass('cool');
});



//determining position of items on the page

$(function() {
  var $window = $(window);
  var $slideAd = $('#slideAd');
  var endZone = $('#footer').offset().top - $window.height() - 500;

  $window.on('scroll', function() {

    if (endZone < $window.scrollTop()) {
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});


//loading json with ajax


var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request



//Loading content using .loading


$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
});

//submitting forms

$('#register').on('submit', function(e) {           // When form is submitted
  e.preventDefault();                               // Prevent it being sent
  var details = $('#register').serialize();         // Serialize form data
  $.post('register.php', details, function(data) {  // Use $.post() to send it
    $('#register').html(data);                    // Where to display result
  });
});

//controlling ajax

$('nav a').on('click', function(e) {
  e.preventDefault();
  var url = this.href;                                      // URL to load
  var $content = $('#content');                             // Cache selection

  $('nav a.current').removeClass('current');                // Update links
  $(this).addClass('current');
  $('#container').remove();                                 // Remove content

  $.ajax({
    type: "POST",                                           // GET or POST
    url: url,                                               // Path to file
    timeout: 2000,                                          // Waiting time
    beforeSend: function() {                                // Before Ajax 
      $content.append('<div id="load">Loading</div>');      // Load message
    },
    complete: function() {                                  // Once finished
      $('#load').remove();                               // Clear message
    },
    success: function(data) {                               // Show content
      $content.html( $(data).find('#container') ).hide().fadeIn(400);
    },
    fail: function() {                                      // Show error msg 
      $('#panel').html('<div class="loading">Please try again soon.</div>');
    }
  });

});


//ajax and json
$(function() {                                    // When the DOM is ready

  var times;                                      // Declare global variable
  $.ajax({
    beforeSend: function(xhr) {                   // Before requesting data
      if (xhr.overrideMimeType) {                 // If supported
        xhr.overrideMimeType("application/json"); // set MIME to prevent errors
      }
    }
  });

  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable() {                    // Declare function
    $.getJSON('data/example.json')              // Try to collect JSON data
    .done( function(data){                      // If successful
      times = data;                             // Store it in a variable
    }).fail( function() {                       // If a problem: show message
      $('#event').html('Sorry! We could not load the timetable at the moment');
    });
  }

  loadTimetable();                              // Call the function


  // CLICK ON THE EVENT TO LOAD A TIMETABLE 
  $('#content').on('click', '#event a', function(e) {  // User clicks on event

    e.preventDefault();                                // Prevent loading page
    var loc = this.id.toUpperCase();                   // Get value of id attr

    var newContent = '';                               // Build up timetable by
    for (var i = 0; i < times[loc].length; i++) {      // looping through events
      newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
      newContent += '<a href="descriptions.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>'); // Display times on page

    $('#event a.current').removeClass('current');       // Update selected item
    $(this).addClass('current');

    $('#details').text('');                             // Clear third column
  });

  // CLICK ON A SESSION TO LOAD THE DESCRIPTION
  $('#content').on('click', '#sessions li a', function(e) { // Click on session
    e.preventDefault();                                     // Prevent loading
    var fragment = this.href;                               // Title is in href

    fragment = fragment.replace('#', ' #');                 // Add space after#
    $('#details').load(fragment);                           // To load info

    $('#sessions a.current').removeClass('current');        // Update selected
    $(this).addClass('current');
  });


  // CLICK ON PRIMARY NAVIGATION
  $('nav a').on('click', function(e) {                       // Click on nav
    e.preventDefault();                                      // Prevent loading
    var url = this.href;                                     // Get URL to load

    $('nav a.current').removeClass('current');               // Update nav
    $(this).addClass('current');

    $('#container').remove();                                // Remove old part
    $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
  });

});

//geolocation

var elMap = document.getElementById('loc');                 // HTML element
var msg = 'Sorry, we were unable to get your location.';    // No location msg

if (Modernizr.geolocation) {                                // Is geo supported
  navigator.geolocation.getCurrentPosition(success, fail);  // Ask for location
  elMap.textContent = 'Checking location...';               // Say checking...
} else {                                                    // Not supported
  elMap.textContent = msg;                                  // Add manual entry
}

function success(location) {                                // Got location
  msg = '<h3>Longitude:<br>';                               // Create message
  msg += location.coords.longitude + '</h3>';               // Add longitude
  msg += '<h3>Latitude:<br>';                               // Create message
  msg += location.coords.latitude + '</h3>';                // Add latitude
  elMap.innerHTML = msg;                                    // Show location
}

function fail(msg) {                                        // Not got location
  elMap.textContent = msg;                                  // Show text input
  console.log(msg.code);                                    // Log the error
}


//localstorage

if (Modernizr.localstorage) {

  var txtUsername = document.getElementById('username'); // Get form elements
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username');  // Elements populated
  txtAnswer.value = localStorage.getItem('answer');      // by localStorage data

  txtUsername.addEventListener('input', function () {    // Data saved on keyup
    localStorage.setItem('username', txtUsername.value);
  }, false);

  txtAnswer.addEventListener('input', function () {      // Data saved on keyup
    localStorage.setItem('answer', txtAnswer.value);
  }, false);
}

//working with history

$(function() {                                  // DOM has loaded
  function loadContent(url){                    // Load new content into page
    $('#content').load(url + ' #container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function(e) {          // Click handler 
    e.preventDefault();                         // Stop link loading new page
    var href = this.href;                       // Get href attribute of link
    var $this = $(this);                        // Store link in jQuery object
    $('a').removeClass('current');              // Remove current from links
    $this.addClass('current');                  // Update current link
    loadContent(href);                          // Call function: loads content
    history.pushState('', $this.text, href);    // Update history
  });

  window.onpopstate = function() {              // Handle back/forward buttons
    var path = location.pathname;               // Get file path
    loadContent(path);                          // Call function to load page
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Remove current from links
    $('[href="' + page + '"]').addClass('current'); // Update current link
  };
});

// angularjs view and view model

function BasketCtrl($scope) {
  $scope.description = 'Single ticket';
  $scope.cost = 8;
  $scope.qty = 1;
}

//google map with custom controls

function init() {
  // the mapOptions object contains the information to initialise the map to how we want it
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(40.782710,-73.965310),
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    scaleControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER
    },
    streetViewControl: false,
    overviewMapControl: false
  };
  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
  document.body.appendChild(script);
}

window.onload = loadScript;

//testing
//debugger keyword to create a breakpoint

var $form, width, height, area;
$form = $('#calculator');

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked submit...');

  width = $('#width').val();
  height = $('#height').val();
  area = (width * height);

  if (area < 100) {
    debugger;             // A breakpoint is set if the developer tools are open
  }

  $form.append('<p>' + area + '</p>');
});

//accordion

$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
  e.preventDefault();                    // Prevent default action of button
  $(this)                                // Get the element the user clicked on
    .next('.accordion-panel')            // Select following panel 
    .not(':animated')                    // If it is not currently animating
    .slideToggle();                      // Use slide toggle to show or hide it
});

//creating tab panels
$('.tab-list').each(function(){                   // Find lists of tabs
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.active');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
        id = this.hash;                           // Get href of clicked tab 

    if (id && !$link.is('.active')) {             // If not currently active
      $panel.removeClass('active');               // Make panel inactive
      $tab.removeClass('active');                 // Make tab inactive

      $panel = $(id).addClass('active');          // Make new panel active
      $tab = $link.parent().addClass('active');   // Make new tab active 
    }
  });
});

//modal script

(function(){
  var $content = $('#share-options').detach();   // Remove modal from page

  $('#share').on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
  });
}());

//model window  js

var modal = (function() {                         // Declare modal object

  var $window = $(window);                        // Store the window
  var $modal = $('<div class="modal"/>');         // Create markup for modal
  var $content = $('<div class="modal-content"/>');
  var $close = $('<button role="button" class="modal-close">close</button>');

  $modal.append($content, $close);                // Add close button to modal

  $close.on('click', function(e){                 // If user clicks on close
    e.preventDefault();                           // Prevent link behavior
    modal.close();                                // Close the modal window
  });

  return {                                        // Add code to modal
    center: function() {                          // Define center() method
      // Calculate distance from top and left of window to center the modal
      var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
      var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
      $modal.css({                                // Set CSS for the modal
        top:top + $window.scrollTop(),            // Center vertically
        left:left + $window.scrollLeft()          // Center horizontally
      });
    },
    open: function(settings) {                     // Define open() method
      $content.empty().append(settings.content);   // Set new content of modal

      $modal.css({                                 // Set modal dimensions
        width: settings.width || 'auto',           // Set width
        height: settings.height || 'auto'          // Set height
      }).appendTo('body');                         // Add it to the page

      modal.center();                              // Call center() method
      $(window).on('resize', modal.center);        // Call it if window resized
    },
    close: function() {                            // Define close() method
      $content.empty();                            // Remove content from modal
      $modal.detach();                             // Remove modal from page
      $(window).off('resize', modal.center);       // Remove event handler
    }
  };
}());

//photo viewer
var request;                         // Latest image to be requested
var $current;                        // Image currently being shown 
var cache = {};                      // Cache object
var $frame = $('#photo-viewer');     // Container for image
var $thumbs = $('.thumb');           // Container for image

function crossfade($img) {           // Function to fade between images
                                     // Pass in new image as parameter
  if ($current) {                    // If there is currently an image showing
    $current.stop().fadeOut('slow'); // Stop any animation & fade it out
  }

  $img.css({                         // Set the CSS margins for the image
    marginLeft: -$img.width() / 2,   // Negative margin of half image's width
    marginTop: -$img.height() / 2    // Negative margin of half image's height
  });

  $img.stop().fadeTo('slow', 1);     // Stop animation on new image & fade in
  
  $current = $img;                   // New image becomes current image

}

$(document).on('click', '.thumb', function(e){ // When a thumb is clicked on
  var $img,                               // Create local variable called $img
      src = this.href;                    // Store path to image
      request = src;                      // Store latest image request
  
  e.preventDefault();                     // Stop default link behavior
  
  $thumbs.removeClass('active');          // Remove active from all thumbs
  $(this).addClass('active');             // Add active to clicked thumb

  if (cache.hasOwnProperty(src)) {        // If cache contains this image
    if (cache[src].isLoading === false) { // And if isLoading is false
      crossfade(cache[src].$img);         // Call crossfade() function
    }
  } else {                                // Otherwise it is not in cache
    $img = $('<img/>');                   // Store empty <img/> element in $img
    cache[src] = {                        // Store this image in cache
      $img: $img,                         // Add the path to the image
      isLoading: true                     // Set isLoading property to false
    };

    // Next few lines will run when image has loaded but are prepared first
    $img.on('load', function(){           // When image has loaded
      $img.hide();                        // Hide it
      // Remove is-loading class from frame & append new image to it
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;       // Update isLoading in cache
      // If still most recently requested image then
      if (request === src) {
        crossfade($img);                  // Call crossfade() function
      }                                   // Solves asynchronous loading issue
    });

    $frame.addClass('is-loading');        // Add is-loading class to frame

    $img.attr({                           // Set attributes on <img> element
      'src': src,                         // Add src attribute to load image
      'alt': this.title || ''             // Add title if one was given in link
    });

  }

});

// Final line runs once when rest of script has loaded to show the first image
$('.thumb').eq(0).click();                // Simulate click on first thumb



