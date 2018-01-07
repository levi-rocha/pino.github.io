function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}

$(document).ready(function() {
	$("#boop").click(function() {
		var cookie = getCookie("number");
		if (isNaN(parseInt(cookie))) {
			var num = 0;
		} else {
			var num = parseInt(getCookie("number"));
		}
		num += 1;
		setCookie("number", num);
		var upnum = getCookie("number");
		alert(upnum);
	});
});