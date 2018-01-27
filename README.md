# How to use
1. Install java JDK (not JRE) and firefox
2. Run `java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar` from one terminal. Leave that terminal open.
3. Open `crawl.js` and fill in your linkedin username, password, and the person's profile URL whose friends you wanna crawl
4. Run `node crawl.js`. You may want to redirect the output to a file.
5. Wait. You can see the progress from the opened firefox window.
