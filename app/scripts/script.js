//Help Bar
$(".help-bar-content").hide();

$("#toggle-help").click(function() {

	var helpBar = $("#help-bar");

	if (helpBar.hasClass("closed")) {
		helpBar.animate( {
			right: "0px"
		}, 400)

		helpBar.attr("class", "open")
	    $(".help-bar-content").show();
		$("#toggle-help").attr("class", "fa fa-long-arrow-right")
	}

	else {
		helpBar.animate( {
			right: "-316px"
		}, 400, function() {
			$(".help-bar-content").hide();
		})

		helpBar.attr("class", "closed")
		$("#toggle-help").attr("class", "fa fa-long-arrow-left")	
	}
});

$('.selectpicker').selectpicker();


//ColorPicker
$('.color-picker').colpick({ 
	layout: 'rgbhex',
	submit: 0,
	onChange: function(hsb, hex, rgb, el, bySetColor) {
		$(el).children('.color-thumbnail').css('background-color', '#' + hex);
		if(!bySetColor) $(el).children('.color-select').val(hex);
		}
	}).keyup(function() {
		$(this).colpickSetColor(this.value);
});


