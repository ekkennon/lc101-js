
printPyramid(5);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
	for (var i=0;i<height;i++) {
		var row = "";
		for (var j=0;j<height;j++) {
			if (j < (height-1-i)) {
				row += " ";
			} else {
				row += "#";
			}
		}
		row += "#";
		console.log(row);
	}
}
