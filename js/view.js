"use strict";

var view = (function () {

    var getInitialNumberOfPieces = function () {
            return parseInt(document.getElementById('numberOfPieces').innerText);
        },

        getNumberOfPieces = function (numberOfPieces) {
            document.getElementById('numberOfPieces').textContent = numberOfPieces.toString();
        },
        getNumberOfPiecesToGuess = function (number) {
            document.getElementById('numberOfPiecesToGuess').textContent = number.toString();
        },
        getCurrentLevel = function (number) {
            document.getElementById('level').textContent = number.toString();
        },

        renderPieces = function (pieces, clickCallBack) {
            resetPieces();
            var i;
            for (i = 0; i < pieces.length; i++) {
                var piece = document.createElement("div");
                piece.setAttribute('id', i);
                piece.classList.add('piece');
                document.getElementById('pieces').appendChild(piece);
                piece.addEventListener("click", clickCallBack);

            }
        },
        resetPieces = function () {

            var pieces = document.getElementsByClassName('piece');
            while (pieces.length > 0) {
                pieces[0].parentNode.removeChild(pieces[0]);
            }
        },

        timeOfHighLight = function () {
            return document.getElementById("highlightTime").value;
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
            lockPieces();
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
                unlockPieces();
            }, 1000 * timeOfHighLight());
        },

        unlockPieces = function () {
            document.getElementById('pieces').classList.remove('disabled');
            document.getElementById('menu').classList.remove('disabled');
        },
        lockPieces = function () {
            document.getElementById('pieces').classList.add('disabled');
            document.getElementById('menu').classList.add('disabled');
        },

        clickOnPiece = function (i, shoot) {
            if (shoot) {
                document.getElementById(i).classList.add('correctPiece');
            }
            else {
                document.getElementById(i).classList.remove('correctPiece');
                document.getElementById(i).classList.add('wrongPiece');
            }
        },

        displayMessage = function (message) {
            var messageContainer = document.getElementById('message');
            messageContainer.innerText = message;
            setTimeout(function () {
                messageContainer.innerText = '';
            }, 2000)
        };

    return {
        'getInitialNumberOfPieces': getInitialNumberOfPieces,
        'renderPieces': renderPieces,
        'highlightPieces': highlightPieces,
        'getNumberOfPieces': getNumberOfPieces,
        'getNumberOfPiecesToGuess': getNumberOfPiecesToGuess,
        'clickOnPiece': clickOnPiece,
        'lockPieces': lockPieces,
        'getCurrentLevel': getCurrentLevel,
        'displayMessage': displayMessage


    }
})
();