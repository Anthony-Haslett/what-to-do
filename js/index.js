$(document).ready(function(){

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

});

$(window).load(function(){

    // get the search location text box
    var selectedRegionTxt = document.getElementById("selectedRegion");

    // reference to the svg object
    var mapUkObject = document.getElementById("mapUk");

    // object to the svg content
    var svgUkMap = mapUkObject.contentDocument;

    mapUkObject.contentDocument.childNodes[0].setAttribute("viewBox", "-20 -200 923 1508");

    // all paths that make up svg
    var svgUkMapPaths = svgUkMap.getElementsByTagName("path");

    // all individual paths
    var walesPath = svgUkMap.getElementById("path6137");
    var scotlandPath = svgUkMap.getElementById("path2470");
    var northernIrelandPath = svgUkMap.getElementById("path6609");
    var southWestPath = svgUkMap.getElementById("path164");
    var southEastPath = svgUkMap.getElementById("path132");
    var londonPath = svgUkMap.getElementById("path152");
    var westMidlandsPath = svgUkMap.getElementById("path80");
    var eastMidlandsPath = svgUkMap.getElementById("path96");
    var eastOfEnglandPath = svgUkMap.getElementById("path84");
    var northWestPath = svgUkMap.getElementById("path24");
    var northEastPath = svgUkMap.getElementById("path20");
    var yorkshirePath = svgUkMap.getElementById("path36");
    var paths = [walesPath,scotlandPath,northernIrelandPath,southWestPath,southEastPath,londonPath,westMidlandsPath,eastMidlandsPath,eastOfEnglandPath,northWestPath,northEastPath,yorkshirePath];

    // path event handlers
    walesPath.onmouseover = function(){selectedRegionTxt.innerHTML = "Wales"}
    scotlandPath.onmouseover = function(){selectedRegionTxt.innerHTML = "Scotland"}
    northernIrelandPath.onmouseover = function(){selectedRegionTxt.innerHTML = "Northern Ireland"}
    southWestPath.onmouseover = function(){selectedRegionTxt.innerHTML = "South West"}
    southEastPath.onmouseover = function(){selectedRegionTxt.innerHTML = "South East"}
    londonPath.onmouseover = function(){selectedRegionTxt.innerHTML = "London"}
    westMidlandsPath.onmouseover = function(){selectedRegionTxt.innerHTML = "West Midlands"}
    eastMidlandsPath.onmouseover = function(){selectedRegionTxt.innerHTML = "East Midlands"}
    eastOfEnglandPath.onmouseover = function(){selectedRegionTxt.innerHTML = "East of England"}
    northWestPath.onmouseover = function(){selectedRegionTxt.innerHTML = "North West"}
    northEastPath.onmouseover = function(){selectedRegionTxt.innerHTML = "North East"}
    yorkshirePath.onmouseover = function(){selectedRegionTxt.innerHTML = "Yorkshire & Humber"}

    $(paths).on("mouseover", function(){
        $(this).css({
            "fill": "rgb(43,43,43)",
            "cursor": "pointer"
        });
    });

    //set mouse out hover states
    for(var i = 0; i < 12; i++){
        paths[i].onmouseout = function(){this.style.fill = "rgb(68,140,203)";}
    }
});
