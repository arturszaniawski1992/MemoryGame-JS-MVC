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
            var rand = pieces[Math.floor(Math.random() * (initialNumberOfPieces - (3 + currentLevel)))];
            return rand;

        };


    return {
        'startGame': startGame,
        'getPieces': getPieces,
        'getRandomPieces': getRandomPieces
    }
}();
