/**
 * A Bot for Slack!
 */

// Setting up custom integration
var customIntegration = require('./lib/custom_integrations');
var token = process.env.TOKEN;
var controller = customIntegration.configure(token);

// Handle events related to the websocket connection to Slack
controller.on('rtm_open', function (bot) {
    console.log('** The RTM api just connected!');
});

controller.on('rtm_close', function (bot) {
    console.log('** The RTM api just closed');
    // you may want to attempt to re-open
});


/**
 * bot logic goes here!
 */
// BEGIN EDITING HERE!

controller.hears(["hello", "Hello", "hi", "Hi", "sup", "hey", "yo"], ['direct_message','direct_mention','mention'], function (bot, message) {
   bot.reply(message, "hello!");
});
