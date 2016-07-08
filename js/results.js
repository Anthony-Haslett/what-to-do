/**
 *	Changes the label for the budget slider
 */
$("#budgetSlider").on("moved.zf.slider", function(){
    var from = $("#budgetSliderMin").attr("aria-valuenow");
    var to = $("#budgetSliderMax").attr("aria-valuenow");
    $(".value-budget").text("£" + from + " - £" + to);
});

/**
*	Changes the label for the travel slider
*/
$("#travelSlider").on("moved.zf.slider", function(){
    var value = $("#travelSliderVal").attr("aria-valuenow");
    $(".value-travel").text(value + " miles");
});


// Sets the fill of the handler to transparent
$(".slider-fill").css("background-color", "transparent");
