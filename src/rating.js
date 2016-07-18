"use strict";
var player_1 = require('./player');
var game_1 = require("./game");
var Rating = (function () {
    function Rating() {
        this.player = new player_1.Player(0, [new game_1.Game()]);
    }
    Rating.prototype.getAverageOpponentRating = function () {
        return this.player.averageOpponentRating();
    };
    Rating.prototype.getNumberOfGames = function () {
        return this.player.games.length;
    };
    Rating.prototype.getTotalScore = function () {
        return this.player.totalScore();
    };
    Rating.prototype.getExpectedScore = function () {
        return this.player.expectedScore();
    };
    Rating.prototype.getTPR = function () {
        return this.player.TPR();
    };
    return Rating;
}());
exports.Rating = Rating;
