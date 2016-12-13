var board, game = new Chess(), statusEl = $('#status'), fenEl = $('#fen'), pgnEl = $('#pgn');

// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStart = function(source, piece, position, orientation) {
	if (game.game_over() === true
			|| (game.turn() === 'w' && piece.search(/^b/) !== -1)
			|| (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
		return false;
	}
};

var board = new ChessBoard('board', cfg);

var onDrop = function(source, target) {
	// see if the move is legal
	var move = game.move({
		from : source,
		to : target,
		promotion : 'q'
	});

	// illegal move
	if (move === null)
		return 'snapback';

	updateStatus();
};

// update the board position after the piece snap
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
	board.position(game.fen());
};

var updateStatus = function() {
	var status = '';

	var moveColor = 'White';
	if (game.turn() === 'b') {
		moveColor = 'Black';
	}

	// checkmate?
	if (game.in_checkmate() === true) {
		status = 'Game over, ' + moveColor + ' is in checkmate.'
	}

	// draw?
	else if (game.in_draw() === true) {
		status = 'Game over, drawn position';
	}

	// game still on
	else {
		status = moveColor + ' to move';

		// check?
		if (game.in_check() === true) {
			status += ', ' + moveColor + ' is in check';
		}
	}

	statusEl.html(status);
	fenEl.html(game.fen());
	pgnEl.html(game.pgn());
};

var cfg = {
	snapbackSpeed : 550,
	appearSpeed : 1500,
	draggable : true,
	position : 'start',
	onDragStart : onDragStart,
	onDrop : onDrop,
	pieceTheme : 'img/chesspieces/wikipedia/{piece}.png',
	onSnapEnd : onSnapEnd
};

var back = function() {
	var move = game.undo();
	updateStatus();
	board.position(game.fen());
};

if (!('webkitSpeechRecognition' in window)) {
	alert("no speech rec");
} else {
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = false;
	recognition.interimResults = false;
	recognition.onstart = function() {
	};
	recognition.onerror = function(event) {
	};
	recognition.onend = function() {
	};
	recognition.onresult = function(event) {
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				var result = event.results[i][0].transcript;
				parseTranscript(result);
			}
		}
	};
}

var squareRegex = /[a-h][1-8]$/i;
var algebraicRegex = /[pnbrqk][a-h][1-8]$/i;

// TODO: check check, checkmate, castle

var parseTranscript = function(transcript) {
	var input = transcript.toLowerCase();
	displayInput(input);
	if (squareRegex.test(input)) {
		// contains square at the end
		var move = '';
		var length = input.length;
		if (length == 2) {
			// pawn move
			move += input;
			displayMove(move);
		} else if (length == 3) {
			if (algebraicRegex.test(input)) {
				// algebraic piece move
				move += input;
				displayMove(move);
			} else {
				// invalid
			}
		} /*
		else if (length > 3) {
			var inputWords = input.split(" ");
			var takes = false;
			for (var i = inputWords.length - 2; i >= 0; i--) {
				// checks words backwards, starting from last word before the
				// square
				switch (inputWords[i]) {
				case "take":
				case "takes":
				case "capture":
				case "captures":
					takes = true;
					
				}
			}
		}
		*/
	}
	recognition.start();
};

var displayInput = function(input) {
	$("#inputDisplay").append(input);
	$("#inputDisplay").append(" ; ");
}

var displayMove = function(input) {
	$("#moveDisplay").append(input);
	$("#moveDisplay").append(" ; ");
}

board = new ChessBoard('board', cfg);
$(window).resize(board.resize);

updateStatus();

$('#startBtn').on('click', board.start);
$('#clearBtn').on('click', board.clear);
$('#colorBtn').on('click', board.flip);
$('#backBtn').on('click', back);

$(document).ready(function() {
	recognition.start();
});