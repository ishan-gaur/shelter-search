Webpage to find family shelters in a city

TODO:
Autocomplete for locations
Why isn't filtering working -- see Cleveland, OH
Separate view with routing for search results
Making the entry listings better looking
Add some amount of branding/guiding description so the purpose and use is obvious
Nice transitions to go from search home to results
debug heroku build process
Regex out the phone numbers so presentation can be standardized
Consider using other endpoint so nearby shelters instead of just in that city
Sometimes "\'" don't come out properly, instead �

Stack:
Node backend using Express.
React frontend with Tailwind for CSS.
Def could've (should've) built this without React, but I wanted to learn and try a more complex deployment to Heroku.

Resources:
Fix the default index.html and favicon, etc
Intro to Javascript: https://javascript.info/js
Javascript Scraping Tutorial: https://www.scrapingbee.com/blog/web-scraping-javascript/
Deploying with React: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
Routing single page: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
Docs for each stack component (praise tailwind and react docs)

tailwind install warning:
npm WARN @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.13.12 requires a peer of @babel/core@^7.13.0 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
