
drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">
    var notice = document.getElementById("notice");
    notice.parentNode.removeChild(notice);

    // for each row....
    for (var i = 0; i < height; i++) {

        // figure out number of bricks and spaces
        var numBricks = i + 2;
        var numSpaces = height - i - 1;

        // build up a string for this row
        var rowStr = "";
        for (var j = 0; j < numSpaces; j++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var j = 0; j < numBricks; j++) {
            rowStr += "#";
        }

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">
        var pyramid = document.getElementById("pyramid");
        var paragraph = document.createElement("p");
        var row = document.createTextNode(rowStr);
        paragraph.appendChild(row);
        pyramid.appendChild(paragraph);

        
    }
}
