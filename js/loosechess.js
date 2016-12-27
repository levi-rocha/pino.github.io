var board = ChessBoard('board', {
	draggable : true,
	dropOffBoard : 'trash',
	sparePieces : true,
	position : 'start'
});
$(window).resize(board.resize);
$('#startBtn').on('click', board.start);
$('#clearBtn').on('click', board.clear);
$('#colorBtn').on('click', board.flip);