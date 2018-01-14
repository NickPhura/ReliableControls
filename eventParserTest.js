const fs = require('fs-extra');
const moment = require('moment');
const eventParser = require('./eventParser')
const utils = require('./utils')

// A very rudimentary way of running tests.  These could be automated with a testing framework (ie: Mocha, etc).
// Possibly there could be some way of dynamically generating test logs, but possibly more work than is worthwhile.

// read log file
const logFile = utils.readFile('TestLogs/testLog6.txt');
//  turn log file into array of log messages
const logMessages = logFile.match(/(.+)[\r\n]*/g);

eventParser.ParseEvents(2018, logMessages);

let device2018Faults = eventParser.GetEventCount(2018)
console.log('faults detected: ' + device2018Faults);
eventParser.clearEvents();
