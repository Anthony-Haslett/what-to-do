/* Clear hides when above 640px width*/
window.onresize = function(event) {
    if($(window).width() > 640) {
		clearHide();
	} else {								/* Ensures that the region search is always */
		$('#region-search').hide();			/* the first content to be hidden when in mobile view */
	} 
};

 /* Show custom search & region search content */
function clearHide()
{
	$('#custom-search').show();
	$('#region-search').show(); 
}

/* Toggle content based on tab links in header */
$( "#custom-search-link" ).click(function() {  		/* on click of custom search link */
    if($('#custom-search:visible').length){}		/* if the custom search content is visible do nothing */
    else {
        $('#search-region-link').removeClass('nav-selected');  											/* else, hide region content and show custom search content */
     	$('#region-search').hide();
        $('#custom-search').show();
        $('#custom-search-link').addClass('nav-selected');       
    }
});

$( "#search-region-link" ).click(function() { 		/* on click of region search link */
    if($('#region-search:visible').length){}		/* if the region search content is visible do nothing */
    else {	
        $('#custom-search-link').removeClass('nav-selected');										/* else, hide custom search content and show region content */
     	$('#custom-search').hide();
        $('#region-search').show();  
        $('#search-region-link').addClass('nav-selected');   
    }    
});