var board = ChessBoard('board', {
	draggable : true,
	dropOffBoard : 'trash',
	sparePieces : true,
	position : 'start'
});
$('#startBtn').on('click', board.start);
$('#clearBtn').on('click', board.clear);