const assert = require('assert');
const eventParser = require('../../eventParser')
const utils = require('../../utils')

// A basic set of end-to-end unit tests.

describe('eventParser', function() {
  beforeEach(function() {
    eventParser.clearEvents();
  });

  describe('parameters are valid', function() {
    describe('log contains errors', function() {
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
    });

    describe('log contains no errors', function() {
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
    })
  })

  describe('parameters are invalid', function() {
    describe('device id is null', function() {
      it('should throw an error', function() {
        const logFile = utils.readFile('test/specs/TestLogs/testLog9.txt');
        assert.throws(function(){eventParser.ParseEvents(null, logFile);}, Error, "deviceID must not be null or undefined!");
      });
    });

    describe('device id is undefined', function() {
      it('should throw an error', function() {
        const logFile = utils.readFile('test/specs/TestLogs/testLog9.txt');
        assert.throws(function(){eventParser.ParseEvents(undefined, logFile);}, "deviceID must not be null or undefined!");
      });
    })

    describe('eventLog is null', function() {
      it('should throw an error', function() {
        assert.throws(function(){eventParser.ParseEvents(1, null);}, "eventLog must not be null or undefined!");
      });
    });

    describe('eventLog is undefined', function() {
      it('should throw an error', function() {
        assert.throws(function(){eventParser.ParseEvents(1, undefined);}, "eventLog must not be null or undefined!");
      });
    });
  });
});