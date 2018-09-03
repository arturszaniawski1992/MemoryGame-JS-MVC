describe('Game', function () {
    it('should have 4 pieces after game start', function () {
        var pieces;
        //zwracam 4
        game.startGame();

        pieces = game.getPieces();

        expect(pieces.length).toBe(4);
    });

    it('one pieces should be to guess after game start', function () {
        var piecesToGuess;
        game.startGame();

        piecesToGuess = findPiecesToGuess(game.getPieces());

        expect(piecesToGuess.length).toBe(1);
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


    it('should calculate pieces to guess for pieces on board if 10 return 4', function () {
        //arrange
        config = {numberOfPieces: 10};
        //act
        game.startGame(config);
        game.getPieces();
        pieces = game.getCurrentPieces();
        piecesToGuess = game.getNumberOfPiecesToGuess(pieces.length);
        //assert
        expect(piecesToGuess).toBe(4);
    });

    it('should calculate pieces to guess for pieces on board if 100 return 49', function () {
        //arrange
        config = {numberOfPieces: 100};
        //act
        game.startGame(config);
        game.getPieces();
        pieces = game.getCurrentPieces();
        piecesToGuess = game.getNumberOfPiecesToGuess(pieces.length);
        //assert
        expect(piecesToGuess).toBe(49);
    });


    it('should return false when not all pieces are guessed', function () {
        //arrange
        var guessedPieces,
            config = {
                numberOfPieces: 4
            };
        //act
        game.startGame(config);
        game.getPieces();
        guessedPieces = game.checkIfAllPiecesGuessed();
        //assert
        expect(guessedPieces).toBe(false);
    });


    it('should return false when piece is not to guess', function () {
        //arrange
        var guessedPiece,
            config = {
                numberOfPieces: 8
            };
        //act
        game.startGame(config);
        game.getPieces();
        while (game.checkClickedPiece(1)) {
            game.getPieces();
        }
        guessedPiece = game.checkClickedPiece(1);
        //assert
        expect(guessedPiece).toBe(false);
    });


    it('should get current level', function () {
        //arrange
        var currentLevel,
            config = {
                numberOfPieces: 6,
            };
        //act
        game.startGame(config);
        currentLevel = game.getCurrentLevel();
        game.getPieces();
        //assert
        expect(currentLevel).toBe(3);
    });

    it('should reset current level', function () {
        //arrange
        var currentLevelBefore,
            currentLevelAfter,
            config = {
                numberOfPieces: 10,
            };
        //act
        game.startGame(config);
        currentLevelBefore = game.getCurrentLevel();
        game.resetLevel();
        currentLevelAfter = game.getCurrentLevel();
        game.getPieces();
        //assert
        expect(currentLevelBefore).toBe(7);
        expect(currentLevelAfter).toBe(1);
    });

    it('should cannot click one piece twice a row', function () {
        //arrange
        var pieces,
            index,
            clickedPiece,
            config = {
                numberOfPieces: 6,
            };
        game.startGame(config);
        pieces = game.getPieces();
        //act
        for (var i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                return index = i;
            }
        }
        clickedPiece=game.checkClickedPiece(index);
        //assert
        expect(clickedPiece).toBe(false);
    });

    function findPiecesToGuess(pieces) {
        return pieces.filter(function (piece) {
            return piece.toGuess;
        });
    }
});
