
var eventManagerMainFunction = function () {
	var $header = $('#header');

	$('#rotateR_Button').click(function () {
		$header.removeClass('rotateR');
		$header.removeClass('rotateL');
		setTimeout(function (){
			$header.addClass('rotateR');
		}, 200);
	});
	$('#rotateL_Button').click(function () {
		$header.removeClass('rotateL');
		$header.removeClass('rotateR');
		setTimeout(function (){
			$header.addClass('rotateL');
		}, 200);
	});
}

$(document).ready(eventManagerMainFunction);