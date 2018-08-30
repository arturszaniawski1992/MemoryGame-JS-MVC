var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        currentLevel = 0,

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
                var randomNumber = randomizePiecesToGuess(pieces.length);
                while (pieces[randomNumber].toGuess === true) {
                    randomNumber = randomizePiecesToGuess(pieces.length);
                }
                pieces[randomNumber].toGuess = true;
            }

            return pieces;
        },
        calculatePiecesToGet = function (piecesToGuess) {
            return Math.floor(piecesToGuess / 2 - 1);
        },

        randomizePiecesToGuess = function (length) {
            return Math.floor(Math.random() * length);
        },

        getRandomPieces = function () {
            var i;
            for (i = 0; i < currentNumberOfPieces; i++) {
                var randomPiece = Math.floor(Math.random() * numberOfPieces);
                viewPieces[i] = viewPieces[randomPiece];
                viewPieces[randomPiece] = viewPieces[i];
            }
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getRandomPieces': getRandomPieces
    }
}();