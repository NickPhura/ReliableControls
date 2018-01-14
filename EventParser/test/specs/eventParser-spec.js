const assert = require('assert');
const eventParser = require('../../eventParser')
const utils = require('../../utils')

// A basic set of end-to-end unit tests.

describe('eventParser', function() {
  beforeEach(function() {
    eventParser.clearEvents();
  });

  it('should return 1 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog1.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(1, faults);
  });

  it('should return 1 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog2.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(1, faults);
  });

  it('should return 1 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog3.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(1, faults);
  });

  it('should return 1 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog4.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(1, faults);
  });

  it('should return 1 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog5.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(1, faults);
  });

  it('should return 3 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog6.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(3, faults);
  });

  it('should return 1 fault', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog7.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(1, faults);
  });

  it('should return 0 faults', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog8.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(0, faults);
  });

  it('should return 0 faults', function() {
    const logFile = utils.readFile('test/specs/TestLogs/testLog9.txt');
    eventParser.ParseEvents(1, logFile);
    const faults = eventParser.GetEventCount(1);
    assert.equal(0, faults);
  });
});