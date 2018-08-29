var view = function () {
    var numberOfPieces = 4;

    var getInitialNumberOfPieces = function () {

        return numberOfPieces;
    };
    var renderPieces = function (pieces) {
        var i;
        viewPieces = [];
        for (i = 0; i < pieces.length; i++) {
            var piece = document.createElement("div");
            piece.classList.add('piece');
            document.getElementById('pieces').appendChild(piece);
            viewPieces.push(piece);
        }
    };


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces
    }
}();