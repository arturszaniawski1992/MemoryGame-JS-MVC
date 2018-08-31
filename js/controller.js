"use strict";

var controller = (function () {

    var startGame = function () {
            var initialNumberOfPieces = view.getInitialNumberOfPieces();

            game.startGame({
                numberOfPieces: initialNumberOfPieces
            });

            view.renderPieces(game.getPieces());
            view.getNumberOfPieces(game.getCurrentNumberOfPieces());
            view.getNumberOfPiecesToGuess(game.getNumberOfPiecesToGuess(game.getCurrentNumberOfPieces()));
            view.highlightPieces(game.getCurrentPieces());

        },

        clickOnPiece = function (id) {
            var pieceGuessed = game.checkPieceIsGuessed(id);
            if (pieceGuessed) {
                view.setGreenPiece(id);
            } else {
                view.setRedPiece(id);
            }
        },

        addPiece = function () {
            view.getNumberOfPieces(game.getCurrentNumberOfPieces() + 1);
            startGame();
        },
        startAgain = function () {
            view.getNumberOfPieces(4);
            startGame();
        };


    return {
        'startGame': startGame,
        'clickOnPiece': clickOnPiece,
        'addPiece': addPiece,
        'startAgain': startAgain

    }
})();