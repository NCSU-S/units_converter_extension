var assert = require("assert");

const Time = require("../code/conversions/Time");
const getPreciseNumber = require('../code/main_scripts/utility');

describe('Time', function() {
    it("Conversions should not be empty", function() {
        let seconds = new Time("seconds", ["minutes", "hours", "days", "weeks"]);
        assert.notStrictEqual(seconds.getStandardConversion(30), "");
    });

    it("Standard Conversions should not be empty", function () {
        let seconds = new Time("seconds", ["minutes", "hours", "days", "weeks"]);
        assert.notStrictEqual(seconds.getAllConversions(20, 5), "");
    });

    it("Conversions should not be empty", function() {
        let minutes = new Time("minutes", ["seconds", "hours", "days", "weeks"]);
        assert.notStrictEqual(minutes.getStandardConversion(40), "");
    });

    it("Standard Conversions should not be empty", function () {
        let minutes = new Time("minutes", ["seconds", "hours", "days", "weeks"]);
        assert.notStrictEqual(minutes.getAllConversions(10, 3), "");
    });

    it("Conversions should not be empty", function() {
        let hours = new Time("hours", ["seconds", "minutes", "days", "weeks"]);
        assert.notStrictEqual(hours.getStandardConversion(20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let hours = new Time("hours", ["seconds", "minutes", "days", "weeks"]);
        assert.notStrictEqual(hours.getAllConversions(10, 2), "");
    });

    it("Conversions should not be empty", function() {
        let days = new Time("days", ["seconds", "minutes", "hours", "weeks"]);
        assert.notStrictEqual(days.getStandardConversion(50), "");
    });

    it("Standard Conversions should not be empty", function () {
        let days = new Time("days", ["seconds", "minutes", "hours", "weeks"]);
        assert.notStrictEqual(days.getAllConversions(15, 3), "");
    });

    it("Conversions should not be empty", function() {
        let weeks = new Time("weeks", ["seconds", "minutes", "hours", "days"]);
        assert.notStrictEqual(weeks.getStandardConversion(20), "");
    });

    it("Standard Conversions should not be empty", function () {
        let weeks = new Time("weeks", ["seconds", "minutes", "hours", "days"]);
        assert.notStrictEqual(weeks.getAllConversions(25, 3), "");
    });

    it("Should allowed null", function() {
        let time = new Time();
        assert.notStrictEqual(time, null);
    });
});