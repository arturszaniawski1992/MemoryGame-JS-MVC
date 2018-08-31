describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;
        //zwracam 4
        game.startGame();

        pieces = game.getPieces();

        expect(pieces.length).toBe(4);
    });

    it('should start game with configured number of pieces', function () {
        var pieces,
            config = {
                numberOfPieces: 6
            };
        game.startGame(config);

        pieces = game.getPieces();

        expect(pieces.length).toBe(6);
    });

    it('should start the game and return actual number of pieces', function () {
        //arrange
        var pieces,
            config = {numberOfPieces: 10};
        //act
        game.startGame(config);
        game.getPieces();
        pieces = game.getCurrentPieces();
        //assert
        expect(pieces.length).toBe(10);
    });

    it('should get current number of pieces on board', function () {
        //arrange
        var numberOfPieces,
            config = {numberOfPieces: 10};
        //act
        game.startGame(config);
        game.getPieces();
        numberOfPieces = game.getCurrentNumberOfPieces();
        //assert
        expect(numberOfPieces).toBe(10);
    });

    it('should calculate pieces to guess for pieces on board', function () {
        //arrange
        var numberOfPieces,
            config = {numberOfPieces: 10};
        //act
        game.startGame(config);
        game.getPieces();
        pieces = game.getCurrentPieces();
        piecesToGuess = game.getNumberOfPiecesToGuess(pieces.length);
        //assert
        expect(piecesToGuess).toBe(4);
    });


    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});
