var board2 = ChessBoard('board2', {
	draggable : true,
	dropOffBoard : 'trash',
	sparePieces : true,
	position : 'start'
});
$('#startBtn').on('click', board2.start);
$('#clearBtn').on('click', board2.clear);