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

var voiceOn = false;

var voiceToggle = function() {
	if (voiceOn) {
		voiceOn = false;
		$('#voiceBtn').prop('value', 'Start voice recognition');
	} else {
		if (!('webkitSpeechRecognition' in window)) {
			alert("No speech recognition available on this browser. Please try using Chrome.");
		} else {
			var recognition = new webkitSpeechRecognition();
			recognition.continuous = false;
			recognition.interimResults = true;
			recognition.onstart = function() {
			};
			recognition.onerror = function(event) {
			};
			recognition.onend = function() {
				this.start();
			};
			recognition.onresult = function(event) {
				var interim = "";
				for (var i = event.resultIndex; i < event.results.length; ++i) {
					if (event.results[i].isFinal) {
						var result = event.results[i][0].transcript;
						parseTranscript(result);
						displayInput(interim + "[" + result + "]");
					} else {
						interim += "(" + event.results[i][0].transcript + ")";
					}
				}
			};
			$('#voiceBtn').prop('value', 'Stop voice recognition');
			voiceOn = true;
		}
	}
}

if (!('webkitSpeechRecognition' in window)) {
	alert("no speech rec");
} else {
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = false;
	recognition.interimResults = true;
	recognition.onstart = function() {
	};
	recognition.onerror = function(event) {
	};
	recognition.onend = function() {
		this.start();
	};
	recognition.onresult = function(event) {
		var interim = "";
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal) {
				var result = event.results[i][0].transcript;
				parseTranscript(result);
				displayInput(interim + "[" + result + "]");
			} else {
				interim += "(" + event.results[i][0].transcript + ")";
			}
		}
	};
}

var squareRegex = /[a-h][1-8]$/i;
var algebraicRegex = /[pnbrqk][a-h][1-8]$/i;

var parseTranscript = function(transcript) {
	var input = transcript.toLowerCase();
	var inputWords = input.split(" ");
	if (inputWords[inputWords.length-1] == "check" || inputWords[inputWords.length-1] == "checkmate") {
		inputWords.splice(inputWords.length-1, 1);
		input = inputWords.join(" ");
	}
	if (squareRegex.test(input)) {
		// contains square at the end
		var move = '';
		var length = input.length;
		if (length == 2) {
			// pawn move
			move += input;
			makeMove(move);
		} else if (length == 3) {
			if (algebraicRegex.test(input)) {
				// algebraic piece move
				move += input;
				move = move.charAt(0).toUpperCase() + move.slice(1);
				makeMove(move);
			} else {
				// invalid
			}
		} else if (length > 3) {
			var piece = '';
			var which = '';
			var capture = '';
			var end = false;
			for (var i = inputWords.length - 2; i >= 0; i--) {
				// checks words backwards, starting from last word before the
				// square
				switch (inputWords[i]) {
				case "a":
					which = "a";
					break;
				case "b":	
					which = "b";
					break;
				case "c":
					which = "c";
					break;
				case "d":
					which = "d";
					break;
				case "e":
					which = "e";
					break;
				case "f":
					which = "f";
					break;
				case "g":
					which = "g";
					break;
				case "h":
					which = "h";
					break;
				case "1":
					which = "1";
					break;
				case "2":
					which = "2";
					break;
				case "3":
					which = "3";
					break;
				case "4":
					which = "4";
					break;
				case "5":
					which = "5";
					break;
				case "6":
					which = "6";
					break;
				case "7":
					which = "7";
					break;
				case "8":
					which = "8";
					break;
				case "knight":
				case "night":
				case "horse":
					piece = "N";
					end = true;
					break;
				case "pawn":
					end = true;
					break;
				case "bishop":
					piece = "B";
					end = true;
					break;
				case "rook":
					piece = "R";
					end = true;
					break;
				case "queen":
					piece = "Q";
					end = true;
					break;
				case "king":
					piece = "K";
					end = true;
					break;
				case "takes":
				case "take":
				case "captures":
				case "capture":
					capture = "x";
					break;
				default:
					// skip word
				}
				if (end)
					break;
			}
			move = piece + which + capture + inputWords[inputWords.length-1];
			makeMove(move);
		}

	}
	//no square in input. check other possibilities
	var inputWords = input.split(" ");
	for (var i = 0; i < inputWords.length; i++) {
		switch(inputWords[i]) {
		case "castle":
			break;
		case "listening":
		case "listen":
		case "voice":
		case "off":
			voiceToggle();
			break;
		default:
			// skip word
		}
	}
};

var displayInput = function(input) {
	$("#inputDisplay").append(input);
	$("#inputDisplay").append(" ; ");
}

var makeMove = function(input) {
	game.move(input);
	updateStatus();
	board.position(game.fen());
	displayMove(input);
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
$('#voiceBtn').on('click', voiceToggle);

//TODO: takes, which piece, castle, voice rec predictable mistakes...

$(document).ready(function() {
	recognition.start();
});