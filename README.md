# ReliableControls

Reliable Controls interview coding challenge.

## Event Parser
#### Key Components
* eventParser.js
  * Contains the logic to parse the event logs.
* eventParserTest.js
  * Basic logic to call the eventParser with one of the pre-made test logs.
* TestLogs
  * 9 basic test log files.

#### Running The Test(s)
* run `npm test`
  * The test file is not a full set of unit tests.  To run other test logs, edit the file path in eventParserTest.js

#### Assumptions
* Assumed that the log files are text files.  Other file types not tested.
* Assumed that a valid

## WebBonus
#### Key Components
* page.html
  * Basic html page to display the content.
* script.js
  * The logic to make the requests, and display the response on the page.
* style.css
  * Basic css to display content more cleanly.

## General Developer Commentary
* Basic testing can be performed via the included test log files and eventParserTest.js.  A full set of unit tests is not included.  Unit tests could be added using Mocha (or similar).
* Testing only covers the happy path cases, for the most part.  Extreme edge cases, like what would happen if the log file was corrupt, are not specifically taken into account.
* For the web bonus, the css is minimal.  Fancy css is nice, but doesn't add much to the proof of concept that is the web page.
