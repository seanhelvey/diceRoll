$(document).ready(function() {
    $("#roll").click(function() {
        var number;
        $.ajax({
	    type: "get",
	    url: "http://theblogfrog.com/utils/roll.aspx",
	    dataType: "jsonp",
            async: false,
	    success: function(jsonData) {
	        number = jsonData["roll"];
                $("#result").html(String(number));
	    }
        });

    });
});