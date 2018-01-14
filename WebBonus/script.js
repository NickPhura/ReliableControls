$(document).ready(function() {

  // prevent caching to ensure we always get the latest results
  $.ajaxSetup({ cache: false });

  // assign click actions to buttons
  $('#postButton').click(function() {
    const deviceID = $('#postInput').val();
    makePostRequest(deviceID);
  });

  $('#getButton').click(function() {
    const deviceID = $('#getInput').val();
    makeGetRequest(deviceID);
  });

  // start polling for device results
  startGetAllRequestPolling();

});

/**
 * Makes a post request to the server with the given device id.
 * @param deviceID
 */
function makePostRequest(deviceID) {
  if (deviceID) {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:50196/api/events/' + deviceID
    });
  }
}

/**
 * Makes a get request to the server with the given device id.
 * @param deviceID
 */
function makeGetRequest(deviceID) {
  if (deviceID) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:50196/api/events/' + deviceID
    }).then(function(data) {
      updateGetMessage(data);
    });
  }
}

/**
 * Starts polling the server every 1 second and updates the device list table.
 */
function startGetAllRequestPolling() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:50196/api/events/'
  }).then(function(data) {
    updateDeviceList(data);
  }).then(function() {
    setTimeout(startGetAllRequestPolling, 1000);
  });
}

/**
 * Displays a message in the getMessage field.
 * @param message the message to display
 */
function updateGetMessage(message) {
  $('#getMessage').text(message);
}

/**
 * Re-draws the device list with the given data.
 * @param data device data
 */
function updateDeviceList(data) {
  $('.deviceList').empty();
  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    // This could be made cleaner via templates (ie: mustache.js)
    $('.deviceList').append(
      '<div class="deviceItem"><span>'+item.deviceID+'</span><span>'+item.eventCount+'</span><span>'+item.isProcessing+'</span></div>'
    );
  }
}