$(document).ready(function() {
		var index = 0;
		setInterval(function() {
				$("#spinner").css("transform", "rotateY(" + (index * -90) + "deg)");
				index++;
		}, 2000);

		$("#transparency").click(function() {
				$("#spinner img").toggleClass("trans");
				$(this).toggleClass("selected");
		});

});