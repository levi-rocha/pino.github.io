$(document).ready(function() {

	$("#boopbutt").click(function() {
		$("#boopbutt").html("whoop");
		
		$.ajax({
			url : "test.txt",
			success : function(result) {
				alert(result);
				$("#boopbutt").html(result);
			}
		}).done(function () {
			alert("beep");
		});
	});

});