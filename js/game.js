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
            pieces[0].toGuess = true;
            return pieces;
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