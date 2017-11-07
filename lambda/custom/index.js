'use strict';
var Alexa = require("alexa-sdk");

// For detailed tutorial on how to making a Alexa skill,
// please visit us at http://alexa.design/build


exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },

    'HelloWorldIntent': function () {
        this.emit('SayHello');
    },

    'DisclaimerIntent': function () {
        this.emit('SayDisclaimer');
    },

    'BothIntent': function () {
        this.emit('SayBoth');
    },
    'SixIntent': function () {
        this.emit('SaySix');
    },

    'MyNameIsIntent': function () {
        this.emit('SayHelloName');
    },

    'SayHello': function () {
        var say = 'Fit Science help you lose fat or get stronger based on your goals and preferences.'
        var reprompt = ' I learned from the best nutritionists and athlete coaches in the world. I will personalize the program for your needs. Do you want to lose fat, get stronger, or both? You can also ask me for list of programs.'

        var header = 'Fit Science'
        var shouldEndSession = false

        this.response.speak(say + reprompt)
                     .cardRenderer('Fit Science', say);

        this.emit(':ask', say + reprompt);
    },

    'SayDisclaimer': function () {
        var say = 'Talk to your primary care provider before beginning any course of exercise.'

        var header = 'Fit Science'

        this.response.speak(say)
                     .cardRenderer('Fit Science', say);

        this.emit(':responseReady');
    },

    'SayBoth': function () {
        var say = "So you want to lose fat and get stronger. That's awesome! How many times a week can you work out?"

        var header = 'Fit Science'

        this.response.speak(say)
                     .cardRenderer('Fit Science', say);

        this.emit(':ask', say);
    },

    'SaySix': function () {
        var say = "6 days a week is fantastic for achieving your strength goals. I am excited for you! I researched for the best strength programs out there that can fit into 6 days. Do you have access to a barbell?"

        var header = 'Fit Science'

        this.response.speak(say)
                     .cardRenderer('Fit Science', say);

        this.emit(':ask', say);
    },

    'SayHelloName': function () {
        var name = this.event.request.intent.slots.name.value;
        this.response.speak('Hello ' + name)
            .cardRenderer('hello world', 'hello ' + name);
        this.emit(':responseReady');
    },

    'SessionEndedRequest' : function() {
        console.log('Session ended with reason: ' + this.event.request.reason);
    },

    'AMAZON.StopIntent' : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },

    'AMAZON.HelpIntent' : function() {
        this.response.speak("You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
            " name is awesome Aaron'");
        this.emit(':responseReady');
    },

    'AMAZON.CancelIntent' : function() {
        this.response.speak('Bye');
        this.emit(':responseReady');
    },

    'Unhandled' : function() {
        this.response.speak("Sorry, I didn't get that. You can try: 'alexa, hello world'" +
            " or 'alexa, ask hello world my name is awesome Aaron'");
    }
};

