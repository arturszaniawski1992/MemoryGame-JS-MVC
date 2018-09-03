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
            view.getCurrentLevel(game.getCurrentLevel());

        },

        clickOnPiece = function (event) {
            var i = event.target.id,
                click = game.checkClickedPiece(i);
            view.clickOnPiece(i, click);
            if (game.checkIfAllPiecesGuessed()) {
                view.lockPieces();
                setTimeout(function () {
                    addPiece();
                }, 1000);
            }
            if (!click) {
                if (game.checkIfGameCanBeContinued()) {
                    view.displayMessage("GAME OVER! TRY AGAIN!");
                    view.lockPieces();
                    setTimeout(function () {
                        view.getNumberOfPieces(4);
                        view.getCurrentLevel(1);
                        startAgain();
                    }, 2000)
                }
            }
        },

        addLevel = function () {
            view.getCurrentLevel(game.getCurrentLevel() + 1);
        },

        addPiece = function () {
            view.getNumberOfPieces(game.getCurrentNumberOfPieces() + 1);
            startGame();
        },

        startAgain = function () {
            game.resetLevel();
            view.getNumberOfPieces(4);
            startGame();
        };

    return {
        'startGame': startGame,
        'clickOnPiece': clickOnPiece,
        'addPiece': addPiece,
        'startAgain': startAgain,
        'addLevel': addLevel

    }
})();