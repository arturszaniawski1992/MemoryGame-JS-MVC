"use strict";

var view = (function () {


    var getInitialNumberOfPieces = function () {
            return parseInt(document.getElementById('numberOfPieces').innerText);
        },

        getNumberOfPieces = function (numberOfPieces) {
            document.getElementById('numberOfPieces').textContent = numberOfPieces.toString();
        },
        getNumberOfPiecesToGuess = function (number) {
            document.getElementById('numberToGuess').textContent = number.toString();
        },

        renderPieces = function (pieces) {
            resetPieces();
            var i;
            for (i = 0; i < pieces.length; i++) {
                var piece = document.createElement("div");
                piece.setAttribute('id', i);
                piece.classList.add('piece');
                document.getElementById('pieces').appendChild(piece);
            }
        },
        resetPieces = function () {
            var pieces = document.getElementsByClassName('piece');
            while (pieces.length > 0) {
                pieces[0].parentNode.removeChild(pieces[0]);
            }
        },
        setHighlightTime = function () {
            return document.getElementById("highlightTime").value;
        },

        setPiecesToGuess = function () {
            return document.getElementById("piecesToGuess").value;
        },


        highlightPieces = function (pieces) {

            var i,
                piece;
            for (i = 0; i < pieces.length; i++) {
                if (pieces[i].toGuess === true) {
                    piece = document.getElementById(i);
                    document.getElementById(i).classList.add('highlight');
                }
            }
            setBlackPieces(pieces);
        },

        setBlackPieces = function (pieces) {
            setTimeout(function () {
                var i;

                for (i = 0; i < pieces.length; i++) {
                    if (pieces[i].toGuess === true) {
                        document.getElementById(i).classList.remove('highlight');
                    }
                }
            }, 1000 * setHighlightTime());

        },
        setGreenPiece = function (id) {
            document.getElementById(id).classList.add('correctPiece');
        },

        setRedPiece = function (id) {
            document.getElementById(id).classList.add('wrongPiece');
        };


    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlightPieces': highlightPieces,
        'setHighlightTime': setHighlightTime,
        'setPiecesToGuess': setPiecesToGuess,
        'setGreenPiece': setGreenPiece,
        'setRedPiece': setRedPiece,
        'getNumberOfPieces': getNumberOfPieces,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess


    }
})();