var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        currentLevel,
        numberOfPiecesTOGuess,
        currentPieces,
        guessedPieces = 0,


        startGame = function (config) {
            if (config && config.numberOfPieces) {
                currentNumberOfPieces = config.numberOfPieces;
            } else {
                currentNumberOfPieces = initialNumberOfPieces;
            }
        },

        getPieces = function () {
            var i,
                pieces = [];

            for (i = 0; i < currentNumberOfPieces; i++) {
                pieces.push({});
            }
            piecesToGuess = calculatePiecesToGet(pieces.length);

            for (i = 0; i < piecesToGuess; i++) {
                var randomNumber = randomPieces(pieces.length);
                while (pieces[randomNumber].toGuess === true) {
                    randomNumber = randomPieces(pieces.length);
                }
            }
            pieces[randomNumber].toGuess = true;

            currentPieces=pieces;
            return pieces;
        },
        calculatePiecesToGet = function (piecesToGuess) {
            return Math.floor(piecesToGuess / 2 - 1);
        },

        randomPieces = function (length) {
            return Math.floor(Math.random() * length);
        },

        checkPieceIsGuessed = function (id) {
            if (currentPieces[id].toGuess === true) {
                currentPieces[id].toGuess = false;
               // numberOfRemainedPiecesToGuess--;
                return true;
            }
            return false;
        },

        addLevel = function () {
            currentLevel++;
        },
        resetLevel = function () {
            currentLevel = 0;
        },

        getNumberOfPiecesToGet=function () {
            return numberOfPiecesTOGuess;
        },
        getCurrentPiece=function () {
            return currentPieces;
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'checkPieceIsGuessed': checkPieceIsGuessed,
        'addLevel': addLevel,
        'resetLevel': resetLevel,
        'getNumberOfPiecesToGet': getNumberOfPiecesToGet,
        'getCurrentPiece': getCurrentPiece



    }
}();