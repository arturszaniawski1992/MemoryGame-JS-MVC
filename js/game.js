var game = function () {

    var initialNumberOfPieces = 4,
        currentNumberOfPieces,
        pieces = [],
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
                pieces[randomNumber].toGuess = true;
            }

            return pieces;
        },
        calculatePiecesToGet = function (piecesToGuess) {
            return Math.floor(piecesToGuess / 2 - 1);
        },

        randomPieces = function (length) {
            return Math.floor(Math.random() * length);
        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,


    }
}();