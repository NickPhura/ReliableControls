const moment = require('moment');

module.exports = {
  ParseEvents,
  GetEventCount,
  clearEvents
};

// Maintains the list of deviceIDs and the corresponding number of faults found.
let faultCountsById = {};

// Stores relevant information about the log messages as the log is being parsed.
const record = {
  currentStage: null,
  currentTimestamp: null,
  timeInCurrentStage: 0,
  previousStage: null,
  previousTimestamp: null,
  timeInPreviousStage: 0
};

/**
 * Parse and accumulate event information from the given log data.
 *
 * @param deviceID ID of the device that the log is associated with.
 * @param eventLog An array of log messages.
 */
function ParseEvents(deviceID, eventLog) {
  if(!faultCountsById[deviceID]) {
    // add unique deviceID
    faultCountsById[deviceID] = 0;
  }

  /*
   * A minimum of 3 log messages are required to determine a fault.
   * Example:
   * log 2: stage 3 for 5 or more minutes
   * log 3: stage 2
   * log 4: stage 0
   */
  if(eventLog.length < 3)
  {
    return;
  }

  // Indicates whether or not stage 3 has existed for more than 5 minutes.
  let foundStage3 = false;
  // Indicates whether or not the necessary stage 2 was found, after having found the initial stage 3.
  let foundStage2 = false;

  // iterate over array of log messages
  for(let i = 0; i < eventLog.length; i++)
  {
    const matches = eventLog[i].match(/(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\t(\d)+/);
    if (!matches) {
      continue;
    }
    const timestamp = matches[1];
    const stage = matches[2];

    updateRecord(stage, timestamp);

    console.log(record);

    if (foundStage3 === false) {
      foundStage3 = isStage3Error();
    }

    if (foundStage3 === true) {
      if (record.currentStage == 3) { // After finding an error stage 3, consecutive stage 3's are irrelevant.
        continue;
      } else if (record.currentStage == 2) { // At least one stage 2 needs to be recorded
        foundStage2 = true;
      } else if (foundStage2 == true && record.currentStage == 0) { // If at least one stage 2 recorded, fault sequence found.
        faultCountsById[deviceID] += 1;
      } else if (record.currentStage != 2) {
        foundStage3 = false; // If any stage other than 2 or 3 is found, fault sequence is broken.
        foundStage2 = false;
      }
    }
  }
}

/**
 * Gets the current count of events detected for the given deviceId.
 * @param deviceId the id of the device
 * @return An integer representing the number of detected events. Return null
 * if the given deviceId is not found.
 */
function GetEventCount(deviceId) {
  if (faultCountsById[deviceId] === undefined) {
    return null;
  }
  return faultCountsById[deviceId];
}


/**
 * Stores the current and previous log stage information and maintains a count
 * of the time spent in the previous and current stages.
 *
 * @param currentStage the stage portion of the current log message
 * @param currentTimestamp the timestamp portion of the current log message
 */
function updateRecord(currentStage, currentTimestamp) {
  record.previousStage = record.currentStage;
  record.previousTimestamp = record.currentTimestamp;

  record.currentStage = currentStage;
  record.currentTimestamp = currentTimestamp;

  console.log(record.currentStage);
  console.log(record.currentTimestamp);

  console.log(currentStage);
  console.log(currentTimestamp);

  const difference = getDifferenceInMilliseconds(record.currentTimestamp, record.previousTimestamp);

  console.log(difference);

  if(record.currentStage === record.previousStage) {
    record.timeInCurrentStage += difference;
    record.timeInPreviousStage = 0;
  } else {
    record.timeInPreviousStage = record.timeInCurrentStage + difference;
    record.timeInCurrentStage = 0;
  }
}

/**
 * Returns the number of milliseconds between the passed timestamps.
 * If either timestamp parameter is null or undefined, returns 0.
 *
 * @param timestamp1
 * @param timestamp2
 */
function getDifferenceInMilliseconds(timestamp1, timestamp2) {
  if (!timestamp1 || !timestamp2) {
    return 0;
  }

  const moment1 = moment(timestamp1, 'YYYY-MM-DD hh:mm:ss');
  const moment2 = moment(timestamp2, 'YYYY-MM-DD hh:mm:ss');

  return moment1.diff(moment2, 'milliseconds');
}

/**
 * If previous stage was 3, and it was in that stage for 5 or more minutes, return true.
 * Otherwise return false.
 */
function isStage3Error() {
  if(record.previousStage == 3 && record.timeInPreviousStage >= (1000 * 60 * 5)) {
    console.log('**** found stage 3');
    return true;
  }
  return false;
}

/**
 * Erases all parsed/stored event data.
 */
function clearEvents() {
  faultCountsById = {};

  record.currentStage = null;
  record.currentTimestamp = null;
  record.timeInCurrentStage = 0;
  record.previousStage = null;
  record.previousTimestamp = null;
  record.timeInPreviousStage = 0;
}