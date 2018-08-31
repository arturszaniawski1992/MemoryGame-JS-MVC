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
            var i;
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