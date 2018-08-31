var view = function () {
    var numberOfPieces = 4;


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
    var setHighlightTime = function () {
        return document.getElementById("highlightTime").value;
    }

    var setPiecesToGuess = function () {
        return document.getElementById("piecesToGuess").value;
    }


    var highlightPieces = function (pieces) {

        var i,
            piece;
        for (i = 0; i < pieces.length; i++) {
            if (pieces[i].toGuess === true) {
                piece = document.getElementById(i);
                document.getElementById(i).classList.add('highlight');
            }
        }
        setBlackPieces(pieces);
    };

    var setBlackPieces = function (pieces) {
        setTimeout(function () {
            var i;

            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    document.getElementById(i).classList.remove('highlight');
                }
            }
        }, 1000 * setHighlightTime());

    };
    var setGreenPiece = function (id) {
        document.getElementById(id).classList.add('correctPiece');
    };

    var setRedPiece = function (id) {
        document.getElementById(id).classList.add('wrongPiece');
    };

    var addPiece = function () {
        return numberOfPieces++;
    };
    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlightPieces': highlightPieces,
        'addPiece': addPiece,
        'setHighlightTime': setHighlightTime,
        'setPiecesToGuess': setPiecesToGuess,
        'setGreenPiece': setGreenPiece,
        'setRedPiece': setRedPiece,
        'addPiece': addPiece


    }
}
();