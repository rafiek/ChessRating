"use strict";
var game_1 = require("./game");
var Player = (function () {
    function Player(rating, games) {
        this.rating = rating;
        this.games = games;
    }
    Player.prototype.averageOpponentRating = function () {
        var total = 0;
        for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
            var game = _a[_i];
            total += game.ratingOpponent;
        }
        return total == 0 ? total : total / this.games.length;
    };
    Player.prototype.totalScore = function () {
        var total = 0;
        for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
            var game = _a[_i];
            total += Number(game.result);
        }
        return total;
    };
    Player.prototype.expectedScore = function () {
        var total = 0;
        for (var _i = 0, _a = this.games; _i < _a.length; _i++) {
            var game = _a[_i];
            total += (1 / (1 + Math.pow(10, (game.ratingOpponent - this.rating) / 400)));
        }
        return total;
    };
    Player.prototype.TPR = function () {
        var tpr;
        var totalScore = this.totalScore();
        var fictitiousScore = false;
        if (totalScore <= 0 || (totalScore == this.games.length)) {
            fictitiousScore = true;
            totalScore += 0.5;
            this.games.push(new game_1.Game(this.rating, 0.5));
        }
        var averageOpponentRating = this.averageOpponentRating();
        tpr = Math.abs((Math.log((this.games.length / totalScore) - 1) / Math.log(10)) * 400 - averageOpponentRating);
        if (fictitiousScore) {
            this.games.pop();
        }
        return tpr;
    };
    return Player;
}());
exports.Player = Player;
