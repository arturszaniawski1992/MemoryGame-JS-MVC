var view = function () {
    var numberOfPieces = 4;
    var iClick = 0;
    var isInGame = false;
    var obj = document.querySelector("div");

    var getInitialNumberOfPieces = function () {
        return numberOfPieces;
    };
    var renderPieces = function (pieces) {
        var i;
        viewPieces = [];
        var div = document.getElementById('pieces');
        div.innerHTML = '';

        for (i = 0; i < pieces.length; i++) {
            var piece = document.createElement("div");
            piece.classList.add('piece');
            piece.setAttribute("id", i);
            piece.setAttribute("data-id", i);
            piece.innerHTML = i;
            piece.setAttribute("onclick", "controller.clickButton(" + i + ")");
            div.appendChild(piece);
            viewPieces.push(i);
        }
    };
    var addPiece = function () {
        return numberOfPieces++;
    };

    var highlightPieces = function (pieces) {
        var i;
        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                document.getElementById(i).style.backgroundColor = "blue";
            }
        }
    };
    var clickButton = function (obj) {

        if (!isInGame) return;
        var currentId = viewPieces[iClick];
        var id = obj.dataset.id;
        if (currentId == id) {

        }
        else {
            alert("Game over!");
        }
    };
    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlightPieces': highlightPieces,
        'clickButton': clickButton,
        'addPiece': addPiece,

    }
}
();