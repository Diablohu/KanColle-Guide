"use strict";

function elmatches(elm, selector) {
	var matches = (elm.document || elm.ownerDocument).querySelectorAll(selector),
		i = matches.length;
	while (--i >= 0 && matches.item(i) !== elm) ;
	return i > -1;
	//return false;
}

