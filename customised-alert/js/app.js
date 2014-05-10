$(document).ready(function($) {
    $('.suggestion-details').hide();

    //Home-page Slider
    $('#banner-fade').bjqs({
        'height' : 320,
        'width' : 720,
        'responsive' : true,
        'nexttext' : '<img src="../inolyst/images/next.png">', // Text for 'next' button (can use HTML)
		'prevtext' : '<img src="../inolyst/images/previous.png">',
    });
    //Adding A New Trademark Fields
    $(document).on("click","#add-a-trademark-button",function(){
    	var newTrademark='<div class="trade-mark-group-container" id="trade-mark-group-container-2"><div class="trade-mark-id ">Trademark #2 :<div class="delete-button float-right"></div><div class="float-clear"></div></div><div class="trade-mark-text  float-left"><input type="text" placeholder="Enter Name"></div><div class="or  float-left"> Or </div><div class="trade-mark-upload  float-left"><input type="file" title="Search for a file to add" name="file" id="file"><div class="message">File Uploaded Successfully</div></div><div class="float-clear"></div></div>';
		$(newTrademark).insertBefore('div.add-another-trademark').hide().fadeIn();
	});

    //Deleting the Added Trademark Fields
    $(document).on("click",".delete-button",function(){
        $(this).parent().parent().remove();
    });

    //Description-Sliding Panel
    $(document).on("click",".suggestion-head",function(){
        $(this).next('.suggestion-details').slideToggle();
    });
});