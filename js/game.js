"use strict";

var game = (function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        piecesToGuess = 1,
        guessedPieces = 0,
        currentPieces = [],


        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
            guessedPieces = 0;
        },
        getPieces = function () {
            var i,
                pieces = [];
            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }
            chooseRandomPieces(pieces);
            currentPieces = pieces;
            return pieces;
        },
        getCurrentPieces = function () {
            return currentPieces;
        },

        chooseRandomPieces = function (pieces) {
            piecesToGuess = getNumberOfPiecesToGuess(pieces.length);
            var i;
            for (i = 0; i < piecesToGuess; i++) {
                var randomNumber = randomPiecesToGuess(pieces.length);
                while (pieces[randomNumber].toGuess === true) {
                    randomNumber = randomPiecesToGuess(pieces.length);
                }
                pieces[randomNumber].toGuess = true;
            }

            return pieces;
        },

        getNumberOfPiecesToGuess = function (currentPieces) {
            return Math.floor(currentPieces / 2 - 1);
        },

        randomPiecesToGuess = function (length) {
            return Math.floor(Math.random() * length);
        },

        checkClickedPiece = function (id) {
            if (currentPieces[id].toGuess === true) {
                guessedPieces++;
                currentPieces[id].toGuess = false;
                return true;
            }
            return false;
        },

        getCurrentNumberOfPieces = function () {
            return currentNumberOfPieces;
        },

        checkIfAllPiecesGuessed = function () {
            return guessedPieces === getNumberOfPiecesToGuess(currentNumberOfPieces);
        },
        checkIfGameCanBeContinued = function () {
            return true;
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess,
        'getCurrentPieces': getCurrentPieces,
        'checkClickedPiece': checkClickedPiece,
        'checkIfAllPiecesGuessed': checkIfAllPiecesGuessed,
        'getCurrentNumberOfPieces': getCurrentNumberOfPieces,
        'checkIfGameCanBeContinued': checkIfGameCanBeContinued


    }
})();