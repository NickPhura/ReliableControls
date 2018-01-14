const fs = require('fs-extra');
const moment = require('moment');
const eventParser = require('./eventParser')
const utils = require('./utils')

// read log file
const logFile = utils.readFile('TestLogs/testLog1.txt');
//  turn log file into array of log messages
const logMessages = logFile.match(/(.+)[\r\n]*/g);

eventParser.ParseEvents('2018', logMessages);

let device2018Faults = eventParser.GetEventCount(2018)
console.log('faults: ' + device2018Faults);

eventParser.clearEvents();

device2018Faults = eventParser.GetEventCount(2018)
console.log('faults: ' + device2018Faults);
