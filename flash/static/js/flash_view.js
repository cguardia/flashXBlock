/* Javascript for flashXBlock. */
function flashXBlockInitView(runtime, element) {
    /* Weird behaviour :
     * In the LMS, element is the DOM container.
     * In the CMS, element is the jQuery object associated*
     * So here I make sure element is the jQuery object */
    if(element.innerHTML) element = $(element);
}

function newPopup(url) {
    popupWindow = window.open(
        null,'popUpWindow','left=10,top=10,width=1024,height=600,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
    popupWindow.document.write('<embed src="' + url + '" width="100%" height="500" type="application/x-shockwave-flash" allowFullScreen="true" />');
}
