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
* There are a basic set of end-to-end unit tests.
* Testing only covers some of the basic happy paths. Extreme edge cases, like what would happen if the log file was corrupt, are not specifically taken into account.
* For the web bonus, the css is minimal as fancier css doesn't impact the functionality.
