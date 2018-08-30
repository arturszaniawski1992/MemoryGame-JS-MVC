var controller = function () {
    var startGame = function () {
        var initialNumberOfPieces = view.getInitialNumberOfPieces();

        game.startGame({
            numberOfPieces: initialNumberOfPieces
        });

        view.renderPieces(game.getPieces());

    };
    var highlight = function () {
        view.highlightPieces(game.getPieces());
    };
    var clickButton = function (id) {
        alert("message!");
       view.clickButton(id);

    };
    var addPiece = function () {
        view.addPiece();
    };

    return {
        'startGame': startGame,
        'highlight': highlight,
        'clickButton': clickButton,
        'addPiece': addPiece
    }
}();