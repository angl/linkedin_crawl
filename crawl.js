var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

const email = "XXX";
const password = "XXX";
const profile = "https://www.linkedin.com/in/subhachandra-chandra-050652/";

printResults = (client) => {
    return client
          .pause(500)
          .scroll(0, 800)
          .pause(500)
          .scroll(0, 1600)
          .scroll(0, 2400)
          .waitForExist(".page-list", 5000)
            .$$(".search-result__info").then((elems) => {
                var promises = [];
                for (let ele of elems) {
                    promises.push(client.elementIdText(ele.ELEMENT));
                }
                return Promise.all(promises);
            })
            .then((texts) => {
                for (let text of texts) {
                    console.log(text.value.split("\n").join(","));
                }
            })
            .pause(Math.round(Math.random() * 500 + 1000))
            .click(".next").then(() => {
                return printResults(client);
            })
}

let client = webdriverio.remote(options);
client.init()
    .url("https://www.linkedin.com")
    .pause(500)
    .waitForExist("#login-email")
    .setValue("#login-email", email)
    .setValue("#login-password", password)
    .click("#login-submit")
    .pause(500)
    .url(profile)
    .pause(500)
    .waitForExist(".ember-view")
    .getAttribute("*=See connections", "href").then((link) => {
        return client.url(link).then(() => {
            return printResults(client);
        });
    })
    .catch((err) => {
        console.log(err);
    })
